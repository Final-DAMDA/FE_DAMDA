import axios from 'axios';

const REST_API_KEY = '56a73d5166d4c92264833034100ab59b';
const REDIRECT_URI = 'http://localhost:3000/';
// const REDIRECT_URI = 'https://api.damda.store/api/v1/member/code';

export const getAuthorize = async () => {
  const res = await axios({
    method: 'get',
    url: '/kakaoApi/oauth/authorize',
    params: {
      response_type: 'code',
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });
  console.log(res);
};
