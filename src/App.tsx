import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { useEffect } from 'react';
import { SignIn } from './pages/SignIn';
import { ContactForm } from './pages/ContactForm';
import { HomePage } from './pages/HomePage';
import Home from './pages/Home';

// Product pages
import { FeaturesPage } from './pages/FeaturesPage';
import { PricingPage } from './pages/PricingPage';
import { SecurityPage } from './pages/SecurityPage';
import { ApiPage } from './pages/ApiPage';

// Company pages
import { AboutUsPage } from './pages/AboutUsPage';
import { CareersPage } from './pages/CareersPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';

// Legal pages
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { CompliancePage } from './pages/CompliancePage';

import { Routes, Route, useNavigate, useLocation } from 'react-router';
import { AnimatePresence } from 'motion/react';
import './styles/globals.css';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen overflow-hidden" style={{ background: '#ffffff' }}>
      {/* Static top-right decorative glow */}
      <div
        className="fixed top-0 right-0 w-[600px] h-[600px] opacity-20 pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(247,59,32,0.12) 0%, transparent 70%)' }}
      />



      {/* Main content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {!['/signin'].includes(location.pathname) && (
          <Navigation
            onSignInClick={() => navigate('/signin')}
            onGetStartedClick={() => navigate('/contact')}
          />
        )}

        <main className="flex-grow">
          <Routes>
            {/* Main routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signin" element={<SignIn onBack={() => navigate('/')} onGetStarted={() => navigate('/contact')} />} />
            <Route path="/contact-form" element={<ContactForm onBack={() => navigate('/')} />} />

            {/* Product */}
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/api" element={<ApiPage />} />

            {/* Company */}
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Legal */}
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
            <Route path="/compliance" element={<CompliancePage />} />
          </Routes>
        </main>

        {!['/signin', '/contact'].includes(location.pathname) && <Footer />}
      </div>

    </div>
  );
}