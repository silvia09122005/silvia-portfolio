"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Github,
  Globe2,
  Layers3,
  Mail,
  Send,
  Sparkles,
} from "lucide-react";

const skills = [
  "Next.js",
  "React",
  "JavaScript",
  "Tailwind CSS",
  "UI/UX Design",
  "Git & GitHub",
];

const projects = [
  {
    number: "01",
    name: "Nusantara Tech",
    category: "Digital Agency Website",
    description:
      "A bold, modern home for a digital agency—designed to make its services easy to explore and its next big idea easy to start.",
    tags: ["Next.js", "Tailwind CSS", "Web3Forms"],
    href: "https://nusantara-tech-web.vercel.app/",
    github: "https://github.com/silvia09122005/nusantara-tech-web",
  },
];

export default function Home() {
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSending(true);
    setFormStatus({ type: "", message: "" });

    try {
      const formData = new FormData(form);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Your message could not be sent. Please try again.");
      }

      form.reset();
      setFormStatus({
        type: "success",
        message: "Thanks for reaching out! I’ll get back to you soon.",
      });
    } catch (error) {
      setFormStatus({
        type: "error",
        message: error.message || "Something went wrong. Please email me directly instead.",
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <main className="overflow-hidden">
      <header className="site-header">
        <nav className="container flex min-h-[82px] items-center justify-between gap-6" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="Silvia, home">
            Silvia<span>.</span>
          </a>
          <div className="hidden items-center gap-9 md:flex">
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#skills">Skills</a>
            <a className="nav-link" href="#projects">Projects</a>
            <a className="nav-link" href="#contact">Contact</a>
          </div>
          <a className="button button-dark px-4 py-3 text-xs md:px-5 md:py-3.5 md:text-[.82rem]" href="#contact">
            Get in Touch <ArrowUpRight size={15} />
          </a>
        </nav>
        <div className="container flex justify-center gap-6 border-t border-ink/5 py-3 md:hidden">
          <a className="nav-link text-xs" href="#about">About</a>
          <a className="nav-link text-xs" href="#skills">Skills</a>
          <a className="nav-link text-xs" href="#projects">Projects</a>
          <a className="nav-link text-xs" href="#contact">Contact</a>
        </div>
      </header>

      <section id="home" className="hero-section section-grid">
        <div className="container relative z-10 grid items-center gap-14 py-20 md:min-h-[690px] md:grid-cols-[1.08fr_.92fr] md:py-24">
          <div className="max-w-[660px]">
            <div className="eyebrow mb-7">
              <span className="eyebrow-dot" />
              Available for new opportunities
            </div>
            <p className="mb-3 text-lg font-medium text-muted">Hi, I&apos;m</p>
            <h1 className="display-heading">
              Silvia Anggreny <span className="text-accent">Kahali</span>
            </h1>
            <h2 className="mt-5 text-xl font-semibold tracking-[-.03em] text-ink sm:text-2xl">
              Web Developer <span className="text-accent">&amp;</span> UI/UX Enthusiast
            </h2>
            <p className="mt-5 max-w-[540px] text-base leading-8 text-muted sm:text-lg">
              I&apos;m a fifth-semester Informatics Engineering student at STIKOM Yos Sudarso
              Purwokerto who loves building thoughtful, modern web experiences with Next.js—and
              making every detail feel just right.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a className="button button-accent" href="#projects">
                View My Work <ArrowUpRight size={17} />
              </a>
              <a className="button button-outline" href="#contact">
                Contact Me <ArrowDownRight size={17} />
              </a>
            </div>
            <a className="mt-12 inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-accent" href="#about">
              <ArrowDown size={16} /> Scroll to explore
            </a>
          </div>

          <div className="hero-art relative mx-auto w-full max-w-[470px]">
            <div className="art-glow" />
            <div className="art-card">
              <div className="flex items-center justify-between border-b border-ink/5 px-5 py-4">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="window-dot bg-[#ff8c78]" />
                  <span className="window-dot bg-[#ffc966]" />
                  <span className="window-dot bg-[#70c9a0]" />
                </div>
                <span className="font-mono text-[11px] text-muted">silvia.dev</span>
                <Sparkles size={16} className="text-accent" />
              </div>
              <div className="p-6 sm:p-8">
                <div className="mb-8 inline-flex rounded-2xl bg-accent/10 p-4 text-accent">
                  <Code2 size={29} strokeWidth={1.7} />
                </div>
                <p className="font-mono text-sm leading-8 text-muted">
                  <span className="text-accent">const</span> creator = {"{"}<br />
                  &nbsp;&nbsp;name: <span className="text-[#b56b4a]">&quot;Silvia&quot;</span>,<br />
                  &nbsp;&nbsp;focus: <span className="text-[#b56b4a]">&quot;Web &amp; UI/UX&quot;</span>,<br />
                  &nbsp;&nbsp;learning: <span className="text-[#b56b4a]">&quot;Every day&quot;</span>,<br />
                  &nbsp;&nbsp;status: <span className="text-[#b56b4a]">&quot;Building something good&quot;</span><br />
                  {"}"};
                </p>
                <div className="mt-8 flex items-center justify-between rounded-xl bg-[#f7f5f1] px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">SK</span>
                    <div>
                      <p className="text-xs font-semibold text-ink">Curious by nature</p>
                      <p className="mt-1 text-[11px] text-muted">Always learning, always creating</p>
                    </div>
                  </div>
                  <ArrowUpRight size={17} className="text-muted" />
                </div>
              </div>
            </div>
            <div className="floating-note note-top"><span className="note-icon"><Layers3 size={16} /></span> Thoughtful by design</div>
            <div className="floating-note note-bottom"><span className="note-pulse" /> Based in Purwokerto • From East Sumba, NTT</div>
          </div>
        </div>
      </section>

      <section id="about" className="section-pad">
        <div className="container grid gap-12 md:grid-cols-[.8fr_1.2fr] md:gap-20">
          <div>
            <p className="section-kicker">A little about me</p>
            <h2 className="section-heading mt-4">Learning today.<br />Building for tomorrow.</h2>
            <div className="mt-7 flex items-center gap-3 text-sm text-muted">
              <span className="h-px w-10 bg-accent" /> Informatics Engineering • Semester 5
            </div>
          </div>
          <div className="max-w-[680px]">
            <p className="text-lg leading-8 text-muted">
              I&apos;m Silvia Anggreny Kahali, a fifth-semester Informatics Engineering student at
              Sekolah Tinggi Ilmu Komputer Yos Sudarso Purwokerto. Originally from East Sumba, East
              Nusa Tenggara (NTT), I enjoy turning ideas into clean, intuitive digital
              experiences—one component and one thoughtful detail at a time.
            </p>
            <p className="mt-5 text-base leading-8 text-muted">
              Alongside my academic journey, I actively explore modern web development, practice
              UI/UX design, and build responsive web projects. I believe curiosity and consistency
              are just as important as the tools we use, and I&apos;m excited to keep growing as a
              developer and designer.
            </p>
            <div id="skills" className="mt-9">
              <p className="mb-4 text-sm font-semibold text-ink">Tools &amp; skills</p>
              <div className="flex flex-wrap gap-2.5">
                {skills.map((skill) => (
                  <span className="skill-badge" key={skill}>
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section-pad projects-section">
        <div className="container">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="section-kicker">A selection of my work</p>
              <h2 className="section-heading mt-4">Featured projects</h2>
            </div>
            <p className="max-w-[330px] text-sm leading-7 text-muted">
              Small steps, meaningful ideas. Here&apos;s what I&apos;ve been working on lately.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-preview">
                  <div className="preview-orbit orbit-one" />
                  <div className="preview-orbit orbit-two" />
                  <div className="preview-window">
                    <div className="preview-bar"><span /><span /><span /></div>
                    <div className="preview-content">
                      <div className="preview-mark">N<span>.</span></div>
                      <div className="preview-line line-long" />
                      <div className="preview-line line-short" />
                      <div className="preview-action" />
                    </div>
                  </div>
                  <span className="project-index">PROJECT {project.number}</span>
                  <a
                    className="preview-link"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.name} website`}
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[.13em] text-accent">{project.category}</p>
                  <h3 className="text-2xl font-semibold tracking-[-.04em] text-ink">{project.name}</h3>
                  <p className="mt-3 max-w-[560px] text-sm leading-7 text-muted">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => <span className="project-tag" key={tag}>{tag}</span>)}
                  </div>
                  <div className="mt-7 flex flex-wrap items-center gap-5 border-t border-ink/5 pt-5">
                    <a className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-accent" href={project.href} target="_blank" rel="noreferrer">
                      Live Website <ArrowUpRight size={16} />
                    </a>
                    <a className="inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-accent" href={project.github} target="_blank" rel="noreferrer">
                      <Github size={16} /> GitHub
                    </a>
                  </div>
                </div>
              </article>
            ))}

            <article className="upcoming-card">
              <div className="upcoming-icon"><Sparkles size={22} /></div>
              <span className="mb-3 text-xs font-semibold uppercase tracking-[.14em] text-accent">In the works</span>
              <h3 className="text-2xl font-semibold tracking-[-.04em] text-ink">Upcoming Project</h3>
              <p className="mt-3 max-w-[370px] text-sm leading-7 text-muted">
                A new idea is taking shape. I&apos;m exploring, sketching, and building—stay tuned for what&apos;s next.
              </p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-muted"><span className="note-pulse" /> Coming soon</span>
              <div className="upcoming-decoration" aria-hidden="true"><Code2 size={94} strokeWidth={0.8} /></div>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="section-pad">
        <div className="container">
          <div className="contact-panel">
            <div className="contact-decoration" aria-hidden="true"><Mail size={190} strokeWidth={0.55} /></div>
            <div className="relative z-10 grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
              <div>
                <p className="section-kicker text-[#c8b9ff]">Let&apos;s connect</p>
                <h2 className="mt-4 max-w-[450px] text-4xl font-semibold leading-[1.15] tracking-[-.05em] text-white sm:text-5xl">
                  Have a project in mind?
                </h2>
                <p className="mt-5 max-w-[420px] text-sm leading-7 text-white/65">
                  I&apos;d love to hear what you&apos;re working on. Send me a message and let&apos;s make something meaningful together.
                </p>
                <a className="mt-8 inline-flex items-center gap-3 text-sm font-medium text-white transition hover:text-[#c8b9ff]" href="#contact-form">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15"><Mail size={16} /></span>
                  Send me a message
                </a>
                <div className="mt-8 flex gap-3">
                  <a className="social-link" href="https://github.com/silvia09122005" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
                  <a className="social-link" href="#projects" aria-label="Explore projects"><Globe2 size={17} /></a>
                </div>
              </div>
              <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
                <input type="hidden" name="access_key" value="200d4527-7284-41ea-9276-c759cf41d75a" />
                <input type="hidden" name="subject" value="New message from Silvia's portfolio" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="form-field">
                    <span>Your name</span>
                    <input type="text" name="name" placeholder="Jane Smith" required />
                  </label>
                  <label className="form-field">
                    <span>Email address</span>
                    <input type="email" name="email" placeholder="jane@example.com" required />
                  </label>
                </div>
                <label className="form-field mt-4">
                  <span>Your message</span>
                  <textarea name="message" rows="4" placeholder="Tell me a little about what you have in mind..." required />
                </label>
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <button className="button button-light" type="submit" disabled={isSending}>
                    {isSending ? "Sending..." : "Send Message"}
                    {isSending ? <span className="button-spinner" /> : <Send size={16} />}
                  </button>
                  {formStatus.message && (
                    <p className={`text-sm leading-6 ${formStatus.type === "success" ? "text-emerald-300" : "text-rose-300"}`} role="status">
                      {formStatus.type === "success" && <Check size={15} className="mr-1 inline" />}
                      {formStatus.message}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="container flex flex-col items-center justify-between gap-4 border-t border-ink/10 py-7 text-center sm:flex-row sm:text-left">
        <a className="brand text-xl" href="#home">Silvia<span>.</span></a>
        <p className="text-xs text-muted">© {new Date().getFullYear()} Silvia Anggreny Kahali. All rights reserved.</p>
        <a className="inline-flex items-center gap-2 text-xs font-medium text-muted transition hover:text-accent" href="#home">
          Back to top <ArrowRight size={13} className="-rotate-45" />
        </a>
      </footer>
    </main>
  );
}
