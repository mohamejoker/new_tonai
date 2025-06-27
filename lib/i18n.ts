export type Language = "en" | "ar";

export interface Translation {
  // Navigation
  features: string;
  services: string;
  pricing: string;
  analytics: string;
  signIn: string;
  getStarted: string;
  aiAgent: string;
  dashboard: string;
  apiProvider: string;
  admin: string;

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

  // Services
  ourServices: string;
  servicesDescription: string;
  requestService: string;
  serviceProcess: string;

  // AI Agent
  aiAgentTitle: string;
  aiAgentDescription: string;
  aiCapabilities: string;
  agentTypes: string;

  // Dashboard
  welcomeBack: string;
  dashboardSubtitle: string;
  myProjects: string;
  recentActivity: string;

  // Payment
  securePayment: string;
  paymentDescription: string;
  paymentMethods: string;

  // API
  apiProvider: string;
  apiDescription: string;
  apiEndpoints: string;
  authentication: string;
  documentation: string;

  // Admin
  servicesManagement: string;
  addService: string;
  editService: string;
  usersManagement: string;
  ordersManagement: string;

  // Common
  free: string;
  premium: string;
  enterprise: string;
  month: string;
  save: string;
  cancel: string;
  edit: string;
  delete: string;
  view: string;

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
    aiAgent: "AI Agent",
    dashboard: "Dashboard",
    apiProvider: "API Provider",
    admin: "Admin",

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

    // Services
    ourServices: "Our Services",
    servicesDescription:
      "Comprehensive digital marketing solutions powered by AI",
    requestService: "Request Service",
    serviceProcess: "Our Process",

    // AI Agent
    aiAgentTitle: "AI Marketing Agents",
    aiAgentDescription:
      "Intelligent AI agents that work 24/7 to optimize your marketing campaigns",
    aiCapabilities: "AI Capabilities",
    agentTypes: "Agent Types",

    // Dashboard
    welcomeBack: "Welcome Back",
    dashboardSubtitle: "Manage your campaigns and track performance",
    myProjects: "My Projects",
    recentActivity: "Recent Activity",

    // Payment
    securePayment: "Secure Payment",
    paymentDescription: "Complete your purchase with our secure payment system",
    paymentMethods: "Payment Methods",

    // API
    apiProvider: "API Provider",
    apiDescription:
      "Integrate our powerful AI marketing tools into your applications",
    apiEndpoints: "API Endpoints",
    authentication: "Authentication",
    documentation: "Documentation",

    // Admin
    servicesManagement: "Services Management",
    addService: "Add Service",
    editService: "Edit Service",
    usersManagement: "Users Management",
    ordersManagement: "Orders Management",

    // Common
    free: "Free",
    premium: "Premium",
    enterprise: "Enterprise",
    month: "/month",
    save: "Save",
    cancel: "Cancel",
    edit: "Edit",
    delete: "Delete",
    view: "View",

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
    aiAgent: "الوكيل الذكي",
    dashboard: "لوحة التحكم",
    apiProvider: "مزود API",
    admin: "الإدارة",

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
    contactSales: "اتص�� بالمبيعات",

    // Services
    ourServices: "خدماتنا",
    servicesDescription: "حلول التسويق الرقمي الشاملة مدعومة بالذكاء الاصطناعي",
    requestService: "اطلب الخدمة",
    serviceProcess: "عمليتنا",

    // AI Agent
    aiAgentTitle: "وكلاء التسويق الذكي",
    aiAgentDescription:
      "وكلاء ذكاء اصطناعي ذكيون يعملون 24/7 لتحسين حملاتك التسويقية",
    aiCapabilities: "قدرات الذكاء الاصطناعي",
    agentTypes: "أنواع الوكلاء",

    // Dashboard
    welcomeBack: "مرحباً بعودتك",
    dashboardSubtitle: "أدر حملاتك وتتبع الأداء",
    myProjects: "مشاريعي",
    recentActivity: "النشاط الأخير",

    // Payment
    securePayment: "دفع آمن",
    paymentDescription: "أكمل عملية الشراء بنظام الدفع الآمن لدينا",
    paymentMethods: "طرق الدفع",

    // API
    apiProvider: "مزود API",
    apiDescription: "دمج أدوات التسويق القوية بالذكاء الاصطناعي في تطبيقاتك",
    apiEndpoints: "نقاط نهاية API",
    authentication: "المصادقة",
    documentation: "التوثيق",

    // Admin
    servicesManagement: "إدارة الخدمات",
    addService: "إضافة خدمة",
    editService: "تعديل الخدمة",
    usersManagement: "إدارة المستخدمين",
    ordersManagement: "إدارة الطلبات",

    // Common
    free: "مجاني",
    premium: "مميز",
    enterprise: "للمؤسسات",
    month: "/شهر",
    save: "حفظ",
    cancel: "إلغاء",
    edit: "تعديل",
    delete: "حذف",
    view: "عرض",

    // Currency
    currency: "العملة",
    egyptianPound: "الجنيه المصري",
    usDollar: "الدولار الأمريكي",
  },
};

export function getTranslation(language: Language): Translation {
  return translations[language];
}
