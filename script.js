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

  var profiles = {
    engineer: {
      role: "Full-Stack Developer & Product Builder",
      intro:
        "Full-stack developer and entrepreneur building production web apps, AI tools, and internal systems end to end. Selected for Live The Residency - Delta (top 15 of 1,500 applicants); co-founded BlooLab, an AI-powered learning platform for Tunisian youth.",
      profile:
        "Comfortable owning a feature from architecture to deployment, across frontend, backend, and the automation glue in between.",
      focus: [
        "Build production web apps, AI tools, and internal systems end to end.",
        "Own features from architecture to deployment across frontend, backend, and automation.",
        "Architect platforms with video delivery, quizzes, AI tutoring, CMS, and progress tracking.",
        "Integrate Google APIs and improve SEO and web performance."
      ],
      skills: [
        "Frontend: React, Next.js, TypeScript, JavaScript (ES6+), TailwindCSS, HTML5, CSS3/Sass.",
        "Backend: Node.js, Express, REST APIs, PHP.",
        "Database: MySQL, Supabase, Firebase, Google Sheets as lightweight DB.",
        "AI & LLM: OpenAI & Anthropic APIs, Claude in Excel, OpenRouter, LLM agents, prompt engineering, agent architectures, OpenClaw.",
        "Automation: Google Apps Script, Google Sheets automation, workflow & reporting automation.",
        "DevOps & Tools: Git, GitHub, Vercel, Cloudflare, CI/CD basics.",
        "Other: UI/UX design, SEO, web performance, networking/security basics, ethical hacking foundations."
      ],
      experience: [
        "IT & Recruitment Systems Administrator - Tunisia Oil & Gas Services: Built internal management system for workforce job applications and interview scheduling; managed job postings, LinkedIn presence, and recruitment communications; automated project report generation.",
        "Technical Co-Founder - BlooLab, Live The Residency - Delta Programme (Batch 2): Built AI-powered kids learning platform selected among 15 finalists from 1,500 applicants; architected video delivery, quizzes, AI tutor, CMS, and progress tracking.",
        "Full Stack Developer - LingolAnd / Lingol: Designed platform architecture and MVP for an edtech product; built dashboards and student enrollment flows; integrated Google APIs and implemented SEO/performance improvements.",
        "Software Developer Intern - BinetCom: Built a public website and internal invoicing system; developed custom dashboards and REST APIs.",
        "Backend Developer - i-startup - Co-Work Solutions: Developed CMS dashboards for managing co-working spaces, migrating off spreadsheet-based databases; automated business workflows with Google Apps Script and built email marketing/client management tools."
      ],
      impact: [
        "Selected for Live The Residency - Delta as top 15 out of 1,500 applicants.",
        "Co-founded BlooLab, an AI-powered learning platform for Tunisian youth.",
        "Built Warehouse OCR System (Energen) reducing manual workload by 80%.",
        "Delivered production web apps, AI tools, and internal systems end to end."
      ],
      projects: [
        "BlooLab AI Learning Platform - AI-powered learning platform for kids with modern stack and agent-based tutoring.",
        "Translation OCR + LLM Debate System - Experimental OCR pipeline with dual-LLM debate mechanism.",
        "Warehouse OCR System (Energen) - Search-and-register OCR system with Tesseract.js and Apps Script, reducing manual workload by 80%.",
        "tccards.tn - NFC Business Cards - Digital business card platform reducing paper waste.",
        "Workforce Management System - Internal system for job applications, interview scheduling, and job-posting management.",
        "Other projects: Admin/CRM dashboard; habit tracking app with calendar UI and notifications; API integration project with AI gateway, messaging bots, and maps; scraper/data pipeline; e-commerce storefront with cart, checkout, and inventory sync."
      ],
      resumeFile: "Ali_Cheikh_CV_FullStack_Dev.pdf",
      email: "contact@ali-cheikh.com",
      phoneDisplay: "+216 90 725 434",
      phoneHref: "+21690725434",
      metaTitle: "Ali Cheikh | Full-Stack Developer & Product Builder",
      metaDescription:
        "Full-stack developer and product builder profile for Ali Cheikh, with production web apps, AI tools, automation, and resume access."
    },
    systems: {
      role: "Systems Administrator & Business Automation Specialist",
      intro:
        "Systems administrator and technical operator with a developer's background — builds the internal tools he then administers. Experience spans HR-tech and recruitment systems, IT administration, reporting automation, and cross-functional project support.",
      profile:
        "Selected for Live The Residency - Delta (top 15 of 1,500 applicants) for co-founding an AI-powered learning platform.",
      focus: [
        "Build and administer internal tools, HR-tech systems, and workflow automation.",
        "Own IT administration, user/access management, technical support, and security basics.",
        "Automate reporting, data entry, and business workflows using Google Apps Script and Sheets.",
        "Support recruitment systems: applicant tracking, interview scheduling, job posting, and LinkedIn management."
      ],
      skills: [
        "Frontend: React, Next.js, TypeScript, JavaScript (ES6+), TailwindCSS, HTML5, CSS3/Sass.",
        "Backend: Node.js, Express, REST APIs, PHP.",
        "Database: MySQL, Supabase, Firebase, Google Sheets as lightweight DB.",
        "AI & LLM Tooling: OpenAI & Anthropic APIs, Claude in Excel, OpenRouter, LLM agents, prompt engineering, agent architectures, OpenClaw.",
        "Automation: Google Apps Script, Google Sheets automation, workflow & reporting automation.",
        "DevOps & Tools: Git, GitHub, Vercel, Cloudflare, CI/CD basics.",
        "Networking & Security Basics: Core networking fundamentals, ethical hacking foundations.",
        "Other: UI/UX design, SEO, web performance."
      ],
      experience: [
        "IT & Recruitment Systems Administrator - Tunisia Oil & Gas Services: Designed and administered internal management system for workforce job applications and interview scheduling; owned job postings, LinkedIn presence, and recruitment media/communications; acted as general IT administrator and automated project report generation.",
        "Technical Co-Founder - Bloolabb, Live The Residency - Delta Programme (Batch 2): Co-founded and operated AI-powered kids learning platform selected among 15 finalists from 1,500 applicants; owned platform operations, content management, progress tracking, and internal tooling.",
        "Backend Developer & Workflow Automation - i-startup - Co-Work Solutions: Migrated co-working space management off spreadsheets onto a CMS dashboard; automated recurring business workflows with Google Apps Script; built email marketing and client management tools.",
        "Software Developer Intern - BinetCom: Built internal invoicing system and admin dashboards; supported internal operations with custom REST APIs.",
        "Full Stack Developer - Lingoland / Lingoville: Built dashboards and enrollment/student-management flows for an edtech platform."
      ],
      impact: [
        "Selected for Live The Residency - Delta (top 15 of 1,500 applicants).",
        "Automated project reporting, replacing manual reporting workflows.",
        "Reduced manual warehouse workload by 80% with OCR system.",
        "Built internal tools for HR workflows, inventory, helpdesk, access/permissions, and Google Workspace automation."
      ],
      projects: [
        "Workforce Management System (TOGS) - Application, interview, and job-posting management system for hand-force recruitment.",
        "Warehouse OCR System (Energen) 2024-2025 - Search-and-register OCR system reducing manual workload by 80%.",
        "Bloolabb AI Learning Platform - AI-powered learning platform for kids with internal content and progress-tracking tools.",
        "tccards.tn - NFC Business Cards - Digital business card platform and sustainable networking solution.",
        "Other projects: HR workflow tool (checklists, document collection, approvals); inventory tracking system with Sheets + Apps Script + ESP32; Google Workspace automation; ticketing/helpdesk system for internal IT support; access/permissions management tool."
      ],
      resumeFile: "Ali_Cheikh_CV_Systems_Admin.pdf",
      email: "contact@ali-cheikh.com",
      phoneDisplay: "+216 90 725 434",
      phoneHref: "+21690725434",
      metaTitle: "Ali Cheikh | Systems Administrator & Business Automation Specialist",
      metaDescription:
        "Systems administrator and business automation profile for Ali Cheikh, covering HR-tech, IT administration, reporting automation, and resume access."
    },
    general: {
      role: "Business Logistics Strategist & Systems Administrator",
      intro:
        "Business logistics strategist and systems administrator with developer expertise. Passionate about building scalable HR-tech solutions and streamlining operations through intelligent automation.",
      profile:
        "Proven track record delivering 80%+ workload reduction and measurable ROI. Strategic team player and high-impact operator who excels at transforming complex business challenges into elegant, scalable systems.",
      focus: [
        "Build scalable HR-tech solutions and streamline operations through intelligent automation.",
        "Design and administer workforce management, recruitment, and interview scheduling systems.",
        "Automate project reporting and recurring business workflows.",
        "Turn complex business challenges into elegant, scalable systems."
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
        "IT & Recruitment Systems Administrator - Tunisia Oil & Gas Services: Designed and administered workforce management system for job applications and interview scheduling; managed job postings, LinkedIn presence, candidate communications, and hiring workflow optimization; automated project reporting, eliminating 6+ hours weekly manual report generation.",
        "Technical Co-Founder - Bloolabb, Live The Residency - Delta Programme: Co-founded AI-powered learning platform selected among 15 finalists from 1,500 applicants; scaled to 100+ active users; owned platform operations, content management infrastructure, student progress tracking, and administrative tooling.",
        "Backend Developer & Workflow Automation - i-startup - Co-Work Solutions: Migrated co-working space operations from spreadsheet management to centralized CMS dashboard; automated recurring business workflows with Google Apps Script; built 4 email marketing and client management systems.",
        "Software Developer Intern - BinetCom: Built internal invoicing system and admin dashboards; implemented custom APIs enabling 40% faster internal operations."
      ],
      impact: [
        "Proven track record delivering 80%+ workload reduction and measurable ROI.",
        "Eliminated 6+ hours weekly manual report generation at Tunisia Oil & Gas Services.",
        "Scaled Bloolabb to 100+ active users after selection from 1,500 applicants.",
        "Implemented custom APIs enabling 40% faster internal operations at BinetCom.",
        "Built Warehouse OCR System achieving 80% reduction in manual data entry workload."
      ],
      projects: [
        "Workforce Management System (TOGS) - End-to-end HR system for job applications, interview scheduling, and recruitment management; replaced manual paper-based process.",
        "Warehouse OCR System (Energen) - Label scanning and inventory registration system using Tesseract.js and Google Apps Script; achieved 80% reduction in manual data entry workload."
      ],
      resumeFile: "Ali_Cheikh_Resume.pdf",
      email: "contact@alicheikh.tn",
      phoneDisplay: "+216 90 725 434",
      phoneHref: "+21690725434",
      metaTitle: "Ali Cheikh | Business Logistics Strategist & Systems Administrator",
      metaDescription:
        "Business logistics, systems administration, HR-tech, and automation profile for Ali Cheikh, with resume access."
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