import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './components/layout/RootLayout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import FigmaShowcase from './pages/FigmaShowcase';
import GraphicsShowcase from './pages/GraphicsShowcase';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="figma" element={<FigmaShowcase />} />
          <Route path="graphics" element={<GraphicsShowcase />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
