import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  Bot,
  BriefcaseBusiness,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  Database,
  FileText,
  Github,
  GraduationCap,
  Headphones,
  Instagram,
  LayoutDashboard,
  Linkedin,
  Mail,
  MessageCircle,
  Moon,
  PanelsTopLeft,
  Scale,
  ShieldCheck,
  Sparkles,
  Sun,
  Users,
  Workflow,
} from "lucide-react";

const socials = [
  { label: "Email", value: "loujunel@gmail.com", href: "mailto:loujunel@gmail.com", icon: Mail },
  { label: "LinkedIn", value: "linkedin.com/in/loujunel", href: "https://www.linkedin.com/in/loujunel", icon: Linkedin },
  { label: "GitHub", value: "github.com/loujunel", href: "https://github.com/loujunel", icon: Github },
  { label: "Facebook", value: "facebook.com/loujunel", href: "https://www.facebook.com/loujunel", icon: MessageCircle },
  { label: "Instagram", value: "instagram.com/loujunel", href: "https://www.instagram.com/loujunel", icon: Instagram },
];

const proofTiles = [
  { value: "10,000+", label: "emails handled yearly across executive workflows", icon: Mail },
  { value: "3,000+", label: "leads enriched, segmented, scraped, or outreached", icon: Database },
  { value: "300+", label: "contacts, users, schools, or establishments coordinated", icon: Users },
  { value: "95 pct", label: "calendar-conflict reduction through cleaner scheduling", icon: CalendarCheck },
  { value: "100+", label: "labor concerns, complaints, or cases supported", icon: Scale },
  { value: "40+", label: "learning, compliance, and career-guidance sessions", icon: ClipboardCheck },
];

const capabilityCards = [
  {
    title: "Executive Operations",
    icon: BriefcaseBusiness,
    copy: "Inbox, calendar, meeting, travel, stakeholder, and client follow-through handled with structure and discretion.",
  },
  {
    title: "AI-Enabled Workflows",
    icon: Bot,
    copy: "Uses ChatGPT, Claude, Gemini, Python scripts, Notion, Base44, and workflow tools to turn scattered inputs into usable systems.",
  },
  {
    title: "Compliance And People Work",
    icon: ShieldCheck,
    copy: "Labor standards, mediation, case records, due process guidance, training coordination, and sensitive documentation.",
  },
  {
    title: "Operations Data",
    icon: PanelsTopLeft,
    copy: "Customer relationship management upkeep, lead generation, dashboards, Airtable trackers, reporting, and documentation quality.",
  },
];

const impactNotes = [
  "Builds order around high-volume communication without losing the human context.",
  "Moves comfortably between government, private-sector, customer-facing, finance, and digital workflows.",
  "Can translate requirements into trackers, dashboards, scripts, presentations, and clear next actions.",
  "Keeps confidential records, compliance details, and stakeholder expectations organized under pressure.",
];

const experienceLanes = [
  {
    lane: "Executive And AI Operations",
    role: "Executive Assistant",
    org: "ORAZ Philippines, Inc. / Athena Labs LLC",
    date: "2024-Present",
    summary:
      "Executive support across inboxes, calendars, client communication, customer relationship management, dashboards, lead generation, and AI-assisted productivity.",
    highlights: [
      "Handled high-volume email workflows with structured triage, prioritization, and AI-assisted drafting.",
      "Coordinated 30+ meetings monthly while improving scheduling accuracy and protecting leadership time.",
      "Built Notion and Base44 dashboards, Python lead-scraping scripts, and organized trackers for client-specific needs.",
      "Supported 3,000+ leads through scraping, enrichment, segmentation, outreach, and follow-up using Klenty and HubSpot.",
      "Responded to 1,000+ Intercom chat inquiries with timely, accurate, and professional customer communication.",
    ],
    tools: ["HubSpot", "Klenty", "Airtable", "Notion", "Base44", "Python", "Intercom", "Slack", "Fireflies"],
    icon: Workflow,
  },
  {
    lane: "HR Compliance And Labor Relations",
    role: "Labor and Employment Officer III",
    org: "Department of Labor and Employment, Cavite Provincial Office",
    date: "September 2019-August 2024",
    summary:
      "Labor standards guidance, workplace concerns, mediation, compliance assessments, occupational safety context, official records, and public-facing service delivery.",
    highlights: [
      "Handled employee complaints, workplace disputes, termination issues, disciplinary concerns, and employer-employee relations.",
      "Facilitated conciliation and mediation conferences for practical and compliant resolutions.",
      "Supported compliance and occupational safety-related assessments for 300+ establishments.",
      "Maintained case records, reports, correspondence, decisions, and sensitive documentation with regulatory consistency.",
      "Delivered labor education, career guidance, and compliance sessions for employers, workers, students, and institutional stakeholders.",
    ],
    tools: ["Labor standards", "Conciliation", "Mediation", "Case records", "Compliance", "Training"],
    icon: Scale,
  },
  {
    lane: "Programs, Finance, And Public Service",
    role: "Project Development Officer I, Senior Bookkeeper, Administrative Assistant",
    org: "Department of Education, Division of Cavite Province",
    date: "August 2013-September 2019",
    summary:
      "Program coordination, career guidance, school stakeholder work, monitoring and evaluation, payroll, financial reports, and audit-ready administration.",
    highlights: [
      "Coordinated programs, reporting, school activities, leadership initiatives, and stakeholder communication across 300+ schools.",
      "Organized trainings, events, schedules, logistics, records, presentations, and evaluation materials.",
      "Managed payroll processing, reconciliations, reportorial submissions, and financial records for 20+ schools.",
      "Supported ISO quality management documentation, internal audit activities, and process discipline.",
      "Provided administrative support across correspondence, records, schedules, filing, data entry, layouts, and office coordination.",
    ],
    tools: ["Payroll", "Financial reports", "Monitoring", "ISO/QMS", "Presentations", "Records"],
    icon: FileText,
  },
  {
    lane: "Customer, Technical, And Digital Support",
    role: "Appointment Setter, Technical Support Representative, Business Process Associate",
    org: "BrightMinds, Stream Global Services, Integra, Teleperformance, Teletech",
    date: "2008-2022",
    summary:
      "Customer support, technical troubleshooting, travel booking, insurance-policy processing, social media appointment setting, and records accuracy.",
    highlights: [
      "Provided laptop hardware and software troubleshooting through phone-based and remote support.",
      "Processed insurance-policy requests, beneficiary changes, disbursements, surrenders, and regulated customer records.",
      "Supported flight, hotel, and car-rental booking workflows in a high-volume travel support environment.",
      "Handled social media appointment setting, prospect engagement, follow-up, and basic digital-marketing support.",
      "Built a practical service foundation across voice, non-voice, technical, customer, and back-office operations.",
    ],
    tools: ["Technical support", "Customer service", "Data processing", "Travel support", "Social media", "Records"],
    icon: Headphones,
  },
];

const toolGroups = [
  {
    label: "Executive And Operations",
    tools: ["Google Workspace", "Microsoft Office", "Slack", "Zoom", "Google Meet", "Asana", "Fireflies", "Loom"],
  },
  {
    label: "CRM And Data",
    tools: ["HubSpot", "Klenty", "Airtable", "Lead enrichment", "Campaign tracking", "Documentation trackers"],
  },
  {
    label: "AI And Web",
    tools: ["ChatGPT", "Claude", "Gemini", "Python scripts", "HTML", "CSS", "JavaScript", "React basics"],
  },
  {
    label: "Creative And Dashboarding",
    tools: ["Notion", "Base44", "Bolt", "Canva", "Clipchamp", "PowerPoint", "Content calendars"],
  },
];

const education = [
  {
    title: "Bachelor of Science in Business Administration",
    detail: "Major in Human Resource Development Management, Cavite West Point College, graduated March 2014",
  },
  {
    title: "Bachelor of Science in Information Technology",
    detail: "Attended Cavite State University, Indang, 2006-2008",
  },
  {
    title: "Computer Hardware Servicing",
    detail: "Cavite West Point College, 2009-2010",
  },
  {
    title: "Web Development Coursework",
    detail: "Refocus Digital Academy",
  },
];

const credentials = [
  "Career Service Professional Eligibility, Civil Service Commission",
  "40-hour Basic Occupational Safety and Health Training for Safety Officers",
  "Level 1A and Level 1B Training for Labor Inspectors",
  "Capacity Building for SENA Desk Officers",
  "ISO 9001:2015 Quality Management System and internal audit training",
  "National training for career guidance advocates and teacher-advisers",
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
          <span>
            <strong>Lou-Junel</strong>
            <small>Portfolio</small>
          </span>
        </a>
        <nav>
          <a href="#overview"><LayoutDashboard size={17} /> Overview</a>
          <a href="#capabilities"><Sparkles size={17} /> Capabilities</a>
          <a href="#experience"><BriefcaseBusiness size={17} /> Experience</a>
          <a href="#credentials"><GraduationCap size={17} /> Credentials</a>
          <a href="#contact"><Mail size={17} /> Contact</a>
        </nav>
        <div className="sidebar-note">
          <BadgeCheck size={17} />
          <span>Executive support, compliance, operations, finance, customer, and digital workflows.</span>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-topbar">
          <div>
            <p>Portfolio dashboard</p>
            <h1>Versatile operator for people, process, records, and AI-enabled work.</h1>
          </div>
          <button className="theme-toggle" type="button" onClick={() => setTheme(nextTheme)} aria-label={`Switch to ${nextTheme} mode`}>
            <ThemeIcon size={18} />
            <span>{nextTheme === "dark" ? "Dark" : "Light"} mode</span>
          </button>
        </header>

        <section className="hero-grid" id="overview">
          <article className="profile-card dashboard-card">
            <div className="profile-topline">
              <div className="avatar" aria-hidden="true">LV</div>
              <div>
                <p className="eyebrow">Lou-Junel T. Velasco</p>
                <h2>Executive support discipline with public-sector rigor and digital adaptability.</h2>
              </div>
            </div>
            <p className="lead">
              I bring together executive operations, human resources compliance, government documentation, finance administration, customer support, technical troubleshooting, and practical AI workflows. The common thread is simple: I make complicated work easier to track, explain, and finish.
            </p>
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

          <article className="dashboard-card proof-card">
            <div className="section-title">
              <p className="eyebrow">Proof points</p>
              <h2>Signals from the work.</h2>
            </div>
            <div className="proof-grid">
              {proofTiles.map(({ value, label, icon: Icon }) => (
                <div className="proof-tile" key={`${value}-${label}`}>
                  <Icon size={19} />
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="capability-board" id="capabilities">
          <div className="section-title wide">
            <p className="eyebrow">Capabilities</p>
            <h2>A professional range that stays organized when the work crosses functions.</h2>
          </div>
          <div className="capability-grid">
            {capabilityCards.map(({ title, icon: Icon, copy }) => (
              <article className="capability-card" key={title}>
                <Icon size={22} />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="impact-strip">
            {impactNotes.map((note) => (
              <div key={note}>
                <CheckCircle2 size={18} />
                <span>{note}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="experience-board" id="experience">
          <div className="section-title wide">
            <p className="eyebrow">Experience map</p>
            <h2>Four lanes, one working style: clear communication, careful records, practical systems, and steady follow-through.</h2>
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
            <div className="lane-icon"><ActiveIcon size={23} /></div>
            <div className="experience-copy">
              <span>{activeExperience.lane}</span>
              <h3>{activeExperience.role}</h3>
              <p className="org">{activeExperience.org}</p>
              <p className="date">{activeExperience.date}</p>
              <p>{activeExperience.summary}</p>
              <ul>
                {activeExperience.highlights.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <div className="tool-row">
                {activeExperience.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </div>
          </article>
        </section>

        <section className="tools-board">
          <div className="section-title wide">
            <p className="eyebrow">Tools and platforms</p>
            <h2>Hands-on tools used across executive, operations, data, communication, creative, and digital work.</h2>
          </div>
          <div className="tool-groups">
            {toolGroups.map((group) => (
              <article className="tool-group" key={group.label}>
                <h3>{group.label}</h3>
                <div>
                  {group.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="lower-grid" id="credentials">
          <article className="dashboard-card education-card">
            <div className="section-title">
              <p className="eyebrow">Education</p>
              <h2>Business, information technology, hardware, and web learning.</h2>
            </div>
            <div className="education-list">
              {education.map((item) => (
                <div key={item.title}>
                  <GraduationCap size={19} />
                  <span>
                    <strong>{item.title}</strong>
                    {item.detail}
                  </span>
                </div>
              ))}
            </div>
          </article>

          <article className="dashboard-card credential-card">
            <div className="section-title">
              <p className="eyebrow">Training</p>
              <h2>Compliance, safety, quality, and career-guidance credentials.</h2>
            </div>
            <div className="credential-list">
              {credentials.map((credential) => (
                <p key={credential}>
                  <BadgeCheck size={18} />
                  <span>{credential}</span>
                </p>
              ))}
            </div>
          </article>
        </section>

        <section className="contact-section" id="contact">
          <article className="contact-copy">
            <p className="eyebrow">Contact</p>
            <h2>Open to thoughtful work across operations, support, compliance, and digital productivity.</h2>
            <p>
              Best reached through email, LinkedIn, or GitHub. Public social profiles are included for visibility and professional continuity.
            </p>
          </article>
          <article className="dashboard-card contact-card">
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
