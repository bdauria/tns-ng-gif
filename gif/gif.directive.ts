import {
  Directive,
  ElementRef,
  HostListener
} from '@angular/core';
import { path, knownFolders } from 'file-system';
import { Image } from 'ui/image';
import { toGif } from './image-to-gif';

@Directive({
  selector: '[tnsGif]'
})
export class GifDirective {
  constructor(private el: ElementRef) { }

  @HostListener('loaded') onLoaded() {
    const nativeElement = this.el.nativeElement;
    if (!(nativeElement instanceof Image)) {
      throw new Error('[tnsGif] must be applied to an Image');
    }
    const image = <Image>nativeElement;
    if (!image.src) {
      return;
    }
    const gifPath = this.absolutePathOf(image);
    if ((/\.(gif)$/i).test(gifPath)) {
      toGif(image, gifPath);
    }
  }

  private absolutePathOf(image: Image): string {
    return path.join(
      knownFolders.currentApp().path,
      image.src.replace('~/', '')
    );
  }
}