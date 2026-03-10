"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Wire to your preferred backend / email service here
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="size-12 rounded-full bg-[#3a5f8a]/10 flex items-center justify-center mb-4">
          <svg className="size-6 text-[#3a5f8a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-lg font-semibold text-[#1a1a2e]">Message sent!</p>
        <p className="text-sm text-slate-500 mt-1">Thanks for reaching out. I'll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-medium text-slate-500 mb-1.5">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#3a5f8a]/30 focus:border-[#3a5f8a] transition"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-xs font-medium text-slate-500 mb-1.5">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#3a5f8a]/30 focus:border-[#3a5f8a] transition"
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-xs font-medium text-slate-500 mb-1.5">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about an opportunity or just say hello..."
          className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#3a5f8a]/30 focus:border-[#3a5f8a] transition resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[#1a1a2e] text-white text-sm font-semibold hover:bg-[#3a5f8a] transition-colors duration-200"
      >
        Send Message
      </button>
    </form>
  );
}
