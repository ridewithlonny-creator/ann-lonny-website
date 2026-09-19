/*
 * Central content file.
 * Edit brand details, translations, lessons, instructors, FAQs and links here.
 */

export type Locale = "en" | "zh";

type LocalizedText = Record<Locale, string>;

// Tax-inclusive full-day rates per group, with one instructor.
export const japanLessonRates = [
  { id: "niseko", location: { en: "Hirafu / Annupuri", zh: "Hirafu／Annupuri" }, amount: "110,000" },
  { id: "rusutsu", location: { en: "Rusutsu", zh: "留壽都 Rusutsu" }, amount: "130,000" },
];

export const siteConfig = {
  sharedInstagramUrl: "https://www.instagram.com/alcouplelife/",
  perisherLessonsUrl: "https://shop.perisher.com.au/perisher-private-lessons",
  brandName: "Ann&Lonny",
  defaultLocale: "zh" as Locale,
  features: {
    // Set to false to hide the student testimonials section.
    testimonials: true,
  },
  contact: {
    // Add each person's links separately. A local QR image can be used when no public link is available.
    lonny: {
      whatsapp: {
        href: "+61 497 131 933",
        detail: { en: "+61 497 131 933", zh: "+61 497 131 933" },
      },
      line: {
        href: "/assets/images/contact/lonny-line-qr.jpg",
        detail: { en: "ID: B10164044", zh: "ID：B10164044" },
      },
      wechat: {
        href: "/assets/images/contact/lonny-wechat-qr.jpg",
        detail: { en: "ID: Lonny210614", zh: "ID：Lonny210614" },
      },
      instagram: {
        href: "https://www.instagram.com/lonny0614/",
        detail: { en: "@lonny0614", zh: "@lonny0614" },
      },
    },
    ann: {
      whatsapp: {
        href: "+61 459 495 550",
        detail: { en: "+61 459 495 550", zh: "+61 459 495 550" },
      },
      line: {
        href: "/assets/images/contact/ann-line-qr.jpg",
        detail: { en: "ID: 830309000", zh: "ID：830309000" },
      },
      wechat: {
        href: "/assets/images/contact/ann-wechat-qr.jpg",
        detail: { en: "ID: Annsnowsport", zh: "ID：Annsnowsport" },
      },
      instagram: {
        href: "https://www.instagram.com/ann_yu0309/",
        detail: { en: "@ann_yu0309", zh: "@ann_yu0309" },
      },
    },
  },
  prefilledMessage: {
    en: "Hi, I found your website through a friend. I’m interested in a ski or snowboard lesson.",
    zh: "你好，我是朋友推薦看到網站的，想詢問雙板或單板課程。",
  } satisfies Record<Locale, string>,
};

export const contactPlatforms = [
  { key: "whatsapp" },
  { key: "line" },
  { key: "wechat" },
  { key: "instagram" },
] as const;

export const lessons: Array<{
  id: string;
  image: string;
  objectPosition?: string;
  alt: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
}> = [
  {
    id: "ski",
    image: "/assets/images/course-ski.webp",
    objectPosition: "center 50%",
    alt: { en: "Skier carving a turn on a groomed slope", zh: "雙板滑雪者在雪道上刻滑轉彎" },
    title: { en: "Ski Lessons", zh: "雙板滑雪課程" },
    description: {
      en: "From your first turns to improving your skiing movements, every lesson is adjusted to your ability, confidence and goals. If you only have one to three days on snow, skiing can be a good place to start and may help you enjoy moving around the mountain sooner. The basics are relatively approachable, while advanced skiing takes time and focused practice to refine.",
      zh: "從第一次轉彎，到改善滑行動作，每堂雙板課程都會依照你的程度、信心與目標調整。如果你只安排 1～3 天滑雪，雙板通常比較容易開始，也能較快享受在雪上滑行的樂趣；不過想要進階，仍需要花時間練習與調整動作。簡單來說，雙板入門較容易，進階則更需要持續練習。",
    },
  },
  {
    id: "snowboard",
    image: "/assets/images/course-snowboard.webp",
    objectPosition: "center 34%",
    alt: { en: "Snowboarder riding powder through a snowy forest", zh: "單板滑雪者在雪林深雪中滑行" },
    title: { en: "Snowboard Lessons", zh: "單板滑雪課程" },
    description: {
      en: "From building a stable foundation to riding with more confidence and efficiency, we use clear steps, focused practice and practical feedback. If you prefer a more cautious pace, your instructor can provide hands-on support where appropriate to help you find the feeling safely. Snowboarding often involves more falls before linking turns, but once balance and edge control begin to click, progression can feel more natural. The beginning is usually more challenging, while later development can feel more straightforward.",
      zh: "從建立穩定基礎，到更有信心且有效率地滑行，我們會透過清楚步驟、重點練習與實用回饋陪你進步。如果你比較謹慎，教練也可以在適合且安全的情況下提供手扶協助，幫助你找到動作感覺。單板在學會連續轉彎前通常比較容易摔倒，但找到平衡與用刃感覺後，後續進階往往會更順利。簡單來說，單板入門較具挑戰，進階則相對直覺。",
    },
  },
  {
    id: "kids",
    image: "/assets/images/course-kids.webp",
    objectPosition: "49% 50%",
    alt: { en: "Instructor with two young students at the ski area", zh: "教練與兩位兒童學員在雪場的合照" },
    title: { en: "Kids Lessons", zh: "兒童課程" },
    description: {
      en: "We have taught children racing in Australia, fast-progressing young learners, and children who arrived because their parents wanted them to ski. Every child is different, but they learn fastest when they feel happy and relaxed. If they are tired or need a break, we may pause for snow play, a snowball fight or a hot chocolate. Our priority is helping children genuinely enjoy skiing.",
      zh: "我們教過在澳洲參與競速的小朋友、學習進度非常快的孩子，也遇過一開始並不想滑，只是由家長帶來的孩子。每個孩子都不一樣，但在開心、放鬆的狀態下學得最快。如果孩子累了，或暫時不想滑，我們會視情況安排玩雪、打雪仗，或喝杯熱巧克力休息；最重要的是讓孩子真正愛上滑雪。",
    },
  },
  {
    id: "adults",
    image: "/assets/images/course-adults.webp",
    alt: { en: "Adult students and instructors together at the ski area", zh: "成人學員與教練在雪場的團體合照" },
    title: { en: "Adult Lessons", zh: "成人課程" },
    description: {
      en: "We recommend a maximum of four students with similar ability levels. For safety, the lesson pace and terrain are based on the least experienced student. Everyone will still receive suitable exercises, but a large difference in ability can limit learning when the group stays on terrain that does not match each student’s level.",
      zh: "建議最多 4 人，且成員程度不要相差太多。基於安全考量，課程節奏與地形會以程度較慢的學生為主；其他學生仍會獲得合適的練習，但程度差距過大時，長時間停留在不符合自身程度的地形，仍可能影響學習效果。",
    },
  },
  {
    id: "families",
    image: "/assets/images/course-family.webp",
    alt: { en: "Two snowboarders enjoying a day on snow together", zh: "兩位單板滑雪者一起享受雪上時光" },
    title: { en: "Family Lessons", zh: "家庭課程" },
    description: {
      en: "For families who want to enjoy time on snow together. Adults and children learn differently, so we recommend meeting for part of the lesson to ski together or film a family run. If skill development is the main goal, separate adult and children’s lessons allow everyone to learn at the right pace.",
      zh: "適合想享受雪上家庭同樂的客人。成人與兒童的學習方式不同，若想在相同地形一起滑，建議安排一段共同滑行或拍攝家庭影片的時間；如果主要目標是提升技巧，成人與兒童分開上課，能讓每個人按照適合自己的節奏學習。",
    },
  },
  {
    id: "all-mountain-video",
    image: "/assets/images/snowboard-adventure.webp",
    alt: { en: "Ann&Lonny in a snowy mountain setting", zh: "Ann&Lonny 在雪山環境中的照片" },
    title: { en: "Mountain Exploration & Ride Films", zh: "雪山探索與滑行紀錄" },
    description: {
      en: "With experience across multiple seasons in Australia and Japan, we know the local teaching areas and all-mountain terrain well. This lesson is for students who want to explore more runs, build all-mountain experience or capture their riding on video. Seeing your own footage makes it easier to understand your movements and what to adjust next.",
      zh: "我們累積了橫跨澳洲與日本的多個雪季經驗，熟悉當地教學雪道與全山不同地形。適合想探索更多雪道、累積全山滑行經驗，或拍攝個人滑行紀錄的學生；透過自己的影片，更容易看見動作並了解下一步如何調整。",
    },
  },
];

export const instructors: Array<{
  id: string;
  name: string;
  image: string;
  imagePosition?: string;
  imageAlt: LocalizedText;
  discipline: LocalizedText;
  languages: LocalizedText;
  qualifications: LocalizedText;
  bio: LocalizedText;
}> = [
  {
    id: "lonny",
    name: "Lonny",
    image: "/assets/images/lonny-profile-2026.webp",
    imagePosition: "center 70%",
    imageAlt: { en: "Portrait of Lonny on the mountain", zh: "Lonny 在雪山上的個人照片" },
    discipline: { en: "Ski & Snowboard", zh: "雙板與單板" },
    languages: { en: "English & Chinese", zh: "英文與中文" },
    qualifications: {
      en: "APSI Snowboard Level 3 · CASI Snowboard Level 2 · APSI Alpine Level 2 · Avalanche Skills Training 2 (AST 2)",
      zh: "APSI 單板三級 · CASI 單板二級 · APSI 雙板二級 · 雪崩技能訓練二級（AST 2）",
    },
    bio: {
      en: "Lonny specialises in teaching children and analysing advanced riding. Patient and detail-oriented, he breaks movements into clear steps and uses practice, feedback and video analysis to help students progress in a relaxed, friendly lesson. He enjoys ski and snowboard equally for the different experiences each one offers.",
      zh: "Lonny 擅長兒童教學與進階滑行分析。他有耐心，也會把動作拆解成清楚的小步驟，透過反覆練習、即時回饋與影片分析，陪學生像朋友一樣自在學習。對他而言，雙板與單板各有不同的樂趣。",
    },
  },
  {
    id: "ann",
    name: "Ann",
    image: "/assets/images/ann-profile-2026.webp",
    imagePosition: "center 68%",
    imageAlt: { en: "Portrait of Ann on the mountain", zh: "Ann 在雪山上的個人照片" },
    discipline: { en: "Ski & Snowboard", zh: "雙板與單板" },
    languages: { en: "English & Chinese", zh: "英文與中文" },
    qualifications: {
      en: "APSI Snowboard Level 3 · CASI Snowboard Level 2 · APSI Alpine Level 2 · Avalanche Skills Training 2 (AST 2)",
      zh: "APSI 單板三級 · CASI 單板二級 · APSI 雙板二級 · 雪崩技能訓練二級（AST 2）",
    },
    bio: {
      en: "Ann has always loved sport, from volleyball, surfing and fitness to competing in powerlifting. She teaches with patience, adapts her explanations to how each student learns, and provides immediate feedback throughout the lesson. Snow sports are action sports, but when safety boundaries and speed are managed well, they can be enjoyed by the whole family. Ann will guide your family through a safe, approachable way to enjoy the fun of skiing together.",
      zh: "Ann 喜歡各種運動，從排球、衝浪、健身，到曾經參加健力比賽。她的教學耐心，會依照每位學生的理解方式提供不同的講解，並在課程中給予即時回饋。滑雪是一項極限運動，但只要掌握合適的安全範圍與速度，也能成為全家大小都能一起體驗的活動。讓 Ann 帶著你們，用安全、簡單的方式享受滑雪的樂趣！",
    },
  },
];

export const testimonials: Array<{
  id: string;
  quote: string;
  name: string;
  lesson: LocalizedText;
  region: LocalizedText;
}> = [
  {
    id: "ingrid",
    quote: "兩寶的滑雪初體驗很開心，謝謝你！希望下次有機會再來找ANN姊姊。Keep in touch!",
    name: "Ingrid",
    lesson: { en: "Kids Ski Lessons", zh: "兒童雙板課程" },
    region: { en: "Perisher, Australia", zh: "澳洲 Perisher" },
  },
  {
    id: "anthony",
    quote: "Thanks very much for the review.  The girls had a great experience, thanks for making it possible.",
    name: "Anthony",
    lesson: { en: "Kids Ski Lessons", zh: "兒童雙板課程" },
    region: { en: "Perisher, Australia", zh: "澳洲 Perisher" },
  },
  {
    id: "dan-lee",
    quote: "感謝Lonny教練， 今天每個彎 還有很多細節都能立馬揪錯， 知道我喜歡挑戰， 也讓我成功嘗試了在高級雪道換刃。還有衝小樹林 和怎麼蘑菇換刃\n因著每位學員工程度和喜好 制定教學方向， 這點我很喜歡， 人也很好👍 讚",
    name: "Dan Lee",
    lesson: { en: "Adult Snowboard Lessons", zh: "成人單板課程" },
    region: { en: "Perisher, Australia", zh: "澳洲 Perisher" },
  },
  {
    id: "neko",
    quote: "感谢Lonny教练两个小时的教学，很有效率。最近一直困扰于澳洲很差的雪况下，无法在雪包很多的陡坡稳定地搓雪换刃，Lonny解释了澳洲体系在这种情况下的优势，因材施教，一堂课后得到了很大的改善。教的一些小技巧也很有利于找刃感。Lonny非常专业，也很会教学，希望有机会再上你的课。",
    name: "Neko",
    lesson: { en: "Adult Snowboard Lessons", zh: "成人單板課程" },
    region: { en: "Perisher, Australia", zh: "澳洲 Perisher" },
  },
];

export const content = {
  en: {
    nav: {
      aria: "Primary navigation",
      home: "Ann&Lonny home",
      skipContent: "Skip to main content",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      language: "Choose language",
      about: "About",
      lessons: "Lessons",
      pricing: "Pricing",
      instructors: "Instructors",
      booking: "Booking Process",
      faq: "FAQ",
      contact: "Contact",
    },
    common: {
      askLesson: "Ask About a Lesson",
      photoPlaceholder: "[PHOTO PLACEHOLDER]",
      addLink: "[ADD LINK]",
    },
    hero: {
      eyebrow: "PERISHER, NSW · ACCENT, HOKKAIDO JAPAN",
      title: "Personalised Ski & Snowboard Lessons",
      subtitle:
        "Friendly, professional lessons designed around your goals, confidence and enjoyment.",
      secondaryCta: "How Booking Works",
    },
    about: {
      eyebrow: "About us",
      title: "Learn with confidence. Enjoy every turn.",
      intro:
        "We both graduated from the Department of Recreational Sports at National Pingtung University of Science and Technology, then worked together as fitness coaches in Taiwan. We love surfing together; today, we are full-time ski and snowboard instructors following winter between Perisher in Australia and ACCENT in Hokkaido, Japan.",
      photoLabel: "[LONNY & ANN PHOTO]",
      points: [
        {
          title: "Who we are",
          text: "Both of us have more than five seasons of official snow school experience and hold APSI Level 3 snowboard instructor qualifications. We teach in Chinese or English, and our shared background in sport and coaching helps us explain movement, technique and the theory behind them more clearly.",
        },
        {
          title: "How we teach",
          text: "Clear, easy-to-understand lessons shaped around each student’s pace, goals and confidence. We also consider the terrain, snow conditions and slope traffic, adjusting the lesson content whenever needed.",
        },
        {
          title: "Where we teach",
          text: "Perisher, New South Wales in the Southern Hemisphere season, and with ACCENT in Hokkaido, Japan during the Northern Hemisphere season.",
        },
      ],
    },
    lessons: {
      eyebrow: "Lessons",
      title: "A lesson built around you.",
      intro:
        "Lessons for families, children and students who want to explore more runs and terrain. Final details are confirmed after you contact us.",
      pricingLink: "View lesson prices",
    },
    pricing: {
      eyebrow: "Lesson pricing",
      chooseRegion: "Choose lesson pricing region",
      regions: { japan: "Japan", australia: "Australia · Perisher" },
      title: "Plan your day on snow.",
      intro: "Explore our lesson prices, then get in touch to arrange the right experience for you.",
      caption: "Japan full-day ski & snowboard lessons",
      locationHeading: "Starting location",
      priceHeading: "Full day · per group, tax included",
      currency: "JPY",
      groupNote: "The price is for your whole group, not per person.",
      details: [
        { label: "Your group", value: "1 instructor · up to 4 students" },
        { label: "Your day", value: "5 hours of teaching + 1-hour meal break" },
        { label: "Seasonal pricing", value: "Same price during peak season" },
      ],
      exclusionsTitle: "Additional expenses",
      exclusions: "Lift passes, equipment rental, meals and transport are not included and must be paid separately.",
      fullDayNote: "Full-day lessons only; half-day lessons are not currently available.",
      childrenNote: "One-to-one lessons are recommended for children aged 6 and under, as outlined in our FAQ.",
      cta: "Ask about dates & instructor availability",
      bookingNote: "Share your dates, starting location, group size and ski or snowboard preference. Lessons are subject to instructor availability.",
      australia: {
        title: "Australia · Perisher lesson prices",
        description: "Prices vary by lesson time and booking date. Check the latest price on the Perisher website, then contact us to confirm the lesson time and obtain the instructor name to request before booking.",
        contact: "Confirm lesson time & instructor name",
        link: "Check prices on the Perisher website",
      },
    },
    instructors: {
      eyebrow: "Meet your instructors",
      title: "Lonny & Ann",
      intro:
        "Meet the two instructors who will personally help you build skills and confidence on snow.",
      languages: "Teaching languages",
      qualifications: "Qualifications",
    },
    why: {
      eyebrow: "Why learn with us",
      title: "Personalised, science-informed and patiently encouraging coaching.",
      items: [
        {
          title: "Personalised Lessons",
          text: "Lessons adapt to each student’s ability, goals, learning state and the terrain in front of us. Whether you are adventurous or prefer a more cautious pace, we can adjust the lesson at any time and break each movement into smaller, manageable steps.",
        },
        {
          title: "5 Seasons of Snow School Experience",
          text: "We bring extensive experience from around 300–400 teaching hours each season in official snow schools. From children preparing for ski racing to adults in their sixties trying snowboarding for the first time, we have worked with students of many ages, abilities and learning styles. If you have any questions or concerns before the lesson, you are always welcome to contact us in advance.",
        },
        {
          title: "Clear Communication",
          text: "Every movement is explained in terms of what to do, why it matters and how to do it. Our fitness coaching background helps you understand how to use the relevant muscles and joints, while more than five seasons of official snow school teaching experience helps us identify the cause of a problem more quickly and explain how to correct it in clear, easy-to-understand terms.",
        },
        {
          title: "Safe and Enjoyable",
          text: "Safety comes first while progress and enjoyment remain part of the lesson. When we stop to explain, we choose an appropriate and safer place to do so.",
        },
      ],
    },
    booking: {
      eyebrow: "Booking process",
      title: "Choose your location. Follow the right process.",
      intro:
        "Japan and Australia use different booking systems. Select your lesson location to see the correct steps.",
      chooseRegion: "Choose your lesson location",
      regions: {
        japan: {
          label: "Japan · Hokkaido · ACCENT",
          steps: [
            {
              title: "Step 1 — Contact Us",
              text: "Tell us your preferred dates, number of students, and whether you are interested in ski or snowboard lessons.",
            },
            {
              title: "Step 2 — Confirm Price and Instructor Time",
              text: "We will confirm the lesson price and whether a suitable instructor time is available.",
            },
            {
              title: "Step 3 — Complete the Google Form",
              text: "Once the basic arrangement is agreed, we will send you the booking form.",
            },
            {
              title: "Step 4 — Accent Sends the Invoice",
              text: "Accent will email the invoice with the confirmed lesson details and payment instructions. Complete payment through the school.",
            },
            {
              title: "Step 5 — Booking Confirmed",
              text: "Your booking is confirmed after invoice payment is complete and you receive our confirmation.",
            },
          ],
          alert:
            "Sending an enquiry or completing the form does not confirm a booking. Payment must be completed before the lesson is officially booked.",
        },
        australia: {
          label: "Australia · Perisher",
          steps: [
            {
              title: "Step 1 — Check the Official Perisher Price",
              text: "Check the current lesson price on the official Perisher website. Prices vary by lesson time and booking date.",
            },
            {
              title: "Step 2 — Confirm the Time and Instructor Name",
              text: "After checking the price, contact us to confirm your lesson date and time and obtain the instructor name to enter when booking.",
            },
            {
              title: "Step 3 — Book Through the Perisher Website",
              text: "Complete the official booking and enter the instructor name we provide in the designated instructor request field.",
            },
            {
              title: "Step 4 — Send Us the Receipt Screenshot",
              text: "After paying on the official website, send us a screenshot of your booking receipt.",
            },
            {
              title: "Step 5 — Receive Our Booking Confirmation",
              text: "We will check with our supervisor that the lesson has been added to our official work schedule, then send you a private message confirming your booking.",
            },
          ],
          alert:
            "Before booking, confirm the lesson time with us and obtain the instructor name to request. After payment, send us your receipt and wait for our private booking confirmation.",
        },
      },
    },
    testimonials: {
      eyebrow: "Student stories",
      title: "What students say.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Good to know before you contact us.",
      intro: "If your question is not covered here, contact us and we will be happy to discuss it with you.",
      items: [
        {
          question: "Does sending an enquiry confirm my booking?",
          answer:
            "No. Your lesson is confirmed only after the applicable booking and payment steps are complete and you receive our private or written confirmation.",
        },
        {
          question: "Can I request a specific instructor?",
          answer:
            "Yes. You are also welcome to book both of us for the same lesson, which can make the lesson more flexible. All arrangements remain subject to instructor availability.",
        },
        {
          question: "Can I arrange a lesson if I am staying in HANAZONO?",
          answer:
            "Our current plan is to start lessons in Hirafu or Annupuri, then ski or snowboard over to HANAZONO, depending on your ability and the trails and lifts open that day. HANAZONO's official rules for the upcoming season have not yet been announced; we plan to check again in October 2026. Final arrangements remain subject to the official rules.",
        },
        {
          question: "What is the minimum age for lessons?",
          answer:
            "Ski lessons start from age 4 and snowboard lessons from age 7. For children aged 6 and under, we recommend one-to-one lessons so the instructor can adapt to their energy, attention span and learning pace.",
        },
        {
          question: "How many people can join one lesson?",
          answer:
            "In Japan, each instructor teaches one group of up to 4 students; in Australia, private lessons accommodate up to 5 students per instructor. If students have different ability levels, the lesson pace and terrain will be based on the least experienced student for safety.",
        },
        {
          question: "How is the lesson price confirmed?",
          answer:
            `In Japan, a full-day lesson starting in Hirafu or Annupuri costs JPY ${japanLessonRates[0].amount}; a lesson starting in Rusutsu costs JPY ${japanLessonRates[1].amount}. Prices include tax and cover one instructor for a group of up to 4 students, not a per-person fee. The day includes 5 teaching hours and a 1-hour meal break. Peak-season prices are the same; half-day lessons are not currently available. Lift passes, equipment rental, meals and transport are extra. For Australia, please check the current price on the official Perisher website, as prices vary by lesson time and booking date.`,
        },
        {
          question: "Why do our lessons in Japan cost more than some other instructors?",
          answer:
            "We are both APSI Level 3 snowboard instructors. This advanced qualification reflects not only riding and teaching ability, but also the professional knowledge needed to train other instructors, so our Japan lesson rate is higher than a standard instructor rate. We can identify the root cause of movement issues more quickly and use one key adjustment to improve several related problems. Progress always depends on the student and conditions, but our goal is to help you improve more efficiently—for example, addressing in one lesson issues that might otherwise take multiple lessons—so you can spend more time enjoying skiing or snowboarding in Japan.",
        },
        {
          question: "What happens if the weather is bad?",
          answer:
            "Unless the resort officially cancels lessons for safety reasons, lessons normally continue during snowfall, strong winds, poor visibility or partial lift closures. We use the terrain, lifts and snow conditions available that day to choose exercises suited to your ability and goals, so poor weather does not mean you will miss out on meaningful learning.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Tell us what you would like to learn.",
      intro:
        "Share your preferred dates, location, group size and whether you are interested in ski or snowboard lessons. You can contact either Lonny or Ann directly.",
      people: {
        lonny: { name: "Lonny", note: "Contact Lonny directly" },
        ann: { name: "Ann", note: "Contact Ann directly" },
      },
      platforms: {
        whatsapp: "WhatsApp",
        line: "LINE",
        wechat: "WeChat",
        instagram: "Instagram",
      },
      prefillLabel: "Suggested message",
      linkPlaceholder: "Add this contact link in app/content.ts",
    },
    social: {
      eyebrow: "Our snow-season life",
      title: "Follow winter with Ann & Lonny",
      description: "We share our teaching days at Perisher, Australia. When the Japan snow season begins, we will also share our skiing, snowboarding and everyday life in Japan.",
      cta: "Follow us on Instagram",
    },
    footer: {
      tagline: "Ski & snowboard lessons in English and Chinese.",
      rights: "All rights reserved.",
      privacy: {
        title: "Privacy Notice",
        updated: "Last updated: 31 July 2026",
        intro:
          "This notice explains how Ann&Lonny handles personal information when you visit this website, contact us or arrange a lesson. Ann&Lonny is a personal coaching brand operated by Ann and Lonny.",
        sections: [
          {
            title: "Information we collect",
            body:
              "We may receive your name, contact details or social-media account, preferred lesson dates and location, group size, ski or snowboard preference, ability, goals and other information you choose to provide. For lesson planning and safety, you may also choose to provide relevant age, health, accessibility or emergency information. Booking, invoice and payment-confirmation details may be received when needed to arrange your lesson.",
          },
          {
            title: "How we collect information",
            body:
              "We collect information you send directly through WhatsApp, LINE, WeChat or Instagram, information entered in a booking form provided after the initial enquiry, and necessary booking information shared with us by the relevant snow school. This website stores only your language preference on your device. As of the date above, it does not use advertising cookies, analytics trackers, user accounts or an online payment system.",
          },
          {
            title: "How we use information",
            body:
              "We use personal information to answer enquiries, check instructor availability, recommend and plan suitable lessons, coordinate bookings and invoices, confirm payment and lesson details, support safety and communication during lessons, maintain necessary business records, and meet legal or administrative obligations. We do not sell personal information or use it for unrelated marketing without permission.",
          },
          {
            title: "Sharing and overseas processing",
            body:
              "We share only information reasonably required to arrange or deliver a lesson with relevant snow schools and service providers, which may include Perisher in Australia, Accent in Japan, booking-form and invoice services, and the communication platform you choose. Information may therefore be processed in Australia, Japan and other countries where those providers operate. Each third-party service handles information under its own privacy policy and security practices.",
          },
          {
            title: "Children's information",
            body:
              "A parent or legal guardian should make enquiries and provide personal information for a child. Please share only information that is necessary for lesson planning and safety. We do not intentionally publish a child's personal information, photo or video without appropriate permission.",
          },
          {
            title: "Storage, security and retention",
            body:
              "We take reasonable steps to protect the information we hold from loss, misuse and unauthorised access or disclosure. No online service is completely secure. We keep information only for as long as reasonably needed for lesson delivery, safety, booking administration, accounting, dispute handling or legal requirements, then delete or de-identify it where practical.",
          },
          {
            title: "Access, correction, deletion and complaints",
            body:
              "You may ask what personal information we hold about you, request a correction or deletion, withdraw an optional consent, or raise a privacy concern. Contact either Ann or Lonny using the contact options above and state that your message concerns privacy. We may need to verify your identity and may retain information where required by law or for legitimate record-keeping. We will review and respond within a reasonable time.",
          },
          {
            title: "Updates to this notice",
            body:
              "We may update this notice when our website, booking process or legal obligations change. The current version and its last-updated date will remain available in this footer.",
          },
        ],
      },
    },
  },
  zh: {
    nav: {
      aria: "主要選單",
      home: "Ann&Lonny 首頁",
      skipContent: "跳至主要內容",
      openMenu: "開啟選單",
      closeMenu: "關閉選單",
      language: "選擇語言",
      about: "關於我們",
      lessons: "課程介紹",
      pricing: "價格",
      instructors: "教練介紹",
      booking: "訂課流程",
      faq: "常見問題",
      contact: "聯絡我們",
    },
    common: {
      askLesson: "詢問課程",
      photoPlaceholder: "[照片 PLACEHOLDER]",
      addLink: "[加入連結]",
    },
    hero: {
      eyebrow: "澳洲新州 PERISHER · 日本北海道 ACCENT",
      title: "專屬於你的雙板與單板課程",
      subtitle:
        "根據你的程度與目標，提供安全、友善並且有趣的雪上學習體驗。",
      secondaryCta: "查看訂課流程",
    },
    about: {
      eyebrow: "關於我們",
      title: "建立信心，享受每一個轉彎。",
      intro:
        "我們都是屏東科技大學休閒運動系的校友，畢業後曾在台灣一起擔任健身教練。我們喜歡一起衝浪；現在，我們成為往返澳洲 Perisher 與日本北海道 ACCENT 的全職雙板與單板教練。",
      photoLabel: "[LONNY 與 ANN 合照]",
      points: [
        {
          title: "我們是誰",
          text: "兩位都有 5 季以上官方雪校經驗，也都是 APSI 單板三級教練，並可使用中文或英文上課。我們共同的運動與教學背景，讓我們能把動作、技術與背後理論解釋得更清楚。",
        },
        {
          title: "我們如何教學",
          text: "以清楚、好理解的方式，根據每位學生的步調、目標與信心調整課程。我們也會同時考量地形、雪況與雪道人流，隨時調整上課內容。",
        },
        {
          title: "我們在哪裡教學",
          text: "南半球雪季在澳洲新州 Perisher，北半球雪季在日本北海道 ACCENT。",
        },
      ],
    },
    lessons: {
      eyebrow: "課程介紹",
      title: "根據你的需要安排課程。",
      intro: "適合家庭、兒童，以及想探索更多雪道與地形的學生；實際內容與時間會在聯絡後確認。",
      pricingLink: "查看課程價格",
    },
    pricing: {
      eyebrow: "課程價格",
      chooseRegion: "選擇課程價格地區",
      regions: { japan: "日本", australia: "澳洲 · Perisher" },
      title: "先了解費用，再安排雪上時光。",
      intro: "先了解課程費用，再一起安排適合你的滑雪體驗。",
      caption: "日本全日雙板與單板課程",
      locationHeading: "上課起點",
      priceHeading: "全日課費用（含稅／每組）",
      currency: "日圓",
      groupNote: "以上為整組費用，不是每人費用。",
      details: [
        { label: "上課人數", value: "每組 1 位教練，最多 4 人" },
        { label: "課程時間", value: "5 小時教學＋1 小時用餐" },
        { label: "旺季收費", value: "旺季價格相同" },
      ],
      exclusionsTitle: "需另外支付的費用",
      exclusions: "雪票、雪具租借、餐飲與交通不包含在課程費用內，需另外支付。",
      fullDayNote: "目前僅提供全日課，不提供半日課。",
      childrenNote: "依常見問題中的兒童課程建議，6 歲以下兒童建議安排 1 對 1 教學。",
      cta: "詢問日期與教練空檔",
      bookingNote: "告訴我們你的日期、上課起點、人數與雙板或單板需求；實際安排依教練空檔確認。",
      australia: {
        title: "澳洲 · Perisher 課程價格",
        description: "價格依上課時段與訂課日期浮動，請至 Perisher 官網查看最新價格。確認價格後，請先聯絡我們確認上課時間與指定教練姓名，再進行訂課。",
        contact: "確認上課時間與教練姓名",
        link: "前往 Perisher 官網查看價格",
      },
    },
    instructors: {
      eyebrow: "教練介紹",
      title: "Lonny 與 Ann",
      intro: "認識會親自陪你建立雪上技巧與信心的兩位教練。",
      languages: "教學語言",
      qualifications: "教練證照",
    },
    why: {
      eyebrow: "為什麼選擇我們",
      title: "個人化、科學且耐心鼓勵的教學。",
      items: [
        {
          title: "根據學生需求調整課程",
          text: "依照學生的程度、目標、學習狀態與當下地形，隨時調整課程內容與練習方式。不管你是勇敢嘗試，還是比較謹慎的學生，我們都能即時調整上課內容，也可以把每個動作拆解成更細的小步驟，讓不同學習類型的學生都能安心練習。",
        },
        {
          title: "5 季官方雪校教學經驗",
          text: "我們擁有豐富的教學經驗，每季約 300–400 小時，在官方雪校累積紮實的一線教學時數。從準備參加競速的小朋友，到 60 多歲第一次學習單板的成人，我們都曾教過，也熟悉不同年齡、程度與學習方式的學生。如有任何疑問或擔心，都歡迎在課前先與我們討論。",
        },
        {
          title: "清楚易懂的教學",
          text: "每個動作都會清楚說明「做什麼、為什麼做、怎麼做」，並結合健身教練經驗，幫助你理解需要如何運用肌肉與關節。加上 5 季以上的官方雪校教學經驗，我們能更快找出問題的原因，並用清楚易懂的方式說明如何調整。",
        },
        {
          title: "安全並享受學習過程",
          text: "我們最重視安全；在進步的同時，也保留滑雪原本的樂趣。需要停下講解時，我們會選擇相對安全的位置。",
        },
      ],
    },
    booking: {
      eyebrow: "訂課流程",
      title: "選擇上課地點，查看正確的訂課流程。",
      intro: "日本與澳洲使用不同的訂課系統，請先選擇上課地點。",
      chooseRegion: "選擇上課地點",
      regions: {
        japan: {
          label: "日本 · 北海道 · ACCENT",
          steps: [
            {
              title: "Step 1 — 聯絡詢問",
              text: "告訴我們預計日期、人數，以及想學雙板還是單板。",
            },
            {
              title: "Step 2 — 確認價格與教練時間",
              text: "我們會確認課程價格，以及是否有合適的教練時間。",
            },
            {
              title: "Step 3 — 填寫 Google Form",
              text: "確認基本安排後，我們會傳送訂課表單。",
            },
            {
              title: "Step 4 — Accent 寄送 Invoice",
              text: "Accent 會依照確認的課程內容寄送 Invoice 與付款方式，請透過學校完成付款。",
            },
            {
              title: "Step 5 — 訂課成功",
              text: "完成 Invoice 付款並收到我們的確認後，課程才正式成立。",
            },
          ],
          alert:
            "送出詢問或填寫表單並不代表已完成訂課。完成付款後，課程才會正式成立。",
        },
        australia: {
          label: "澳洲 · 新州 Perisher",
          steps: [
            {
              title: "Step 1 — 查看 Perisher 官網價格",
              text: "請先至 Perisher 官網查看目前的課程價格，價格會依上課時段與訂課日期浮動。",
            },
            {
              title: "Step 2 — 確認時間與指定教練姓名",
              text: "確認價格後，請與我們確認上課日期及時間，並取得訂課時要填寫的指定教練姓名。",
            },
            {
              title: "Step 3 — 透過 Perisher 官網訂課",
              text: "在官網填寫訂課資料，並在指定的教練欄位填入我們提供的教練姓名。",
            },
            {
              title: "Step 4 — 傳送收據截圖",
              text: "完成官網付款後，請將訂課收據截圖傳給我們。",
            },
            {
              title: "Step 5 — 收到訂課成功通知",
              text: "我們會向主管確認課程已排入官方工作課表，再私訊通知你訂課成功。",
            },
          ],
          alert:
            "訂課前請先與我們確認上課時間，並取得指定教練姓名。付款後請回傳收據，等待我們私訊通知訂課成功。",
        },
      },
    },
    testimonials: {
      eyebrow: "學生分享",
      title: "學生怎麼說。",
    },
    faq: {
      eyebrow: "常見問題",
      title: "聯絡我們之前，可以先了解這些資訊。",
      intro: "如果這裡沒有回答到你的問題，歡迎直接聯絡我們討論。",
      items: [
        {
          question: "送出詢問後，是否代表已經完成訂課？",
          answer: "不是。完成適用的訂課與付款流程，並收到我們的私訊或書面確認後，課程才算正式成立。",
        },
        {
          question: "可以指定教練嗎？",
          answer:
            "可以。也歡迎同時預約我們兩位一起上課，雙教練安排能讓課程更加彈性、自由；實際安排仍需依教練時間確認。",
        },
        {
          question: "住在 HANAZONO，可以安排課程嗎？",
          answer:
            "目前規劃需從 Hirafu 或 Annupuri 開始上課，再依學生程度及當天雪道、纜車開放情況，滑行前往 HANAZONO。HANAZONO 本雪季的官方規定尚未公布，預計於 2026 年 10 月多再次確認，最終安排以官方規定為準。",
        },
        {
          question: "最小幾歲能開始上課？",
          answer:
            "雙板課程從 4 歲開始，單板課程從 7 歲開始。6 歲以下的孩子建議安排 1 對 1 教學，讓教練能依孩子的體力、專注力與學習步調調整課程。",
        },
        {
          question: "最多幾人能一起上課？",
          answer:
            "日本課程每位教練帶一組，最多 4 人；澳洲私人教練課每位教練最多帶 5 人。如果學生程度不同，基於安全考量，課程節奏與地形會以程度較慢的學生為主。",
        },
        {
          question: "課程價格如何確認？",
          answer:
            `日本全日課從 Hirafu 或 Annupuri 開始為 ${japanLessonRates[0].amount} 日圓，從留壽都 Rusutsu 開始為 ${japanLessonRates[1].amount} 日圓，皆已含稅。費用為每位教練帶一組、最多 4 人的整組價格，不是每人費用。全日安排為 5 小時教學＋1 小時用餐，旺季價格相同，目前不提供半日課。雪票、雪具租借、餐飲與交通需另外支付。澳洲課程請以 Perisher 官方網站的即時價格為準，價格會依上課時段與訂課日期變動。`,
        },
        {
          question: "為什麼我們在日本的課程價格比一般教練高？",
          answer:
            "我們兩位都是 APSI 單板三級教練。三級資格不只代表個人滑行與教學能力，也包含培訓其他教練所需的專業能力，因此日本課程價格會高於一般教練。我們能更快找出動作問題的根本原因，並透過一個關鍵調整同時改善多個相關問題。實際進度仍會因學生程度與雪況而異，但我們的目標是幫助你更有效率地進步；例如，原本可能需要多堂課處理的問題，有機會在一堂課內找到共同原因並一起改善，讓你節省學習時間，把更多時間留給享受日本滑雪。",
        },
        {
          question: "如果天氣不好怎麼辦？",
          answer:
            "除非雪場基於安全考量正式取消課程，否則遇到降雪、強風、能見度不佳或部分纜車停駛時，課程通常仍會照常進行。我們會依照當天開放的地形、纜車與雪況，安排適合你程度與目標的練習，因此不用擔心天氣不好就學不到東西。",
        },
      ],
    },
    contact: {
      eyebrow: "聯絡我們",
      title: "告訴我們，你想學什麼。",
      intro:
        "請提供預計日期、地點、人數，以及想學雙板或單板；你可以選擇直接聯絡 Lonny 或 Ann。",
      people: {
        lonny: { name: "Lonny", note: "直接聯絡 Lonny" },
        ann: { name: "Ann", note: "直接聯絡 Ann" },
      },
      platforms: {
        whatsapp: "WhatsApp",
        line: "LINE",
        wechat: "WeChat",
        instagram: "Instagram",
      },
      prefillLabel: "預填訊息",
      linkPlaceholder: "請在 app/content.ts 加入聯絡連結",
    },
    social: {
      eyebrow: "我們的雪季日常",
      title: "跟著 Ann ＆ Lonny 一起過雪季",
      description: "分享我們在澳洲 Perisher 的教學日常，日本雪季開始後，也會記錄我們在日本的滑雪生活。",
      cta: "追蹤我們的 Instagram",
    },
    footer: {
      tagline: "中英文雙板與單板課程。",
      rights: "保留所有權利。",
      privacy: {
        title: "隱私權聲明",
        updated: "最後更新日期：2026 年 7 月 31 日",
        intro:
          "本聲明說明當你瀏覽本網站、聯絡我們或安排課程時，Ann&Lonny 如何處理個人資料。Ann&Lonny 是由 Ann 與 Lonny 共同經營的個人教學品牌。",
        sections: [
          {
            title: "我們可能蒐集的資料",
            body:
              "我們可能取得你的姓名、聯絡方式或社群帳號、預計上課日期與地點、人數、雙板或單板需求、程度、目標，以及你主動提供的其他資訊。為了規劃課程與維護安全，你也可以選擇提供必要的年齡、健康狀況、無障礙需求或緊急聯絡資訊。安排課程時，我們也可能取得訂課、Invoice 與付款確認所需的資料。",
          },
          {
            title: "資料如何取得",
            body:
              "我們會取得你透過 WhatsApp、LINE、WeChat 或 Instagram 主動傳送的資訊、初步確認後填入訂課表單的資料，以及相關雪校為安排課程而提供的必要訂課資訊。本網站只會在你的裝置上保存語言偏好；截至上述更新日期，網站不使用廣告 Cookie、網站分析追蹤、會員帳號或線上付款系統。",
          },
          {
            title: "資料使用目的",
            body:
              "我們會使用個人資料回覆詢問、確認教練時間、建議與規劃合適課程、協調訂課與 Invoice、確認付款與課程細節、支援課程期間的安全與溝通、保存必要的營運紀錄，以及履行法律或行政義務。我們不會出售個人資料，也不會在未取得同意的情況下用於無關的行銷。",
          },
          {
            title: "資料分享與跨境處理",
            body:
              "為了安排或提供課程，我們只會向相關雪校及服務供應商分享合理必要的資料，可能包括澳洲 Perisher、日本 Accent、訂課表單與 Invoice 服務，以及你選擇使用的通訊平台。因此，資料可能在澳洲、日本及上述服務供應商營運所在的其他國家或地區處理；各第三方服務會依其自己的隱私權政策與安全措施處理資料。",
          },
          {
            title: "兒童資料",
            body:
              "兒童課程應由家長或法定監護人提出詢問並提供個人資料，且只需提供課程規劃與安全所必要的資訊。未取得適當同意前，我們不會刻意公開兒童的個人資料、照片或影片。",
          },
          {
            title: "保存、安全與保留期間",
            body:
              "我們會採取合理措施，保護持有的資料，避免遺失、誤用、未經授權的存取或揭露；但任何線上服務都無法保證絕對安全。資料只會在課程執行、安全、訂課行政、會計、爭議處理或法律要求所合理需要的期間內保留，之後會在可行範圍內刪除或去識別化。",
          },
          {
            title: "查詢、更正、刪除與申訴",
            body:
              "你可以詢問我們持有哪些與你有關的資料、要求更正或刪除、撤回非必要的同意，或提出隱私疑慮。請透過上方任一聯絡方式聯絡 Ann 或 Lonny，並註明是隱私權相關問題。我們可能需要確認你的身分；如法律或正當紀錄保存目的要求，部分資料可能無法立即刪除。我們會在合理時間內審查並回覆。",
          },
          {
            title: "聲明更新",
            body:
              "當網站、訂課流程或相關義務改變時，我們可能更新本聲明；目前版本與最後更新日期會持續公布於本網站頁尾。",
          },
        ],
      },
    },
  },
} as const;
