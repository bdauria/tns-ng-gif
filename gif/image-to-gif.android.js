"use strict";
var application = require("application");
exports.toGif = function (image, absolutePath) {
    var target = new com.bumptech.glide.request.target.
        GlideDrawableImageViewTarget(image.android);
    com.bumptech.glide.Glide.
        with(application.android.context).
        load(absolutePath).into(target);
};
