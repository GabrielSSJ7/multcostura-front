const nextRoutes = require("next-routes");
const routes = (module.exports = nextRoutes());

routes.add("login", "/login/:id");
routes.add("machine", "/admin/machine/:id", "/admin/machines/machine");
routes.add("/admin/banner/category/:category", "/admin/banner/categories");
routes.add("machines", "/admin/machines", "/admin/machines/index");
routes.add("edit-news", "/admin/news/edit-news/:id", "/admin/news/edit-news");
