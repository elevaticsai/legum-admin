module.exports = {
  apps: [
    {
      name: 'pos-v1',
      script: 'npx',
      args: ' serve dist/ --single -p 3002', // Correct argument format for serving an SPA on port 3000
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
