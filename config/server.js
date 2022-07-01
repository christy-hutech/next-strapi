module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS',['Ps0UXPMfteby51iVeB2hcw==','3vhpEq0KHOvAsAfINHjG1Q==','5lqSIHihWellr71VY2q6Ew==','K5vkS9Pli7Ld/JaoLkngnQ==']),
  },
});
