import './App.css';
import Header from '../Header/Header';
import About from '../About/About';
import History from '../History/History';
import Experience from '../Experience/Experience';
import Jobs from '../Jobs/Jobs';
import Skills from '../Skills/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <History />
      <About />
      <Experience />
      <Jobs />
      <Skills />

    </div>
  );
}

export default App;
