import clsx from 'clsx';
import styles from './Container.module.scss';
function Container({ as, children, className, ...props }) {
    const Component = as ?? 'div';
    return (<Component className={clsx(styles['container'], className)} {...props}>
      {children}
    </Component>);
}
export default Container;
