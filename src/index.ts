import express from "express";
import cors from "cors";
import routes from "./routes";

// **** init **** //
const app = express();

// **** settings **** //
app.set("port", process.env.PORT || 9000);

// **** middlewares **** //
app.use(express.json());
app.use(cors({ origin: true }));

// **** routes **** //
app.use("/", routes);

// **** static files **** //

// **** starting server **** //
app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});
