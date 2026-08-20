/**
 * MUHAMMAD HASHIR — GRAPHIC DESIGN PORTFOLIO
 * Application Logic, Interactive Case Studies, Lightbox & Filtering
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. Portfolio Projects Data Repository
  // --------------------------------------------------------------------------
  const portfolioData = {
    nutec: {
      id: 'nutec',
      title: "NUTEC '24 & '25 — Olympiad Visual Identity",
      org: "NUTEC / FAST NUCES Peshawar",
      category: ["festivals", "branding", "social"],
      cover: "NUTEC/5th May, 2024.png",
      summary: "Comprehensive visual branding, headline concert key art, ripped-paper collages, VIP passes, and outdoor billboards for Khyber Pakhtunkhwa's largest technology & cultural olympiad.",
      overview: "NUTEC (National University Technology & Cultural Olympiad) is FAST NUCES Peshawar's flagship annual multi-day festival celebrating technology competitions, live concerts, gaming, and cultural heritage. I designed the complete marketing collateral across print and digital media for both the 2024 and 2025 seasons.",
      role: "Lead Graphic Designer / Creative Direction for Event Collateral",
      direction: "Blended high-energy concert atmospherics with bold, playful retro-pop elements. Employed high-contrast live performance photography, ripped-paper editorial collages, halftone portraits, and cultural motifs like the Bab-e-Khyber monument.",
      colors: [
        { name: "Electric Crimson", hex: "#e11d48" },
        { name: "Obsidian Black", hex: "#0a0a0c" },
        { name: "Cyan Teal", hex: "#06b6d4" },
        { name: "Golden Glow", hex: "#f59e0b" }
      ],
      deliverables: [
        "Mustafa Zahid Live Headline Concert Key Visual",
        "Official Tear-Off Concert Passes & VIP Tickets",
        "'NUTEC IS BACK' 3-Panel Ripped-Paper Carousel",
        "NUTEC 2025 Retro-Pop Teaser Carousel",
        "Highway Billboard Mockup (#EATVIBEREPEAT)",
        "Olympiad 'Save the Date' Calendar Visual",
        "Keynote Speaker Announcements (Sahil Adeem)"
      ],
      gallery: [
        {
          src: "NUTEC/5th May, 2024.png",
          title: "Mustafa Zahid Live — Headliner Concert Poster",
          type: "image",
          caption: "Primary promotional poster for Mustafa Zahid live concert at FAST NUCES Peshawar featuring corporate sponsor locks (Zindigi JS Bank, KPK Tourism Authority, Metrix Pakistan, Ranchers).",
          fullWidth: false
        },
        {
          src: "NUTEC/efe (2).png",
          title: "NUTEC IS BACK — 3-Panel Editorial Collage",
          type: "image",
          caption: "Seamless Instagram panoramic banner utilizing torn-paper aesthetic layered with real concert crowd and stage performance photography.",
          fullWidth: true
        },
        {
          src: "NUTEC/ecec (1).png",
          title: "Official Concert Pass — Mustafa Zahid Live",
          type: "image",
          caption: "Event ticket featuring serial tracking stub, verified QR placement, date stamps, and sponsor lockup.",
          fullWidth: true
        },
        {
          src: "NUTEC/ecec (2).png",
          title: "Official Concert Pass — Qawwali Shamsher Ali Khan",
          type: "image",
          caption: "Traditional sufi music night ticket design maintaining unified festival ticketing brand architecture.",
          fullWidth: true
        },
        {
          src: "NUTEC/dvev (1).png",
          title: "NUTEC 2025 — Retro Pop Teaser Carousel",
          type: "image",
          caption: "3-panel teaser campaign integrating Bab-e-Khyber heritage illustration, Pashto greeting 'پخير راغلې', halftone portrait, and 90s retro gaming icons.",
          fullWidth: true
        },
        {
          src: "NUTEC/dvev (2).png",
          title: "NUTEC 2025 — Outdoor Highway Billboard Mockup",
          type: "image",
          caption: "Large-format outdoor advertising concept with high-contrast yellow canvas and #EATVIBEREPEAT campaign typography.",
          fullWidth: true
        },
        {
          src: "NUTEC/efe (1).png",
          title: "Save The Date — Olympiad Calendar Announcement",
          type: "image",
          caption: "3-panel social graphic highlighting May 3-5 event dates with architectural line-art and punchy typography.",
          fullWidth: true
        },
        {
          src: "NUTEC/PARTNERS.png",
          title: "Sahil Adeem Keynote Speaker Announcement",
          type: "image",
          caption: "High-contrast speaker spotlight featuring bold outline-fill typography overlay for 'Death of Morality' address.",
          fullWidth: false
        },
        {
          src: "NUTEC/nutec_pwr_qr.png",
          title: "Official NUTEC Peshawar Identity Card",
          type: "image",
          caption: "Official society QR card linked to @nutec_pwr.",
          fullWidth: false
        }
      ]
    },

    egaming: {
      id: 'egaming',
      title: "E-Gaming Society",
      org: "FAST E-Gaming Society Peshawar",
      category: ["esports", "branding", "social", "motion"],
      cover: "E-gaming Society/1d3 (1).png",
      summary: "Complete esports brand identity system including a 5-banner rollup suite, championship stage backdrops, dynamic 3D teasers, comic-style recruitment carousels, and motion graphics.",
      overview: "The E-Gaming Society at FAST NUCES Peshawar hosts inter-university competitive esports championships, gaming expos, and game development seminars. I crafted a high-octane visual universe spanning large-format stage print backdrops, character-driven standing rollups, tournament prize carousels, and animated video teasers.",
      role: "Lead Visual Designer & Creative Art Director",
      direction: "High-energy esports art direction combining raw crimson textured brush strokes with dark charcoal backgrounds, isolated 3D character renders, and sharp competitive tournament typography.",
      colors: [
        { name: "Esports Crimson", hex: "#dc2626" },
        { name: "Charcoal Slate", hex: "#1e1e24" },
        { name: "Neon Cyber Purple", hex: "#8b5cf6" },
        { name: "Volt Yellow", hex: "#eab308" }
      ],
      deliverables: [
        "5-Piece Character Rollup Banner Suite (Tekken 8, Valorant, FC 24, PUBG x2)",
        "Panoramic 'Ramadan Series 2025' Stage Backdrop (12ft+)",
        "Widescreen 'The Road to Game Development' Speaker Stage Backdrops",
        "Widescreen 3D Laptop Portal Teaser Banner",
        "Comic Pop-Art 'Core Team' Instagram Carousel",
        "Tournament Prize Pool & Category Instagram Sets",
        "Animated Motion Graphics Promo Teaser (.mp4)"
      ],
      gallery: [
        {
          src: "E-gaming Society/1d3 (1).png",
          title: "Tekken 8 Standing Rollup Banner",
          type: "image",
          caption: "Vertical rollup banner featuring Nina Williams with dynamic crimson brushstroke key visual and official society branding.",
          fullWidth: false
        },
        {
          src: "E-gaming Society/1d3 (3).png",
          title: "Valorant Standing Rollup Banner",
          type: "image",
          caption: "Vertical rollup banner featuring Chamber and Raze tactical agent composite against textured stroke canvas.",
          fullWidth: false
        },
        {
          src: "E-gaming Society/1d3 (2).png",
          title: "EA Sports FC 24 Standing Rollup Banner",
          type: "image",
          caption: "Standing banner featuring Kylian Mbappé action composite with high-contrast textured typography.",
          fullWidth: false
        },
        {
          src: "E-gaming Society/1d3 (4).png",
          title: "PUBG Armory Throne Rollup Banner",
          type: "image",
          caption: "Rollup design with monochromatic weaponry throne background and battle royale survivor group.",
          fullWidth: false
        },
        {
          src: "E-gaming Society/1d3 (5).png",
          title: "PUBG 'Land Loot Survive' Standing Banner",
          type: "image",
          caption: "Rollup artwork featuring iconic level 3 helmet survivor key art over dual-angle brush strokes.",
          fullWidth: false
        },
        {
          src: "E-gaming Society/Green Modern Coming Soon Instagram Post (1080 x 1350 px).mp4",
          title: "Animated Motion Graphics Teaser Video",
          type: "video",
          caption: "High-impact short-form vertical motion graphics teaser announcing upcoming esports events with kinetic text and audio.",
          fullWidth: true
        },
        {
          src: "E-gaming Society/Modern clean white & red 3D gaming laptop promo poster (3240 x 1080 px).png",
          title: "3D Laptop Portal 'COMING SOON' Teaser Banner",
          type: "image",
          caption: "Ultra-wide teaser banner featuring bold typography and a 3D pop-out laptop portal effect.",
          fullWidth: true
        },
        {
          src: "E-gaming Society/fef.png",
          title: "Ramadan Series 2025 — Stage Backdrop",
          type: "image",
          caption: "Main stage panoramic backdrop for the Ramadan Series gaming championship, featuring 3D gaming controllers, neon neon lighting, and title partner logos.",
          fullWidth: true
        },
        {
          src: "E-gaming Society/evv (1).png",
          title: "The Road to Game Development — Backdrop Part 1",
          type: "image",
          caption: "Stage banner for Unity & Unreal Engine speaker session with Ahmad Qayum and Hamza Khan.",
          fullWidth: true
        },
        {
          src: "E-gaming Society/evv (2).png",
          title: "The Road to Game Development — Backdrop Part 2",
          type: "image",
          caption: "Stage banner spotlighting Unreal Developers Abdul Haseeb, Muhammad Umer, and Azhar Jadoon.",
          fullWidth: true
        },
        {
          src: "E-gaming Society/Screenshot From 2026-08-20 22-27-55.png",
          title: "Pop-Art Comic 'CORE TEAM' Carousel Banner",
          type: "image",
          caption: "3-panel pop-art halftone recruitment campaign with expressive comic expressions and vintage halftone dots.",
          fullWidth: true
        },
        {
          src: "E-gaming Society/Screenshot From 2026-08-20 22-27-22.png",
          title: "Tournament Prize Breakdown Carousel",
          type: "image",
          caption: "3-panel Instagram carousel breakdown for PUBG (PKR 20k), Tekken (PKR 15k), and FIFA (PKR 15k) tournaments.",
          fullWidth: true
        },
        {
          src: "E-gaming Society/Screenshot From 2026-08-20 22-27-31.png",
          title: "Valorant & Tekken 7 Female Division Announcement",
          type: "image",
          caption: "3-panel Instagram carousel highlighting Valorant prize pool and exclusive Tekken 7 female tournament division.",
          fullWidth: true
        },
        {
          src: "E-gaming Society/Screenshot From 2026-08-20 22-27-40.png",
          title: "Ramadan Rumble 2025 Announcement Series",
          type: "image",
          caption: "Dark textured tournament carousel featuring Jin Kazama Tekken and Neymar Jr. sports art.",
          fullWidth: true
        },
        {
          src: "E-gaming Society/Untitled (48 x 18 in) (48 x 24 in) (48 x 18 in).png",
          title: "E-Gaming Society 48x18 Header Banner",
          type: "image",
          caption: "Large-format stage header graphic with clean bold typography and flanking gaming character art.",
          fullWidth: true
        }
      ]
    },

    metal: {
      id: 'metal',
      title: "METAL Society",
      org: "METAL (Music, Entertainment, Theater & Auto Lovers)",
      category: ["automotive", "festivals", "branding"],
      cover: "METAL/1.png",
      summary: "High-octane JDM Car Show VIP invitation posters, synthwave Campus Fest key visual, and neon grid appreciation certificates celebrating automotive culture.",
      overview: "METAL is FAST Peshawar's premier society celebrating automotive passion, live music, and theatrical entertainment. I developed the visual identity for their flagship JDM Car Show and Campus Fest events.",
      role: "Lead Visual Designer",
      direction: "Vortex tunnel lighting, high-contrast automotive spotlighting, and synthwave/retrowave aesthetics featuring glowing cyber grids, wireframe mountain horizons, and iconic JDM vehicles (Toyota AE86 Trueno, Mazda RX-7, Honda Civic).",
      colors: [
        { name: "Vortex Fire Amber", hex: "#f59e0b" },
        { name: "Synthwave Magenta", hex: "#ec4899" },
        { name: "Outrun Purple", hex: "#7c3aed" },
        { name: "Midnight Black", hex: "#09090b" }
      ],
      deliverables: [
        "JDM Car Show Personalized VIP Invitation Posters (Red Sedan & Black RX-7)",
        "'METAL Campus Fest — Wheels, Voices, Beats' Synthwave Key Visual",
        "Official Certificate of Appreciation for Show Participants"
      ],
      gallery: [
        {
          src: "METAL/1.png",
          title: "JDM Car Show — VIP Personalized Invitation Poster",
          type: "image",
          caption: "High-contrast VIP invite featuring a tuned red sports sedan enveloped by a glowing vortex lighting tunnel and personalized typography.",
          fullWidth: false
        },
        {
          src: "METAL/2.png",
          title: "JDM Car Show — Black Mazda RX-7 VIP Invitation",
          type: "image",
          caption: "Alternative VIP edition spotlighting an aggressive widebody Mazda RX-7 front profile in glowing circular illumination.",
          fullWidth: false
        },
        {
          src: "METAL/Pink Blue Playful Mental Health Day Instagram Story.png",
          title: "METAL Campus Fest — 'Wheels, Voices, Beats'",
          type: "image",
          caption: "Synthwave aesthetic key art with Toyota AE86 Trueno, giant concert speaker wall, vintage ribbon microphone, and wireframe neon mountains.",
          fullWidth: false
        },
        {
          src: "METAL/Purple and Black Neon Certificate if Completion.png",
          title: "Certificate of Appreciation — Car Show",
          type: "image",
          caption: "Official participant certification featuring a neon perspective grid, red Civic hatchback, AE86 side silhouette, and executive signature lines.",
          fullWidth: true
        },
        {
          src: "METAL/metal.pwr_qr.png",
          title: "Official METAL Society Identity Card",
          type: "image",
          caption: "Official society QR card linked to @metal.pwr.",
          fullWidth: false
        }
      ]
    },

    gdsc: {
      id: 'gdsc',
      title: "Google Developer Student Clubs & DevFest",
      org: "GDSC / GDG Peshawar / Google",
      category: ["tech", "social", "branding"],
      cover: "GDSC/ce (1).png",
      summary: "3D cyber-grid event key visuals for AI Nexus, official Google DevFest 2023 3-panel Instagram carousel, and developer speaker spotlights.",
      overview: "GDSC (Google Developer Student Clubs) and GDG Peshawar empower student developers through Google technologies, AI workshops, and regional tech summits. I created high-visibility digital promotional materials following tech-forward standards.",
      role: "Graphic Designer & Social Media Creative",
      direction: "Futuristic cyber-grid floors, friendly 3D robot renders with volumetric lighting, cohesive Google color hierarchy, and interactive polaroid UI framing.",
      colors: [
        { name: "Cyber Cyan", hex: "#06b6d4" },
        { name: "Neon Ultraviolet", hex: "#c026d3" },
        { name: "Google Yellow", hex: "#facc15" },
        { name: "Deep Tech Navy", hex: "#030712" }
      ],
      deliverables: [
        "AI NEXUS 3-Panel Cyber Grid Event Banners (Cyan & Magenta Editions)",
        "Google DevFest 2023 Peshawar Official 3-Panel Instagram Campaign",
        "GSoC Founder Speaker Spotlight Card (Muhammad Mahad)"
      ],
      gallery: [
        {
          src: "GDSC/ce (1).png",
          title: "AI NEXUS — 3-Panel Cyber Grid Banner (Cyan Edition)",
          type: "image",
          caption: "Tech conference banner featuring 3D friendly AI bot characters on an infinite perspective cyber-grid with glowing neon copy.",
          fullWidth: true
        },
        {
          src: "GDSC/ce (2).png",
          title: "AI NEXUS — Ultraviolet Neon Edition",
          type: "image",
          caption: "Alternative magenta/ultraviolet neon variant calibrated for evening workshop promotions.",
          fullWidth: true
        },
        {
          src: "GDSC/WHAT IS.png",
          title: "Google DevFest 2023 Peshawar — 3-Panel Campaign",
          type: "image",
          caption: "Official Google-powered DevFest carousel series ('WHO SHOULD ATTEND', 'WHAT IS devfest', 'WHY YOU SHOULD ATTEND') with GDG and Women Techmakers branding.",
          fullWidth: true
        },
        {
          src: "GDSC/Screenshot From 2026-08-20 22-32-51.png",
          title: "Muhammad Mahad (GSoC / TECHONIX) Speaker Spotlight",
          type: "image",
          caption: "Polaroid-frame speaker visual with dark grid backdrop and bold typographic repetition.",
          fullWidth: false
        },
        {
          src: "GDSC/gdgocfastpwr_qr.png",
          title: "Official GDG on Campus Identity Card",
          type: "image",
          caption: "Official society QR card linked to @gdgocfastpwr.",
          fullWidth: false
        }
      ]
    },

    jadecafe: {
      id: 'jadecafe',
      title: "Jade Café & China Town",
      org: "Jade Café & China Town",
      category: ["commercial", "social", "motion"],
      cover: "Jade Cafe China Town/ee.png",
      summary: "Vibrant dual-tone culinary social carousel campaign and promotional video advertisement for café delicacies.",
      overview: "Jade Café & China Town is an upscale dining destination known for artisanal beverages and bakery selections. I crafted mouth-watering social media assets and dynamic promo videos.",
      role: "Graphic & Social Media Designer",
      direction: "Punchy dual-tone backdrop (teal and vibrant apricot orange) overlaid with subtle typographic watermarks, sparkling accent stars, and high-clarity food product isolation.",
      colors: [
        { name: "Tangerine Apricot", hex: "#f97316" },
        { name: "Ocean Teal", hex: "#0d9488" },
        { name: "Warm Foam Cream", hex: "#ffedd5" },
        { name: "Deep Navy", hex: "#0f172a" }
      ],
      deliverables: [
        "3-Panel Social Carousel (Cappuccino, Caramel Latte, Croissant)",
        "Promotional Café & Food Menu Video Commercial (.mp4)"
      ],
      gallery: [
        {
          src: "Jade Cafe China Town/ee.png",
          title: "Jade Café Artisanal Menu — 3-Panel Carousel",
          type: "image",
          caption: "High-energy dual-color social campaign showcasing hot Cappuccino, iced Caramel Latte, and butter croissants.",
          fullWidth: true
        },
        {
          src: "Jade Cafe China Town/1.png",
          title: "Jade Café — Campaign Visual 1",
          type: "image",
          caption: "",
          fullWidth: false
        },
        {
          src: "Jade Cafe China Town/2.png",
          title: "Jade Café — Campaign Visual 2",
          type: "image",
          caption: "",
          fullWidth: false
        },
        {
          src: "Jade Cafe China Town/White and Brown Food Facebook Video Promo.mp4",
          title: "Jade Café Food Promo Video Commercial",
          type: "video",
          caption: "Short-form dynamic social video ad highlighting menu highlights, warm café ambiance, and signature dishes.",
          fullWidth: true
        }
      ]
    },

    fast: {
      id: 'fast',
      title: "FAST NUCES",
      org: "FAST National University Peshawar",
      category: ["tech", "branding"],
      cover: "FAST/Dark Blue and Green Modern Illustrative Coding Club Poster.png",
      summary: "FPSC Competitive Programming 100k tournament key art, Code Clash vintage computing educational poster, and Class of 2020 graduation emblem.",
      overview: "Official academic and competitive programming initiatives at FAST-NUCES Peshawar. Designs bridged competitive computer science with illustrative character storytelling and collegiate heritage.",
      role: "Graphic Designer & Illustrator",
      direction: "Vibrant illustrative character art surfing futuristic digital data highways, complemented by warm retro-computing graphics and vintage collegiate lettering.",
      colors: [
        { name: "Deep Navy", hex: "#1e1b4b" },
        { name: "Electric Cyan", hex: "#06b6d4" },
        { name: "Amber Ochre", hex: "#f59e0b" },
        { name: "FAST Blue", hex: "#0284c7" }
      ],
      deliverables: [
        "FPSC Competitive Programming (PKR 100k Prize Pool) Official Poster",
        "Code Clash Tech-Education Retro Computing Flyer",
        "Class of 2020 Collegiate Graduation Emblem"
      ],
      gallery: [
        {
          src: "FAST/Dark Blue and Green Modern Illustrative Coding Club Poster.png",
          title: "FPSC Competitive Programming — Official Poster",
          type: "image",
          caption: "Flagship competition poster featuring illustrated futuristic characters gliding over a digital skyline, promoting a PKR 100,000 prize pool.",
          fullWidth: false
        },
        {
          src: "FAST/Design.png",
          title: "Code Clash — Retro Computing Flyer",
          type: "image",
          caption: "Warm monochromatic yellow and brown poster featuring a classic CRT desktop workstation and retro GUI windows.",
          fullWidth: false
        },
        {
          src: "FAST/sx.png",
          title: "Class of 2020 — Graduation Emblem",
          type: "image",
          caption: "Custom collegiate typography emblem featuring FAST National University seal integration.",
          fullWidth: false
        }
      ]
    },

    mintwurks: {
      id: 'mintwurks',
      title: "Mintwurks Energy — B2B Corporate Branding",
      org: "Mintwurks Elite Experience",
      category: ["commercial", "branding"],
      cover: "Mintwurks/Untitled desin.png",
      summary: "Corporate identity collateral, supply capability sheets, and vector industrial infographics for an international energy trading firm.",
      overview: "Mintwurks is an industrial petroleum commodities supplier. I developed clean, authoritative corporate B2B marketing collateral that translates massive supply volume statistics into sleek digital cards.",
      role: "Corporate Brand & Infographic Designer",
      direction: "Authoritative minimalism utilizing deep slate indigo paired with seafoam teal, crisp vector equipment illustrations (drilling rig, storage tanks), and legible numerical typography.",
      colors: [
        { name: "Deep Slate Indigo", hex: "#2b2d42" },
        { name: "Seafoam Teal", hex: "#2ec4b6" },
        { name: "Soft Mint", hex: "#cbf3f0" },
        { name: "Graphite", hex: "#111827" }
      ],
      deliverables: [
        "Corporate Metric Infographic (2.5B MTs Supplied)",
        "20+ Years in Petroleum Industry Brand Banner",
        "No. 1 Commodities & Fuels Supplier Sheet",
        "35+ Completed Projects Milestone Graphic"
      ],
      gallery: [
        {
          src: "Mintwurks/Untitled desin.png",
          title: "2.5 Billion MTs Supplied — Vector Rig Infographic",
          type: "image",
          caption: "Clean vector illustration of petroleum drilling rig and storage vessel with bold corporate metrics.",
          fullWidth: false
        },
        {
          src: "Mintwurks/ee (1).png",
          title: "20+ Years in Petroleum Industry Banner",
          type: "image",
          caption: "Corporate identity story banner in deep indigo and teal typography hierarchy.",
          fullWidth: false
        },
        {
          src: "Mintwurks/ee (2).png",
          title: "Core Products Supplier Sheet (D6, EN590, Jet Fuel A1)",
          type: "image",
          caption: "Clear bulleted commodities offering for B2B procurement partners.",
          fullWidth: false
        },
        {
          src: "Mintwurks/ee (3).png",
          title: "35+ Projects & 40B Barrels Track Record Banner",
          type: "image",
          caption: "High-impact statistical summary banner showcasing energy trade volume.",
          fullWidth: false
        }
      ]
    }
  };

  // --------------------------------------------------------------------------
  // 2. Lightbox State & Controls
  // --------------------------------------------------------------------------
  let currentGallery = [];
  let currentLightboxIndex = 0;

  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxMediaContainer = document.getElementById('lightboxMediaContainer');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const btnCloseLightbox = document.getElementById('btnCloseLightbox');
  const btnPrevLightbox = document.getElementById('btnPrevLightbox');
  const btnNextLightbox = document.getElementById('btnNextLightbox');

  function openLightbox(gallery, startIndex = 0) {
    currentGallery = gallery;
    currentLightboxIndex = startIndex;
    renderLightboxItem();
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    lightboxMediaContainer.innerHTML = '';
    document.body.style.overflow = '';
  }

  function renderLightboxItem() {
    if (!currentGallery || currentGallery.length === 0) return;
    const item = currentGallery[currentLightboxIndex];

    lightboxTitle.textContent = item.title || "Artwork Preview";
    lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${currentGallery.length}`;
    lightboxMediaContainer.innerHTML = '';

    if (item.type === 'video') {
      const video = document.createElement('video');
      video.src = item.src;
      video.className = 'lightbox-video';
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;
      lightboxMediaContainer.appendChild(video);
    } else {
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.title || "Portfolio Artwork";
      img.className = 'lightbox-img';
      lightboxMediaContainer.appendChild(img);
    }
  }

  function prevLightboxItem() {
    if (currentLightboxIndex > 0) {
      currentLightboxIndex--;
    } else {
      currentLightboxIndex = currentGallery.length - 1;
    }
    renderLightboxItem();
  }

  function nextLightboxItem() {
    if (currentLightboxIndex < currentGallery.length - 1) {
      currentLightboxIndex++;
    } else {
      currentLightboxIndex = 0;
    }
    renderLightboxItem();
  }

  btnCloseLightbox.addEventListener('click', closeLightbox);
  btnPrevLightbox.addEventListener('click', prevLightboxItem);
  btnNextLightbox.addEventListener('click', nextLightboxItem);

  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal || e.target.classList.contains('lightbox-stage')) {
      closeLightbox();
    }
  });

  // --------------------------------------------------------------------------
  // 3. Case Study Drawer & Modal
  // --------------------------------------------------------------------------
  const caseModal = document.getElementById('caseModal');
  const btnCloseDrawer = document.getElementById('btnCloseDrawer');
  const drawerOrgTag = document.getElementById('drawerOrgTag');
  const drawerTitle = document.getElementById('drawerTitle');
  const drawerGalleryGrid = document.getElementById('drawerGalleryGrid');

  function openCaseStudy(projectId) {
    const project = portfolioData[projectId];
    if (!project) return;

    drawerOrgTag.textContent = project.org;
    drawerTitle.textContent = project.title;

    // Gallery Grid
    drawerGalleryGrid.innerHTML = '';
    project.gallery.forEach((media, idx) => {
      const card = document.createElement('div');
      card.className = `case-gallery-item ${media.fullWidth ? 'full-width' : ''}`;
      
      if (media.type === 'video') {
        card.innerHTML = `
          <video class="case-gallery-img" src="${media.src}" muted loop playsinline></video>
        `;
      } else {
        card.innerHTML = `
          <img class="case-gallery-img" src="${media.src}" alt="${media.title}" loading="lazy">
        `;
      }

      card.addEventListener('click', () => {
        openLightbox(project.gallery, idx);
      });

      drawerGalleryGrid.appendChild(card);
    });

    caseModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCaseStudy() {
    caseModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  btnCloseDrawer.addEventListener('click', closeCaseStudy);
  caseModal.addEventListener('click', (e) => {
    if (e.target === caseModal) {
      closeCaseStudy();
    }
  });

  // --------------------------------------------------------------------------
  // 4. Keyboard Navigation
  // --------------------------------------------------------------------------
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (lightboxModal.classList.contains('active')) {
        closeLightbox();
      } else if (caseModal.classList.contains('active')) {
        closeCaseStudy();
      }
    } else if (e.key === 'ArrowLeft' && lightboxModal.classList.contains('active')) {
      prevLightboxItem();
    } else if (e.key === 'ArrowRight' && lightboxModal.classList.contains('active')) {
      nextLightboxItem();
    }
  });

  // --------------------------------------------------------------------------
  // 5. Work Filter Buttons
  // --------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category').split(' ');
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'flex';
          setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => { card.style.display = 'none'; }, 250);
        }
      });
    });
  });

  // Bind project card clicks
  document.querySelectorAll('[data-open-case]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const projId = el.getAttribute('data-open-case');
      openCaseStudy(projId);
    });
  });

  document.querySelectorAll('[data-quick-preview]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const projId = el.getAttribute('data-quick-preview');
      const project = portfolioData[projId];
      if (project && project.gallery.length > 0) {
        openLightbox(project.gallery, 0);
      }
    });
  });

  // --------------------------------------------------------------------------
  // 6. Hero Showcase Auto-Slider & Interactive Switcher
  // --------------------------------------------------------------------------
  const slides = document.querySelectorAll('.showcase-slide');
  const dots = document.querySelectorAll('.showcase-dot');
  let currentSlide = 0;
  let slideInterval;

  function setSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  function startSlideShow() {
    slideInterval = setInterval(() => {
      setSlide(currentSlide + 1);
    }, 4500);
  }

  function pauseSlideShow() {
    clearInterval(slideInterval);
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      pauseSlideShow();
      setSlide(idx);
      startSlideShow();
    });
  });

  const stage = document.querySelector('.showcase-stage');
  if (stage) {
    stage.addEventListener('mouseenter', pauseSlideShow);
    stage.addEventListener('mouseleave', startSlideShow);
    stage.addEventListener('click', () => {
      // Open case study for current active slide
      const activeSlide = slides[currentSlide];
      const proj = activeSlide.getAttribute('data-project-ref');
      if (proj) openCaseStudy(proj);
    });
  }

  startSlideShow();

  // --------------------------------------------------------------------------
  // 7. Header Scroll Observer & Active Navigation
  // --------------------------------------------------------------------------
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      // ScrollSpy
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    });
  }

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // --------------------------------------------------------------------------
  // 8. Contact & Copy to Clipboard
  // --------------------------------------------------------------------------
  const btnCopyEmail = document.getElementById('btnCopyEmail');
  const toastNotice = document.getElementById('toastNotice');

  function showToast(msg) {
    if (!toastNotice) return;
    toastNotice.querySelector('.toast-text').textContent = msg;
    toastNotice.classList.add('show');
    setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 3000);
  }

  if (btnCopyEmail) {
    btnCopyEmail.addEventListener('click', (e) => {
      e.preventDefault();
      const email = btnCopyEmail.getAttribute('data-email') || "hashirchbss@gmail.com";
      navigator.clipboard.writeText(email).then(() => {
        showToast(`Copied ${email} to clipboard!`);
      }).catch(() => {
        window.location.href = `mailto:${email}`;
      });
    });
  }
});
