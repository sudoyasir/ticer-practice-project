import './App.css';
import Topnav from './components/Topnav/Topnav';
import HeroSection from './components/HeroSection/HeroSection';
import Courses from './components/Courses/Courses';
import StudentExperience from './components/StudentExperience/StudentExperience';
import SlidingCards from './components/SlidingCards/SlidingCards';
import Testomonials from './components/Testomonials/Testomonials';
import NewsLetter from './components/NewsLetter/NewsLetter';
import Footer from './components/Footer/Footer';

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
      <Footer />
    </>
  );
}

export default App;
