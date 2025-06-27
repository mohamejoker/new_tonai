export type Language = "en" | "ar";

export interface Translation {
  // Navigation
  features: string;
  services: string;
  pricing: string;
  analytics: string;
  signIn: string;
  getStarted: string;

  // Hero Section
  aiPoweredRevolution: string;
  automateMarketing: string;
  digitalMarketing: string;
  heroDescription: string;
  startFreeTrial: string;
  watchDemo: string;

  // Stats
  activeCampaigns: string;
  totalRevenue: string;
  averageRoas: string;
  clientsWorldwide: string;

  // Features
  featuresTitle: string;
  featuresSubtitle: string;

  // Social Media
  socialMediaTools: string;
  connectWithAudience: string;

  // Pricing
  choosePlan: string;
  pricingDescription: string;
  mostPopular: string;
  startFree: string;
  getPremium: string;
  contactSales: string;

  // Common
  free: string;
  premium: string;
  enterprise: string;
  month: string;

  // Currency
  currency: string;
  egyptianPound: string;
  usDollar: string;
}

export const translations: Record<Language, Translation> = {
  en: {
    // Navigation
    features: "Features",
    services: "Services",
    pricing: "Pricing",
    analytics: "Analytics",
    signIn: "Sign In",
    getStarted: "Get Started",

    // Hero Section
    aiPoweredRevolution: "AI-Powered Marketing Revolution",
    automateMarketing: "Automate Your",
    digitalMarketing: "Digital Marketing",
    heroDescription:
      "Let our AI handle your paid ads, grow your followers organically, and optimize campaigns across Facebook, Instagram, Google, TikTok, YouTube & Snapchat.",
    startFreeTrial: "Start Free Trial",
    watchDemo: "Watch Demo",

    // Stats
    activeCampaigns: "Active Campaigns",
    totalRevenue: "Total Revenue Generated",
    averageRoas: "Average ROAS",
    clientsWorldwide: "Clients Worldwide",

    // Features
    featuresTitle: "Powerful AI Features",
    featuresSubtitle: "Everything you need to dominate digital marketing",

    // Social Media
    socialMediaTools: "Social Media Tools",
    connectWithAudience: "Connect with your audience across all platforms",

    // Pricing
    choosePlan: "Choose Your Plan",
    pricingDescription:
      "Start free and scale as you grow. All plans include our AI optimization technology.",
    mostPopular: "Most Popular",
    startFree: "Start Free",
    getPremium: "Get Premium",
    contactSales: "Contact Sales",

    // Common
    free: "Free",
    premium: "Premium",
    enterprise: "Enterprise",
    month: "/month",

    // Currency
    currency: "Currency",
    egyptianPound: "Egyptian Pound",
    usDollar: "US Dollar",
  },
  ar: {
    // Navigation
    features: "المميزات",
    services: "الخدمات",
    pricing: "الأسعار",
    analytics: "التحليلات",
    signIn: "تسجيل الدخول",
    getStarted: "ابدأ الآن",

    // Hero Section
    aiPoweredRevolution: "ثورة التسويق بالذكاء الاصطناعي",
    automateMarketing: "أتمتة",
    digitalMarketing: "التسويق الرقمي",
    heroDescription:
      "دع الذكاء الاصطناعي يتولى إعلاناتك المدفوعة، وينمي متابعيك بشكل طبيعي، ويحسن الحملات عبر فيسبوك وإنستجرام وجوجل وتيك توك ويوتيوب وسناب شات.",
    startFreeTrial: "ابدأ النسخة التجريبية",
    watchDemo: "شاهد العرض التوضيحي",

    // Stats
    activeCampaigns: "الحملات النشطة",
    totalRevenue: "إجمالي الإيرادات المُحققة",
    averageRoas: "متوسط العائد على الاستثمار",
    clientsWorldwide: "العملاء حول العالم",

    // Features
    featuresTitle: "مميزات الذكاء الاصطناعي القوية",
    featuresSubtitle: "كل ما تحتاجه للهيمنة على التسويق الرقمي",

    // Social Media
    socialMediaTools: "أدوات وسائل التواصل الاجتماعي",
    connectWithAudience: "تواصل مع جمهورك عبر جميع المنصات",

    // Pricing
    choosePlan: "اختر خطتك",
    pricingDescription:
      "ابدأ مجاناً وتوسع مع نموك. جميع الخطط تشمل تقنية التحسين بالذكاء الاصطناعي.",
    mostPopular: "الأكثر شعبية",
    startFree: "ابدأ مجاناً",
    getPremium: "احصل على المميز",
    contactSales: "اتصل بالمبيعات",

    // Common
    free: "مجاني",
    premium: "مميز",
    enterprise: "للمؤسسات",
    month: "/شهر",

    // Currency
    currency: "العملة",
    egyptianPound: "الجنيه المصري",
    usDollar: "الدولار الأمريكي",
  },
};

export function getTranslation(language: Language): Translation {
  return translations[language];
}
