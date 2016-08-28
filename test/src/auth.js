const auth = require('googleapis').auth;
const OAuth2 = auth.OAuth2;

const oauth2Client = new OAuth2(
  '255183095895-mghdgm0q11g2l56sbtg56d6no3omva2e.apps.googleusercontent.com',
  'TDxFPW8CvDhraIgrmBeTMGz2',
  'http://127.0.0.1:3000/oauthcallback');

// generate a url that asks permissions for Google+ and Google Calendar scopes
const scopes = [
  'https://www.googleapis.com/auth/plus.me',
  'https://www.googleapis.com/auth/userinfo.email'
];

const url = oauth2Client.generateAuthUrl({
  access_type: 'offline', // 'online' (default) or 'offline' (gets refresh_token)
  scope: scopes // If you only need one scope you can pass it as string
});

console.log(url);
