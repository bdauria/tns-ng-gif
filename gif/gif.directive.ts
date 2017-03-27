import {
  Directive,
  ElementRef,
  OnInit
} from '@angular/core';
import { path, knownFolders } from 'file-system';
import { Image } from 'ui/image';
import { toGif } from "./image-to-gif";

@Directive({
  selector: '[tnsGif]'
})
export class GifDirective implements OnInit {
  constructor(private el: ElementRef) { }

  public ngOnInit(): void {
    const nativeElement = this.el.nativeElement;
    if (!(nativeElement instanceof Image)) {
      throw new Error('[tnsGif] must be applied to an Image');
    }
    const image = <Image>nativeElement;
    const gifPath = this.absolutePathOf(image);
    toGif(image, gifPath);
  }

  private absolutePathOf(image: Image): string {
    return path.join(
      knownFolders.currentApp().path,
      image.src.replace('~/', '')
    );
  }
}