/**
 * AYOUB | Developer Portfolio Configuration
 * 
 * Centralized, easily configurable data file for all developer info,
 * project showcases, external download links, and social contact details.
 * 
 * UPDATE INSTRUCTIONS:
 * 1. To change your MediaFire download link: Update `projects[0].download.mediaFireUrl`
 * 2. To change social links: Update `contact.instagram`, `contact.github`, `contact.email`
 * 3. To add more projects in the future: Add a new object to the `projects` array
 */

export interface ProjectFeature {
  name: string;
  description: string;
}

export interface ProjectSpec {
  label: string;
  value: string;
}

export interface ProjectScreenshot {
  id: string;
  url: string;
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  platform: 'Android' | 'Web' | 'Cross-Platform';
  tagline: string;
  description: string;
  iconImage: string;
  bannerImage: string;
  screenshots: ProjectScreenshot[];
  features: string[];
  detailedFeatures: ProjectFeature[];
  specs: ProjectSpec[];
  version: string;
  apkSize: string;
  minAndroid: string;
  download: {
    label: string;
    mediaFireUrl: string; // <-- Configure your actual MediaFire URL here
    fileName: string;
    checksumSha256?: string;
  };
}

export interface DeveloperProfile {
  name: string;
  role: string;
  headline: string;
  shortBio: string;
  aboutStory: {
    introduction: string;
    coreInterests: {
      title: string;
      description: string;
    }[];
    philosophy: string;
  };
  contact: {
    email: string;
    github: string;
    instagram: string;
  };
  projects: ProjectItem[];
}

export const PORTFOLIO_DATA: DeveloperProfile = {
  name: 'AYOUB',
  role: 'Independent App Developer',
  headline: 'Turning Ideas Into Digital Experiences.',
  shortBio: 'I create useful applications and explore technology through real projects.',
  
  aboutStory: {
    introduction:
      'I am an independent developer dedicated to crafting functional, clean, and responsive digital tools. My development journey is fueled by self-driven learning, practical software engineering, and the excitement of taking an idea from raw concept to finished application.',
    coreInterests: [
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
    philosophy:
      'I believe in shipping real, purposeful tools. No fabricated claims or inflated metrics—just honest engineering, clean interfaces, and software that respects the user.',
  },

  contact: {
    // REAL SOCIAL & OFFICIAL EMAIL
    github: 'https://github.com/Ayoubpro1234/AYOUB-flach-lite',
    instagram: 'https://www.instagram.com/ayoub.apex/',
    email: 'mshajbalio@gmail.com',
  },

  projects: [
    {
      id: 'ayoub-flash-lite',
      name: 'AYOUB Flash-Lite',
      category: 'Android Application',
      platform: 'Android',
      tagline: 'Modern & easy-to-use lighting tools in one place',
      description:
        'A modern and easy-to-use flashlight application designed to provide convenient lighting tools in one place.',
      // REAL APPLICATION ASSETS (Uploaded by Developer)
      iconImage: `${import.meta.env.BASE_URL}assets/aistudio/1794013191275_163fd5d8.jpg`,
      bannerImage: `${import.meta.env.BASE_URL}assets/aistudio/Screenshot_20261107-135735_e3c690e0.png`,
      screenshots: [
        {
          id: 'torch-active',
          url: `${import.meta.env.BASE_URL}assets/aistudio/Screenshot_20261107-135735_e3c690e0.png`,
          title: 'Active LED Torch Mode',
          description: 'Camera LED hardware engaged with full optical beam, active duration timer, and direct power toggles.',
        },
        {
          id: 'torch-standby',
          url: `${import.meta.env.BASE_URL}assets/aistudio/Screenshot_20261107-135722_35f6842a.png`,
          title: 'Standby & Battery Monitor',
          description: 'Power standby state displaying real-time battery status (77%), instant power triggers, and lantern mode.',
        },
        {
          id: 'cloud-settings',
          url: `${import.meta.env.BASE_URL}assets/aistudio/Screenshot_20261107-135730_7ea90ab1.png`,
          title: 'Cloud Sync & Haptic Settings',
          description: 'Account sync panel, configuration bottom sheet, and tactile haptic vibration toggle for physical feedback.',
        },
        {
          id: 'hardware-diagnostics',
          url: `${import.meta.env.BASE_URL}assets/aistudio/Screenshot_20261107-135727_3f1081a9.png`,
          title: 'Hardware Diagnostics & API',
          description: 'Native Android CameraManager & TorchCallback API diagnostics, permission verification, and flash status.',
        },
      ],
      version: 'v1.0.0',
      apkSize: '4.8 MB',
      minAndroid: 'Android 7.0+',
      features: [
        'LED Flashlight',
        'Screen Lantern',
        'SOS Mode',
        'Strobe Mode',
        'Battery Indicator',
        'Modern Dark Interface',
      ],
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
      download: {
        label: 'Android APK',
        // REAL MEDIAFIRE APK DOWNLOAD LINK:
        mediaFireUrl: 'https://www.mediafire.com/file/gvi9ffm1cmfzxsx/AYOUB+Flash-Lite.apk/file',
        fileName: 'AYOUB Flash-Lite.apk',
        checksumSha256: 'Verified package on MediaFire',
      },
    },
  ],
};
