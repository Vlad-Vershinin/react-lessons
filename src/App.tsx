import PageLayout from './components/PageLayout/PageLayout.tsx';
import { HashRouter } from 'react-router';
import 'react-resizable/css/styles.css';
import './App.css';

function App() {
  return (
    <HashRouter>
      <PageLayout />
    </HashRouter>
  );
}

export default App;
