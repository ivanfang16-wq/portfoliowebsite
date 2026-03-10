"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import SkillChip from "@/components/SkillChip";
import ContactForm from "@/components/ContactForm";
import {
  hero,
  about,
  education,
  experience,
  projects,
  skills,
  awards,
} from "@/lib/data";

// ─── LinkedIn SVG ─────────────────────────────────────────────────────────────
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
      <path d="M20.447 20.452H16.89v-5.569c0-1.327-.027-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.941v5.665H9.344V9h3.414v1.561h.048c.476-.9 1.637-1.85 3.37-1.85 3.602 0 4.268 2.369 4.268 5.455l-.001 6.286zM5.337 7.433a1.98 1.98 0 1 1 0-3.96 1.98 1.98 0 0 1 0 3.96zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  );
}

function AwardIcon() {
  return (
    <svg className="size-5 text-[#3a5f8a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h4m-4 0H8M8.228 7.228A6 6 0 1115.772 7.228m-7.544 0L5 12l6.5 6.5L18 12l-3.228-4.772" />
    </svg>
  );
}

// ─── Scroll Reveal Hook ───────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handler = () => {
      if (navRef.current) {
        navRef.current.classList.toggle("shadow-sm", window.scrollY > 20);
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      ref={navRef}
      className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-shadow duration-200"
    >
      <nav
        className="max-w-5xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#top"
          className="text-base font-bold tracking-tight text-[#1a1a2e] hover:text-[#3a5f8a] transition-colors"
        >
          Ivan Fang
        </a>

        {/* Links */}
        <div className="hidden sm:flex items-center gap-7">
          {[
            ["About", "#about"],
            ["Education", "#education"],
            ["Experience", "#experience"],
            ["Projects", "#projects"],
            ["Skills", "#skills"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={label} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href={hero.cta.resume}
          target="_blank"
          rel="noreferrer"
          className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1a1a2e] text-white text-xs font-semibold hover:bg-[#3a5f8a] transition-colors duration-200"
        >
          Resume <DownloadIcon />
        </a>
      </nav>
    </header>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Home() {
  useReveal();

  return (
    <>
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        id="top"
        className="min-h-screen flex items-center pt-16 relative overflow-hidden"
        aria-label="Hero"
      >
        {/* Subtle background grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#1a1a2e 1px,transparent 1px),linear-gradient(90deg,#1a1a2e 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Soft gradient orb */}
        <div className="absolute top-1/4 right-0 w-[420px] h-[420px] rounded-full bg-[#3a5f8a]/8 blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 sm:px-8 py-24">
          {/* Location badge */}
          <div className="animate-fade-in-up flex items-center gap-2 mb-6">
            <span className="size-1.5 rounded-full bg-[#3a5f8a]" />
            <span className="text-xs font-medium text-[#3a5f8a] tracking-wide">
              {hero.location}
            </span>
          </div>

          {/* Name */}
          <h1 className="animate-fade-in-up delay-100 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#1a1a2e] leading-[1.06] mb-5">
            {hero.name}
          </h1>

          {/* Headline */}
          <p className="animate-fade-in-up delay-200 text-lg sm:text-xl font-medium text-[#3a5f8a] mb-3">
            {hero.headline}
          </p>
          <p className="animate-fade-in-up delay-200 text-sm text-slate-500 mb-2">
            {hero.subheadline}
          </p>

          {/* Subheadline */}
          <p className="animate-fade-in-up delay-300 text-base text-slate-600 max-w-xl leading-relaxed mb-10">
            {hero.intro}
          </p>

          {/* CTA buttons */}
          <div className="animate-fade-in-up delay-400 flex flex-wrap gap-3 mb-10">
            <a
              id="hero-resume-btn"
              href={hero.cta.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1a1a2e] text-white text-sm font-semibold hover:bg-[#3a5f8a] transition-colors duration-200 shadow-sm"
            >
              View Resume <DownloadIcon />
            </a>
            <a
              id="hero-projects-btn"
              href={hero.cta.projects}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1a1a2e] text-sm font-semibold border border-slate-200 hover:border-[#3a5f8a]/40 hover:text-[#3a5f8a] transition-colors duration-200"
            >
              Projects <ArrowRight />
            </a>
            <a
              id="hero-contact-btn"
              href={hero.cta.contact}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1a1a2e] text-sm font-semibold border border-slate-200 hover:border-[#3a5f8a]/40 hover:text-[#3a5f8a] transition-colors duration-200"
            >
              Contact <ArrowRight />
            </a>
          </div>

          {/* Social links */}
          <div className="animate-fade-in-up delay-500 flex gap-3">
            <a
              id="hero-linkedin-btn"
              href={hero.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-slate-200 text-[#3a5f8a] text-xs font-medium hover:border-[#3a5f8a] hover:bg-[#3a5f8a]/5 transition-colors"
            >
              <LinkedInIcon /> LinkedIn
            </a>
            <a
              id="hero-email-btn"
              href={`mailto:${hero.socials.email}`}
              aria-label="Send email"
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-medium hover:border-[#3a5f8a]/40 hover:text-[#3a5f8a] transition-colors"
            >
              <MailIcon /> Email
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────────────────── */}
      <section id="about" className="section section-alt" aria-label="About">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="reveal">
            <SectionHeader label="Introduction" title="About Me" />
          </div>
          <div className="max-w-2xl space-y-4">
            {about.paragraphs.map((p, i) => (
              <p key={i} className={`reveal text-base text-slate-600 leading-relaxed delay-${(i + 1) * 100}`}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ─────────────────────────────────────────────────────── */}
      <section id="education" className="section" aria-label="Education">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="reveal">
            <SectionHeader label="Academic Background" title="Education" />
          </div>
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="reveal border border-slate-200 rounded-2xl p-8 bg-white hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-[#1a1a2e]">{edu.institution}</h3>
                  <p className="text-[#3a5f8a] font-medium mt-1">{edu.degree}</p>
                  <p className="text-sm text-slate-400 mt-0.5">{edu.location}</p>
                </div>
                <span className="flex-shrink-0 inline-flex items-center px-3 py-1 rounded-full bg-[#3a5f8a]/8 text-[#3a5f8a] text-xs font-semibold">
                  {edu.graduation}
                </span>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-3">
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((c) => (
                    <SkillChip key={c} label={c} variant="light" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EXPERIENCE ────────────────────────────────────────────────────── */}
      <section id="experience" className="section section-alt" aria-label="Experience">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="reveal">
            <SectionHeader label="Work History" title="Experience" />
          </div>
          <div className="space-y-5">
            {experience.map((exp, i) => (
              <div key={i} className={`reveal delay-${(i + 1) * 100}`}>
                <ExperienceCard {...exp} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ──────────────────────────────────────────────────────── */}
      <section id="projects" className="section" aria-label="Projects">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="reveal">
            <SectionHeader label="Portfolio" title="Projects & Programs" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((proj, i) => (
              <div key={i} className={`reveal delay-${(i + 1) * 100}`}>
                <ProjectCard {...proj} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ────────────────────────────────────────────────────────── */}
      <section id="skills" className="section section-alt" aria-label="Skills">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="reveal">
            <SectionHeader label="Competencies" title="Skills & Interests" />
          </div>
          <div className="space-y-7">
            {Object.entries(skills).map(([category, items], i) => (
              <div key={category} className={`reveal delay-${(i + 1) * 100}`}>
                <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-3">
                  {category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <SkillChip
                      key={item}
                      label={item}
                      variant={
                        category === "Technical"
                          ? "primary"
                          : category === "Languages"
                          ? "secondary"
                          : "light"
                      }
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AWARDS ────────────────────────────────────────────────────────── */}
      <section id="awards" className="section" aria-label="Awards">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="reveal">
            <SectionHeader label="Achievements" title="Awards & Certifications" />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {awards.map((award, i) => (
              <div
                key={i}
                className={`reveal delay-${(i + 1) * 100} flex gap-4 p-6 rounded-xl border border-slate-200 bg-white hover:shadow-md hover:border-[#3a5f8a]/30 transition-all`}
              >
                <div className="flex-shrink-0 size-10 rounded-full bg-[#3a5f8a]/8 flex items-center justify-center">
                  <AwardIcon />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1a1a2e]">{award.title}</h3>
                  <p className="text-sm text-slate-500 mt-0.5">{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESUME ────────────────────────────────────────────────────────── */}
      <section id="resume" className="section section-alt" aria-label="Resume">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="reveal">
            <SectionHeader label="Document" title="Resume" />
          </div>
          <div className="reveal border border-slate-200 rounded-2xl bg-white overflow-hidden">
            {/* Embedded preview (works for real PDFs) */}
            <div className="w-full h-[480px] bg-slate-50 flex flex-col items-center justify-center gap-4 border-b border-slate-200">
              <svg className="size-12 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h4a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              <p className="text-sm text-slate-400">Resume preview available after uploading PDF</p>
            </div>
            <div className="p-6 flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="font-semibold text-[#1a1a2e]">Ivan Fang — Resume</p>
                <p className="text-sm text-slate-400 mt-0.5">ivan-fang-resume.pdf</p>
              </div>
              <a
                id="download-resume-btn"
                href={hero.cta.resume}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1a1a2e] text-white text-sm font-semibold hover:bg-[#3a5f8a] transition-colors"
              >
                Download PDF <DownloadIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────────────────── */}
      <section id="contact" className="section" aria-label="Contact">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="reveal">
            <SectionHeader label="Get in Touch" title="Contact" />
          </div>
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info column */}
            <div className="reveal lg:col-span-2 space-y-8">
              <p className="text-slate-600 text-sm leading-relaxed">
                I'm always open to discussing finance, analytics, internships, or collaborative
                opportunities. Feel free to reach out — I'll respond promptly.
              </p>

              <div className="space-y-4">
                <a
                  id="contact-linkedin-link"
                  href={hero.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="size-9 rounded-lg bg-[#3a5f8a]/8 flex items-center justify-center text-[#3a5f8a] group-hover:bg-[#3a5f8a]/15 transition-colors">
                    <LinkedInIcon />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">LinkedIn</p>
                    <p className="text-sm font-medium text-[#1a1a2e] group-hover:text-[#3a5f8a] transition-colors">
                      Ivan Fang
                    </p>
                  </div>
                </a>

                <a
                  id="contact-email-link"
                  href={`mailto:${hero.socials.email}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="size-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-[#3a5f8a]/10 group-hover:text-[#3a5f8a] transition-colors">
                    <MailIcon />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Email</p>
                    <p className="text-sm font-medium text-[#1a1a2e] group-hover:text-[#3a5f8a] transition-colors">
                      {hero.socials.email}
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Form column */}
            <div className="reveal delay-200 lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer className="border-t border-slate-100 py-8">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Ivan Fang. Built with Next.js & Tailwind CSS.
          </p>
          <div className="flex gap-4">
            <a href={hero.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#3a5f8a] transition-colors">
              <LinkedInIcon />
            </a>
            <a href={`mailto:${hero.socials.email}`} className="text-slate-400 hover:text-[#3a5f8a] transition-colors">
              <MailIcon />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
