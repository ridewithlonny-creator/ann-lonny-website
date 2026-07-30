/*
 * Central content file.
 * Edit brand details, translations, lessons, instructors, FAQs and links here.
 */

export type Locale = "en" | "zh";

type LocalizedText = Record<Locale, string>;

export const siteConfig = {
  brandName: "Ann&Lonny",
  defaultLocale: "en" as Locale,
  contact: {
    // WhatsApp: international number only, for example 61412345678.
    whatsapp: "",
    // LINE and Instagram: paste the complete https:// link.
    line: "",
    // WeChat: use a complete public link, or replace this button with a QR image.
    wechat: "",
    instagram: "",
    // Email: address only, for example hello@example.com.
    email: "",
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
  { key: "email" },
] as const;

export const lessons: Array<{
  id: string;
  image: string;
  alt: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
}> = [
  {
    id: "ski",
    image: "/assets/images/hero-ski-placeholder.webp",
    alt: { en: "Placeholder photo for ski lessons", zh: "滑雪課程 placeholder 照片" },
    title: { en: "Ski Lessons", zh: "雙板滑雪課程" },
    description: {
      en: "[LESSON DESCRIPTION — add the lesson focus and suitable level.]",
      zh: "[課程介紹——請補充課程重點與適合程度。]",
    },
  },
  {
    id: "snowboard",
    image: "/assets/images/snowboard-profile-one.webp",
    alt: { en: "Ann&Lonny snowboard photo", zh: "Ann&Lonny 單板滑雪照片" },
    title: { en: "Snowboard Lessons", zh: "單板滑雪課程" },
    description: {
      en: "[LESSON DESCRIPTION — add the lesson focus and suitable level.]",
      zh: "[課程介紹——請補充課程重點與適合程度。]",
    },
  },
  {
    id: "kids",
    image: "/assets/images/snow-lesson-placeholder.webp",
    alt: { en: "Placeholder photo for kids lessons", zh: "兒童課程 placeholder 照片" },
    title: { en: "Kids Lessons", zh: "兒童課程" },
    description: {
      en: "Patient, step-by-step learning that helps children build skills and confidence. Ages and lesson format are confirmed before booking.",
      zh: "以耐心、清楚的步驟陪伴兒童建立技巧與信心；適合年齡與上課形式會在訂課前確認。",
    },
  },
  {
    id: "adults",
    image: "/assets/images/snowboard-profile-two.webp",
    alt: { en: "Ann&Lonny snow sports photo", zh: "Ann&Lonny 雪上活動照片" },
    title: { en: "Adult Lessons", zh: "成人課程" },
    description: {
      en: "[LESSON DESCRIPTION — add the lesson focus and suitable level.]",
      zh: "[課程介紹——請補充課程重點與適合程度。]",
    },
  },
  {
    id: "families",
    image: "/assets/images/snow-lesson-placeholder.webp",
    alt: { en: "Placeholder photo for family lessons", zh: "家庭課程 placeholder 照片" },
    title: { en: "Family Lessons", zh: "家庭課程" },
    description: {
      en: "[LESSON DESCRIPTION — confirm the family lesson format, group size and requirements.]",
      zh: "[課程介紹——請確認家庭課程的上課形式、人數與條件。]",
    },
  },
  {
    id: "technique",
    image: "/assets/images/snowboard-adventure.webp",
    alt: { en: "Ann&Lonny in a snowy mountain setting", zh: "Ann&Lonny 在雪山環境中的照片" },
    title: { en: "Technique Development", zh: "滑行技術提升" },
    description: {
      en: "For students who want to improve their riding through detailed movement breakdowns, focused feedback and video analysis when useful.",
      zh: "適合希望改善滑行的學生，透過動作拆解、練習回饋，並視需要搭配影片分析。",
    },
  },
];

export const instructors: Array<{
  id: string;
  name: string;
  image: string;
  imageAlt: LocalizedText;
  discipline: LocalizedText;
  languages: LocalizedText;
  qualifications: LocalizedText;
  bio: LocalizedText;
}> = [
  {
    id: "lonny",
    name: "Lonny",
    image: "/assets/images/lonny-profile.webp",
    imageAlt: { en: "Portrait of Lonny on the mountain", zh: "Lonny 在雪山上的個人照片" },
    discipline: { en: "Ski & Snowboard", zh: "雙板與單板" },
    languages: { en: "English & Chinese", zh: "英文與中文" },
    qualifications: {
      en: "APSI Snowboard Level 3 · CASI Level 2 Instructor · APSI Alpine Level 2 · Avalanche Skills Training 2 (AST 2)",
      zh: "APSI 單板三級 · CASI 單板二級教練 · APSI 雙板二級 · 雪崩技能訓練二級（AST 2）",
    },
    bio: {
      en: "Lonny specialises in teaching children and analysing advanced riding. Patient and detail-oriented, he breaks movements into clear steps and uses practice, feedback and video analysis to help students progress in a relaxed, friendly lesson. He enjoys ski and snowboard equally for the different experiences each one offers.",
      zh: "Lonny 擅長兒童教學與進階滑行分析。他有耐心，也會把動作拆解成清楚的小步驟，透過反覆練習、即時回饋與影片分析，陪學生像朋友一樣自在學習。對他而言，雙板與單板各有不同的樂趣。",
    },
  },
  {
    id: "ann",
    name: "Ann",
    image: "/assets/images/ann-profile.webp",
    imageAlt: { en: "Portrait of Ann on the mountain", zh: "Ann 在雪山上的個人照片" },
    discipline: { en: "Ski & Snowboard", zh: "雙板與單板" },
    languages: { en: "English & Chinese", zh: "英文與中文" },
    qualifications: {
      en: "APSI Snowboard Level 3 · CASI Level 2 Instructor · APSI Alpine Level 2 · Avalanche Skills Training 2 (AST 2)",
      zh: "APSI 單板三級 · CASI 單板二級教練 · APSI 雙板二級 · 雪崩技能訓練二級（AST 2）",
    },
    bio: {
      en: "[SHORT BIO — add Ann’s teaching style and introduction.]",
      zh: "[簡短介紹——請補充 Ann 的教學風格與自我介紹。]",
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
      eyebrow: "Perisher, NSW · Niseko, Hokkaido",
      title: "Personalised Ski & Snowboard Lessons",
      subtitle:
        "Friendly, professional lessons designed around your goals, confidence and enjoyment.",
      secondaryCta: "How Booking Works",
    },
    about: {
      eyebrow: "About us",
      title: "Learn with confidence. Enjoy every turn.",
      intro:
        "We met while studying Leisure Sport at National Pingtung University of Science and Technology, then worked together as fitness coaches in Taiwan. Surfing was our favourite way to spend time outdoors; today, we are full-time ski and snowboard instructors following winter between the Southern and Northern Hemispheres.",
      photoLabel: "[LONNY & ANN PHOTO]",
      points: [
        {
          title: "Who we are",
          text: "Two instructors who both teach ski and snowboard lessons in English and Chinese, with a shared background in sport and coaching.",
        },
        {
          title: "How we teach",
          text: "Clear, friendly lessons shaped around each student’s pace, goals and confidence.",
        },
        {
          title: "Where we teach",
          text: "Perisher, New South Wales in the Southern Hemisphere season, and Niseko, Hokkaido in the Northern Hemisphere season.",
        },
      ],
    },
    lessons: {
      eyebrow: "Lessons",
      title: "A lesson built around you.",
      intro:
        "Lessons for families, children, Chinese-speaking guests and students who want to improve their riding. Final details are confirmed after you contact us.",
      noPrice: "[PRICING IS CONFIRMED PRIVATELY AFTER LESSON DETAILS ARE DISCUSSED.]",
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
      title: "Personal, clear and supportive.",
      items: [
        {
          title: "Personalised Lessons",
          text: "Lessons adjusted to the student’s needs, level and goals.",
        },
        {
          title: "Friendly and Supportive",
          text: "A welcoming learning environment that helps build confidence.",
        },
        {
          title: "Clear Communication",
          text: "Simple, easy-to-understand instruction and useful feedback.",
        },
        {
          title: "Safe and Enjoyable",
          text: "A learning experience that values safety, progress and fun.",
        },
      ],
    },
    booking: {
      eyebrow: "Booking process",
      title: "Simple from first message to first turn.",
      intro:
        "This website is for introductions and enquiries. We confirm each lesson with you personally.",
      steps: [
        {
          title: "Step 1 — Contact Us",
          text: "Tell us your preferred dates, location, number of students, and whether you are interested in ski or snowboard lessons.",
        },
        {
          title: "Step 2 — Check Availability",
          text: "We will check instructor availability and whether a suitable lesson can be arranged.",
        },
        {
          title: "Step 3 — Complete the Booking Form",
          text: "Once the basic arrangement is agreed, we will privately send you a Google Form.",
        },
        {
          title: "Step 4 — Confirm Details and Payment",
          text: "We will confirm the lesson details, price and payment method with you.",
        },
        {
          title: "Step 5 — Booking Confirmed",
          text: "Your lesson is officially booked only after you receive our written confirmation.",
        },
      ],
      alert:
        "Sending an enquiry does not confirm a booking. Your lesson is confirmed only after you receive written confirmation.",
    },
    testimonials: {
      eyebrow: "Student stories",
      title: "What students say.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Good to know before you contact us.",
      intro:
        "These answers are placeholders. Please confirm every policy before publishing the website.",
      items: [
        {
          question: "Does sending an enquiry confirm my booking?",
          answer:
            "No. Your lesson is confirmed only after you receive written confirmation from us.",
        },
        {
          question: "Can I request a specific instructor?",
          answer:
            "[POLICY PLACEHOLDER — confirm whether instructor requests can be accepted and how availability affects the request.]",
        },
        {
          question: "Can lessons be taught in Chinese?",
          answer:
            "[LANGUAGE PLACEHOLDER — confirm which instructors teach in Traditional Chinese, English or other languages.]",
        },
        {
          question: "Can children join a lesson?",
          answer:
            "[CHILD LESSON POLICY PLACEHOLDER — confirm minimum age, supervision and lesson format.]",
        },
        {
          question: "Can several people learn together?",
          answer:
            "[GROUP LESSON POLICY PLACEHOLDER — confirm maximum group size and level requirements.]",
        },
        {
          question: "How is the lesson price confirmed?",
          answer:
            "[PRICING PLACEHOLDER — explain when and how the final price will be shared.]",
        },
        {
          question: "Are lift passes and equipment included?",
          answer:
            "[INCLUSION POLICY PLACEHOLDER — confirm what students need to arrange separately.]",
        },
        {
          question: "What happens if the weather is bad?",
          answer:
            "[WEATHER / CANCELLATION POLICY PLACEHOLDER — add the confirmed policy before publishing.]",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Tell us what you would like to learn.",
      intro:
        "Share your preferred dates, location, group size and whether you are interested in ski or snowboard lessons. We will reply to discuss availability.",
      platforms: {
        whatsapp: "WhatsApp",
        line: "LINE",
        wechat: "WeChat",
        instagram: "Instagram",
        email: "Email",
      },
      emailSubject: "Ski or snowboard lesson enquiry",
      prefillLabel: "Suggested message",
      linkPlaceholder: "Add this contact link in app/content.ts",
    },
    footer: {
      tagline: "Ski & snowboard lessons in English and Chinese.",
      rights: "All rights reserved.",
      privacy: "[PRIVACY NOTICE PLACEHOLDER]",
    },
  },
  zh: {
    nav: {
      aria: "主要選單",
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
      eyebrow: "澳洲新州 Perisher · 日本北海道二世谷",
      title: "專屬於你的滑雪與單板課程",
      subtitle:
        "根據你的程度與目標，提供安全、友善並且有趣的雪上學習體驗。",
      secondaryCta: "查看訂課流程",
    },
    about: {
      eyebrow: "關於我們",
      title: "建立信心，享受每一個轉彎。",
      intro:
        "我們是屏東科技大學休閒運動系的同學，畢業後曾在台灣一起擔任健身教練。當時最喜歡一起衝浪；現在，我們成為往返南北半球雪季的全職雙板與單板教練。",
      photoLabel: "[LONNY 與 ANN 合照]",
      points: [
        {
          title: "我們是誰",
          text: "兩位都教授雙板與單板，並可使用中文或英文上課，也有共同的運動與教學背景。",
        },
        {
          title: "我們如何教學",
          text: "以清楚、友善的方式，根據每位學生的步調、目標與信心調整課程。",
        },
        {
          title: "我們在哪裡教學",
          text: "南半球雪季在澳洲新州 Perisher，北半球雪季在日本北海道二世谷。",
        },
      ],
    },
    lessons: {
      eyebrow: "課程介紹",
      title: "根據你的需要安排課程。",
      intro: "適合家庭、兒童、中文旅客，以及希望改善滑行技術的學生；實際內容與時間會在聯絡後確認。",
      noPrice: "[課程細節確認後，我們會私下提供價格。]",
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
      title: "個人化、清楚且有支持性的教學。",
      items: [
        {
          title: "根據學生需求調整課程",
          text: "依照學生的程度、目標與學習狀態彈性調整。",
        },
        {
          title: "友善並有支持性的學習環境",
          text: "用歡迎與鼓勵的方式，幫助學生建立信心。",
        },
        {
          title: "清楚易懂的教學",
          text: "使用簡單明確的說明，提供實用的練習回饋。",
        },
        {
          title: "安全並享受學習過程",
          text: "重視安全、進步，也保留滑雪原本的樂趣。",
        },
      ],
    },
    booking: {
      eyebrow: "訂課流程",
      title: "從第一次聯絡到正式確認，流程簡單清楚。",
      intro: "這個網站用於課程介紹與詢問；每堂課都會由我們親自與你確認。",
      steps: [
        {
          title: "Step 1 — 聯絡我們",
          text: "告訴我們預計日期、地點、人數，以及想學雙板還是單板。",
        },
        {
          title: "Step 2 — 確認可安排時間",
          text: "我們會確認教練時間，以及是否能安排合適的課程。",
        },
        {
          title: "Step 3 — 填寫訂課表單",
          text: "確認基本安排後，我們會私下傳送 Google Form。",
        },
        {
          title: "Step 4 — 確認細節與付款",
          text: "確認課程細節、價格與付款方式。",
        },
        {
          title: "Step 5 — 訂課正式成立",
          text: "收到我們的書面確認後，課程才正式成立。",
        },
      ],
      alert:
        "送出詢問並不代表已完成訂課。收到我們的書面確認後，課程才算正式成立。",
    },
    testimonials: {
      eyebrow: "學生分享",
      title: "學生怎麼說。",
    },
    faq: {
      eyebrow: "常見問題",
      title: "聯絡我們之前，可以先了解這些資訊。",
      intro: "以下回答目前是 placeholder；網站正式上線前，請先確認所有政策內容。",
      items: [
        {
          question: "送出詢問後，是否代表已經完成訂課？",
          answer: "不是。收到我們的書面確認後，課程才算正式成立。",
        },
        {
          question: "可以指定教練嗎？",
          answer:
            "[政策 PLACEHOLDER——請確認是否接受指定教練，以及教練時間如何影響安排。]",
        },
        {
          question: "可以使用中文上課嗎？",
          answer:
            "[語言 PLACEHOLDER——請確認哪些教練可使用繁體中文、英文或其他語言教學。]",
        },
        {
          question: "兒童可以參加嗎？",
          answer:
            "[兒童課程政策 PLACEHOLDER——請確認最低年齡、陪同方式與上課形式。]",
        },
        {
          question: "可以多人一起上課嗎？",
          answer:
            "[多人課程政策 PLACEHOLDER——請確認人數上限與程度要求。]",
        },
        {
          question: "課程價格如何確認？",
          answer:
            "[價格 PLACEHOLDER——請說明何時以及如何提供最終價格。]",
        },
        {
          question: "雪票和裝備是否包含？",
          answer:
            "[包含項目政策 PLACEHOLDER——請確認學生需要另外準備的項目。]",
        },
        {
          question: "如果天氣不好怎麼辦？",
          answer:
            "[天氣／取消政策 PLACEHOLDER——網站正式發布前，請加入已確認的政策。]",
        },
      ],
    },
    contact: {
      eyebrow: "聯絡我們",
      title: "告訴我們，你想學什麼。",
      intro:
        "請提供預計日期、地點、人數，以及想學雙板或單板。我們會回覆並確認是否能安排。",
      platforms: {
        whatsapp: "WhatsApp",
        line: "LINE",
        wechat: "WeChat",
        instagram: "Instagram",
        email: "Email",
      },
      emailSubject: "滑雪或單板課程詢問",
      prefillLabel: "預填訊息",
      linkPlaceholder: "請在 app/content.ts 加入聯絡連結",
    },
    footer: {
      tagline: "中英文雙板與單板課程。",
      rights: "保留所有權利。",
      privacy: "[隱私權聲明 PLACEHOLDER]",
    },
  },
} as const;
