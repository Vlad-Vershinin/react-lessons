import { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './ResizeHandler.module.scss';
const rootClass = clsx('react-resizable-handle', 'react-resizable-handle-e', styles['resize-handler']);
function ResizeHandler(props, ref) {
    const { className } = props;
    return <div {...props} ref={ref} className={clsx(rootClass, className)}/>;
}
export default forwardRef(ResizeHandler);
