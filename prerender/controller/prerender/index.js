import ssr from "./ssr.js";
async function prerender(req, res) {
  const host = "https://activity.5i5j.com/enterprise/v1";
  const { html, ttRenderMs } = await ssr(`${host}}`);
  res.set(
    "Server-Timing",
    `Prerender;dur=${ttRenderMs};desc="Headless render time (ms)"`
  );
  return res.status(200).send(html); // Serve prerendered page as response.
}

export default prerender;
