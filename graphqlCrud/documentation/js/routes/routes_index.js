var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"ROUTES","filename":"src/app/app-router/app-router.module.ts","module":"AppRouterModule","children":[{"path":"","loadChildren":"app/crud/crud.module#CrudModule","children":[{"kind":"module","children":[{"name":"ROUTES","filename":"src/app/crud/crud-router/crud-router.module.ts","module":"CrudRouterModule","children":[{"path":"list","component":"ListComponent"},{"path":"useradd","component":"FormComponent"},{"path":"userupdate/:id","component":"FormComponent"},{"path":"**","pathMatch":"full","redirectTo":"/list"}],"kind":"module"}],"module":"CrudModule"}]},{"path":"**","pathMatch":"full","redirectTo":"/"}],"kind":"module"}]}
