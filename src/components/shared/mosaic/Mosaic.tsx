import { Gallery } from '../../../types';
import { cn } from '../../../utils';
import { ResponsiveImage } from '../responsiveImage/ResponsiveImage';

type Props = {
  images: Gallery;
};

export const Mosaic = ({ images: { first, second, third } }: Props) => {
  const images = [first, second, third];
  return (
    <div className="grid grid-cols-1  gap-5 sm:grid-cols-2 ">
      {images.map(({ desktop, mobile, tablet }, index) => {
        const trhidPictureStyling =
          index === 2 && 'sm:col-start-2 sm:row-span-2 sm:row-start-1';
        return (
          <ResponsiveImage
            className={cn(
              `rounded-lg object-cover h-full`,
              trhidPictureStyling
            )}
            desktop={desktop}
            mobile={mobile}
            tablet={tablet}
            key={`mosaic-${index}`}
          />
        );
      })}
    </div>
  );
};
