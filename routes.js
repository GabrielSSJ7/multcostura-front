const nextRoutes = require("next-routes");
const routes = (module.exports = nextRoutes());

routes.add("login", "/login/:id");
routes.add("/admin/machines/:id", "/admin/machines/machine");
routes.add("/admin/banner/category/:category", "/admin/banner/categories");
routes.add("machines", "/admin/machines", "/admin/machines/index")