# tns-ng-gif

> A simple NativeScript plugin to display animated gif into an Image layout. 
> Works only with an NativeScript with Angular application. 

## Usage

import the GifModule into your Module:
```
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

![Alt text](https://github.com/bdauria/tns-ng-gif/blob/master/gif-demo.gif)