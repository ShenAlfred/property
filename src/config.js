/**
 * Created by admin on 2017/6/9.
 */

const config = {
  //baseUrl: process.env.NODE_ENV === 'development' ? 'http://10.52.30.155:8080' : 'http://114.141.154.142',
  baseUrl: process.env.NODE_ENV === 'development' ? 'http://10.52.30.155:8080' : 'http://10.52.30.155:8080',
  isDevEnv: process.env.NODE_ENV === 'development' ? true : false
};

export default config
