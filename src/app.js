import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
//for middleware we mostly use app.use

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
);

app.use(express.json({ limit: "64kb" }));
app.use(express.urlencoded({ extended: true, limit: "64kb" }));
app.use(express.static("public"));
app.use(cookieParser());  

export default app;
