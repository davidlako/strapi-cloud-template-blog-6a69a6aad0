export default {
  routes: [
    {
      method: 'GET',
      path: '/youtube-proxy',
      handler: 'youtube-proxy.proxy',
      config: {
        auth: false,
      },
    },
  ],
};