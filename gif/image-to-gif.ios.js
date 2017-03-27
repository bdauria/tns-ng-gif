"use strict";
exports.toGif = function (image, absolutePath) {
    var gifNsData = NSData.dataWithContentsOfFile(absolutePath);
    var gif = AnimatedGif.getAnimationForGifWithData(gifNsData);
    image.ios.setAnimatedGifStartImmediately(gif, true);
};
