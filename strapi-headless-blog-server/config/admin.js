module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '946ce4df39a5dda45612ff33779fc4c0'),
  },
});
