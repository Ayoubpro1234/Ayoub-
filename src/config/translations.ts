/**
 * Modern Standard Arabic (العربية الفصحى الحديثة) & English Translations
 * Strictly formal, elegant, and professional Arabic without any Darija or slang.
 */

export interface Translations {
  nav: {
    brandName: string;
    about: string;
    projects: string;
    downloads: string;
    contact: string;
    getApp: string;
    langToggle: string;
    langName: string;
  };
  hero: {
    name: string;
    role: string;
    greeting: string;
    headlineStart: string;
    headlineHighlight: string;
    bio: string;
    exploreBtn: string;
    contactBtn: string;
    focusLabel: string;
    focusValue: string;
    passionLabel: string;
    passionValue: string;
    approachLabel: string;
    approachValue: string;
    apkBadge: string;
    liveAndroid: string;
    viewDetails: string;
  };
  about: {
    badge: string;
    headline: string;
    introduction: string;
    interests: {
      title: string;
      description: string;
    }[];
    philosophyBadge: string;
    philosophyTitle: string;
    philosophyText: string;
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    publishedCount: string;
    versionLabel: string;
    viewDetails: string;
    downloadApk: string;
    sizeLabel: string;
    keyFeaturesLabel: string;
    features: Record<string, string>;
    scalabilityNote: string;
  };
  download: {
    badge: string;
    title: string;
    subtitle: string;
    apkBadge: string;
    versionLabel: string;
    sizeLabel: string;
    requiresLabel: string;
    downloadBtn: string;
    hostedNote: string;
    steps: {
      number: string;
      title: string;
      desc: string;
    }[];
  };
  countdownModal: {
    seconds: string;
    preparingTitle: string;
    preparingDesc: string;
    preparingNote: string;
    cancelBtn: string;
    readyTitle: string;
    readyDescPrefix: string;
    readyDescSuffix: string;
    formatLabel: string;
    destinationLabel: string;
    destinationValue: string;
    closeBtn: string;
    continueBtn: string;
    externalNote: string;
  };
  detailModal: {
    overviewTitle: string;
    screenshotsBadge: string;
    screenshotsSubtitle: string;
    prevShot: string;
    nextShot: string;
    interactiveBadge: string;
    interactiveSubtitle: string;
    demoTag: string;
    modes: {
      flashlight: string;
      lantern: string;
      strobe: string;
      sos: string;
    };
    powerOn: string;
    powerOff: string;
    frequencyLabel: string;
    batteryLabel: string;
    thermalSafe: string;
    featureDeepDiveTitle: string;
    specsTitle: string;
    signedPackageLabel: string;
    closeBtn: string;
    downloadApkBtn: string;
    detailedFeatures: {
      name: string;
      description: string;
    }[];
    specs: {
      label: string;
      value: string;
    }[];
    screenshotCaptions: {
      title: string;
      description: string;
    }[];
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    emailCard: {
      title: string;
      desc: string;
      sendBtn: string;
      copyTitle: string;
      copied: string;
    };
    githubCard: {
      title: string;
      desc: string;
      btn: string;
    };
    instagramCard: {
      title: string;
      desc: string;
      btn: string;
    };
    note: string;
  };
  footer: {
    copyright: string;
    backToTop: string;
  };
}

export const TRANSLATIONS: Record<'ar' | 'en', Translations> = {
  ar: {
    nav: {
      brandName: 'أيوب',
      about: 'تعرّف عليّ',
      projects: 'مشاريعي وتطبيقاتي',
      downloads: 'مركز التحميل',
      contact: 'تواصل معي',
      getApp: 'تحميل التطبيق',
      langToggle: 'English',
      langName: 'العربية',
    },
    hero: {
      name: 'أيوب',
      role: 'مطوّر تطبيقات أندرويد مستقل',
      greeting: 'مرحباً، أنا أيوب',
      headlineStart: 'أحوّل الأفكار إلى ',
      headlineHighlight: 'تجارب رقمية.',
      bio: 'مطوّر تطبيقات مهتم بالتكنولوجيا والذكاء الاصطناعي، أبتكر حلولاً رقمية وتطبيقات عملية من خلال التجربة والمشاريع الحقيقية.',
      exploreBtn: 'اكتشف مشاريعي',
      contactBtn: 'تواصل معي',
      focusLabel: 'المجال الأساسي',
      focusValue: 'تطبيقات أندرويد',
      passionLabel: 'الشغف التقني',
      passionValue: 'الذكاء الاصطناعي',
      approachLabel: 'المنهجية',
      approachValue: 'التطبيق والتجربة',
      apkBadge: 'ملف APK متوفر',
      liveAndroid: 'إصدار أندرويد جاهز',
      viewDetails: 'عرض التفاصيل والمواصفات',
    },
    about: {
      badge: 'نبذة ورؤية',
      headline: 'تعرّف عليّ',
      introduction:
        'أنا مطوّر مستقل أسعى إلى ابتكار أدوات رقمية عملية، سلسة الاستخدام وعالية الكفاءة. مسيرتي البرمجية مبنية على التعلّم الذاتي، الممارسة المستمرة، وحب تحويل الأفكار من مفاهيم أولية إلى برمجيات متكاملة يستفيد منها المستخدم.',
      interests: [
        {
          title: 'تطوير تطبيقات أندرويد',
          description:
            'تصميم تطبيقات أصلية عالية الأداء واقتصادية في استهلاك طاقة البطارية، مع بنية برمجية متينة وواجهات تفاعلية بديهية.',
        },
        {
          title: 'الذكاء الاصطناعي',
          description:
            'استكشاف تقنيات الذكاء الاصطناعي والشبكات العصبية الحديثة، وتوظيف النماذج الذكية لحل التحديات اليومية بصورة عملية.',
        },
        {
          title: 'التكنولوجيا والإبداع الرقمي',
          description:
            'الدمج المتناغم بين التصميم الأنيق والمنطق البرمجي الصلب، لإنشاء واجهات تجمع بين الجمال والوظيفة النفعية.',
        },
        {
          title: 'التعلّم عبر التجربة وبناء المشاريع',
          description:
            'تطوير المهارات عبر البرمجة العملية لمشاريع حقيقية وقابلة للاختبار، والاهتمام بتحسين الأداء وجودة الشيفرة البرمجية باستمرار.',
        },
      ],
      philosophyBadge: 'فلسفة التطوير',
      philosophyTitle: 'تطوير حقيقي، هادف ومبني على الشفافية',
      philosophyText:
        'أؤمن ببناء أدوات برمجية حقيقية ومفيدة. أركز دائماً على تقديم حلول ملموسة وواجهات نقية تحترم المستخدم وتلبي احتياجاته بكفاءة.',
    },
    projects: {
      badge: 'الأعمال المميزة',
      title: 'مشاريعي وتطبيقاتي',
      subtitle:
        'تطبيقات أندرويد أصلية ومشاريع برمجية صُممت بعناية لتقديم تجربة استخدام سهلة، واعتمادية عالية، وتصميم عصري.',
      publishedCount: 'تطبيق منشور',
      versionLabel: 'الإصدار',
      viewDetails: 'عرض التفاصيل',
      downloadApk: 'تحميل التطبيق',
      sizeLabel: 'الحجم:',
      keyFeaturesLabel: 'أبرز مميزات التطبيق',
      features: {
        'LED Flashlight': 'كشاف LED عالي الإضاءة',
        'Screen Lantern': 'إضاءة الشاشة المحيطية',
        'SOS Mode': 'نمط استغاثة طوارئ SOS',
        'Strobe Mode': 'ضوء وامض متقطع (Strobe)',
        'Battery Indicator': 'مؤشر ذكي لمستوى البطارية',
        'Modern Dark Interface': 'واجهة داكنة مريحة وعصرية',
      },
      scalabilityNote:
        'المزيد من التطبيقات قيد التطوير النشط حالياً. يمكن تحديث كتالوج المشاريع بسلاسة عبر ملف الإعدادات.',
    },
    download: {
      badge: 'التوزيع الرسمي',
      title: 'مركز التحميل',
      subtitle:
        'احصل على النسخ الأصلية الرسمية لتطبيقات أندرويد بروابط مباشرة. جميع الحزم مستقلة، آمنة وموثوقة.',
      apkBadge: 'ملف أندرويد APK',
      versionLabel: 'الإصدار:',
      sizeLabel: 'الحجم:',
      requiresLabel: 'المتطلبات:',
      downloadBtn: 'تحميل التطبيق',
      hostedNote: 'مستضاف على MediaFire · تحقق أمني خلال 10 ثوانٍ',
      steps: [
        {
          number: '١',
          title: 'تحميل الحزمة',
          desc: 'انقر على زر التحميل، وانتظر العد التنازلي ثم انتقل إلى رابط MediaFire المباشر.',
        },
        {
          number: '٢',
          title: 'السماح بالتثبيت',
          desc: 'على جهاز أندرويد، اضغط "تثبيت من هذا المصدر" عند ظهور إشعار الأمان في المتصفح.',
        },
        {
          number: '٣',
          title: 'استمتع بالتطبيق',
          desc: 'شغّل AYOUB Flash-Lite واستمتع بجميع أدوات الإضاءة بدون إعلانات وبخصوصية تامة دون إنترنت.',
        },
      ],
    },
    countdownModal: {
      seconds: 'ثانية',
      preparingTitle: 'جاري تجهيز رابط MediaFire',
      preparingDesc: 'يتم الآن التحقق من سلامة الحزمة وتجهيز رابط التحميل المباشر لك.',
      preparingNote: 'سيظهر زر المتابعة إلى منصة MediaFire فور اكتمال العد التنازلي.',
      cancelBtn: 'إلغاء التحميل',
      readyTitle: 'تحميل التطبيق جاهز الآن!',
      readyDescPrefix: 'تم تجهيز حزمة',
      readyDescSuffix: 'الرسمية بنجاح. انقر على الزر أدناه للمتابعة إلى صفحة التحميل.',
      formatLabel: 'نوع الملف:',
      destinationLabel: 'وجهة الرابط:',
      destinationValue: 'التخزين السحابي MediaFire',
      closeBtn: 'إغلاق',
      continueBtn: 'المتابعة إلى MediaFire',
      externalNote: 'يفتح الرابط الخارجي بأمان في علامة تبويب جديدة.',
    },
    detailModal: {
      overviewTitle: 'نظرة عامة على التطبيق',
      screenshotsBadge: 'لقطات حقيقية من داخل التطبيق',
      screenshotsSubtitle: 'صور شاشة فعلية ملتقطة من تطبيق AYOUB Flash-Lite الإصدار 1.0.0 على أندرويد.',
      prevShot: 'الصورة السابقة',
      nextShot: 'الصورة التالية',
      interactiveBadge: 'تجربة تفاعلية مباشرة عبر المتصفح',
      interactiveSubtitle: 'اختبر أنماط الإضاءة المختلفة وسرعة الاستجابة مباشرة قبل تنزيل الحزمة.',
      demoTag: 'معاينة تجريبية',
      modes: {
        flashlight: 'كشاف LED',
        lantern: 'إضاءة الشاشة',
        strobe: 'الضوء الوامض',
        sos: 'نمط SOS',
      },
      powerOn: 'تشغيل الكشاف',
      powerOff: 'إيقاف التشغيل',
      frequencyLabel: 'تردد الوميض',
      batteryLabel: 'مستوى البطارية:',
      thermalSafe: 'الحرارة: آمنة ومستقرة',
      featureDeepDiveTitle: 'شرح مفصل لمميزات التطبيق',
      specsTitle: 'المواصفات الفنية ومتطلبات التشغيل',
      signedPackageLabel: 'الحزمة الرسمية الموقّعة:',
      closeBtn: 'إغلاق',
      downloadApkBtn: 'تحميل التطبيق (Android APK)',
      detailedFeatures: [
        {
          name: 'كشاف LED عالي الإضاءة',
          description:
            'تشغيل فوري لفلاش الكاميرا بأقصى قدرة إضاءة وسرعة استجابة فائقة، مع دعم ردود الفعل اللمسية (Haptic Feedback).',
        },
        {
          name: 'إضاءة الشاشة المحيطية (Screen Lantern)',
          description:
            'إضاءة محيطية هادئة وقابلة للتعديل تناسب القراءة والأماكن المظلمة دون إجهاد العينين بتوهج حاد.',
        },
        {
          name: 'نمط استغاثة طوارئ SOS',
          description:
            'إرسال إشارات ضوئية استغاثية تلقائية وفق شفرة مورس الدولية (... --- ...) للاستخدام في حالات الطوارئ والسلامة.',
        },
        {
          name: 'ضوء وامض متقطع (Strobe Mode)',
          description:
            'وميض ضوئي متقطع عالي التردد مع شريط تحكم كامل لضبط سرعة الوميض لتنبيه الرؤية أو الإشارات التحذيرية.',
        },
        {
          name: 'مؤشر ذكي لمستوى البطارية',
          description:
            'مراقبة لحظية ومباشرة لنسبة شحن البطارية مع تنبيهات أمان لحماية الهاتف أثناء استخدام الإضاءة المستمرة.',
        },
        {
          name: 'واجهة داكنة مريحة وعصرية',
          description:
            'تصميم داكن فحمـي مريح للعين ومحسّن لشاشات OLED لتوفير استهلاك الطاقة، مع تباين جذاب باللون الأصفر الكهربائي.',
        },
      ],
      specs: [
        { label: 'نظام التشغيل', value: 'أندرويد 7.0 (Nougat) فما فوق' },
        { label: 'نوع الحزمة', value: 'ملف APK رسمي وموقّع' },
        { label: 'معمارية المعالج', value: 'شاملة (arm64-v8a, armeabi-v7a)' },
        { label: 'الإصدار الحالي', value: 'v1.0.0 المستقر' },
        { label: 'الأذونات المطلوبة', value: 'الكاميرا (للتحكم في فلاش LED فقط)' },
        { label: 'الخصوصية والتتبع', value: 'بدون أي تتبع، يعمل بدون إنترنت 100%' },
      ],
      screenshotCaptions: [
        {
          title: 'كشاف LED قيد التشغيل',
          description: 'تشغيل ضوء الفلاش بقدرة كاملة مع مؤقت التشغيل وزر الإيقاف الفوري.',
        },
        {
          title: 'وضع الاستعداد ومراقبة الطاقة',
          description: 'حالة الاستعداد مع عرض مستوى شحن البطارية (77%) وخيارات الإضاءة البديلة.',
        },
        {
          title: 'إعدادات التطبيق والاهتزاز اللمسي',
          description: 'نافذة الإعدادات وخيار تفعيل الاهتزاز اللمسي التفاعلي عند الضغط.',
        },
        {
          title: 'فحص عتاد الهاتف والمستشعرات',
          description: 'فحص مباشر عبر واجهة CameraManager وTorchCallback للتأكد من توافق عتاد الجهاز.',
        },
      ],
    },
    contact: {
      badge: 'تواصل مباشر',
      title: 'تواصل معي',
      subtitle:
        'يسعدني التواصل معك. سواء كان لديك استفسار أو اقتراح حول تطبيق AYOUB Flash-Lite، أو فكرة مشروع جديد، يمكنك مراسلتي عبر البريد الإلكتروني أو المنصات الاجتماعية.',
      emailCard: {
        title: 'البريد الإلكتروني المباشر',
        desc: 'للاستفسارات، الملاحظات والمقترحات التقنية.',
        sendBtn: 'إرسال رسالة',
        copyTitle: 'نسخ البريد الإلكتروني',
        copied: 'تم النسخ!',
      },
      githubCard: {
        title: 'منصة GitHub',
        desc: 'مستودع كود AYOUB Flash-Lite والمشاريع البرمجية.',
        btn: 'زيارة مستودع GitHub',
      },
      instagramCard: {
        title: 'منصة Instagram',
        desc: 'متابعة أحدث أخبار التطبيقات والإصدارات القادمة.',
        btn: 'زيارة حساب Instagram',
      },
      note: 'يمكن تحديث الروابط الاجتماعية والبريد الإلكتروني بسهولة عبر ملف الإعدادات.',
    },
    footer: {
      copyright: '© 2026 أيوب. جميع الحقوق محفوظة.',
      backToTop: 'العودة إلى الأعلى',
    },
  },

  en: {
    nav: {
      brandName: 'AYOUB',
      about: 'About',
      projects: 'Projects',
      downloads: 'Download APK',
      contact: 'Contact',
      getApp: 'Get Flash-Lite',
      langToggle: 'العربية',
      langName: 'English',
    },
    hero: {
      name: 'AYOUB',
      role: 'Independent App Developer',
      greeting: 'Hello, I am AYOUB',
      headlineStart: 'Turning Ideas Into ',
      headlineHighlight: 'Digital Experiences.',
      bio: 'I create useful applications and explore technology through real projects.',
      exploreBtn: 'Explore My Projects',
      contactBtn: 'Contact Me',
      focusLabel: 'Focus',
      focusValue: 'Android Ecosystem',
      passionLabel: 'Passion',
      passionValue: 'AI & Creativity',
      approachLabel: 'Approach',
      approachValue: 'Hands-on Building',
      apkBadge: 'APK Available',
      liveAndroid: 'Live Android Build',
      viewDetails: 'View Details & Specs',
    },
    about: {
      badge: 'Background & Direction',
      headline: 'Building Real Tools with Curiosity & Purpose',
      introduction:
        'I am an independent developer dedicated to crafting functional, clean, and responsive digital tools. My development journey is fueled by self-driven learning, practical software engineering, and the excitement of taking an idea from raw concept to finished application.',
      interests: [
        {
          title: 'Android Application Development',
          description:
            'Designing native-feeling, battery-efficient mobile applications with clean architecture, intuitive touch controls, and resilient performance.',
        },
        {
          title: 'Artificial Intelligence',
          description:
            'Exploring machine intelligence, modern neural frameworks, and exploring how smart algorithms can solve practical daily challenges.',
        },
        {
          title: 'Technology & Digital Creativity',
          description:
            'Combining thoughtful user interfaces with rock-solid code logic, bridging the gap between utilitarian tools and aesthetic design.',
        },
        {
          title: 'Building Through Experimentation',
          description:
            'Learning by building real, testable software. Every project is an opportunity to refine code quality, optimize performance, and understand user needs.',
        },
      ],
      philosophyBadge: 'Developer Philosophy',
      philosophyTitle: 'Authentic, Practical & Iterative',
      philosophyText:
        'I believe in shipping real, purposeful tools. No fabricated claims or inflated metrics—just honest engineering, clean interfaces, and software that respects the user.',
    },
    projects: {
      badge: 'Featured Work',
      title: 'Applications & Projects',
      subtitle:
        'Native Android tools and software projects built with a focus on usability, reliability, and clean design.',
      publishedCount: 'Published Application',
      versionLabel: 'Version',
      viewDetails: 'View Details',
      downloadApk: 'Download APK',
      sizeLabel: 'Size:',
      keyFeaturesLabel: 'Key Features Included',
      features: {
        'LED Flashlight': 'LED Flashlight',
        'Screen Lantern': 'Screen Lantern',
        'SOS Mode': 'SOS Mode',
        'Strobe Mode': 'Strobe Mode',
        'Battery Indicator': 'Battery Indicator',
        'Modern Dark Interface': 'Modern Dark Interface',
      },
      scalabilityNote:
        'More applications currently under active development. Project catalog easily updates via src/config/portfolioData.ts.',
    },
    download: {
      badge: 'Official Distribution',
      title: 'Download Center',
      subtitle:
        'Get the latest official Android application builds directly. All packages are standalone, ad-free, and verified.',
      apkBadge: 'Android APK',
      versionLabel: 'Version:',
      sizeLabel: 'Size:',
      requiresLabel: 'Requires:',
      downloadBtn: 'Download APK',
      hostedNote: 'Hosted on MediaFire · 10s Verification',
      steps: [
        {
          number: '1',
          title: 'Download Package',
          desc: 'Click download and proceed to MediaFire to get the APK file.',
        },
        {
          number: '2',
          title: 'Allow Install',
          desc: 'On Android, tap "Install from this source" when prompted by your browser.',
        },
        {
          number: '3',
          title: 'Enjoy The App',
          desc: 'Launch AYOUB Flash-Lite with zero ads and complete offline privacy.',
        },
      ],
    },
    countdownModal: {
      seconds: 'Seconds',
      preparingTitle: 'Preparing Your MediaFire Link',
      preparingDesc: 'Verifying package signatures and generating your direct download link.',
      preparingNote: 'You will be provided a direct button to continue to MediaFire once complete.',
      cancelBtn: 'Cancel Download',
      readyTitle: 'Your download is ready!',
      readyDescPrefix: 'The official',
      readyDescSuffix: 'package is prepared. Click below to continue.',
      formatLabel: 'Format:',
      destinationLabel: 'Destination:',
      destinationValue: 'MediaFire Cloud Storage',
      closeBtn: 'Close',
      continueBtn: 'Continue to MediaFire',
      externalNote: 'External link opens in a secure new browser tab.',
    },
    detailModal: {
      overviewTitle: 'Application Overview',
      screenshotsBadge: 'Real Application Screenshots',
      screenshotsSubtitle: 'Live Android captures from AYOUB Flash-Lite v1.0.0.',
      prevShot: 'Previous Screenshot',
      nextShot: 'Next Screenshot',
      interactiveBadge: 'Interactive In-Browser Demo',
      interactiveSubtitle: 'Test the lighting modes and switch behavior before downloading the APK.',
      demoTag: 'Interactive Preview',
      modes: {
        flashlight: 'LED Torch',
        lantern: 'Lantern',
        strobe: 'Strobe',
        sos: 'SOS',
      },
      powerOn: 'POWER ON',
      powerOff: 'POWER OFF',
      frequencyLabel: 'Frequency',
      batteryLabel: 'Battery:',
      thermalSafe: 'Thermal Safe',
      featureDeepDiveTitle: 'Feature Deep Dive',
      specsTitle: 'Package & Android Specifications',
      signedPackageLabel: 'Official signed package:',
      closeBtn: 'Close',
      downloadApkBtn: 'Download Android APK',
      detailedFeatures: [
        {
          name: 'LED Flashlight',
          description:
            'Instant high-power camera flash activation with ultra-low latency toggle and haptic touch feedback.',
        },
        {
          name: 'Screen Lantern',
          description:
            'Soft, adjustable full-screen ambient illumination for reading or dark environments without blinding glare.',
        },
        {
          name: 'SOS Emergency Mode',
          description:
            'Automated international Morse code distress signaling (... --- ...) with standard optical pulse sequences.',
        },
        {
          name: 'Adjustable Strobe Mode',
          description:
            'High-frequency visual strobe with variable frequency slider for signaling, visibility, or safety.',
        },
        {
          name: 'Live Battery Indicator',
          description:
            'Integrated hardware power monitor displaying real-time battery percentage and thermal safety warnings.',
        },
        {
          name: 'Modern Dark Interface',
          description:
            'Deep charcoal OLED-optimized dark theme with high-contrast electric yellow controls to minimize battery drain.',
        },
      ],
      specs: [
        { label: 'Platform', value: 'Android 7.0 (Nougat) and above' },
        { label: 'File Type', value: 'Signed APK Package' },
        { label: 'Architecture', value: 'Universal (arm64-v8a, armeabi-v7a)' },
        { label: 'Current Release', value: 'v1.0.0 Stable' },
        { label: 'Permissions', value: 'Camera (Flashlight Hardware only)' },
        { label: 'Telemetry', value: 'Zero tracking / 100% Offline' },
      ],
      screenshotCaptions: [
        {
          title: 'Active LED Torch Mode',
          description: 'Camera LED hardware engaged with full optical beam, active duration timer, and direct power toggles.',
        },
        {
          title: 'Standby & Battery Monitor',
          description: 'Power standby state displaying real-time battery status (77%), instant power triggers, and lantern mode.',
        },
        {
          title: 'Cloud Sync & Haptic Settings',
          description: 'Account sync panel, configuration bottom sheet, and tactile haptic vibration toggle for physical feedback.',
        },
        {
          title: 'Hardware Diagnostics & API',
          description: 'Native Android CameraManager & TorchCallback API diagnostics, permission verification, and flash status.',
        },
      ],
    },
    contact: {
      badge: 'Get In Touch',
      title: 'Connect With Me',
      subtitle:
        'Have feedback on AYOUB Flash-Lite, an app idea, or want to talk technology? Reach out via email or social platforms.',
      emailCard: {
        title: 'Direct Email',
        desc: 'Inquiries, feedback, and collaborations.',
        sendBtn: 'Send Email',
        copyTitle: 'Copy email address',
        copied: 'Copied!',
      },
      githubCard: {
        title: 'GitHub',
        desc: 'AYOUB Flash-Lite repository and open source projects.',
        btn: 'Visit GitHub Repository',
      },
      instagramCard: {
        title: 'Instagram',
        desc: 'Follow developer updates, releases, and project insights.',
        btn: 'Visit Instagram Profile',
      },
      note: 'Social profiles and email are easily updated in src/config/portfolioData.ts.',
    },
    footer: {
      copyright: '© 2026 AYOUB. Built with curiosity and passion.',
      backToTop: 'Back to top',
    },
  },
};
