import { Children } from 'react';

export const Svg = ({
  classNameChild,
  children,
  classNameParent,
}: {
  children: React.ReactElement;
  classNameChild: string;
  classNameParent?: string;
}) => {
  return (
    <>
      {Children.map(children, (child: React.ReactElement) => {
        const isPath = child.props.children.type;
        const newChild = {
          ...child,
          props: {
            ...child.props,
            className: classNameParent,
            children: {
              ...child.props.children,
              props: {
                ...child.props.children.props,
                className: classNameChild,
              },
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
