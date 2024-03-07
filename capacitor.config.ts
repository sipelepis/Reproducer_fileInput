import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'reproducer_fileInput',
  webDir: 'www',
  bundledWebRuntime: false,
  ios: {
    limitsNavigationsToAppBoundDomains: true,
  },
  server: {
    androidScheme: 'https'
  },
  plugins: {
    PrivacyScreen: {
      enable: true,
    },
  },
};

export default config;
