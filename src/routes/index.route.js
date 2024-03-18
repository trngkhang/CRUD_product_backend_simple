const productRouter = require("./product.route");

function route(app) {
  app.use("/api/product", productRouter);
}

module.exports = route;
