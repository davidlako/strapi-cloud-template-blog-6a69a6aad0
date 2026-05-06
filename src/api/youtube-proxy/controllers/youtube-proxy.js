// @ts-nocheck
const htmlTemplate = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <meta name="referrer" content="strict-origin-when-cross-origin" />
    <title>YouTube Video</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html, body { width: 100%; height: 100%; overflow: hidden; background: #000; }
      #player { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0; }
    </style>
  </head>
  <body>
    <iframe
      id="player"
      allowfullscreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
      referrerpolicy="strict-origin-when-cross-origin"
    ></iframe>
    <script src="/youtube-player.js"></script>
  </body>
</html>`;

export default {
   async proxy(ctx) {
    ctx.set('Content-Type', 'text/html; charset=utf-8');
    ctx.set('Content-Security-Policy', [
      "script-src 'self'",
      "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com",
      "frame-ancestors 'self' capacitor://localhost",
    ].join('; '));
    ctx.body = htmlTemplate;
  },
};