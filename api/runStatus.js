export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const runId = url.searchParams.get("id");

    if (!runId) {
      return new Response(JSON.stringify({ error: "Run ID required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const API_TOKEN = env.APIFY_TOKEN;

    const res = await fetch(`https://api.apify.com/v2/actor-runs/${runId}?token=${API_TOKEN}`);
    const data = await res.json();

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  },
};
