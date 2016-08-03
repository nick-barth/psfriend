(function (app) {
'use strict';

app.registerModule('product');
app.registerModule('product.routes', ['ui.router', 'core.routes']);
app.registerModule('product.services');
}(ApplicationConfiguration));
