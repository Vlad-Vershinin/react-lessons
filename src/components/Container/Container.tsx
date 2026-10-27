import clsx from 'clsx';
import styles from './Container.module.scss';
import type { ElementType, ComponentPropsWithoutRef } from 'react';

type ContainerProps<E extends ElementType> = {
  as?: E;
} & ComponentPropsWithoutRef<E>;

function Container<E extends ElementType = 'div'>({
  as,
  children,
  ...props
}: ContainerProps<E>) {
  const Component = as ?? 'div';
  const className = props.className;

  return (
    <Component className={clsx(styles.container, className)} {...props}>
      {children}
    </Component>
  );
}

export default Container;
