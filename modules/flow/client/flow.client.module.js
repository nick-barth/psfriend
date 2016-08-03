(function (app) {
'use strict';

app.registerModule('card');
app.registerModule('flow.routes', ['ui.router', 'core.routes']);
app.registerModule('product.services');
}(ApplicationConfiguration));
