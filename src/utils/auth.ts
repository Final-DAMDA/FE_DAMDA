import querystring from 'querystring';

const REST_API_KEY = 'a2cdb6d49260b25a484f61e16da02425';
const REDIRECT_URI = 'https://yolda.damda.store/login';

/**
 * @description: 카카오에 인가코드를 요청하고, 리다이렉트URI로 이동하도록 함
 */
export const handleLogin = async () => {
  const params = {
    client_id: REST_API_KEY,
    redirect_uri: REDIRECT_URI,
    response_type: 'code',
  };

  const queryString = querystring.stringify(params);

  const loginUrl = `https://kauth.kakao.com/oauth/authorize?${queryString}`;

  try {
    window.location.href = loginUrl;
  } catch (error) {
    console.error('Failed to redirect to Kakao login:', error);
  }
};
