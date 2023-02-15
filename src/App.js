import './App.css';
import Topnav from './components/Topnav/Topnav';
import HeroSection from './components/HeroSection/HeroSection';
import Courses from './components/Courses/Courses';
import StudentExperience from './components/StudentExperience/StudentExperience';
import SlidingCards from './components/SlidingCards/SlidingCards';
import Testomonials from './components/Testomonials/Testomonials';
import NewsLetter from './components/NewsLetter/NewsLetter';

function App() {
  return (
    <>
      <Topnav />
      <HeroSection />
      <Courses />
      <StudentExperience />
      <SlidingCards />
      <Testomonials />
      <NewsLetter />
    </>
  );
}

export default App;
