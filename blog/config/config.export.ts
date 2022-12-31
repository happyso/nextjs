import configDevelopment from './config.development';
import configProduction from './config.production';

// 클라이언트에서는 이 함수를 사용하여 config 값을 참조합니다.
const Config = () => {
  switch (process.env.NEXT_PUBLIC_RUN_MODE) {
    case 'development':
      return configDevelopment;
    case 'production':
      return configProduction;
    default:
      return configDevelopment;
  }
};

export default Config;
