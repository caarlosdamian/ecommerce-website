type Props = {
  mobile: string;
  desktop: string;
  tablet: string;
  className?: string;
  slug?: string;
};

export const ResponsiveImage = ({
  desktop,
  mobile,
  tablet,
  className,
  slug,
}: Props) => {
  return (
    <>
      <img
        className={`sm:hidden ${className}`}
        src={mobile}
        alt={`${slug}image`}
      />
      <img
        className={`hidden sm:block md:hidden ${className}`}
        src={tablet}
        alt={`${slug}image`}
      />
      <img
        className={`hidden md:block ${className}`}
        src={desktop}
        alt={`${slug}image`}
      />
    </>
  );
};
