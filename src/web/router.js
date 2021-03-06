const KoaRouter = require("koa-router");

const ApiCheckpointController = require("./controllers/api/CheckpointController");
const ApiConfigurationController = require("./controllers/api/ConfigurationController");
const ApiLogController = require("./controllers/api/LogController");
const ApiServiceController = require("./controllers/api/ServiceController");
const WebAdminController = require("./controllers/web/AdminController");
const WebIndexController = require("./controllers/web/IndexController");

const koaRouter = new KoaRouter();

module.exports = function router() {
  koaRouter.get("/api/checkpoints", ApiCheckpointController.index);
  koaRouter.get("/api/checkpoints/latest", ApiCheckpointController.latest);
  koaRouter.delete("/api/checkpoints", ApiCheckpointController.delete);

  koaRouter.get("/api/configuration", ApiConfigurationController.get);
  koaRouter.patch("/api/configuration", ApiConfigurationController.update);

  koaRouter.get("/api/logs", ApiLogController.index);

  koaRouter.get("/api/services", ApiServiceController.index);

  koaRouter.get("/", WebIndexController.get);
  koaRouter.get("/admin", WebAdminController.get);

  return koaRouter.routes();
};
