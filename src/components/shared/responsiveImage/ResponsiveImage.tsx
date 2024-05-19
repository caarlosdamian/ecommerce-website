type Props = {
  mobile: string;
  desktop: string;
  tablet: string;
  className?: string;
};

export const ResponsiveImage = ({
  desktop,
  mobile,
  tablet,
  className,
}: Props) => {
  return (
    <>
      <img className={`sm:hidden ${className}`} src={mobile} alt="" />
      <img
        className={`hidden sm:block md:hidden ${className}`}
        src={tablet}
        alt=""
      />
      <img className={`hidden md:block ${className}`} src={desktop} alt="" />
    </>
  );
};
