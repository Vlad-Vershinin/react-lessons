import { useCallback, useState } from 'react';
import { Resizable } from 'react-resizable';
import Container from '../Container/Container.jsx';
import LinkToLesson from '../LinkToLesson.jsx';
import PathsList from '../PathsList.jsx';
import VerticalLinks from '../VerticalLinks/VerticalLinks.jsx';
import ResizeHandler from '../ResizeHandler/ResizeHandler.jsx';
import styles from './PageLayout.module.scss';
function PageLayout() {
    const [width, setWidth] = useState(200);
    const handleResize = useCallback((_, { size }) => {
        setWidth(size.width);
    }, []);
    return (<div className={styles['page-layout']}>
      <Resizable axis="x" width={width} height={0} resizeHandles={['e']} handle={<ResizeHandler />} onResize={handleResize}>
        <aside className={styles['page-layout__left-aside']} style={{ flexBasis: width + 'px' }}>
          <VerticalLinks />
        </aside>
      </Resizable>
      <Container className={styles['page-layout__main']}>
        <header className={styles['page-layout__header']}>
          <LinkToLesson />
        </header>
        <main className={styles['page-layout__content']}>
          <PathsList />
        </main>
        <footer className={styles['page-layout__footer']}>Footer</footer>
      </Container>
    </div>);
}
export default PageLayout;
