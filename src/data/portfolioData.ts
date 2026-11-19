import { PortfolioConfig } from "../types/portfolio";

/**
 * ============================================================================
 * CENTRAL PORTFOLIO CONFIGURATION
 * ============================================================================
 * All texts, projects, showreels, services, statistics, contact info,
 * and social channels can be configured in this single file.
 * 
 * Replace placeholder values with your real production content when ready.
 * All project items are explicitly marked with `isPlaceholder: true`.
 * ============================================================================
 */

export const portfolioData: PortfolioConfig = {
  personalName: "Yashwanth Kasa", // Replace with your name or brand
  brandTagline: "Independent Video Editor & Creative Storyteller",
  eyebrowHero: "INDEPENDENT VIDEO EDITOR & CREATIVE STORYTELLER",
  heroHeadline: "I turn footage into stories.",
  heroDescription:
    "Creating engaging visual experiences through storytelling, thoughtful editing and creative execution.",

  // SECTION 02: SHOWREEL CONFIGURATION
  showreel: {
    title: "Official 2026 Showreel",
    label: "SELECTED SHOWREEL / 2026",
    duration: "01:48",
    videoUrl:
      "https://vjs.zencdn.net/v/oceans.mp4",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1920&q=85",
    description:
      "A cinematic montage of selected commercial cuts, short narrative sequences, fast-paced retention editing, and colour grading highlights.",
  },

  // SECTION 05: RESULTS & IMPACT (Oversized numbers & metrics)
  stats: [
    {
      id: "stat-1",
      value: "1.7M+",
      numericValue: 1.7,
      suffix: "M+",
      label: "Highest Views",
      description: "Highest organic views achieved on a single video project.",
    },
    {
      id: "stat-2",
      value: "500K+",
      numericValue: 500,
      suffix: "K+",
      label: "Viral Reach",
      description: "Multiple videos crossing the 500,000 view milestone.",
    },
    {
      id: "stat-3",
      value: "10K+",
      numericValue: 10,
      suffix: "K+",
      label: "Channel Growth",
      description: "YouTube subscriber growth driven through strategic pacing.",
    },
    {
      id: "stat-4",
      value: "30K+",
      numericValue: 30,
      suffix: "K+",
      label: "Average Reach",
      description: "Consistent average content reach across long-form releases.",
    },
  ],

  // SECTION 04: SERVICES (Minimal black & white design)
  services: [
    {
      id: "service-1",
      number: "01",
      title: "Short-form Video Editing",
      description:
        "Reels, YouTube Shorts, social media videos, engaging hooks, pacing, captions and retention-focused editing.",
      deliverables: [
        "Dynamic pacing & pattern interrupts",
        "Auditory sound design & SFX layering",
        "Animated typography & subtitles",
        "High-retention first 3-second hooks",
      ],
      iconName: "Zap",
    },
    {
      id: "service-2",
      number: "02",
      title: "Long-form Video Editing",
      description:
        "YouTube videos, travel vlogs, storytelling, visual transitions, sound design and narrative structure.",
      deliverables: [
        "Narrative arc & story pacing",
        "B-roll curation & speed ramping",
        "Audio mixing & musical dynamics",
        "Chapter structure & retention analysis",
      ],
      iconName: "Tv",
    },
    {
      id: "service-3",
      number: "03",
      title: "Cinematic Editing",
      description:
        "Movie teasers, trailers, promotional films, cinematic sequences and creative storytelling.",
      deliverables: [
        "Film-grade color grading (Dehancer/ACES)",
        "Tension building & rhythm cuts",
        "Atmos soundscapes & Foley design",
        "Cinematic letterboxing & aspect ratios",
      ],
      iconName: "Film",
    },
    {
      id: "service-4",
      number: "04",
      title: "Brand & Promotional Content",
      description:
        "Product videos, brand storytelling, advertisements and social media campaigns.",
      deliverables: [
        "Brand tone & identity alignment",
        "Commercial rhythm & call-to-action hooks",
        "Product feature callouts & motion graphics",
        "Multi-aspect ratio exports (16:9, 9:16, 1:1)",
      ],
      iconName: "Sparkles",
    },
  ],

  // SECTION 03: SELECTED WORK (Editable sample projects across 4 categories)
  projects: [
    {
      id: "project-1",
      title: "Midnight Tokyo — Narrative Teaser",
      category: "Cinematic Teasers",
      clientLabel: "Independent Short Film",
      duration: "02:14",
      year: "2026",
      shortDescription:
        "A moody, slow-burn cinematic teaser exploring loneliness and neon lights in Shibuya.",
      overview:
        "Commissioned as the teaser release for an indie neo-noir short film. The goal was to establish tension and world-building through measured rhythmic cuts, dark ambient soundscapes, and film-emulation color grading.",
      role: [
        "Lead Editor",
        "Colorist (DaVinci Resolve)",
        "Sound Designer & Mixer",
      ],
      editingApproach: [
        "Structured cuts around atmospheric silence and deliberate sound design rather than fast music.",
        "Applied 35mm film grain emulation using custom Kodak 5219 print profiles.",
        "Built a layered soundscape consisting of distant rain, train tracks, and subterranean sub-bass hits.",
      ],
      results:
        "Premiered on Vimeo Staff Picks with over 240,000 organic plays in the first 72 hours.",
      toolsUsed: ["DaVinci Resolve Studio", "Dehancer Pro", "iZotope RX 10"],
      thumbnailUrl:
        "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=85",
      videoUrl:
        "https://res.cloudinary.com/demo/video/upload/c_scale,w_720/sea_turtle.mp4",
      aspectRatio: "16:9",
      featured: true,
      isPlaceholder: true,
    },
    {
      id: "project-2",
      title: "Hyperflow 90 — Viral Streetwear Hook",
      category: "Short-form Content",
      clientLabel: "Apex Apparel Co.",
      duration: "00:42",
      year: "2026",
      shortDescription:
        "High-energy 9:16 social cut crafted for hyper-retention, seamless loops, and sound-sync transitions.",
      overview:
        "Engineered for TikTok and Instagram Reels to announce an exclusive drop. The client required maximum watch time, seamless loop integration, and stylized kinetic typography synced to bespoke bass music.",
      role: ["Vertical Video Editor", "Motion Graphics", "Audio Remixer"],
      editingApproach: [
        "Crafted a visually arresting 1.2-second opening hook with zero visual dead space.",
        "Constructed an exact-loop transition so the replay initiates without viewer hesitation.",
        "Hand-synced every cut to percussion transients with microscopic speed-ramping.",
      ],
      results:
        "1.7M+ total plays, 112% average watch percentage, generating 4,200 direct conversions.",
      toolsUsed: ["Adobe Premiere Pro", "After Effects", "Soundly"],
      thumbnailUrl:
        "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=1200&q=85",
      videoUrl:
        "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
      aspectRatio: "16:9",
      featured: true,
      isPlaceholder: true,
    },
    {
      id: "project-3",
      title: "The Architecture of Silence",
      category: "YouTube Long-form",
      clientLabel: "Design Documentaries",
      duration: "18:35",
      year: "2025",
      shortDescription:
        "An in-depth documentary exploring brutalist architecture and acoustic spaces across Northern Europe.",
      overview:
        "A long-form video essay designed to sustain high viewer engagement across a 20-minute runtime. Required seamless archival integration, custom graphic title cards, and multi-track audio mastering.",
      role: [
        "Senior Offline Editor",
        "Story Consultant",
        "Audio Mastering",
      ],
      editingApproach: [
        "Organized 12 hours of raw travel footage into a cohesive 4-act narrative structure.",
        "Employed micro-hooks at the 3, 7, and 12-minute marks to prevent audience drop-off.",
        "Engineered a rich, spatial binaural mix allowing architectural echoes to envelop the listener.",
      ],
      results:
        "Maintained 62% average view duration (AVD) on an 18-minute video, adding 10,400 new channel subscribers.",
      toolsUsed: ["DaVinci Resolve Studio", "Logic Pro X", "Photoshop"],
      thumbnailUrl:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85",
      videoUrl:
        "https://cdn.jsdelivr.net/gh/mediaelement/mediaelement-files@master/big_buck_bunny.mp4",
      aspectRatio: "16:9",
      featured: false,
      isPlaceholder: true,
    },
    {
      id: "project-4",
      title: "Vanguard Studio — Brand Launch Film",
      category: "Brand & Promotional Videos",
      clientLabel: "Vanguard Audio Hardware",
      duration: "01:30",
      year: "2026",
      shortDescription:
        "Sleek commercial film showcasing precision industrial design, haptic textures, and sound engineering.",
      overview:
        "A high-impact product video produced for the international launch of high-end planar headphones. The edit highlights tactile materials, close-up machining, and acoustic superiority.",
      role: [
        "Commercial Editor",
        "Color Grading",
        "Foley & Sound Designer",
      ],
      editingApproach: [
        "Juxtaposed macro mechanical shots with visceral sound design for knobs and metal switches.",
        "Refined visual cadence to match an original cinematic orchestral score.",
        "Balanced clean, minimalist typography with sleek Apple-inspired editorial pacing.",
      ],
      results:
        "Featured on the client's homepage and ad campaigns across US & EU markets, reaching 450K+ targeted impressions.",
      toolsUsed: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
      thumbnailUrl:
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=85",
      videoUrl:
        "https://res.cloudinary.com/demo/video/upload/c_scale,w_720/elephants.mp4",
      aspectRatio: "16:9",
      featured: false,
      isPlaceholder: true,
    },
    {
      id: "project-5",
      title: "Solitude — Icelandic Glacier Journey",
      category: "YouTube Long-form",
      clientLabel: "Visual Odyssey Channel",
      duration: "14:10",
      year: "2025",
      shortDescription:
        "A visually breathtaking travel story documenting a solitary trek through Iceland's volcanic highlands.",
      overview:
        "Constructed from 4K drone passes, handheld gimbal walks, and personal audio diaries. The pacing blends meditative tranquility with the harsh reality of arctic weather.",
      role: ["Lead Editor", "Sound Design", "Color Grading"],
      editingApproach: [
        "Used natural ambient wind and ice crackling as the primary rhythm driver before introducing score.",
        "Color graded in ACES workflow to maintain delicate highlights in snow and deep basalt blacks.",
        "Structured narrative around personal journal entries voiced by the creator.",
      ],
      results:
        "512K views with 18,000 likes and 1,200 comments praising the pacing and audio design.",
      toolsUsed: ["DaVinci Resolve Studio", "Premiere Pro", "Artlist FX"],
      thumbnailUrl:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
      videoUrl:
        "https://vjs.zencdn.net/v/oceans.mp4",
      aspectRatio: "16:9",
      featured: false,
      isPlaceholder: true,
    },
    {
      id: "project-6",
      title: "Velocity Formula — Kinetic Social Reels",
      category: "Short-form Content",
      clientLabel: "Motorsport Digital",
      duration: "00:35",
      year: "2026",
      shortDescription:
        "Adrenaline-fueled short-form series showcasing trackside race mechanics, tyre changes, and pit stops.",
      overview:
        "Multi-asset short-form campaign designed for fast mobile consumption. Required heavy audio treatment of engine revs and precision cuts matching the rhythm of the pit crew.",
      role: ["Short-form Specialist", "SFX Designer"],
      editingApproach: [
        "Micro-frame match cuts between pit crew tools and tyre changes.",
        "Applied punchy speed ramps to exaggerate mechanical momentum.",
        "Custom kinetic bold typography for vital telemetry data overlays.",
      ],
      results:
        "Average 840K views across 4 platform uploads, with 38% sharing rate.",
      toolsUsed: ["Adobe Premiere Pro", "CapCut Pro Desktop", "Audition"],
      thumbnailUrl:
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=85",
      videoUrl:
        "https://res.cloudinary.com/demo/video/upload/c_scale,w_720/sea_turtle.mp4",
      aspectRatio: "16:9",
      featured: false,
      isPlaceholder: true,
    },
  ],

  // SECTION 06: ABOUT ME
  about: {
    eyebrow: "BEHIND THE EDITS",
    headline: "The Creative Behind the Timeline.",
    introduction:
      "I'm a video editor and creative content specialist passionate about transforming raw footage into engaging visual stories. My approach combines storytelling, editing techniques and an understanding of digital content to create videos that connect with audiences.",
    philosophyTitle: "My Editing Philosophy",
    philosophyText:
      "Every cut is an emotional choice, not just a technical transition. Pacing isn't just about speed—it's about tension, breathing room, and leading the viewer's eye exactly where the story needs it to go.",
    approachTitle: "Creative & Strategic Approach",
    approachPoints: [
      "Story First: Identifying the core emotional hook and narrative spine before laying the first cut.",
      "Auditory Immersion: Sound design accounts for 60% of emotional impact. Every impact, breath, and silence is intentionally designed.",
      "Retention Psychology: Understanding modern attention spans without resorting to cheap gimmicks or frantic over-editing.",
      "Color Tonality: Harmonious color palettes that elevate production value and reinforce the narrative mood.",
    ],
    experienceTitle: "Digital Marketing & Content Expertise",
    experienceText:
      "Having edited for high-growth YouTube creators and commercial brands, I analyze retention curves, audience drop-off markers, and platform-specific behaviors. I build edits that don't just look cinematic—they accomplish measurable objectives.",
    softwareToolkit: [
      "DaVinci Resolve Studio",
      "Adobe Premiere Pro",
      "Adobe After Effects",
    ],
    portraitPlaceholderUrl:
      "https://drive.google.com/drive/u/0/folders/1yh1vctp2w3IWsmnQGGSTGyCjaaLIONgH",
  },

    // SECTION 07: MY WORKFLOW (5-step timeline)
    workflow: {
      eyebrow: "THE PROCESS",
      headline: "From Raw Footage to Final Cut.",
      steps: [
        {
          step: "STEP 01",
          number: "01",
          title: "Understand",
          description:
            "Understand the client's vision, objectives, target audience and content requirements.",
          detail:
            "Deep dive into reference materials, target audience expectations, delivery formats, and project goals through a streamlined briefing questionnaire.",
        },
        {
          step: "STEP 02",
          number: "02",
          title: "Plan",
          description:
            "Develop the storytelling structure, pacing and creative direction.",
          detail:
            "Review raw footage, build the paper edit or select stringout, choose musical themes, and define the rhythmic trajectory.",
        },
        {
          step: "STEP 03",
          number: "03",
          title: "Create",
          description:
            "Edit footage, develop sound design, add motion elements and refine visuals.",
          detail:
            "Assemble the rough cut, layer Foley/SFX, sync pacing to musical beats, implement kinetic titles, and execute initial color grading.",
        },
        {
          step: "STEP 04",
          number: "04",
          title: "Refine",
          description:
            "Collect feedback, make revisions and improve the final output.",
          detail:
            "Collaborate via time-coded review links (Frame.io/Vimeo), fine-tune cuts, balance dialog audio levels, and polish every micro-transition.",
        },
        {
          step: "STEP 05",
          number: "05",
          title: "Deliver",
          description:
            "Export and deliver polished, platform-ready content.",
          detail:
            "Deliver master 4K ProRes/H.265 files, platform-specific vertical crops, thumbnail selects, and organized project archives ready for immediate launch.",
        },
      ],
    },

    // SECTION 08: CONTACT & FOOTER
    contact: {
      email: "yashwanthkasa153@gmail.com",
      whatsapp: "+91 8142263049",
      whatsappUrl: "https://wa.me/8142263049",
      instagram: "@yashwanth_kasa",
      instagramUrl: "https://www.instagram.com/yashwanth_kasa/?hl=en",
      location: "Available Worldwide (Remote / On-Location)",
      availability: "Booking projects for Q2 / Q3 2026",
    },
  };
