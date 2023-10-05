const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("../swagger.json");
const userRoutes = require("../modules/user/user.routes");
const conversationRoutes = require("../modules/conversations/conversations.routes");
const messagesRoutes = require("../modules/messages/messages.routes");

const apiv1Routes = (app) => {
  app.use("/api/v1/users", userRoutes);
  app.use("/api/v1/conversations", conversationRoutes);
  app.use("/api/v1/messages", messagesRoutes);
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc)); // debera ser capaz de visualizar la documentación
};

module.exports = apiv1Routes;
