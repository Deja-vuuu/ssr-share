import { createApp } from "./app.js";
import { renderToString, renderToNodeStream } from "vue/server-renderer";

function vuessr(req, res) {
  const app = createApp();
  // renderToNodeStream(app).pipe(res)
  renderToString(app).then((html) => {
    const htmll = `<!DOCTYPE html>
    <html>
    <head>
        <title>Vue SSR Example</title>
        <script type="importmap">
        {
            "imports": {
            "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
            }
        }
        </script>
        <script type="module" src="/client.js"></script>
    </head>
    <body>
        <div id="app">${html}</div>
    </body>
    </html>`;
    res.send(htmll);
  });
}

// async function vuessr(req, res) {
//   const app = createApp();
//   const stream = renderToNodeStream(app);

//   res.write(`<!DOCTYPE html>
//   <html>
//   <head>
//       <title>Vue SSR Example</title>
//       <script type="importmap">
//       {
//           "imports": {
//           "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
//           }
//       }
//       </script>
//       <script type="module" src="/client.js"></script>
//   </head>
//   <body>
//       <div id="app">`);

//   // 插入100张图
//   //   for (let i = 0; i < 100; i++) {
//   //     res.write(`<img src="${imgBase}" alt="Image ${i}">`);
//   //   }

//   await stream.pipe(res, { end: false });
//   await stream.on("end", () => {
//     res.end(`</div>
//     </body>
//     </html>`);
//   });
// }

export default vuessr;
