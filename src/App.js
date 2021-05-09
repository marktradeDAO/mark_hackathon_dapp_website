import './App.css';
import  mtInitials from './assets/svg/mt-initials.svg'

function App() {
  return (
    <div className="App">
      <div className="landing-container">
        <div className="landing-container__background-gradient"></div>
        <p className="landing-container__initials-mt">MT</p>
        <div><img src={mtInitials} className="landing-container__initials-mt-svg" alt="logo" /></div>
        <div className="landing-container__infos">
          <p className="landing-container__title">Your Identity. Your Brand.</p>
          <p className="landing-container__title">Your <span className="landing-container__info-highlight">Mark</span>.</p>
          <p className="landing-container__subtitle">The Mark Token is coming.</p>
          {/* <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"></iframe> */}
          <iframe width="560" height="315" src="https://www.youtube.com/embed/N6X5Xv9pRzI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        </div>
      </div>
    </div>
  );
}

export default App;
