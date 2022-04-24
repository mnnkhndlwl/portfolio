import {Work,Footer,Header,Skills,Testimonial,About} from './container/index'


const App = () => {
  return (
    <div className="app">
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
