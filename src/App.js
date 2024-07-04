import './App.css';
import Header from './components/header'
import Content from './components/contentBlock';
import Footer from './components/footer';
import Landing from './components/landing'
import { AppProvider } from './AppContext';

function App() {
  return (
    <AppProvider>
      <Landing/>
      <Header/>
      <Content/>
      <Footer/>
    </AppProvider>
  );
}

export default App;
