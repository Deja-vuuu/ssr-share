//
import express from "express";
import prerender from "./controller/prerender/index.js";
import basessr from "./controller/basessr/index.js";
import vuessr from "./controller/vuessr/index.js";

const app = express();
app.use(express.static("public"));
app.use(express.static("controller/vuessr"));
app.set("view engine", "pug");
app.get("/prerender", prerender);
app.get("/ssr", basessr);
app.get("/vuessr", vuessr);

app.listen(8080, () => console.log("Server started. Press Ctrl + C to quit"));
