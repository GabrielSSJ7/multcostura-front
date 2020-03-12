const nextRoutes = require("next-routes");
const routes = (module.exports = nextRoutes());

routes.add("login", "/login/:id");
routes.add("machine", "/admin/machine/:id", "/admin/machines/machine");
routes.add("/admin/banner/category/:category", "/admin/banner/categories");
routes.add("machines", "/admin/machines", "/admin/machines/index");
routes.add("tools", "/admin/tools/:id", "/admin/tools/edit-tool");
routes.add("add-tools", "/admin/add-tool", "/admin/tools/add-tool")
routes.add("edit-news", "/admin/news/edit-news/:id", "/admin/news/edit-news");
routes.add("pecas", "/categorias/pecas", "/pecas")
