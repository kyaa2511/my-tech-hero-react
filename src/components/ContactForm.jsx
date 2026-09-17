import { useEffect, useRef, useState } from "react";
import { submitContactRequest } from "../services/contactService";
import { siteConfig } from "../data/siteConfig";

const initialState = {
  name: "",
  email: "",
  phone: "",
  supportType: "Not sure",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileRef = useRef(null);
  const widgetIdRef = useRef(null);

  const resetTurnstile = () => {
    setTurnstileToken("");
    if (window.turnstile && widgetIdRef.current !== null) {
      window.turnstile.reset(widgetIdRef.current);
    }
  };

  useEffect(() => {
    const scriptId = "cloudflare-turnstile-script";
    const renderWidget = () => {
      if (
        !window.turnstile ||
        !turnstileRef.current ||
        widgetIdRef.current !== null
      )
        return;

      widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
        sitekey: siteConfig.turnstileSiteKey,
        action: "contact",
        callback: (token) => setTurnstileToken(token),
        "expired-callback": () => setTurnstileToken(""),
        "error-callback": () => setTurnstileToken(""),
      });
    };

    if (window.turnstile) {
      renderWidget();
      return undefined;
    }

    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

    script.addEventListener("load", renderWidget);

    return () => script.removeEventListener("load", renderWidget);
  }, []);

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submit = async (event) => {
    event.preventDefault();

    if (!turnstileToken) {
      setStatus({
        type: "error",
        message: "Please complete the security check and try again.",
      });
      return;
    }

    setStatus({ type: "loading", message: "Sending request…" });

    try {
      const result = await submitContactRequest(form, turnstileToken);
      setStatus({ type: "success", message: result.message });
      setForm(initialState);
      resetTurnstile();
    } catch {
      resetTurnstile();
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field-row">
        <label>
          Name
          <input name="name" value={form.name} onChange={update} required />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={update}
            required
          />
        </label>
      </div>

      <div className="field-row">
        <label>
          Phone <span className="optional">(optional)</span>
          <input type="tel" name="phone" value={form.phone} onChange={update} />
        </label>
        <label>
          Type of help
          <select name="supportType" value={form.supportType} onChange={update}>
            <option>Not sure</option>
            <option>Remote Help</option>
            <option>In-Home Help</option>
            <option>Tech Lesson</option>
          </select>
        </label>
      </div>

      <label>
        What’s going on?
        <textarea
          name="message"
          rows="5"
          value={form.message}
          onChange={update}
          placeholder="Tell us what the device is doing, what you were trying to do, and anything you've already tried."
          required
        />
      </label>

      <div
        ref={turnstileRef}
        className="turnstile-widget"
        aria-label="Security check"
      />

      <button
        className="button"
        type="submit"
        disabled={status.type === "loading"}
      >
        {status.type === "loading" ? "Sending…" : "Request Tech Help"}
      </button>

      {status.message && (
        <p className={`form-status ${status.type}`} role="status">
          {status.message}
        </p>
      )}
    </form>
  );
}
