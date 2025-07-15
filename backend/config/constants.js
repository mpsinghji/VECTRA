const CLIENT_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.WEB_URL
    : process.env.LOCAL_URL;

export { CLIENT_URL };
