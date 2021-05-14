import express from "express";
import cors from "cors";
import path from "path";
import routeAuth from "./routes/auth.routes";
import routePages from "./routes/pages.routes";

const app = express();

app.set("port", process.env.PORT || 4000);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/", routePages);
app.use("/auth", routeAuth);
app.use(express.static(path.join(__dirname, "../public")))

export default app;