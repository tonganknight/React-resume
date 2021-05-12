import './App.css';
import Renderlive from './components/Renderlive';
import Footer from './components/Footer';
import { Breakpoint, BreakpointProvider } from 'react-socks';


function App() {
  return (
    <BreakpointProvider>
    <div>
      <Renderlive/>
     <Footer/>
    </div>
    </BreakpointProvider>
  );
}

export default App;
