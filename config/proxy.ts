export default {
  '/api': {
    target: 'http://localhost:5001/',
    changeOrigin: true,
    // pathRewrite: { '^/api': '' },
  },
};
