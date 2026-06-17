export interface TreatmentExtra {
  headline: string;
  fullDesc: string;
  process: { step: string; desc: string }[];
  suitableFor: string[];
  sessionDuration: string;
  numSessions: string;
  downtime: string;
  bgGradient: string;
  heroImg: string;
}

export const TREATMENT_DETAILS: Record<string, TreatmentExtra> = {
  "hair-regrowth-prp": {
    headline: "Restore what time and genetics took away",
    fullDesc:
      "Hair thinning and loss affects millions of Indians, yet the root causes are often treatable. Our PRP and GFC therapies harness the power of your own blood's growth factors to reactivate dormant follicles and stimulate natural hair regrowth — from within.",
    process: [
      {
        step: "Blood Draw & Centrifugation",
        desc: "A small blood sample is processed to extract concentrated Platelet-Rich Plasma packed with powerful growth factors.",
      },
      {
        step: "Scalp Preparation",
        desc: "The scalp is cleansed and numbing cream is applied to ensure a comfortable and pain-free experience.",
      },
      {
        step: "Micro-Injection Therapy",
        desc: "PRP or GFC is precisely micro-injected into targeted areas of the scalp to reactivate and nourish dormant follicles.",
      },
    ],
    suitableFor: [
      "Men & women with androgenetic alopecia",
      "Early to moderate hair thinning",
      "Post-partum hair loss",
      "Diffuse thinning without complete follicle loss",
    ],
    sessionDuration: "45–60 min",
    numSessions: "4–6 sessions, monthly",
    downtime: "None",
    bgGradient: "from-forest to-forest-dark",
    heroImg: "https://images.unsplash.com/photo-1522337360826-0a3fc7cf9dba?auto=format&fit=crop&w=1200&q=80",
  },

  "acne-treatment": {
    headline: "Clear skin isn't a dream — it's a medical outcome",
    fullDesc:
      "Acne is a complex, multi-factorial condition that goes far beyond surface-level blemishes. Our evidence-based medical acne protocol addresses root causes — hormonal imbalances, bacterial overgrowth, excess sebum, and inflammation — delivering lasting clarity and renewed confidence.",
    process: [
      {
        step: "Root Cause Diagnosis",
        desc: "Dr. Snehal conducts a comprehensive skin and hormonal assessment to precisely identify your unique acne triggers.",
      },
      {
        step: "Targeted Medical Treatment",
        desc: "A personalised combination of prescription actives, chemical peels, LED therapy, and medical-grade facials.",
      },
      {
        step: "Scar Revision",
        desc: "Advanced laser and microneedling techniques restore smooth, even skin texture where acne has left its mark.",
      },
    ],
    suitableFor: [
      "Active acne (mild to severe)",
      "Hormonal and cystic acne",
      "Post-acne scarring and PIH",
      "Teen and adult acne",
    ],
    sessionDuration: "30–60 min",
    numSessions: "6–8 sessions over 3 months",
    downtime: "Minimal",
    bgGradient: "from-terracotta to-terracotta-dark",
    heroImg: "https://images.unsplash.com/photo-1570158268183-d296b2892211?auto=format&fit=crop&w=1200&q=80",
  },

  "pigmentation-treatment": {
    headline: "Reveal the luminous, even skin tone you deserve",
    fullDesc:
      "Hyperpigmentation — melasma, dark spots, sun damage — affects over 40% of Indian women. Our targeted depigmentation protocols combine advanced laser technology with medical-grade chemical peels and prescription actives for visibly brighter, more radiant skin.",
    process: [
      {
        step: "Pigmentation Mapping",
        desc: "Detailed clinical assessment to identify pigmentation type, depth, and the underlying cause driving it.",
      },
      {
        step: "Laser & Peel Treatment",
        desc: "Q-Switch laser and customised chemical peels target melanin deposits at multiple skin depths simultaneously.",
      },
      {
        step: "Maintenance Protocol",
        desc: "A personalised home-care regime and periodic maintenance sessions prevent recurrence and sustain results.",
      },
    ],
    suitableFor: [
      "Melasma and sun-induced hyperpigmentation",
      "Post-inflammatory hyperpigmentation (PIH)",
      "Dark spots and uneven skin tone",
      "All skin types including darker Indian skin tones",
    ],
    sessionDuration: "30–45 min",
    numSessions: "4–8 sessions, bi-weekly",
    downtime: "1–3 days",
    bgGradient: "from-sand-dark to-forest-light",
    heroImg: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=1200&q=80",
  },

  "anti-ageing": {
    headline: "Turn back the clock — naturally and beautifully",
    fullDesc:
      "Ageing is natural; looking your age is optional. Our luxury anti-ageing treatments use the latest advances in aesthetic medicine to restore lost volume, smooth fine lines, and lift the skin — with results so natural, you'll simply look like a well-rested, radiant version of yourself.",
    process: [
      {
        step: "Facial Aesthetic Analysis",
        desc: "A detailed assessment of your facial structure, volume loss, and skin quality to design a truly personalised plan.",
      },
      {
        step: "Injectable & Energy Treatments",
        desc: "A bespoke combination of Botox, dermal fillers, skin boosters, and RF Microneedling — delivered with artistic precision.",
      },
      {
        step: "Ongoing Refinement",
        desc: "Scheduled maintenance sessions to sustain, enhance, and evolve your results as your skin naturally changes.",
      },
    ],
    suitableFor: [
      "Fine lines and wrinkles",
      "Volume loss and facial hollowing",
      "Skin laxity and sagging",
      "Preventive anti-ageing (late 20s–30s)",
    ],
    sessionDuration: "30–90 min",
    numSessions: "1–3 initial sessions",
    downtime: "Minimal to none",
    bgGradient: "from-forest-light to-forest",
    heroImg: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=80",
  },

  "laser-hair-reduction": {
    headline: "Permanent smoothness — effortless confidence",
    fullDesc:
      "Say goodbye to razors, waxing, and ingrown hairs — permanently. Our USFDA-cleared diode and Nd:YAG lasers safely and effectively reduce hair growth on all body areas for all skin types, with minimal discomfort and maximum long-lasting precision.",
    process: [
      {
        step: "Skin & Hair Assessment",
        desc: "Your skin tone and hair type are assessed to select the optimal laser wavelength for maximum safety and efficacy.",
      },
      {
        step: "Laser Treatment Sessions",
        desc: "Precise laser pulses target follicles during the active growth phase, permanently disabling them without harming surrounding skin.",
      },
      {
        step: "Between-Session Care",
        desc: "A simple home-care guide ensures optimal healing and prepares the skin for each subsequent session.",
      },
    ],
    suitableFor: [
      "All skin tones including dark Indian skin",
      "All body areas — face, underarms, legs, bikini",
      "Men and women",
      "Anyone seeking permanent hair reduction",
    ],
    sessionDuration: "15–60 min (area dependent)",
    numSessions: "6–8 sessions, 4–6 weeks apart",
    downtime: "None",
    bgGradient: "from-terracotta-dark to-forest-dark",
    heroImg: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  },

  "skin-rejuvenation": {
    headline: "Hydrated, glowing, youthful skin — restored from within",
    fullDesc:
      "Your skin faces daily assault from pollution, UV exposure, stress, and the natural ageing process. Our skin rejuvenation protocols — from HydraFacial to Exosome infusion — deeply hydrate, nourish, and restore your skin's natural glow at the cellular level.",
    process: [
      {
        step: "Skin Analysis",
        desc: "A thorough analysis of hydration levels, skin texture, and specific concerns to design the right rejuvenation protocol.",
      },
      {
        step: "Customised Treatment",
        desc: "A tailored combination of HydraFacial, mesotherapy micro-injections, or Exosome infusion based on your goals.",
      },
      {
        step: "Glow Maintenance",
        desc: "A personalised home-care routine and periodic booster sessions to maintain long-lasting luminosity.",
      },
    ],
    suitableFor: [
      "Dull, dehydrated, or tired-looking skin",
      "Fine lines and early skin ageing",
      "Post-treatment skin recovery",
      "Anyone wanting a lasting healthy glow",
    ],
    sessionDuration: "45–75 min",
    numSessions: "4–6 sessions initially, then maintenance",
    downtime: "None to minimal",
    bgGradient: "from-sand to-sand-dark",
    heroImg: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80",
  },

  "exosome-therapy": {
    headline: "Cellular regeneration at the frontier of skin science",
    fullDesc:
      "Exosome therapy represents the next frontier in regenerative dermatology. These nano-sized biological vesicles carry powerful growth factors and signalling molecules that instruct your skin and scalp cells to repair, regenerate, and renew at a level previously unachievable.",
    process: [
      {
        step: "Skin or Scalp Preparation",
        desc: "Microneedling or fractional laser creates micro-channels to maximise exosome penetration into the target tissue.",
      },
      {
        step: "Exosome Application",
        desc: "Pharmaceutical-grade exosomes are precisely applied and driven deep into the dermis or scalp for cellular activation.",
      },
      {
        step: "Regenerative Response",
        desc: "The biological repair process begins immediately, with visible improvements unfolding progressively over 4–8 weeks.",
      },
    ],
    suitableFor: [
      "Advanced hair thinning and follicle damage",
      "Skin with poor healing or regeneration",
      "Post-procedure recovery acceleration",
      "Patients seeking cutting-edge non-surgical solutions",
    ],
    sessionDuration: "60–90 min",
    numSessions: "2–4 sessions",
    downtime: "1–2 days",
    bgGradient: "from-forest to-terracotta-dark",
    heroImg: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=1200&q=80",
  },

  "bridal-programs": {
    headline: "Glow on the most important day of your life",
    fullDesc:
      "Your wedding day deserves the most radiant version of you. Our Bridal Confidence Program is Pune's most comprehensive pre-bridal journey — a bespoke 3–6 month protocol designed to transform your skin texture, tone, and hair health for an unforgettable, camera-ready glow.",
    process: [
      {
        step: "Baseline Assessment",
        desc: "A detailed consultation 3–6 months before the wedding to assess skin and hair status and set personalised beauty goals.",
      },
      {
        step: "Phased Treatment Journey",
        desc: "A carefully sequenced protocol — pigmentation, acne, hair growth, brightening — tailored to your unique timeline and wedding date.",
      },
      {
        step: "Final Glow Protocol",
        desc: "A signature pre-wedding skin preparation session 1 week before the big day for the ultimate luminous, bridal-ready finish.",
      },
    ],
    suitableFor: [
      "Brides planning 3–6 months in advance",
      "Women with pigmentation, acne, or hair concerns",
      "Anyone wanting to look their absolute best on their wedding day",
      "Bridesmaids and mothers of the bride",
    ],
    sessionDuration: "Varies by session type",
    numSessions: "Multiple over 3–6 months",
    downtime: "Varies by treatment stage",
    bgGradient: "from-terracotta to-forest",
    heroImg: "https://images.unsplash.com/photo-1594736797933-d0e20b17d530?auto=format&fit=crop&w=1200&q=80",
  },

  "mens-skin-hair": {
    headline: "Modern grooming meets medical precision",
    fullDesc:
      "Great skin and healthy hair aren't just for women. India's modern gentleman understands that confidence starts with how you look and feel. Our Men's Skin & Hair program combines advanced medical treatments with a discreet, no-judgment approach — because you deserve expert care too.",
    process: [
      {
        step: "Comprehensive Analysis",
        desc: "A thorough assessment of your hair, scalp health, skin concerns, and any hormonal factors affecting your appearance.",
      },
      {
        step: "Personalised Treatment Plan",
        desc: "A bespoke combination of hair restoration therapies, acne or pigmentation treatments, and anti-ageing interventions.",
      },
      {
        step: "Streamlined Maintenance",
        desc: "A time-efficient maintenance schedule designed to fit your busy professional lifestyle without compromise.",
      },
    ],
    suitableFor: [
      "Men experiencing hair loss or thinning",
      "Men with acne, pigmentation, or oily skin",
      "Men concerned about early skin ageing",
      "Men seeking beard enhancement and refined grooming",
    ],
    sessionDuration: "45–90 min",
    numSessions: "Varies by concern",
    downtime: "Minimal",
    bgGradient: "from-forest-dark to-forest",
    heroImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
  },
};
