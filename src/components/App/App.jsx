import './App.css';
import Header from '../Header/Header';
import About from '../About/About';
// import History from '../History/History';
// import Experience from '../Experience/Experience';
// import Jobs from '../Jobs/Jobs';
// import Skills from '../Skills/Skills';

function App() {
  let url = window.location.href;
  url = url.split('/');

  if (url[3] === "" || url[3] === null) {
    window.location.href = '/Start';
  }

  if (url[3] === "Start") {
    return (
      <div className="App">
        <Header />
      </div>
    );
  } else if (url[3] === "About") {
    return (
      <div className="App">
        <About />
      </div>
    );
  }
}

export default App;
