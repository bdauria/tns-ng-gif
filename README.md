# Display an animated gif in a NativeScript Image 

> A simple NativeScript plugin to display animated gif into an Image layout. 

> Works only with an Angular powered NativeScript application. Both Android and iOS platforms are supported. 

## Usage

import the GifModule into your Module:
```
import { GifModule } from 'tns-ng-gif';

@NgModule({
    imports: [
        GifModule,
        ...
    ],
    declarations: [
        ...
    ]
})
export class YourModule { }
```

Then, just add the [tnsGif] to an Image layout. Use the existing src property to load the gif file:
```  
  <Image [tnsGif] src="~/path/to/your.gif"></Image>
```

Result on an iOS device: 
![GifDemo](https://github.com/bdauria/tns-ng-gif/blob/master/gif-demo.gif)
