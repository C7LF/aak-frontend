const withImages = require('next-images');

module.exports = withImages({
  images: {
    domains: ['localhost', 'aak-backend.herokuapp.com'],
  },
});
