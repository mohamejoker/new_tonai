# Town Media AI - AI-Powered Digital Marketing Platform

# تاون ميديا AI - منصة التسويق الرقمي بالذكاء الاصطناعي

A modern, multilingual digital marketing landing page with interactive social media tools, dynamic animations, and multi-currency support.

منصة تسويق رقمي حديثة ومتعددة اللغات مع أدوات تفاعلية لوسائل التواصل الاجتماعي وأنيميشن ديناميكي ودعم عملات متعددة.

## ✨ Features / المميزات

### 🌐 Internationalization / الدعم الدولي

- **Bilingual Support**: English and Arabic with RTL layout
- **دعم ثنائي اللغة**: الإنجليزية والعربية مع تخطيط من اليمين لليسار
- **Smart Language Detection**: Automatic language preference storage
- **كشف ذكي للغة**: تخزين تلقائي لتفضيل اللغة

### 💰 Multi-Currency Support / دعم العملات المتعددة

- **Dual Currency**: USD and Egyptian Pound (EGP)
- **عملتان**: الدولار الأمريكي والجنيه المصري
- **Real-time Conversion**: Automatic price conversion with live exchange rates
- **تحويل في الوقت الفعلي**: تحويل تلقائي للأسعار مع أسعار صرف حية

### 🎨 Interactive Design / التصميم التفاعلي

- **Animated Sliders**: Auto-playing content sliders with smooth transitions
- **سلايدر متحرك**: سلايدر محتوى تلقائي مع انتقالات سلسة
- **Social Media Icons**: Interactive floating social media sidebar
- **أيقونات وسائل التواصل**: شريط جانبي تفاعلي لوسائل التواصل الاجتماعي
- **Hover Effects**: Enhanced micro-interactions throughout the interface
- **تأثيرات التمرير**: تفاعلات دقيقة محسنة في جميع أنحاء الواجهة

### 🚀 Advanced Animations / الأنيميشن المتقدم

- **Framer Motion**: Smooth page transitions and element animations
- **فريمر موشن**: انتقالات صفحة سلسة وأنيميشن عناصر
- **Scroll Animations**: Elements animate as they come into view
- **أنيميشن التمرير**: العناصر تتحرك عند ظهورها في الشاشة
- **Loading States**: Elegant loading and state transitions
- **حالات التحميل**: تحميل أنيق وانتقالات الحالة

### 📱 Social Media Integration / تكامل وسائل التواصل الاجتماعي

- **6 Major Platforms**: Facebook, Instagram, Twitter, LinkedIn, YouTube, TikTok
- **6 منصات رئيسية**: فيسبوك، إنستجرام، تويتر، لينكد إن، يوتيوب، تيك توك
- **Interactive Tools**: Platform-specific optimization tools
- **أدوات تفاعلية**: أدوات تحسين خاصة بكل منصة
- **Analytics Dashboard**: Real-time performance metrics
- **لوحة التحليلات**: مقاييس أداء في الوقت الفعلي

## 🛠️ Technical Stack / المكدس التقني

### Frontend / الواجهة الأمامية

- **Next.js 13.5.1** with App Router
- **React 18.2.0** with TypeScript
- **Tailwind CSS** for styling
- **Radix UI** for accessible components
- **Framer Motion** for animations
- **Zustand** for state management

### Styling / التنسيق

- **Custom CSS Animations**: Floating, pulse, and gradient effects
- **أنيميشن CSS مخصص**: تأثيرات طفو ونبض وتدرج
- **Arabic Font Support**: Google Fonts Cairo for Arabic text
- **دعم الخط العربي**: خط القاهرة من جوجل فونتس للنص العربي
- **RTL Layout**: Proper right-to-left layout support
- **تخطيط من اليمين لليسار**: دعم مناسب للتخطيط من اليمين لليسار

## 🚀 Getting Started / البدء

### Prerequisites / المتطلبات المسبقة

- Node.js 18+
- npm or yarn

### Installation / التثبيت

```bash
# Clone the repository / استنساخ المستودع
git clone [repository-url]

# Install dependencies / تثبيت التبعيات
npm install

# Run development server / تشغيل خادم التطوير
npm run dev

# Build for production / البناء للإنتاج
npm run build

# Start production server / تشغيل خادم الإنتاج
npm start
```

## 📁 Project Structure / هيكل المشروع

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Main landing page
├── components/            # React components
│   ├── layout/           # Layout components
│   │   ├── navigation.tsx # Enhanced navigation with language/currency
│   │   └── footer.tsx    # Footer component
│   ├── sections/         # Page sections
│   │   ├── hero-section.tsx          # Enhanced hero with animations
│   │   ├── social-media-section.tsx  # New social media section
│   │   ├── pricing-section.tsx       # Multi-currency pricing
│   │   └── ...           # Other sections
│   ├── ui/               # Reusable UI components
│   │   ├── language-switcher.tsx     # Language toggle
│   │   ├── currency-switcher.tsx     # Currency toggle
│   │   ├── social-media-icons.tsx    # Interactive social icons
│   │   ├── animated-slider.tsx       # Custom slider component
│   │   └── ...           # Other UI components
│   └── providers/        # Context providers
│       └── layout-provider.tsx       # Layout and language provider
├── hooks/                # Custom React hooks
│   ├── use-language.ts   # Language state management
│   └── use-currency.ts   # Currency state management
├── lib/                  # Utility libraries
│   ├── i18n.ts          # Internationalization config
│   ├── currency.ts      # Currency conversion utilities
│   └── utils.ts         # General utilities
```

## 🎯 Key Features Implementation / تنفيذ المميزات الرئيسية

### Language Switching / تبديل اللغة

The language switcher in the navigation allows users to toggle between English and Arabic. When Arabic is selected, the entire layout switches to RTL (right-to-left) mode with proper text alignment and Arabic fonts.

يتيح مبدل اللغة في التنقل للمستخدمين التبديل بين الإنجليزية والعربية. عند اختيار العربية، يتحول التخطيط بالكامل إلى وضع RTL مع محاذاة نص مناسبة وخطوط عربية.

### Currency Conversion / تحويل العملة

Automatic price conversion between USD and EGP with real-time exchange rates. All pricing sections update dynamically when the currency is changed.

تحويل تلقائي للأسعار بين الدولار الأمريكي والجنيه المصري مع أسعار صرف في الوقت الفعلي. جميع أقسام التسعير تتحدث ديناميكياً عند تغيير العملة.

### Social Media Tools / أدوات وسائل التواصل الاجتماعي

Interactive social media icons with hover effects, floating sidebar, and dedicated section showcasing platform-specific features and analytics.

أيقونات تفاعلية لوسائل التواصل الاجتماعي مع تأثيرات التمرير وشريط جانبي طائف وقسم مخصص يعرض ميزات وتحليلات خاصة بكل منصة.

## 🎨 Animation Features / مميزات الأنيميشن

### Scroll Animations / أنيميشن التمرير

- Elements fade in and slide up as they enter the viewport
- العناصر تختفي تدريجياً وتنزلق لأعلى عند دخولها منطقة الرؤية

### Hover Effects / تأثيرات التمرير

- Scale and transform effects on interactive elements
- تأثيرات التحجيم والتحويل على العناصر التفاعلية

### Loading States / حالات التحميل

- Smooth transitions between different states
- انتقالات سلسة بين الحالات المختلفة

## 💡 Usage Tips / نصائح الاستخدام

1. **Language Switching**: Use the globe icon in the navigation to switch languages
   **تبديل اللغة**: استخدم أيقونة الكرة الأرضية في التنقل لتبديل اللغات

2. **Currency Toggle**: Use the dollar icon to switch between USD and EGP
   **تبديل العملة**: استخدم أيقونة الدولار للتبديل بين الدولار والجنيه المصري

3. **Mobile Navigation**: Tap the menu icon on mobile devices for full navigation
   **التنقل المحمول**: اضغط على أيقونة القائمة في الأجهزة المحمولة للتنقل الكامل

## 🔧 Customization / التخصيص

### Adding New Languages / إضافة لغات جديدة

Add new language definitions in `lib/i18n.ts` and update the language switcher component.

أضف تعريفات لغة جديدة في `lib/i18n.ts` وحدث مكون مبدل اللغة.

### Adding New Currencies / إضافة عملات جديدة

Update the currency definitions and exchange rates in `lib/currency.ts`.

حدث تعريفات العملة وأسعار الصرف في `lib/currency.ts`.

### Customizing Animations / تخصيص الأنيميشن

Modify animation configurations in component files and `app/globals.css` for custom effects.

عدل إعدادات الأنيميشن في ملفات المكونات و `app/globals.css` للتأثيرات المخصصة.

## 📈 Performance / الأداء

- **Optimized Images**: All images are optimized for web performance
- **صور محسنة**: جميع الصور محسنة لأداء ��لويب
- **Code Splitting**: Components are loaded only when needed
- **تقسيم الكود**: المكونات تُحمل فقط عند الحاجة
- **SEO Optimized**: Proper meta tags and semantic HTML
- **محسن لمحركات البحث**: علامات meta مناسبة و HTML دلالي

## 🤝 Contributing / المساهمة

1. Fork the repository / فرع المستودع
2. Create a feature branch / أنشئ فرع ميزة
3. Commit your changes / ارتكب تغييراتك
4. Push to the branch / ادفع إلى الفرع
5. Open a Pull Request / افتح طلب سحب

## 📄 License / الترخيص

This project is licensed under the MIT License.
هذا المشروع مرخص تحت ترخيص MIT.

---

**Built with ❤️ for the digital marketing community**
**مبني بـ ❤️ لمجتمع التسويق الرقمي**
