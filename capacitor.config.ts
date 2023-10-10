import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.web.project',
  appName: 'web-project',
  webDir: 'dist/web-project',
  server: {
    androidScheme: 'iamcustom',
  },
};

export default config;
