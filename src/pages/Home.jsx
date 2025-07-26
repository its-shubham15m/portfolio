import Hero from '../sections/Hero';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Footer from '../sections/Footer';

const Divider = () => (
  <hr className="border-t border-zinc-300 dark:border-zinc-700 w-3/4 mx-auto opacity-50 border-2" />
);

const Home = () => {
  return (
    <>
      <Hero />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
