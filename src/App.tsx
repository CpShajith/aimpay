import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { useEffect } from 'react';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
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

// Admin imports
import { AuthProvider } from './contexts/AuthContext';
import { AdminLayout } from './admin/layouts/AdminLayout';
import { AdminDashboard } from './admin/pages/AdminDashboard';
import { AdminUsers } from './admin/pages/AdminUsers';
import { AdminTransactions } from './admin/pages/AdminTransactions';
import { AdminMessages } from './admin/pages/AdminMessages';

import { Routes, Route, useNavigate, useLocation } from 'react-router';
import './styles/globals.css';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <AuthProvider>
      <div className="min-h-screen overflow-hidden bg-white">
        {!isAdminRoute && (
          <div
            className="hidden md:block fixed top-0 right-0 w-[600px] h-[600px] opacity-20 pointer-events-none z-0"
            style={{ background: 'radial-gradient(circle, rgba(247,59,32,0.12) 0%, transparent 70%)' }}
          />
        )}

        <div className="relative z-10 flex flex-col min-h-screen">
          {!isAdminRoute && !['/signin', '/signup'].includes(location.pathname) && (
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
              <Route path="/signin" element={<SignIn onBack={() => navigate('/')} onGetStarted={() => navigate('/signup')} />} />
              <Route path="/signup" element={<SignUp onBack={() => navigate('/')} onSignIn={() => navigate('/signin')} />} />
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

              {/* Admin Routes */}
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="users" element={<AdminUsers />} />
                <Route path="transactions" element={<AdminTransactions />} />
                <Route path="messages" element={<AdminMessages />} />
                <Route path="settings" element={<div className="p-8 text-gray-500 text-center border-2 border-dashed border-gray-200 rounded-2xl mx-auto max-w-lg mt-10">Settings placeholder</div>} />
              </Route>
            </Routes>
          </main>

          {!isAdminRoute && !['/signin', '/signup', '/contact'].includes(location.pathname) && <Footer />}
        </div>
      </div>
    </AuthProvider>
  );
}