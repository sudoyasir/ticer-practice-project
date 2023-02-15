import logo from './logo.svg';
import './App.css';
import Topnav from './components/Topnav';
import HeroSection from './components/HeroSection';
import Courses from './components/Courses';
import StudentExperience from './components/StudentExperience';
import SlidingCards from './components/SlidingCards';
import Testomonials from './components/Testomonials';

function App() {
  return (
    <>
      <Topnav />
      <HeroSection />
      <Courses />
      <StudentExperience />
      <SlidingCards />
      <Testomonials />
    </>
  );
}

export default App;
