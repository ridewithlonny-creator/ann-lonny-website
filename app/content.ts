/*
 * Central content file.
 * Edit brand details, translations, lessons, instructors, FAQs and links here.
 */

export type Locale = "en" | "zh";

type LocalizedText = Record<Locale, string>;

export const siteConfig = {
  brandName: "Ann&Lonny",
  defaultLocale: "en" as Locale,
  features: {
    // Change to true after approved student testimonials are ready to publish.
    testimonials: false,
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
    objectPosition: "center 65%",
    alt: { en: "Skier making a turn on a groomed slope", zh: "雙板滑雪者在整理雪道上轉彎" },
    title: { en: "Ski Lessons", zh: "雙板滑雪課程" },
    description: {
      en: "From first turns to refining rhythm and control, each ski lesson is adjusted to your current ability, confidence and goals.",
      zh: "從第一次轉彎，到改善節奏與控制，每堂雙板課程都會依照你的程度、信心與目標調整。",
    },
  },
  {
    id: "snowboard",
    image: "/assets/images/course-snowboard.webp",
    objectPosition: "center 62%",
    alt: { en: "Snowboarder riding with a snow-covered mountain behind", zh: "單板滑雪者在雪山景色前方滑行" },
    title: { en: "Snowboard Lessons", zh: "單板滑雪課程" },
    description: {
      en: "Build a strong foundation or work on more confident, efficient riding through clear steps, focused practice and practical feedback.",
      zh: "從建立穩定基礎，到更有信心且有效率地滑行，我們會透過清楚步驟、重點練習與實用回饋陪你進步。",
    },
  },
  {
    id: "kids",
    image: "/assets/images/course-kids.webp",
    alt: { en: "Child happily playing in deep snow", zh: "孩子在深雪中開心玩雪" },
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
      en: "Ann has always loved sport, from volleyball, surfing and fitness to competing in powerlifting. She teaches with patience, adapts her explanations to how each student learns, and provides immediate feedback throughout the lesson.",
      zh: "Ann 喜歡各種運動，從排球、衝浪、健身，到曾經參加健力比賽。她的教學耐心，會依照每位學生的理解方式提供不同的講解，並在課程中給予即時回饋。",
    },
  },
];

export const testimonials: Array<{
  id: string;
  quote: LocalizedText;
  name: LocalizedText;
  lesson: LocalizedText;
  region: LocalizedText;
}> = [
  {
    id: "testimonial-1",
    quote: {
      en: "[TESTIMONIAL PLACEHOLDER — replace with approved student feedback.]",
      zh: "[學生評價 PLACEHOLDER——請替換為已獲同意使用的真實評價。]",
    },
    name: { en: "[STUDENT NAME / INITIALS]", zh: "[學生姓名／縮寫]" },
    lesson: { en: "[LESSON TYPE]", zh: "[課程類型]" },
    region: { en: "[COUNTRY / REGION]", zh: "[國家／地區]" },
  },
  {
    id: "testimonial-2",
    quote: {
      en: "[TESTIMONIAL PLACEHOLDER — replace with approved student feedback.]",
      zh: "[學生評價 PLACEHOLDER——請替換為已獲同意使用的真實評價。]",
    },
    name: { en: "[STUDENT NAME / INITIALS]", zh: "[學生姓名／縮寫]" },
    lesson: { en: "[LESSON TYPE]", zh: "[課程類型]" },
    region: { en: "[COUNTRY / REGION]", zh: "[國家／地區]" },
  },
  {
    id: "testimonial-3",
    quote: {
      en: "[TESTIMONIAL PLACEHOLDER — replace with approved student feedback.]",
      zh: "[學生評價 PLACEHOLDER——請替換為已獲同意使用的真實評價。]",
    },
    name: { en: "[STUDENT NAME / INITIALS]", zh: "[學生姓名／縮寫]" },
    lesson: { en: "[LESSON TYPE]", zh: "[課程類型]" },
    region: { en: "[COUNTRY / REGION]", zh: "[國家／地區]" },
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
      instructors: "Instructors",
      booking: "Booking Process",
      faq: "FAQ",
      contact: "Contact",
    },
    common: {
      askLesson: "Ask About a Lesson",
      photoPlaceholder: "[PHOTO PLACEHOLDER]",
      placeholder: "PLACEHOLDER",
      addLink: "[ADD LINK]",
    },
    hero: {
      eyebrow: "PERISHER, NSW · ACCENT, NISEKO HOKKAIDO",
      title: "Personalised Ski & Snowboard Lessons",
      subtitle:
        "Friendly, professional lessons designed around your goals, confidence and enjoyment.",
      secondaryCta: "How Booking Works",
    },
    about: {
      eyebrow: "About us",
      title: "Learn with confidence. Enjoy every turn.",
      intro:
        "We both graduated from the Department of Recreational Sports at National Pingtung University of Science and Technology, then worked together as fitness coaches in Taiwan. We love surfing together; today, we are full-time ski and snowboard instructors following winter between Perisher in Australia and Accent in Niseko, Japan.",
      photoLabel: "[LONNY & ANN PHOTO]",
      points: [
        {
          title: "Who we are",
          text: "Both of us have more than five seasons of official snow school experience, teach in Chinese or English, and share a background in sport and coaching.",
        },
        {
          title: "How we teach",
          text: "Clear, simple lessons shaped around each student’s pace, goals and confidence.",
        },
        {
          title: "Where we teach",
          text: "Perisher, New South Wales in the Southern Hemisphere season, and with Accent in Niseko, Hokkaido during the Northern Hemisphere season.",
        },
      ],
    },
    lessons: {
      eyebrow: "Lessons",
      title: "A lesson built around you.",
      intro:
        "Lessons for families, children and students who want to explore more runs and terrain. Final details are confirmed after you contact us.",
      noPrice: "To confirm lesson details, contact us directly using one of the options below.",
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
          text: "Lessons adapt to each student’s ability, goals, learning state and the terrain in front of us.",
        },
        {
          title: "5 Seasons of Snow School Experience",
          text: "Around 300–400 teaching hours each season in official ski and snowboard school environments.",
        },
        {
          title: "Clear Communication",
          text: "Every movement is explained in terms of what to do, why it matters and how to do it. Our fitness coaching background also helps you understand how to use the relevant muscles and joints.",
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
          label: "Japan · Niseko · Accent",
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
              title: "Step 1 — Confirm the Lesson Time With Us",
              text: "Contact us first to discuss your preferred date and lesson time, and confirm whether the instructor is available.",
            },
            {
              title: "Step 2 — Check the Official Perisher Price",
              text: "After agreeing on a suitable time with us, review the current lesson price on the official Perisher website.",
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
              title: "Step 5 — Wait for Schedule Confirmation",
              text: "We will confirm the lesson with our supervisor. The booking is complete once it appears on our official work schedule and you receive our confirmation.",
            },
          ],
          alert:
            "Payment on the Perisher website alone does not guarantee the requested instructor. Please send the receipt and wait until the lesson appears on our official schedule.",
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
          question: "Can you help take photos and videos?",
          answer:
            "Yes. We can film your riding and use the footage to analyse your movements and suggest improvements. If you only want a riding video without coaching analysis, that is also possible.",
        },
        {
          question: "What is the minimum age for lessons?",
          answer:
            "We recommend starting ski lessons from age 3 and snowboard lessons from age 6. Children under 6 can only be booked in a one-to-one lesson.",
        },
        {
          question: "How many people can join one lesson?",
          answer:
            "Up to 4 people can join one lesson. Larger groups require an additional fee, so please contact us to discuss the details. If students have different ability levels, the lesson pace and terrain will be based on the least experienced student for safety.",
        },
        {
          question: "How is the lesson price confirmed?",
          answer:
            "For Australia, please check the current price on the official Perisher website, as prices vary by lesson time and booking date. In Japan, a full-day lesson includes 5 teaching hours plus a 1-hour meal break and is generally JPY 110,000. Peak-season pricing may vary, so please ask us to confirm before booking.",
        },
        {
          question: "Are lift passes and equipment included?",
          answer:
            "No. Lesson fees do not include lift passes, equipment rental, meals, transport or personal insurance. If you need help with rentals or lift passes, please discuss it with us before the lesson.",
        },
        {
          question: "What happens if the weather is bad?",
          answer:
            "Unless the resort officially cancels lessons for safety reasons, lessons normally continue during snowfall, strong winds, poor visibility or partial lift closures.",
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
      instructors: "教練介紹",
      booking: "訂課流程",
      faq: "常見問題",
      contact: "聯絡我們",
    },
    common: {
      askLesson: "詢問課程",
      photoPlaceholder: "[照片 PLACEHOLDER]",
      placeholder: "PLACEHOLDER",
      addLink: "[加入連結]",
    },
    hero: {
      eyebrow: "澳洲新州PERISHER · 日本北海道二世谷ACCENT",
      title: "專屬於你的雙板與單板課程",
      subtitle:
        "根據你的程度與目標，提供安全、友善並且有趣的雪上學習體驗。",
      secondaryCta: "查看訂課流程",
    },
    about: {
      eyebrow: "關於我們",
      title: "建立信心，享受每一個轉彎。",
      intro:
        "我們都是屏東科技大學休閒運動系的校友，畢業後曾在台灣一起擔任健身教練。我們喜歡一起衝浪；現在，我們成為往返澳洲 Perisher 與日本二世谷 Accent 的全職雙板與單板教練。",
      photoLabel: "[LONNY 與 ANN 合照]",
      points: [
        {
          title: "我們是誰",
          text: "兩位都有 5 季以上官方雪校經驗，並可使用中文或英文上課，也有共同的運動與教學背景。",
        },
        {
          title: "我們如何教學",
          text: "以清楚、簡單的方式，根據每位學生的步調、目標與信心調整課程。",
        },
        {
          title: "我們在哪裡教學",
          text: "南半球雪季在澳洲新州 Perisher，北半球雪季在日本北海道二世谷 Accent。",
        },
      ],
    },
    lessons: {
      eyebrow: "課程介紹",
      title: "根據你的需要安排課程。",
      intro: "適合家庭、兒童，以及想探索更多雪道與地形的學生；實際內容與時間會在聯絡後確認。",
      noPrice: "想進一步確認課程細節，請透過下方聯絡方式與我們討論。",
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
          text: "依照學生的程度、目標、學習狀態與當下地形，隨時調整課程內容與練習方式。",
        },
        {
          title: "5 季官方雪校教學經驗",
          text: "每季約 300–400 小時，在官方雪校累積紮實的一線教學經驗。",
        },
        {
          title: "清楚易懂的教學",
          text: "每個動作都會清楚說明「做什麼、為什麼做、怎麼做」，並結合健身教練經驗，幫助你理解需要如何運用肌肉與關節。",
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
          label: "日本 · 北海道二世谷 · Accent",
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
              title: "Step 1 — 先與我們確認上課時間",
              text: "先聯絡我們討論預計日期、上課時段，確認教練是否能配合。",
            },
            {
              title: "Step 2 — 查看 Perisher 官網價格",
              text: "確認合適的上課時間後，請前往 Perisher 官方網站查看目前的課程價格。",
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
              title: "Step 5 — 等待官方課表確認",
              text: "我們會向主管確認；課程進入我們的官方工作課表並收到確認後，才算訂課成功。",
            },
          ],
          alert:
            "只在 Perisher 官網完成付款，還不能保證指定教練。請傳送收據，並等待課程進入我們的官方工作課表。",
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
          question: "可以幫忙拍影片和照片嗎？",
          answer:
            "可以。我們能協助拍攝滑行影片與照片，也能使用影片分析動作並提供改善方向；如果單純只想拍攝滑行紀錄，也可以事先提出。",
        },
        {
          question: "最小幾歲能開始上課？",
          answer:
            "雙板課程建議從 3 歲開始，單板課程建議從 6 歲開始；6 歲以下兒童僅安排 1 對 1 課程。",
        },
        {
          question: "最多幾人能一起上課？",
          answer:
            "最多 4 人。若超過 4 人，需要收取額外費用，詳細安排歡迎先向我們詢問。如果學生程度不同，基於安全考量，課程節奏與地形會以程度較慢的學生為主。",
        },
        {
          question: "課程價格如何確認？",
          answer:
            "澳洲雪季請以 Perisher 官方網站的即時價格為準，價格會依上課時段與訂課日期變動。日本雪季的全日課程為 5 小時教學＋1 小時用餐時間，一般價格為 110,000 日圓；旺季價格可能調整，訂課前請先向我們詢問確認。",
        },
        {
          question: "雪票和裝備是否包含？",
          answer:
            "不包含。課程費用不包含雪票、雪具租借、餐飲、交通及個人保險；如需要租借或雪票方面的協助，請在課前與我們討論。",
        },
        {
          question: "如果天氣不好怎麼辦？",
          answer:
            "除非雪場基於安全考量正式取消課程，否則遇到降雪、強風、能見度不佳或部分纜車停駛時，課程通常仍會照常進行。",
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
