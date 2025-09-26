// src/App.js

import About from '../src/pages/About';
import Services from '../src/pages/Services';
import Gallery from '../src/pages/Gallery';
import Contact from '../src/pages/Contact';
import Footer from '../src/pages/Footer';
import Header from './pages/Header';
import Hero from './pages/Hero';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;