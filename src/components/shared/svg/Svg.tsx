import { Children } from 'react';

export const Svg = ({
  className,
  children,
}: {
  html?: string;
  children: React.ReactElement;
  className: string;
}) => {
  return (
    <>
      {Children.map(children, (child: React.ReactElement) => {
        const isPath = child.props.children.type;
        const newChild = {
          ...child,
          props: {
            ...child.props,
            children: {
              ...child.props.children,
              props: { ...child.props.children.props, className },
            },
          },
        };
        if (isPath) {
          return newChild as React.ReactNode;
        }
      })}
    </>
  );
};
