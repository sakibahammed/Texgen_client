"use client";

import { useState, type CSSProperties, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT ?? "";

const ERR_STYLE: CSSProperties = {
  fontSize: "12px",
  color: "var(--color-accent-700)",
  marginTop: "6px",
  fontWeight: 600,
};
const HIDDEN: CSSProperties = { display: "none" };
const BAD_INPUT: CSSProperties = {
  borderColor: "var(--color-accent)",
  background: "var(--color-accent-100)",
};
const SEG_BASE: CSSProperties = {
  appearance: "none",
  cursor: "pointer",
  fontFamily: "inherit",
  border: 0,
  borderRight: "1px solid var(--color-divider)",
  padding: "12px 16px",
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: ".06em",
  textTransform: "uppercase",
};

type EnquiryType =
  | ""
  | "Sample request"
  | "Bulk order"
  | "Audit or visit"
  | "General";

type FormData = {
  name: string;
  company: string;
  email: string;
  country: string;
  type: EnquiryType;
  message: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    country: "",
    type: "",
    message: "",
  });
  const [touched, setTouched] = useState(false);
  const [sent, setSent] = useState(false);
  const [sentName, setSentName] = useState("");
  const [sentType, setSentType] = useState<EnquiryType>("");

  const errors = {
    name:
      formData.name.trim().length < 2 ? "Please enter your name." : "",
    company:
      formData.company.trim().length < 2
        ? "Please enter your company."
        : "",
    email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email.trim())
      ? ""
      : "Enter a valid business email.",
    country:
      formData.country.trim().length < 2
        ? "Which market are you buying for?"
        : "",
    type: formData.type ? "" : "Pick an enquiry type.",
    message:
      formData.message.trim().length < 12
        ? "A line or two about the product, quantity and timing."
        : "",
  };

  const errList = (Object.keys(errors) as (keyof typeof errors)[]).filter(
    (k) => errors[k],
  );

  const field = (key: keyof typeof errors) => {
    const bad = touched && !!errors[key];
    return {
      style: bad ? BAD_INPUT : ({} as CSSProperties),
      err: bad ? errors[key] : "",
      errStyle: bad ? ERR_STYLE : HIDDEN,
      invalid: bad,
    };
  };

  const seg = (label: EnquiryType): CSSProperties => {
    const on = formData.type === label;
    return {
      ...SEG_BASE,
      background: on ? "var(--color-accent)" : "transparent",
      color: on ? "#fff" : "var(--color-text)",
    };
  };

  const n = field("name");
  const c = field("company");
  const e = field("email");
  const co = field("country");
  const m = field("message");
  const typeBad = touched && !!errors.type;

  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (errList.length) {
      setTouched(true);
      return;
    }
    setSending(true);
    setSendError(null);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          company: formData.company,
          email: formData.email,
          country: formData.country,
          type: formData.type,
          message: formData.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setSentName(formData.name.trim().split(" ")[0]);
      setSentType(formData.type);
      setSent(true);
    } catch (err) {
      const msg =
        typeof err === "object" && err && "text" in err
          ? String((err as { text: string }).text)
          : err instanceof Error
            ? err.message
            : "Something went wrong.";
      setSendError(msg);
    } finally {
      setSending(false);
    }
  };

  const reset = () => {
    setFormData({
      name: "",
      company: "",
      email: "",
      country: "",
      type: "",
      message: "",
    });
    setTouched(false);
    setSent(false);
  };

  if (sent) {
    return (
      <div
        style={{
          border: "2px solid var(--color-accent)",
          padding: "clamp(24px,3vw,40px)",
          background: "var(--color-accent-100)",
        }}
      >
        <div
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: ".16em",
            textTransform: "uppercase",
            color: "var(--color-accent)",
            marginBottom: "14px",
          }}
        >
          Enquiry sent
        </div>
        <h2
          style={{
            fontSize: "clamp(20px,2.2vw,28px)",
            fontWeight: 900,
            letterSpacing: "-.02em",
            margin: "0 0 12px",
          }}
        >
          Thank you, {sentName}.
        </h2>
        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.6,
            color: "var(--color-neutral-800)",
            margin: "0 0 20px",
          }}
        >
          Your <b>{sentType}</b> enquiry is with the commercial team. We reply
          within one business day, Sunday to Thursday.
        </p>
        <button
          type="button"
          onClick={reset}
          className="btn btn-secondary"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      style={{ display: "grid", gap: "18px" }}
      onSubmit={handleSubmit}
      noValidate
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
          gap: "18px",
        }}
      >
        <div className="field">
          <label htmlFor="ct-name">Name</label>
          <input
            id="ct-name"
            className="input"
            type="text"
            placeholder="Your name"
            value={formData.name}
            onInput={(ev) =>
              setFormData({
                ...formData,
                name: (ev.target as HTMLInputElement).value,
              })
            }
            style={n.style}
            aria-invalid={n.invalid}
          />
          <div style={n.errStyle}>{n.err}</div>
        </div>
        <div className="field">
          <label htmlFor="ct-company">Company</label>
          <input
            id="ct-company"
            className="input"
            type="text"
            placeholder="Company"
            value={formData.company}
            onInput={(ev) =>
              setFormData({
                ...formData,
                company: (ev.target as HTMLInputElement).value,
              })
            }
            style={c.style}
            aria-invalid={c.invalid}
          />
          <div style={c.errStyle}>{c.err}</div>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
          gap: "18px",
        }}
      >
        <div className="field">
          <label htmlFor="ct-email">Email</label>
          <input
            id="ct-email"
            className="input"
            type="email"
            placeholder="you@brand.com"
            value={formData.email}
            onInput={(ev) =>
              setFormData({
                ...formData,
                email: (ev.target as HTMLInputElement).value,
              })
            }
            style={e.style}
            aria-invalid={e.invalid}
          />
          <div style={e.errStyle}>{e.err}</div>
        </div>
        <div className="field">
          <label htmlFor="ct-country">Country</label>
          <input
            id="ct-country"
            className="input"
            type="text"
            placeholder="Country"
            value={formData.country}
            onInput={(ev) =>
              setFormData({
                ...formData,
                country: (ev.target as HTMLInputElement).value,
              })
            }
            style={co.style}
            aria-invalid={co.invalid}
          />
          <div style={co.errStyle}>{co.err}</div>
        </div>
      </div>
      <div className="field">
        <label>Enquiry type</label>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: "8px",
            border: "1px solid var(--color-divider)",
            width: "max-content",
            maxWidth: "100%",
          }}
        >
          <button
            type="button"
            onClick={() => setFormData({ ...formData, type: "Sample request" })}
            style={seg("Sample request")}
          >
            Sample request
          </button>
          <button
            type="button"
            onClick={() => setFormData({ ...formData, type: "Bulk order" })}
            style={seg("Bulk order")}
          >
            Bulk order
          </button>
          <button
            type="button"
            onClick={() => setFormData({ ...formData, type: "Audit or visit" })}
            style={seg("Audit or visit")}
          >
            Audit or visit
          </button>
          <button
            type="button"
            onClick={() => setFormData({ ...formData, type: "General" })}
            style={seg("General")}
          >
            General
          </button>
        </div>
        <div style={typeBad ? ERR_STYLE : HIDDEN}>
          {typeBad ? errors.type : ""}
        </div>
      </div>
      <div className="field">
        <label htmlFor="ct-msg">Message</label>
        <textarea
          id="ct-msg"
          className="input"
          rows={5}
          placeholder="Product, quantity, target price, delivery window"
          value={formData.message}
          onInput={(ev) =>
            setFormData({
              ...formData,
              message: (ev.target as HTMLTextAreaElement).value,
            })
          }
          style={m.style}
          aria-invalid={m.invalid}
        />
        <div style={m.errStyle}>{m.err}</div>
      </div>
      {sendError ? (
        <div style={{ ...ERR_STYLE, marginTop: 0 }}>{sendError}</div>
      ) : null}
      <button type="submit" className="btn btn-primary btn-block" disabled={sending}>
        {sending ? "Sending…" : "Send enquiry"}
      </button>
      <div
        style={
          touched && errList.length
            ? {
                fontSize: "13px",
                fontWeight: 700,
                color: "var(--color-accent-700)",
                borderLeft: "2px solid var(--color-accent)",
                paddingLeft: "12px",
              }
            : HIDDEN
        }
      >
        {touched && errList.length
          ? errList.length +
            (errList.length === 1
              ? " field needs attention."
              : " fields need attention.")
          : ""}
      </div>
    </form>
  );
}
