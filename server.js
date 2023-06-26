import { app } from "./app.js";
import { connectDB } from "./data/database.js";

// Standard Backend Flow => MVC (Model,View/Routes,Controller) Structure.

// connect mongodb atlas server
connectDB();

app.listen(process.env.PORT, () => {
  console.log(
    `server is listening at port ${process.env.PORT} on ${process.env.NODE_ENV}`
  );
});
