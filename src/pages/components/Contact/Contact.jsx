import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    // Wire up to your Express backend: POST /api/contact
    try {
      await new Promise(res => setTimeout(res, 1000)); // replace with fetch
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact">
      <div className="glitch-line" />
      <div style={{ paddingTop: "4rem" }}>
        <p className="section-label">04. contact</p>
        <h2 className="section-title">Get In <span>Touch</span></h2>

        <div className="contact__inner">
          <div className="contact__info fade-up">
            <p className="contact__blurb">
              Have a project in mind? Want to collaborate? Or just want to say hi?
              Drop me a message — I usually reply within 24 hours.
            </p>

            <div className="contact__channels mono">
              {[
                { label: "email", val: "n3dd3v@hotmail.com", href: "mailto:n3dd3v@hotmail.com" },
                { label: "github", val: "github.com/n3dd3v", href: "https://github.com/n3dd3v" },
                { label: "linkedin", val: "/in/nader-laghouili-496726407/", href: "https://www.linkedin.com/in/nader-laghouili-496726407/" },
              ].map(c => (
                <a key={c.label} href={c.href} className="channel-row" target="_blank" rel="noreferrer">
                  <span className="green">&gt; {c.label}</span>
                  <span className="channel-val">{c.val}</span>
                </a>
              ))}
            </div>
          </div>

          <form className="contact__form fade-up delay-2" onSubmit={submit}>
            <div className="field">
              <label className="mono" htmlFor="name"><span className="green">$</span> name</label>
              <input
                id="name" name="name" type="text" required
                value={form.name} onChange={handle}
                placeholder="your name"
                autoComplete="off"
              />
            </div>

            <div className="field">
              <label className="mono" htmlFor="email"><span className="green">$</span> email</label>
              <input
                id="email" name="email" type="email" required
                value={form.email} onChange={handle}
                placeholder="your@email.com"
                autoComplete="off"
              />
            </div>

            <div className="field">
              <label className="mono" htmlFor="message"><span className="green">$</span> message</label>
              <textarea
                id="message" name="message" required rows={5}
                value={form.message} onChange={handle}
                placeholder="what's on your mind..."
              />
            </div>

            <button type="submit" className="btn-primary" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : status === "sent" ? "✓ Sent!" : "&gt; Send Message"}
            </button>

            {status === "error" && (
              <p className="mono" style={{ color: "var(--red)", fontSize: "0.8rem", marginTop: "0.5rem" }}>
                Something went wrong. Try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
