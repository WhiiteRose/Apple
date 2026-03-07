import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Features from './components/Features';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Performance from './components/Performance';
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
      <Performance />
      <Features />
    </main>
  );
};

export default App;
