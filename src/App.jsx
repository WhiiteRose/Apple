import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProductViewer from './components/ProductViewer';
import Showcase from './components/Showcase';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
    </main>
  );
};

export default App;
