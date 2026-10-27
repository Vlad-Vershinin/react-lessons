import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef, ForwardedRef } from 'react';
import clsx from 'clsx';
import styles from './ResizeHandler.module.scss';

type Ref = ForwardedRef<HTMLDivElement>;
type Props = ComponentPropsWithoutRef<'div'>;

const rootClass = clsx(
  'react-resizable-handle',
  'react-resizable-handle-e',
  styles['resize-handler'],
);

function ResizeHandler(props: Props, ref: Ref) {
  const { className } = props;
  return <div {...props} ref={ref} className={clsx(rootClass, className)} />;
}

export default forwardRef(ResizeHandler);
