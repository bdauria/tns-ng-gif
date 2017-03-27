"use strict";
var core_1 = require("@angular/core");
var file_system_1 = require("file-system");
var image_1 = require("ui/image");
var image_to_gif_1 = require("./image-to-gif");
var GifDirective = (function () {
    function GifDirective(el) {
        this.el = el;
    }
    GifDirective.prototype.ngOnInit = function () {
        var nativeElement = this.el.nativeElement;
        if (!(nativeElement instanceof image_1.Image)) {
            throw new Error('[tnsGif] must be applied to an Image');
        }
        var image = nativeElement;
        var gifPath = this.absolutePathOf(image);
        image_to_gif_1.toGif(image, gifPath);
    };
    GifDirective.prototype.absolutePathOf = function (image) {
        return file_system_1.path.join(file_system_1.knownFolders.currentApp().path, image.src.replace('~/', ''));
    };
    return GifDirective;
}());
GifDirective = __decorate([
    core_1.Directive({
        selector: '[tnsGif]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], GifDirective);
exports.GifDirective = GifDirective;
