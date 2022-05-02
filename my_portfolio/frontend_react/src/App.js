import {Projects,Footer,Header,Skills,About} from './container/index'
import {Navbar} from './components/index';
import "./App.scss";

const App = () => {
  return (
    <>
    <div className="app">
    <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Footer />
      </div>
    </>
  );
}

export default App;
