import * as application from 'application';
import {Image} from 'ui/image';

declare const com: any
declare const android: any;

export const toGif = (image: Image, absolutePath: string): void => {
  const target =
      new com.bumptech.glide.request.target.GlideDrawableImageViewTarget(
          image.android);
  com.bumptech.glide.Glide.with(application.android.context)
      .load(absolutePath)
      .into(target);
}