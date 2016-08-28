export default {
  apiUrl: process.env.API_URL || 'http://127.0.0.1:8081',
  avatarURI: id => '/static/icons/'+(+id)+'.png'
}
