"use strict";
var core_1 = require("@angular/core");
var gif_directive_1 = require("./gif/gif.directive");
var GifModule = (function () {
    function GifModule() {
    }
    return GifModule;
}());
GifModule = __decorate([
    core_1.NgModule({
        imports: [],
        exports: [gif_directive_1.GifDirective],
        declarations: [gif_directive_1.GifDirective],
        providers: [],
    })
], GifModule);
exports.GifModule = GifModule;
