const nextRoutes = require("next-routes");
const routes = (module.exports = nextRoutes());

routes.add("login", "/login/:id")
.add("machine", "/admin/machine/:id", "/admin/machines/machine")
.add("/admin/banner/category/:category", "/admin/banner/categories")
.add("machines", "/admin/machines", "/admin/machines/index")
//.add("tools", "/admin/tools/:id", "/admin/tools/edit-tool")
.add("add-tools", "/admin/add-tool", "/admin/tools/add-tool")
//.add("edit-news", "/admin/news/edit-news/:id", "/admin/news/edit-news")
.add("pecas", "/categorias/pecas", "/pecas")
