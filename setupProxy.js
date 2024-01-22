import { createProxyMiddleware } from 'http-proxy-middleware';

export default function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://worldtimeapi.org',
      changeOrigin: true,
    })
  );
}
