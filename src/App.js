import { Route, Routes} from 'react-router';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Algebra from './views/Algebra';
import Calculus from './views/Calculus';
import Graphing from './views/Graphing';

function App() {
  return (
  <div className="bg-amber-50 h-screen">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculus" element={<Calculus />} />
      <Route path="/algebra" element={<Algebra />} />
      <Route path="/graphing" element={<Graphing />} />
    </Routes>
   </div>
  );
}

export default App;
