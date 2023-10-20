import teacher from "./teacher";
import auth from "./auth";
import Class from "./class";
import { internalServerError } from "../middlewares/handle_errors";


const initRoutes = (app) => {
  app.use("/api/teacher", teacher);
  app.use("/api/class", Class);
  // app.use("/api/auth", auth);

  // app.use("/", internalServerError);
};
module.exports = initRoutes;
