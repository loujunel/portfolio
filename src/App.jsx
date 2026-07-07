import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  CalendarCheck,
  CheckCircle2,
  Database,
  Github,
  GraduationCap,
  Instagram,
  LayoutDashboard,
  Linkedin,
  Mail,
  MessageCircle,
  Moon,
  Scale,
  ShieldCheck,
  Sparkles,
  Sun,
  Users,
} from "lucide-react";

const socials = [
  { label: "Email", value: "loujunel@gmail.com", href: "mailto:loujunel@gmail.com", icon: Mail },
  { label: "LinkedIn", value: "linkedin.com/in/loujunel", href: "https://www.linkedin.com/in/loujunel", icon: Linkedin },
  { label: "GitHub", value: "github.com/loujunel", href: "https://github.com/loujunel", icon: Github },
  { label: "Facebook", value: "facebook.com/loujunel", href: "https://www.facebook.com/loujunel", icon: MessageCircle },
  { label: "Instagram", value: "instagram.com/loujunel", href: "https://www.instagram.com/loujunel", icon: Instagram },
];

const metrics = [
  { label: "Customer relationship management contacts/users organized", value: "300+", tone: "green" },
  { label: "Labor concerns supported", value: "100+", tone: "gray" },
  { label: "Learning and compliance sessions", value: "40+", tone: "green" },
  { label: "Career range across sectors", value: "10+ yrs", tone: "gray" },
];

const capabilities = [
  { label: "Executive communication", icon: BriefcaseBusiness },
  { label: "Artificial intelligence-assisted drafting and summaries", icon: Bot },
  { label: "HubSpot, Airtable, and customer relationship management tracking", icon: Database },
  { label: "Calendar, email, and follow-through systems", icon: CalendarCheck },
  { label: "Labor compliance and case documentation", icon: Scale },
  { label: "Public-sector programs and reporting", icon: ShieldCheck },
];

const experienceLanes = [
  {
    lane: "Executive operations",
    role: "Executive Assistant",
    org: "ORAZ Philippines, Inc. / Athena Labs LLC",
    summary:
      "Executive support, client communication, customer relationship management upkeep, scheduling, campaign support, and structured follow-through.",
    details: [
      "Managed high-volume communication workflows across clients, investors, internal teams, and cross-functional stakeholders.",
      "Maintained HubSpot, Airtable, and organized trackers for 300+ contacts/users.",
      "Used artificial intelligence-assisted drafting, summarization, and workflow tools to improve response quality and consistency.",
    ],
    icon: BriefcaseBusiness,
  },
  {
    lane: "Human resources and labor compliance",
    role: "Labor and Employment Officer III",
    org: "Department of Labor and Employment",
    summary:
      "Labor standards guidance, workplace concerns, mediation support, compliance assessments, and official documentation.",
    details: [
      "Handled employee complaints, workplace disputes, compliance inquiries, case records, reports, and stakeholder correspondence.",
      "Supported compliance and occupational safety-related assessments for 300+ establishments.",
      "Resolved 100+ labor-related concerns and delivered 40+ education or guidance sessions.",
    ],
    icon: Scale,
  },
  {
    lane: "Programs and finance administration",
    role: "Project Development Officer, Senior Bookkeeper, Admin roles",
    org: "Department of Education",
    summary:
      "Program rollout, career guidance, payroll support, financial reports, event logistics, and quality management system documentation exposure.",
    details: [
      "Coordinated programs, monitoring, reporting, stakeholder communication, and development sessions.",
      "Managed payroll, reconciliations, financial documentation, and reportorial submissions.",
      "Supported internal audit and quality documentation practices in education-sector operations.",
    ],
    icon: ShieldCheck,
  },
  {
    lane: "Technical and customer operations",
    role: "Technical Support Representative / Business Process Associate",
    org: "Private-sector support roles",
    summary:
      "Technical troubleshooting, account processing, insurance-policy requests, records accuracy, and service workflow discipline.",
    details: [
      "Provided phone-based and remote technical support for laptop hardware and software concerns.",
      "Processed customer and insurance-policy requests while maintaining accurate records.",
      "Built a practical service mindset through high-volume voice and non-voice operations.",
    ],
    icon: Users,
  },
];

const skills = [
  "Executive support",
  "Artificial intelligence-assisted writing",
  "Customer relationship management tracking",
  "Stakeholder coordination",
  "Labor compliance",
  "Case documentation",
  "Payroll support",
  "Quality management system exposure",
  "Technical support",
  "Web learning",
];

const education = [
  "Bachelor of Science in Business Administration, Human Resource Development Management, Cavite West Point College",
  "Bachelor of Science in Information Technology studies, Cavite State University, Indang",
  "Web Development coursework, Refocus Digital Academy",
];

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  return window.localStorage.getItem("portfolio-theme") || "light";
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [activeLane, setActiveLane] = useState(0);
  const activeExperience = experienceLanes[activeLane];
  const ActiveIcon = activeExperience.icon;

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const nextTheme = theme === "light" ? "dark" : "light";
  const ThemeIcon = theme === "light" ? Moon : Sun;

  return (
    <div className="dashboard-shell">
      <aside className="sidebar" aria-label="Portfolio navigation">
        <a className="brand" href="#overview" aria-label="Lou-Junel portfolio home">
          <span className="brand-mark">LV</span>
          <span>Lou-Junel</span>
        </a>
        <nav>
          <a href="#overview"><LayoutDashboard size={17} /> Overview</a>
          <a href="#capabilities"><Sparkles size={17} /> Capabilities</a>
          <a href="#experience"><BriefcaseBusiness size={17} /> Experience</a>
          <a href="#contact"><Mail size={17} /> Contact</a>
        </nav>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-topbar">
          <div>
            <p>Portfolio dashboard</p>
            <h1>Versatile professional across executive support, human resources compliance, operations, finance administration, and technical workflows.</h1>
          </div>
          <button className="theme-toggle" type="button" onClick={() => setTheme(nextTheme)} aria-label={`Switch to ${nextTheme} mode`}>
            <ThemeIcon size={18} />
            <span>{nextTheme === "dark" ? "Dark" : "Light"} mode</span>
          </button>
        </header>

        <section className="dashboard-grid" id="overview">
          <article className="profile-card dashboard-card">
            <div className="avatar" aria-hidden="true">LV</div>
            <div>
              <h2>Lou-Junel T. Velasco</h2>
              <p className="lead">
                I connect people, process, records, and technology so work becomes easier to track and complete. My experience moves across executive support, labor compliance, public-sector programs, finance administration, technical support, and customer relationship management/data operations.
              </p>
            </div>
            <div className="profile-actions">
              {socials.slice(0, 3).map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
                  <Icon size={18} />
                  <span>{label}</span>
                  <ArrowUpRight size={15} />
                </a>
              ))}
            </div>
          </article>

          <article className="dashboard-card metric-card">
            <p className="eyebrow">Range indicators</p>
            <div className="metric-grid">
              {metrics.map((metric) => (
                <div className={`metric metric-${metric.tone}`} key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="panel-row" id="capabilities">
          <article className="dashboard-card stack-card">
            <div className="section-title">
              <p className="eyebrow">Capabilities</p>
              <h2>Practical strengths that travel across roles.</h2>
            </div>
            <div className="stack-list">
              {capabilities.map(({ label, icon: Icon }) => (
                <div key={label}>
                  <Icon size={20} />
                  <span>{label}</span>
                  <CheckCircle2 size={18} />
                </div>
              ))}
            </div>
          </article>

          <article className="dashboard-card skills-card">
            <div className="section-title">
              <p className="eyebrow">Working range</p>
              <h2>Structured for compliance, adaptable in fast-moving teams, and steady across shifting priorities.</h2>
            </div>
            <div className="skill-cloud">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        </section>

        <section className="experience-board" id="experience">
          <div className="section-title wide">
            <p className="eyebrow">Experience map</p>
            <h2>Experience across operations, compliance, programs, finance administration, and technical support.</h2>
          </div>
          <div className="experience-tabs" role="tablist" aria-label="Experience categories">
            {experienceLanes.map(({ lane, icon: Icon }, index) => (
              <button
                className={index === activeLane ? "active" : ""}
                key={lane}
                type="button"
                role="tab"
                aria-selected={index === activeLane}
                aria-controls="experience-panel"
                onClick={() => setActiveLane(index)}
              >
                <Icon size={18} />
                <span>{lane}</span>
              </button>
            ))}
          </div>
          <article className="experience-popout" id="experience-panel" role="tabpanel" key={activeExperience.lane}>
            <div className="lane-icon"><ActiveIcon size={22} /></div>
            <div>
              <span>{activeExperience.lane}</span>
              <h3>{activeExperience.role}</h3>
              <p className="org">{activeExperience.org}</p>
              <p>{activeExperience.summary}</p>
              <ul>
                {activeExperience.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </article>
        </section>

        <section className="lower-grid">
          <article className="dashboard-card education-card">
            <div className="section-title">
              <p className="eyebrow">Education</p>
              <h2>Business, IT coursework, and web learning.</h2>
            </div>
            <div className="education-list">
              {education.map((item) => (
                <p key={item}>
                  <GraduationCap size={19} />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </article>

          <article className="dashboard-card contact-card" id="contact">
            <div className="section-title">
              <p className="eyebrow">Contact</p>
              <h2>Find me online.</h2>
            </div>
            <div className="social-grid">
              {socials.map(({ label, value, href, icon: Icon }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
                  <Icon size={19} />
                  <span>
                    <strong>{label}</strong>
                    {value}
                  </span>
                  <ArrowUpRight size={16} />
                </a>
              ))}
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
