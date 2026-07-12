import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import { PERSONAL } from '../../constants';

const CONTACT_INFO = [
  { icon: FiMail, label: 'Email', value: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
  { icon: FiPhone, label: 'Phone', value: PERSONAL.phone, href: `tel:${PERSONAL.phone}` },
  { icon: FiMapPin, label: 'Location', value: PERSONAL.location, href: null },
  { icon: FiGithub, label: 'GitHub', value: 'View profile', href: PERSONAL.github },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'Connect', href: PERSONAL.linkedin },
];

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // PLACEHOLDER: replace with your real EmailJS service ID, template ID, and public key.
    // Get these from https://www.emailjs.com/ after connecting your email account.
    const SERVICE_ID = 'service_uqs7rs2';
    const TEMPLATE_ID = 'template_l0eboxp';
    const PUBLIC_KEY = 'UtlyENrVLX_SK-B2q';

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setStatus('success');
      formRef.current.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section">
      <SectionHeading
        kicker=""
        title="Let's build something together"
        subtitle="Open to internships, junior full stack roles, and freelance MERN projects. I usually reply within a day."
      />

      <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-8">
        {/* Info card */}
        <GlassCard className="p-8 flex flex-col justify-between" hover={false}>
          <div className="flex flex-col gap-5">
            {CONTACT_INFO.map((item) => {
              const Content = (
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] border border-white/10 text-accent">
                    <item.icon />
                  </div>
                  <div>
                    <p className="text-xs text-slate-250/50 font-mono">{item.label}</p>
                    <p className="text-sm text-slate-150">{item.value}</p>
                  </div>
                </div>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="transition-transform hover:translate-x-1"
                >
                  {Content}
                </a>
              ) : (
                <div key={item.label}>{Content}</div>
              );
            })}
          </div>
        </GlassCard>

        {/* Form card */}
        <GlassCard className="p-8" hover={false}>
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-mono text-slate-250/60">
                  Your name
                </label>
                <input
                  id="name"
                  name="user_name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-150 placeholder:text-slate-250/30 outline-none focus:border-accent/60 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-mono text-slate-250/60">
                  Your email
                </label>
                <input
                  id="email"
                  name="user_email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-150 placeholder:text-slate-250/30 outline-none focus:border-accent/60 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-xs font-mono text-slate-250/60">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="Internship opportunity"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-150 placeholder:text-slate-250/30 outline-none focus:border-accent/60 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-mono text-slate-250/60">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me a bit about the role or project..."
                className="resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-150 placeholder:text-slate-250/30 outline-none focus:border-accent/60 transition-colors"
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-button-gradient px-7 py-3.5 font-medium text-white shadow-glow hover:shadow-glow-lg transition-shadow disabled:opacity-60"
            >
              <FiSend />
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </motion.button>

            {status === 'success' && (
              <p className="text-sm text-emerald-400 font-mono">Message sent — thanks for reaching out!</p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-400 font-mono">
                Something went wrong. Connect a real EmailJS service ID to enable this form.
              </p>
            )}
          </form>
        </GlassCard>
      </div>
    </section>
  );
}
