"use strict";
var file_system_1 = require("file-system");
exports.absolutePathOf = function (image) {
    return file_system_1.path.join(file_system_1.knownFolders.currentApp().path, image.src.replace("~/", ""));
};
