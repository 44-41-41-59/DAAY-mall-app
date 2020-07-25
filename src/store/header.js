import cookie from 'react-cookies';

export default (token) => ({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  Authorization: `Bearer ${cookie.load('auth')}`,
});
