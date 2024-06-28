import express from "express";
import cors from "cors";
import morgan from "morgan";
import "./src/database/database.js";
import path from "path";
import { fileURLToPath } from "url";
import clasesRouter from "./src/routes/clases.routes.js";

const app = express();

app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
  console.info("Estoy escuchando el puerto " + app.get("port"));
});

app.use(cors());
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
app.use(express.static(path.join(__dirname, '/public')))

// http://localhost:4001/gym
// app.get("/gym", (req, res) => {
//   console.log("Prueba de solicitud get");
//   res.send("Desde mi backend");
// });

app.use('/api', clasesRouter)