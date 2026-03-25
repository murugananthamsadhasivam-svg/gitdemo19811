import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainForm from './pages/MainForm';
import EducationForm from './pages/EducationForm';
import ExperienceForm from './pages/ExperienceForm';

function App() {
  return (
    <Router>
      <nav style={{ marginBottom: '20px', display: 'flex', gap: '12px' }} aria-label="Primary Navigation">
        <Link to="/" data-testid="nav-main">Main</Link>
        <Link to="/education" data-testid="nav-education">Education</Link>
        <Link to="/experience" data-testid="nav-experience">Experience</Link>
      </nav>

      <Routes>
        <Route path="/" element={<MainForm />} />
        <Route path="/education" element={<EducationForm />} />
        <Route path="/experience" element={<ExperienceForm />} />
      </Routes>
    </Router>
  );
}

export default App;
