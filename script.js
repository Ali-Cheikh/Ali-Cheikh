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
    formateur: makeIconDataUrl(
      "<defs><linearGradient id='g3' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='#ff8a4c'/><stop offset='100%' stop-color='#7a3cff'/></linearGradient></defs><circle cx='60' cy='60' r='42' fill='rgba(10,12,22,0.90)' stroke='url(#g3)' stroke-width='5'/><circle cx='43' cy='44' r='8' fill='#eef1ff'/><circle cx='78' cy='49' r='6' fill='#eef1ff'/><path d='M43 52v20' stroke='#eef1ff' stroke-width='6' stroke-linecap='round'/><path d='M78 55v16' stroke='#eef1ff' stroke-width='5' stroke-linecap='round'/><path d='M43 60l13 8' stroke='#eef1ff' stroke-width='5' stroke-linecap='round'/><path d='M78 63l-9 5' stroke='#eef1ff' stroke-width='4.5' stroke-linecap='round'/><path d='M56 68l13 0' stroke='#ff8a4c' stroke-width='4.5' stroke-linecap='round'/><path d='M41 73l-7 11' stroke='#496bff' stroke-width='5' stroke-linecap='round'/><path d='M45 73l7 11' stroke='#496bff' stroke-width='5' stroke-linecap='round'/><path d='M76 71l-6 10' stroke='#7a3cff' stroke-width='4.5' stroke-linecap='round'/><path d='M80 71l7 10' stroke='#7a3cff' stroke-width='4.5' stroke-linecap='round'/>"
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
        "Tunisian entrepreneur and developer building practical tech solutions for community impact. Selected for Live The Residency - Delta (top 15 of 1,500 applicants). Co-founded BlooLabb, an AI-powered learning platform for Tunisian youth.",
      profile:
        "Product-focused full-stack developer experienced in sustainable solutions for local businesses and education initiatives across Tunisia.",
      focus: [
        "Design and ship full stack products from sketches and prototypes to MVP structures.",
        "Build AI-powered learning and automation systems for practical use.",
        "Develop internal tools for content, student progress, and operations tracking.",
        "Automate business workflows and reduce repetitive manual tasks."
      ],
      skills: [
        "Frontend: React, Next.js, TypeScript, TailwindCSS, HTML5, CSS3/Sass, JavaScript (ES6+).",
        "Backend: Node.js, Express, REST APIs, PHP.",
        "Database: MySQL, Supabase, Firebase, Google Drive API.",
        "AI & ML: OpenRouter, LLM agents, prompt engineering, and agent architectures.",
        "Tools: Git, GitHub, Vercel, Cloudflare, CI/CD basics, SEO, and web performance."
      ],
      experience: [
        "Technical Co-Founder - BlooLabb (2025): Co-founded an online learning platform and built internal management and progress tools.",
        "Software Developer Intern - BinetCom (Jul 2024 - Sep 2024): Built a public website, invoicing system, dashboards, and lightweight APIs.",
        "Full Stack Developer - LingoLand / Lingoville (Jun 2024 - Ongoing): Built prototypes, dashboards, and student flows.",
        "Freelance Web Developer - Self-Employed (2022 - Present): Delivered 50+ web solutions across static and dynamic apps.",
        "Backend Developer - i-startup Co-Work Solutions (Jan 2021 - Jun 2022): Automated Google Apps Script and client operations workflows."
      ],
      impact: [
        "Selected in Live The Residency Delta as top 15 out of 1,500 applicants.",
        "Built a warehouse OCR system that reduced manual search and input workload by around 80%.",
        "Delivered 50+ client solutions and automation workflows across different sectors.",
        "Mentored high school students through coding workshops and collaborative projects."
      ],
      projects: [
        "BlooLabb AI Learning Platform (2025) - learning platform for kids with modern architecture.",
        "Translation OCR + LLM Debate System (2025) - experimental OCR pipeline with dual-LLM collaboration.",
        "Warehouse OCR System for Energen (2024 - 2025) - Tesseract.js + Apps Script workflow.",
        "tccards.tn NFC Business Cards (2025) - digital business card platform focused on sustainability."
      ],
      resumeFile: "Ali_Cheikh_Resume.pdf",
      email: "contact@ali-cheikh.com",
      phoneDisplay: "+216 90 725 434",
      phoneHref: "+21690725434",
      metaTitle: "Ali Cheikh | Software Engineer / Full Stack Developer",
      metaDescription:
        "Full-stack developer and product builder profile for Ali Cheikh, including verified experience, projects, and resume access."
    },
    formateur: {
      role: "Technology Educator & Youth STEM Formateur",
      intro:
        "I teach kids and young people how to use technology, from block coding to building their first websites, workshops, and hackathons across different settings.",
      profile:
        "Practical educator combining AI and web tools with project-based teaching. I have completed AI and education coursework through OpenAI, IBM, and the University of Glasgow.",
      focus: [
        "Support learners from first exposure to independent project delivery.",
        "Run workshops, clubs, and hackathons with learning-by-doing methods.",
        "Adapt sessions by age and skill level for stronger retention.",
        "Teach AI literacy with responsible classroom usage and ethics."
      ],
      skills: [
        "Early Learners (6-10): BeeBot, Weedo Robotics, Scratch (MIT), Tynker, unplugged coding.",
        "Middle Learners (10-14): MIT App Inventor, advanced Scratch, HTML and CSS basics.",
        "Teen Learners (14-18): JavaScript, Python basics, web projects, AI literacy and prompt engineering.",
        "AI in Education: AI-assisted teaching, LLM tools for classrooms, ethical AI discussions.",
        "Platforms: Google Classroom, Moodle, LMS tools, and interactive whiteboards."
      ],
      experience: [
        "Tech Club Manager & Youth Mentor - Det Development (Sep 2020 - Dec 2023): mentored students and ran coding sessions.",
        "EdTech Co-Founder & Learning Designer - BlooLabb (2025): designed learning content and student progression paths.",
        "Hackathon Facilitator & Workshop Educator - Tunisia (2021 - Present): helped learners build projects through events and clubs.",
        "TEDx speaker on technology and learning for young people (2023)."
      ],
      impact: [
        "Harvard Business Impact Education - Verified Educator (2025).",
        "Live The Residency Delta - Top 15 out of 1,500 applicants (2025).",
        "Built practical youth learning paths with AI, web, and robotics integration.",
        "Supported learners in clubs and events to become confident project builders."
      ],
      projects: [
        "BlooLabb youth learning platform with videos, quizzes, and AI-guided support.",
        "Hackathon facilitation programs for students and beginner makers.",
        "Project-based workshop tracks in web development and AI literacy.",
        "Teaching resources for Scratch, MIT App Inventor, and robotics learners."
      ],
      resumeFile: "Ali_Cheikh_Formateur_CV.pdf",
      email: "contact@alicheikh.tn",
      phoneDisplay: "+216 90 725 434",
      phoneHref: "+21690725434",
      metaTitle: "Ali Cheikh | Formateur",
      metaDescription:
        "Technology educator and youth STEM formateur profile for Ali Cheikh, with verified teaching experience and direct resume access."
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
    "Choose the profile you need for Ali Cheikh: Formateur or Software Engineer / Full Stack Developer.";
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
      profileKey === "formateur"
        ? scapeEmojiImages.formateur
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
