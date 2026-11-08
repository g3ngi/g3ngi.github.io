import { useEffect, useState } from "react";

const projects = [
  {
    id: "01",
    title: "ANTI–RE",
    type: "Python",
    year: "MAY 2024",
    access: "open",
    description:
      "Anti-debugging, virtual-machine detection, and self-checks that notice when a binary has been patched — built to understand evasion from both sides.",
    link: "https://github.com/g3ngi/Anti-RE",
  },
  {
    id: "02",
    title: "NOTRUST",
    type: "Swift",
    year: "AUG 2024",
    access: "open",
    description:
      "A zero-trust agent that keeps re-checking whether a Mac can still be trusted, instead of deciding once at login — questioning the assumption that a managed device is safe by default.",
    link: "https://github.com/g3ngi/NoTrust_Agent",
  }, {
    id: "03",
    title: "AMPERA",
    type: "IoT",
    year: "DES 2025",
    access: "current",
    description:
      "Remote battery intelligence for off-grid sites. A small device on each pack reads its vitals every second and reports them back to a cloud dashboard with five role-specific views.",
  }, {
    id: "04",
    title: "RINAI",
    type: "IoT",
    year: "MAR 2026 - Present",
    access: "current",
    description:
      "A secure and scalable smart irrigation system that gives crops the right amount of water at the right time. Solar-powered rain sensors and soil probes measure real field conditions, while automated scheduling adjusts watering to match. Built-in analytics reveal trends in water use and soil health, and a user-friendly dashboard puts live data and controls in one place, from a single plot to an entire plantation.",
  }, {
    id: "05",
    title: "GAPURA",
    type: " HARDWARE · EMBEDDED SYSTEM",
    year: "APR 2026",
    access: "current",
    description:
      "A plug-and-play universal LoRa gateway that connects your field to the cloud. It works with a range of wireless sensors over LoRa, so the system grows with the sensors you need. It gathers readings from across your land, sends them to your dashboard in real time, and carries your watering schedules back to the field. Long-range wireless means no cables, and automatic updates keep it improving without a site visit.",
  }, 
];

const experiences = [
  {
    period: "Jul 2026 — Present",
    role: "Penetration Tester",
    company: "Protergo Cybersecurity",
    now: true,
    detail:
      "Web, mobile, API and infrastructure pentesting across finance and fintech, plus ATM and hardware testing.",
  },
  {
    period: "Feb 2025 — Feb 2026",
    role: "Penetration Tester Intern",
    company: "ITSEC Asia",
    now: false,
    detail:
      "Web, mobile and API pentesting across finance and fintech; Android reverse engineering; malware and payload development for OT red-team environments.",
  },
];

const certifications = [
  {
    name: "Certified AppSec Practitioner",
    issuer: "The SecOps Group",
    code: "APPSEC / 01",
  },
  {
    name: "ROCm Star Application Developer",
    issuer: "AMD",
    code: "ROCM / 02",
  },
  {
    name: "JavaScript Backend Scholarship",
    issuer: "DBS Foundation · 2023",
    code: "BACKEND / 03",
  },
  {
    name: "Deep Learning Workshop",
    issuer: "NVIDIA DLI",
    code: "DLI / 04",
  },
];

const toolGroups = [
  {
    id: "RE",
    title: "Reverse Engineering",
    tools: ["Ghidra", "IDA Pro", "x64dbg", "jadx-gui", "GDB", "Frida"],
    note: "Static analysis, dynamic instrumentation, debugging, and binary inspection.",
  },
  {
    id: "RT",
    title: "Red Team",
    tools: ["Burp Suite", "Metasploit", "Nmap", "Cobalt Strike", "SQLMap", "Kali"],
    note: "Web, infrastructure, payload, and adversary simulation workflows.",
  },
  {
    id: "HW",
    title: "IoT / Hardware",
    tools: ["ESP32", "Arduino", "UART / JTAG", "PlatformIO", "Firmware extraction"],
    note: "Embedded prototyping, interface access, and firmware-level analysis.",
  },
  {
    id: "DV",
    title: "Development",
    tools: ["Python", "Java", "C / C++", "JavaScript", "Rust"],
    note: "Purpose-built tooling, agents, challenge binaries, and automation.",
  },
  {
    id: "AI",
    title: "AI / ML",
    tools: ["PyTorch", "scikit-learn", "TensorFlow", "Hugging Face", "YOLO"],
    note: "Applied machine learning experiments and computer-vision workflows.",
  },
  {
    id: "IF",
    title: "INFRASTRUCTURE",
    tools: ["Docker", "NGINX", "Ansible", "Kubernetes", "GitHub Actions"],
    note: "Containerised deployment, reverse proxying, provisioning, and CI pipelines for the systems above.",
  },
];

const awards = [
  ["1st", "Hack The City CTF", "SATSIBER TNI", "Sep 2025"],
  ["1st", "Joints CTF", "Universitas Gadjah Mada", "May 2023"],
  ["2nd", "Gemastik XVIII — Keamanan Siber", "Ditmawa", "Oct 2025"],
  ["3rd", "Wreck-IT CTF", "Politeknik Sandi Siber Negara", "May 2023"],
];

const navItems = [
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["education", "Education"],
  ["toolbox", "Kit"],
  ["certifications", "Certifications"],
  ["awards", "Awards"],
  ["blog", "Blog"]
];

const transitionLabels: Record<string, [string, string]> = {
  landing: ["00 / LANDING", "起動"],
  experience: ["01 / EXPERIENCE", "実務"],
  projects: ["02 / PROJECTS", "案件"],
  education: ["03 / EDUCATION", "教育"],
  toolbox: ["04 / KIT", "装備"],
  certifications: ["05 / CERTIFICATIONS", "認証"],
  awards: ["06 / AWARDS", "競技"],
};

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

export default function App() {
  const [copied, setCopied] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState("landing");
  const [activeExperience, setActiveExperience] = useState(0);
  const [activeCertification, setActiveCertification] = useState<number | null>(null);
  const [activeToolGroup, setActiveToolGroup] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("main > section[id]");
    const revealItems = document.querySelectorAll<HTMLElement>(".reveal");

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -55%", threshold: [0.1, 0.35, 0.6] },
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    const updateProgress = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(available > 0 ? window.scrollY / available : 0);
      setScrolled(window.scrollY > 40);
    };

    sections.forEach((section) => sectionObserver.observe(section));
    revealItems.forEach((item) => revealObserver.observe(item));
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("kenzienabeel@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = "mailto:kenzienabeel@gmail.com";
    }
  };

  return (
    <main>
      <div className="progress-hud" aria-hidden="true">
        <span style={{ transform: `scaleX(${scrollProgress})` }} />
        <b>
          {Math.round(scrollProgress * 100)
            .toString()
            .padStart(3, "0")}
          %
        </b>
      </div>

      <div className="section-transition" key={activeSection} aria-hidden="true">
        <div>
          <span>{transitionLabels[activeSection]?.[0]}</span>
          <b>{transitionLabels[activeSection]?.[1]}</b>
          <i />
        </div>
      </div>

      <section
        className="hero"
        id="landing"
        onPointerMove={(event) => {
          const bounds = event.currentTarget.getBoundingClientRect();
          event.currentTarget.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
          event.currentTarget.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
          event.currentTarget.style.setProperty(
            "--shift-x",
            `${((event.clientX - bounds.left) / bounds.width - 0.5) * 18}px`,
          );
          event.currentTarget.style.setProperty(
            "--shift-y",
            `${((event.clientY - bounds.top) / bounds.height - 0.5) * 12}px`,
          );
        }}
      >
        <div className="noise" aria-hidden="true" />
        <div className="hero-image" aria-hidden="true" />

        <header className={`site-header${scrolled ? " scrolled" : ""}`}>
          <a href="#landing" className="brand" aria-label="gengi, back to top">
            gengi
          </a>
          <nav className={menuOpen ? "open" : ""} aria-label="Primary navigation">
            {navItems.map(([id, label]) => (
              <a
                className={activeSection === id ? "active" : ""}
                href={`#${id}`}
                key={id}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
          </button>
        </header>

        <div className="hero-kicker">
          <span>Penetration tester</span>
          <span>Reverse engineer / CTF author</span>
          <span>BINUS 2026 · Jakarta, Indonesia</span>
        </div>

        <div className="hero-title full-name" aria-label="Kenzie Nabeel Rivanda">
          <span>KENZIE</span>
          <span>NABEEL</span>
          <span>RIVANDA</span>
        </div>

        <div className="vertical-type" aria-hidden="true">
          <b>解析</b>
          <span>信頼境界の検証</span>
        </div>

        <div className="warning-card">
          <p className="micro-label">Protocol 001 / Offensive security</p>
          <h1>I find where trust breaks.</h1>
          <p>
            I take systems apart, trace the failure, then write it up so someone else can use it.
          </p>
          <a href="#experience" className="text-link">
            Inspect field record <Arrow />
          </a>
        </div>

        <div className="coordinate coordinate-left">
          <span>06°12'00.0"S</span>
          <span>106°49'00.0"E</span>
        </div>
        <div className="coordinate coordinate-right">
          <span>SYS / ONLINE</span>
          <span>REV / 02.26</span>
        </div>

        <a className="scroll-cue" href="#experience">
          Scroll to inspect
          <span>↓</span>
        </a>
      </section>

      <section className="about experience" id="experience">
        <div className="section-rail" aria-hidden="true">
          <b>実務記録</b>
          <span>FIELD LOG / EXP-01</span>
        </div>
        <div className="about-stripe" aria-hidden="true">
          {Array.from({ length: 10 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>
        <div className="section-tag">[01] / Experience</div>
        <p className="about-intro reveal">
          <b>EXPERIENCES</b>
        </p>
        <div className="experience-list reveal">
          {experiences.map((experience, index) => (
            <article
              className={activeExperience === index ? "active" : ""}
              key={experience.company}
              onClick={() => setActiveExperience(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActiveExperience(index);
                }
              }}
              role="button"
              tabIndex={0}
            >
              <span className="exp-node" aria-hidden="true" />
              <span className="exp-period">
                0{index + 1} / {experience.period}
                {experience.now && <em className="exp-now">Current</em>}
              </span>
              <h2>{experience.role}</h2>
              <h3>{experience.company}</h3>
              <p>{experience.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work" id="projects">
        <div className="section-rail" aria-hidden="true">
          <b>研究案件</b>
          <span>PROJECT ARCHIVE / PRJ-02</span>
        </div>
        <div className="section-heading reveal">
          <div>
            <span className="index">[02]</span>
            <p>Selected projects</p>
          </div>
          <h2>
            PROJECTS
          </h2>
          <p className="section-note">
            Reverse engineering, endpoint security, Full stack IoT enginering.
          </p>
        </div>

        <div className="projects reveal">
          {projects.map((project, index) => (
            <article
              className={`project ${activeProject === index ? "active" : ""}`}
              key={project.id}
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <button
                type="button"
                onClick={() => setActiveProject(activeProject === index ? null : index)}
                aria-expanded={activeProject === index}
              >
                <span className="project-id">{project.id}</span>
                <span className="project-heading">
                  <span className="project-title-row">
                    <span className="project-title">{project.title}</span>
                    <span className={`project-access ${project.access}`}>
                      {project.access === "open" ? "Open source" : "Current"}
                    </span>
                  </span>
                  <span className="project-description">{project.description}</span>
                </span>
                <span className="project-meta">
                  {project.type}
                  <br />
                  {project.year}
                </span>
                <span className="project-arrow">
                  <Arrow />
                </span>
              </button>

              <div className="project-detail">
                {project.link ? (
                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                  >
                    View repository <Arrow />
                  </a>
                ) : (
                  <span className="project-current">
                    Source not public — project in development
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="repo-line reveal">
          <a href="https://github.com/g3ngi" target="_blank" rel="noreferrer">
            Explore GitHub <Arrow />
          </a>
        </div>
      </section>

      <section className="education" id="education">
        <div className="section-rail" aria-hidden="true">
          <b>教育記録</b>
          <span>ACADEMIC RECORD / EDU-03</span>
        </div>
        <div className="record-header reveal">
          <div className="section-tag">[03] / Education</div>
          <h2>
            EDUCATIONS <br />

          </h2>
          <p>Formal study in cyber security, computer science, and applied research.</p>
        </div>
        <div className="education-grid reveal">
          <article>
            <span>Undergraduate / 01</span>
            <div>
              <h3>Cyber Security Major</h3>
              <p className="edu-school">BINUS University</p>
              <small>Jul 2022 — Aug 2026</small>
            </div>
          </article>
          <article>
            <span>Graduate / 02</span>
            <div>
              <h3>Master of Computer Science</h3>
              <p className="edu-school">BINUS University</p>
              <small>Sep 2025 — Present</small>
            </div>
          </article>
        </div>
      </section>

      <section className="toolbox" id="toolbox">
        <div className="section-rail" aria-hidden="true">
          <b>装備一覧</b>
          <span>OPERATOR KIT / KIT-04</span>
        </div>
        <div className="record-header reveal">
          <div className="section-tag">[04] / Kit</div>
          <h2>
            MY KIT
          </h2>
          <p>The languages, analysis environments, and hardware used in active operations.</p>
        </div>
        <div className="toolbox-console reveal">
          <div className="tool-tabs" role="tablist" aria-label="Tool categories">
            {toolGroups.map((group, index) => (
              <button
                className={activeToolGroup === index ? "active" : ""}
                type="button"
                role="tab"
                aria-selected={activeToolGroup === index}
                key={group.id}
                onClick={() => setActiveToolGroup(index)}
              >
                <span>{group.id}</span>
                {group.title}
              </button>
            ))}
          </div>
          <div className="tool-readout" role="tabpanel">
            <div>
              <span>ACTIVE LOADOUT / {toolGroups[activeToolGroup].id}</span>
              <strong>{toolGroups[activeToolGroup].title}</strong>
              <p>{toolGroups[activeToolGroup].note}</p>
            </div>
            <ul>
              {toolGroups[activeToolGroup].tools.map((tool, index) => (
                <li key={tool}>
                  <span>{(index + 1).toString().padStart(2, "0")}</span>
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="certifications" id="certifications">
        <div className="section-rail" aria-hidden="true">
          <b>認証資格</b>
          <span>VERIFIED RECORD / CRT-05</span>
        </div>
        <div className="record-header reveal">
          <div className="section-tag">[05] / Certifications</div>
          <h2>
            CERTIFICATIONS
          </h2>
          <p>
            External validation across application security, software, and accelerated computing.
          </p>
        </div>
        <div className="certification-grid reveal">
          {certifications.map((certification, index) => (
            <article
              className={activeCertification === index ? "active" : ""}
              key={certification.name}
              onClick={() => setActiveCertification(activeCertification === index ? null : index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActiveCertification(activeCertification === index ? null : index);
                }
              }}
              role="button"
              tabIndex={0}
            >
              <span>{certification.code}</span>
              <h3>{certification.name}</h3>
              <p>{certification.issuer}</p>
              <small>
                {activeCertification === index ? "VERIFIED / ACTIVE" : "SELECT TO VERIFY"}
              </small>
            </article>
          ))}
        </div>
      </section>

      <section className="awards" id="awards">
        <div className="section-rail" aria-hidden="true">
          <b>競技記録</b>
          <span>COMPETITION LOG / AWD-06</span>
        </div>
        <div className="record-header reveal">
          <div className="section-tag">[06] / Awards</div>
          <h2>
            AWARDS
          </h2>
          <p>National cyber security and capture-the-flag competition placements.</p>
        </div>
        <div className="award-list reveal">
          {awards.map(([place, event, body, date]) => (
            <div className="award-row" data-rank={place} key={event}>
              <strong>{place}</strong>
              <span>{event}</span>
              <span>{body}</span>
              <small>{date}</small>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact">
        <div className="footer-top">
          <p>
            <span>[07]</span> Open a channel
          </p>
          <span>Jakarta, ID / UTC+7</span>
        </div>
        <h2>
          LET’S TEST
          <br />
          THE <em>ASSUMPTION.</em>
        </h2>
        <div className="footer-actions">
          <button type="button" onClick={copyEmail}>
            {copied ? "Email copied" : "kenzienabeel@hotmail.com"}
            <Arrow />
          </button>
          <div className="socials">
            <a href="https://www.linkedin.com/in/kenzie-nabeel/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/g3ngi" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Kenzie Nabeel Rivanda · gengi</span>
          <a href="#landing">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
