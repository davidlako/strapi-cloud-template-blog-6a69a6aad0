// @ts-nocheck
(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const videoId = urlParams.get("v");
  if (!videoId) {
    document.body.innerHTML = '<div style="color: white; padding: 20px; text-align: center;">Error: Missing video ID parameter (?v=VIDEO_ID)</div>';
    return;
  }
  const autoplay = urlParams.get("autoplay") || "0";
  const loop = urlParams.get("loop") || "0";
  const mute = urlParams.get("mute") || "0";
  const playlist = urlParams.get("playlist") || videoId;
  const controls = urlParams.get("controls") || "1";
  const rel = urlParams.get("rel") || "0";
  const modestbranding = urlParams.get("modestbranding") || "1";
  const playsinline = urlParams.get("playsinline") || "1";

  const embedParams = new URLSearchParams({
    autoplay, controls, rel, modestbranding, playsinline,
    enablejsapi: "1",
    origin: window.location.origin,
  });

  if (loop === "1") {
    embedParams.append("loop", "1");
    embedParams.append("playlist", playlist);
  }
  if (mute === "1") embedParams.append("mute", "1");

  const embedUrl = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?${embedParams.toString()}`;
  document.getElementById("player").src = embedUrl;
})();