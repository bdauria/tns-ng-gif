import { Image } from 'ui/image';
import { path, knownFolders } from 'file-system';

export const absolutePathOf = (image: Image) : string => {
    return path.join(
        knownFolders.currentApp().path,
        image.src.replace("~/", "")
    );
}