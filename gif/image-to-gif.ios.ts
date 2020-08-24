import {Image} from 'tns-core-modules/ui/image';

declare const NSData: any;
declare const AnimatedGif: any;

export const toGif = (image: Image, absolutePath: string): void => {
  const gifNsData = NSData.dataWithContentsOfFile(absolutePath);
  const gif = AnimatedGif.getAnimationForGifWithData(gifNsData);
  image.ios.setAnimatedGifStartImmediately(gif, true);
}