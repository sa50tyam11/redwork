import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import WorkPage from './pages/WorkPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ProcessPage from './pages/ProcessPage';
import SearchPage from './pages/SearchPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';

import { ReactLenis } from 'lenis/react';

function App() {
  return (
    <ReactLenis root>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route path="work" element={<WorkPage />} />
            <Route path="testimonials" element={<TestimonialsPage />} />
            <Route path="how-we-work" element={<ProcessPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ReactLenis>
  );
}

export default App;