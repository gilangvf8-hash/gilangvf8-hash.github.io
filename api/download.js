export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const videoId = url.searchParams.get("id");

    if (!videoId) {
      return new Response(JSON.stringify({ error: "Video ID required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const API_TOKEN = env.APIFY_TOKEN;

    // Jalankan actor Apify
    const runResponse = await fetch(
      `https://api.apify.com/v2/acts/streamers~youtube-video-downloader/runs?token=${API_TOKEN}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          videos: [`https://www.youtube.com/watch?v=${videoId}`],
          preferredQuality: "720p",
          preferredFormat: "mp4",
        }),
      }
    );

    const run = await runResponse.json();

    return new Response(JSON.stringify(run), {
      headers: { "Content-Type": "application/json" },
    });
  },
};
