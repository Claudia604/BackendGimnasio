import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
  console.info("Estoy escuchando el puerto " + app.get("port"));
});

app.use(cors());
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// http://localhost:4001/gym
app.get("/gym", (req, res) => {
  console.log("Prueba de solicitud get");
  res.send("Desde mi backend");
});
