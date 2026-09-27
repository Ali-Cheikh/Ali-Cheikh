(function () {
  "use strict";

  function isMobileViewport() {
    return window.innerWidth < 700;
  }

  function makeIconDataUrl(svgBody) {
    var svg =
      "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'>" + svgBody + "</svg>";
    return "data:image/svg+xml," + encodeURIComponent(svg);
  }

  var prefersReducedMotion =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var scapeEmojiImages = {
    selector: makeIconDataUrl(
      "<defs><linearGradient id='g' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='#ff8a4c'/><stop offset='50%' stop-color='#496bff'/><stop offset='100%' stop-color='#7a3cff'/></linearGradient></defs><rect x='14' y='14' width='92' height='92' rx='28' fill='rgba(10,12,22,0.92)' stroke='url(#g)' stroke-width='5'/><text x='50%' y='50%' text-anchor='middle' dominant-baseline='middle' font-size='44' font-weight='700' fill='#eef1ff' font-family='Space Grotesk, Inter, sans-serif'>&lt;&gt;</text>"
    ),
    engineer: makeIconDataUrl(
      "<defs><linearGradient id='g2' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='#ff5b57'/><stop offset='100%' stop-color='#496bff'/></linearGradient></defs><circle cx='60' cy='60' r='42' fill='rgba(10,12,22,0.90)' stroke='url(#g2)' stroke-width='5'/><path d='M38 58h12l-6 10h12' fill='none' stroke='#ff8a4c' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'/><path d='M84 58H72l6 10H66' fill='none' stroke='#7a3cff' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'/><circle cx='60' cy='58' r='5' fill='#eef1ff'/><path d='M52 74h16' stroke='#eef1ff' stroke-width='5' stroke-linecap='round'/>"
    ),
    systems: makeIconDataUrl(
      "<defs><linearGradient id='g4' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='#496bff'/><stop offset='100%' stop-color='#7a3cff'/></linearGradient></defs><circle cx='60' cy='60' r='42' fill='rgba(10,12,22,0.90)' stroke='url(#g4)' stroke-width='5'/><path d='M60 38v44M38 60h44M45 45l30 30M75 45l-30 30' stroke='#eef1ff' stroke-width='4' stroke-linecap='round'/><circle cx='60' cy='60' r='10' fill='none' stroke='#ff8a4c' stroke-width='5'/>"
    ),
    general: makeIconDataUrl(
      "<defs><linearGradient id='g5' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='#ff8a4c'/><stop offset='100%' stop-color='#496bff'/></linearGradient></defs><rect x='34' y='24' width='52' height='72' rx='8' fill='rgba(10,12,22,0.92)' stroke='url(#g5)' stroke-width='5'/><path d='M46 44h28M46 56h28M46 68h18' stroke='#eef1ff' stroke-width='5' stroke-linecap='round'/>"
    )
  };

  window.scapeEmojiImages = scapeEmojiImages;

  window.ScapeConfig = {
    type: "image",
    imageUrl: scapeEmojiImages.selector,
    count: prefersReducedMotion ? 0 : isMobileViewport() ? 10 : 16,
    size: isMobileViewport() ? 50 : 70,
    spacing: 180,
    minDistance: isMobileViewport() ? 105 : 145,
    animationDuration: prefersReducedMotion ? "2s" : "3.8s",
    floatDistance: prefersReducedMotion ? 5 : 14,
    rotationRange: 10,
    opacity: 0.26
  };

  /* ============================================================
     PROFILE DATA — recruiter-first positioning
     Every block is written to answer: "why is this person the
     best candidate for the role?" Proof before tools.
     ============================================================ */

  var profiles = {
    engineer: {
      role: "Full-Stack Developer — ships production systems end to end",
      intro:
        "I build revenue-generating web apps, AI tools, and internal systems that cut operational workload by 80%+ and remove hours of weekly manual work. Selected as top 15 of 1,500 applicants for a national accelerator; co-founded an AI learning platform now serving 100+ active users.",
      profile:
        "Product-minded engineer who owns outcomes, not tickets. I take a feature from architecture to deployment — frontend, backend, database, and the automation glue in between — and I ship systems that companies actually run on. Comfortable joining as the first engineer on a product or slotting into an existing team and picking up ownership from day one.",
      focus: [
        "Ship production web apps end to end — architecture, backend, frontend, deploy.",
        "Replace manual processes with automation that removes 6+ hours of weekly work per team.",
        "Architect AI-powered platforms: video delivery, quizzes, agentic tutoring, CMS, progress tracking.",
        "Improve existing products: performance, SEO, and integration wins that move real metrics."
      ],
      skills: [
        "Frontend: React, Next.js, TypeScript, JavaScript (ES6+), TailwindCSS, HTML5, CSS3/Sass.",
        "Backend: Node.js, Express, REST APIs, PHP.",
        "Database: MySQL, Supabase, Firebase, Google Sheets as lightweight DB.",
        "AI & LLM: OpenAI & Anthropic APIs, Claude in Excel, OpenRouter, LLM agents, prompt engineering, agent architectures, OpenClaw.",
        "Automation: Google Apps Script, Google Sheets automation, workflow & reporting automation.",
        "DevOps & Tools: Git, GitHub, Vercel, Cloudflare, CI/CD basics.",
        "Also strong in: UI/UX design, SEO, web performance, networking/security basics, ethical hacking foundations."
      ],
      experience: [
        "IT & Recruitment Systems Administrator — Tunisia Oil & Gas Services: Built an internal management system for workforce job applications and interview scheduling; managed job postings, LinkedIn presence, and recruitment communications; automated project report generation, eliminating 6+ hours of weekly manual work.",
        "Technical Co-Founder — BlooLab, Live The Residency - Delta Programme (Batch 2): Built an AI-powered kids learning platform selected among 15 finalists from 1,500 applicants; architected video delivery, quizzes, AI tutor, CMS, and progress tracking. Scaled to 100+ active users.",
        "Full Stack Developer — LingolAnd / Lingol: Designed platform architecture and MVP for an edtech product; built dashboards and student enrollment flows; integrated Google APIs and shipped SEO and performance improvements.",
        "Software Developer Intern — BinetCom: Built a public website and internal invoicing system; developed custom dashboards and REST APIs that cut internal operation time by 40%.",
        "Backend Developer — i-startup - Co-Work Solutions: Migrated co-working space management off spreadsheets onto a CMS dashboard; automated recurring business workflows with Google Apps Script; built email marketing and client management tools."
      ],
      impact: [
        "Top 15 of 1,500 applicants — Live The Residency Delta national accelerator.",
        "Co-founded BlooLab, an AI learning platform serving 100+ active Tunisian students.",
        "Built Warehouse OCR System (Energen) that cut manual data-entry workload by 80%.",
        "Shipped production web apps, AI tools, and internal systems adopted by real teams."
      ],
      projects: [
        "BlooLab AI Learning Platform — AI-powered learning platform for kids with agent-based tutoring, CMS, and progress tracking. 100+ active users.",
        "Translation OCR + LLM Debate System — Experimental OCR pipeline with a dual-LLM debate mechanism; explores AI-collaboration approaches to translation.",
        "Warehouse OCR System (Energen) — Search-and-register OCR system built with Tesseract.js and Apps Script; cut manual workload by 80%.",
        "tccards.tn — NFC Business Cards — Digital business card platform reducing paper waste.",
        "Workforce Management System — Internal system for job applications, interview scheduling, and job-posting management.",
        "Also shipped: Admin/CRM dashboard with auth and role-based access; habit-tracking app with calendar UI and notifications; API integration project (AI gateway, WhatsApp/Telegram/Discord bot, maps); scraper/data pipeline; e-commerce storefront with cart, checkout, and inventory sync."
      ],
      resumeFile: "Ali_Cheikh_CV_FullStack_Dev.pdf",
      email: "contact@ali-cheikh.com",
      phoneDisplay: "+216 90 725 434",
      phoneHref: "+21690725434",
      metaTitle: "Ali Cheikh | Full-Stack Developer — Ships Production Systems End to End",
      metaDescription:
        "Full-stack developer who ships production web apps, AI tools, and internal systems. Top 15 of 1,500 applicants. 80%+ workload reductions delivered. Resume available."
    },

    systems: {
      role: "Systems Administrator & Business Automation Specialist",
      intro:
        "I build the internal tools I then administer — HR-tech, reporting automation, and workflow systems that eliminated 6+ hours of manual work per week at my last role. Selected as top 15 of 1,500 applicants for a national accelerator by co-founding an AI-powered learning platform.",
      profile:
        "Systems administrator and technical operator with a developer's background. I don't just keep systems running — I make them faster, quieter, and cheaper by removing the manual work that slows teams down. Comfortable as the sole IT/ops hire or as the second pair of hands on a growing team.",
      focus: [
        "Own IT administration, user/access management, technical support, and security hygiene.",
        "Replace manual reporting and data entry with automation — hours back every week.",
        "Run HR-tech and recruitment systems: applicant tracking, interview scheduling, job posting, LinkedIn.",
        "Build the internal tools the team actually needs, not just what it asks for."
      ],
      skills: [
        "Systems & IT Admin: Internal tooling, user/access management, workflow systems, technical support.",
        "HR-Tech & Recruitment: Applicant tracking systems, interview scheduling, job posting & LinkedIn management.",
        "Automation & Reporting: Google Apps Script, Google Sheets automation, Claude in Excel, automated report generation, dashboards.",
        "Networking & Security: Core networking fundamentals, ethical hacking foundations, OS & security basics.",
        "Development: React, Next.js, Node.js, Express, PHP, REST APIs.",
        "Database: MySQL, Supabase, Firebase, Google Sheets.",
        "AI Tooling: OpenAI & Anthropic APIs, prompt engineering, LLM agents.",
        "Tools: Git, GitHub, Vercel, Cloudflare."
      ],
      experience: [
        "IT & Recruitment Systems Administrator — Tunisia Oil & Gas Services: Designed and administered an internal management system for workforce job applications and interview scheduling; owned job postings, LinkedIn presence, and recruitment media; served as general IT administrator and automated project report generation — eliminating 6+ hours of manual reporting per week.",
        "Technical Co-Founder — Bloolabb, Live The Residency - Delta Programme (Batch 2): Co-founded and operated an AI-powered kids learning platform selected among 15 finalists from 1,500 applicants. Owned platform operations, content management, progress tracking, and internal tooling.",
        "Backend Developer & Workflow Automation — i-startup - Co-Work Solutions: Migrated co-working space management off spreadsheets onto a CMS dashboard; automated recurring business workflows with Google Apps Script; built email marketing and client management tools.",
        "Software Developer Intern — BinetCom: Built internal invoicing system and admin dashboards; supported internal operations with custom REST APIs that cut operation time by 40%.",
        "Full Stack Developer — Lingoland / Lingoville: Built dashboards and enrollment/student-management flows for an edtech platform."
      ],
      impact: [
        "Top 15 of 1,500 applicants — Live The Residency Delta national accelerator.",
        "Eliminated 6+ hours of manual reporting per week by automating project reports.",
        "Reduced manual warehouse workload by 80% with a custom OCR system.",
        "Built internal tools for HR workflows, inventory, helpdesk, access/permissions, and Google Workspace automation."
      ],
      projects: [
        "Workforce Management System (TOGS) — Application, interview, and job-posting management system for hand-force recruitment; replaced a manual paper-based process.",
        "Warehouse OCR System (Energen) — Search-and-register OCR system that cut manual workload by 80%.",
        "Bloolabb AI Learning Platform — AI-powered learning platform for kids with internal content and progress-tracking tools.",
        "tccards.tn — NFC Business Cards — Digital business card platform and sustainable networking solution.",
        "Also shipped: HR workflow tool (checklists, document collection, approvals); inventory tracking system with Sheets + Apps Script + ESP32; Google Workspace automation replacing manual data entry; ticketing/helpdesk system for internal IT support; access/permissions management tool."
      ],
      resumeFile: "Ali_Cheikh_CV_Systems_Admin.pdf",
      email: "contact@ali-cheikh.com",
      phoneDisplay: "+216 90 725 434",
      phoneHref: "+21690725434",
      metaTitle: "Ali Cheikh | Systems Administrator & Business Automation Specialist",
      metaDescription:
        "Systems administrator and automation specialist who removes manual work and builds internal tools. 6+ hrs/week eliminated. Top 15 of 1,500 applicants. Resume available."
    },

    general: {
      role: "Business Logistics Strategist & Systems Administrator",
      intro:
        "I turn messy business operations into systems that scale — HR-tech, reporting automation, and internal tooling that delivered 80%+ workload reduction and measurable ROI. Developer background, business operator mindset.",
      profile:
        "Strategic operator who bridges business and engineering. I look at a business process, find where it's bleeding time and money, and build the system that fixes it — then I run it. Track record of shipping changes that leadership can point to on a dashboard.",
      focus: [
        "Turn complex business challenges into elegant, scalable internal systems.",
        "Design and administer workforce, recruitment, and interview scheduling systems.",
        "Automate project reporting and recurring workflows so teams get hours back weekly.",
        "Own the ROI conversation — every system I ship maps to a measurable business outcome."
      ],
      skills: [
        "Systems & Admin: IT administration, user management, workflow systems, technical support, security, Microsoft 365.",
        "Automation: Google Apps Script, Sheets automation, report generation, workflow optimization, Power Automate.",
        "Database: MySQL, PostgreSQL, Supabase, Cloudinary.",
        "HR-Tech: Applicant tracking, interview scheduling, job posting, LinkedIn integration.",
        "Development: React, Node.js, TypeScript, Python, REST APIs, GraphQL, Next.js, Express.js, Tesseract.js.",
        "Tools: Git, GitHub, Vercel, Cloudflare, AI, CI/CD."
      ],
      experience: [
        "IT & Recruitment Systems Administrator — Tunisia Oil & Gas Services: Designed and administered a workforce management system for job applications and interview scheduling; managed job postings, LinkedIn presence, candidate communications, and hiring workflow optimization; automated project reporting, eliminating 6+ hours of weekly manual work.",
        "Technical Co-Founder — Bloolabb, Live The Residency - Delta Programme: Co-founded an AI-powered learning platform selected among 15 finalists from 1,500 applicants; scaled to 100+ active users. Owned platform operations, content management infrastructure, progress tracking, and administrative tooling.",
        "Backend Developer & Workflow Automation — i-startup - Co-Work Solutions: Migrated co-working space operations from spreadsheets to a centralized CMS dashboard; automated recurring business workflows with Google Apps Script; built 4 email marketing and client management systems.",
        "Software Developer Intern — BinetCom: Built an internal invoicing system and admin dashboards; implemented custom APIs that made internal operations 40% faster."
      ],
      impact: [
        "Delivered 80%+ workload reduction and measurable ROI across multiple internal systems.",
        "Eliminated 6+ hours of weekly manual report generation at Tunisia Oil & Gas Services.",
        "Scaled BlooLabb to 100+ active users after selection from 1,500 applicants.",
        "Cut internal operations time by 40% at BinetCom with custom APIs.",
        "Reduced manual data-entry workload by 80% with the Warehouse OCR System."
      ],
      projects: [
        "Workforce Management System (TOGS) — End-to-end HR system for job applications, interview scheduling, and recruitment management; replaced a manual paper-based process.",
        "Warehouse OCR System (Energen) — Label scanning and inventory registration using Tesseract.js and Google Apps Script; 80% reduction in manual data-entry workload."
      ],
      resumeFile: "Ali_Cheikh_Resume.pdf",
      email: "contact@ali-cheikh.com",
      phoneDisplay: "+216 90 725 434",
      phoneHref: "+21690725434",
      metaTitle: "Ali Cheikh | Business Logistics Strategist & Systems Administrator",
      metaDescription:
        "Business logistics strategist and systems administrator with developer expertise. 80%+ workload reductions delivered, 6+ hrs/week eliminated. Resume available."
    }
  };

  var selectorScreen = document.getElementById("selectorScreen");
  var contentScreen = document.getElementById("contentScreen");
  var backButton = document.getElementById("backButton");
  var roleText = document.getElementById("roleText");
  var introText = document.getElementById("introText");
  var profileText = document.getElementById("profileText");
  var focusList = document.getElementById("focusList");
  var skillsList = document.getElementById("skillsList");
  var experienceList = document.getElementById("experienceList");
  var impactList = document.getElementById("impactList");
  var projectsList = document.getElementById("projectsList");
  var openResume = document.getElementById("openResume");
  var downloadResume = document.getElementById("downloadResume");
  var emailLink = document.getElementById("emailLink");
  var phoneLink = document.getElementById("phoneLink");
  var metaDescription = document.getElementById("metaDescription");
  var metaOgTitle = document.getElementById("metaOgTitle");
  var metaOgDescription = document.getElementById("metaOgDescription");
  var metaTwitterTitle = document.getElementById("metaTwitterTitle");
  var metaTwitterDescription = document.getElementById("metaTwitterDescription");

  var defaultMetaTitle = "Ali Cheikh | Resume Selector";
  var defaultMetaDescription =
    "Choose the profile you need for Ali Cheikh: Full-Stack Developer, Systems Administrator, or General Resume.";
  var currentProfileKey = null;

  function getScapeApi() {
    return typeof ScapeJs !== "undefined" ? ScapeJs : window.ScapeJs;
  }

  function updateScapeBackground(profileKey) {
    currentProfileKey = profileKey || null;

    var scapeApi = getScapeApi();
    if (!scapeApi || prefersReducedMotion) {
      return;
    }

    var imageUrl =
      profileKey === "systems"
        ? scapeEmojiImages.systems
        : profileKey === "general"
          ? scapeEmojiImages.general
          : profileKey === "engineer"
            ? scapeEmojiImages.engineer
            : scapeEmojiImages.selector;

    scapeApi.updateConfig({
      type: "image",
      imageUrl: imageUrl,
      count: isMobileViewport() ? 10 : 16,
      size: isMobileViewport() ? 52 : 72,
      spacing: 180,
      minDistance: isMobileViewport() ? 100 : 140,
      opacity: 0.42
    });
  }

  function ensureScapeVisible() {
    var scapeApi = getScapeApi();
    if (!scapeApi || prefersReducedMotion) {
      return;
    }

    var count = document.querySelectorAll(".background-element").length;
    if (count === 0) {
      scapeApi.refresh();
      updateScapeBackground(currentProfileKey);
    }
  }

  function loadScapeLibrary() {
    if (prefersReducedMotion || document.querySelector("script[data-scapejs='true']")) {
      return;
    }

    var script = document.createElement("script");
    var primarySrc = "https://cdn.jsdelivr.net/gh/Ali-Cheikh/scape.js@main/scape.js";
    var fallbackSrc = "https://scape-js.vercel.app/scape.js";

    script.src = primarySrc;
    script.async = true;
    script.dataset.scapejs = "true";
    script.onerror = function () {
      if (script.src !== fallbackSrc) {
        script.src = fallbackSrc;
      }
    };
    script.onload = function () {
      updateScapeBackground(currentProfileKey);
      window.setTimeout(ensureScapeVisible, 180);
    };
    document.head.appendChild(script);
  }

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(loadScapeLibrary, { timeout: 1200 });
  } else {
    window.setTimeout(loadScapeLibrary, 350);
  }

  function renderList(target, items) {
    target.innerHTML = "";
    items.forEach(function (item) {
      var li = document.createElement("li");
      li.textContent = item;
      target.appendChild(li);
    });
  }

  function applyProfile(key) {
    var profile = profiles[key] || profiles.engineer;

    roleText.textContent = profile.role;
    introText.textContent = profile.intro;
    profileText.textContent = profile.profile;
    renderList(focusList, profile.focus);
    renderList(skillsList, profile.skills);
    renderList(experienceList, profile.experience);
    renderList(impactList, profile.impact);
    renderList(projectsList, profile.projects);

    openResume.href = profile.resumeFile;
    downloadResume.href = profile.resumeFile;
    downloadResume.setAttribute("download", profile.resumeFile);
    emailLink.textContent = profile.email;
    emailLink.href = "mailto:" + profile.email;
    phoneLink.textContent = profile.phoneDisplay;
    phoneLink.href = "tel:" + profile.phoneHref;

    document.title = profile.metaTitle;
    metaDescription.setAttribute("content", profile.metaDescription);
    metaOgTitle.setAttribute("content", profile.metaTitle);
    metaOgDescription.setAttribute("content", profile.metaDescription);
    metaTwitterTitle.setAttribute("content", profile.metaTitle);
    metaTwitterDescription.setAttribute("content", profile.metaDescription);

    var url = new URL(window.location.href);
    url.searchParams.set("profile", key);
    window.history.replaceState({ profile: key }, "", url);

    updateScapeBackground(key);
  }

  function showContentForProfile(key, animate) {
    applyProfile(key);

    if (animate !== false) {
      selectorScreen.classList.add("is-fading-out");
      window.setTimeout(function () {
        selectorScreen.hidden = true;
        selectorScreen.classList.remove("is-fading-out");
        contentScreen.hidden = false;
        requestAnimationFrame(function () {
          contentScreen.classList.add("is-visible");
        });
      }, 240);
      return;
    }

    selectorScreen.hidden = true;
    contentScreen.hidden = false;
    contentScreen.classList.add("is-visible");
  }

  function showSelector() {
    contentScreen.classList.remove("is-visible");
    contentScreen.classList.add("is-fading-out");

    window.setTimeout(function () {
      contentScreen.hidden = true;
      contentScreen.classList.remove("is-fading-out");
      selectorScreen.hidden = false;

      var url = new URL(window.location.href);
      url.searchParams.delete("profile");
      window.history.replaceState({}, "", url);

      document.title = defaultMetaTitle;
      metaDescription.setAttribute("content", defaultMetaDescription);
      metaOgTitle.setAttribute("content", defaultMetaTitle);
      metaOgDescription.setAttribute("content", defaultMetaDescription);
      metaTwitterTitle.setAttribute("content", defaultMetaTitle);
      metaTwitterDescription.setAttribute("content", defaultMetaDescription);

      updateScapeBackground();
    }, 220);
  }

  document.querySelectorAll("[data-profile]").forEach(function (button) {
    button.addEventListener("click", function () {
      showContentForProfile(button.dataset.profile);
    });
  });

  backButton.addEventListener("click", showSelector);

  var profileFromQuery = new URLSearchParams(window.location.search).get("profile");
  if (profiles[profileFromQuery]) {
    showContentForProfile(profileFromQuery, false);
  } else {
    updateScapeBackground();
  }
})();