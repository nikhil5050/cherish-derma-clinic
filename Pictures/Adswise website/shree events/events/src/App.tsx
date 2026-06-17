import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import Process from './components/Process';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import ManufacturerPage from './pages/ManufacturerPage';
import SEO from './components/SEO';
import SocialMediaBar from './components/SocialMediaBar';

// ============ SCROLL TO TOP COMPONENT ============
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

// ============ HOME PAGE ============
const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <>
      <SEO 
        title="Shree Events - Premium Event Management & Exhibition Services"
        description="Professional event management, weddings, corporate events, film production, and exhibitions across Pan-India locations. Transform your vision into reality."
        canonicalUrl="https://shreeevents.com/"
        image="https://shreeevents.com/og-image.jpg"
        keywords="event management, weddings, corporate events, exhibitions, film production, event planning India"
      />
      <main className="min-h-screen bg-[#e7e8e2] font-sans selection:bg-[#940242] selection:text-white">
        <Hero onContactClick={handleContactClick} />
        <About />
        <ServicesGrid />
        <Process />
        <Gallery />
        <Contact onContactClick={handleContactClick} />
      </main>
    </>
  );
};

// ============ CONTACT PAGE ============
const ContactPageWrapper: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <>
      <SEO 
        title="Contact Us - Shree Events | Get Your Custom Event Quote"
        description="Get in touch with Shree Events for your event requirements. Professional team ready to transform your vision across Pan-India locations."
        canonicalUrl="https://shreeevents.com/contact"
        keywords="contact events, event inquiry, event management contact, Shree Events"
      />
      <main className="min-h-screen bg-[#e7e8e2] font-sans selection:bg-[#940242] selection:text-white">
        <ContactPage onBackClick={handleBackClick} />
      </main>
    </>
  );
};

// ============ ABOUT PAGE ============
const AboutPageWrapper: React.FC = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <>
      <SEO 
        title="About Shree Events - Professional Event Management Experts"
        description="Learn about Shree Events' journey, expertise, and commitment to creating extraordinary experiences. Manufacturing excellence meets creative capabilities."
        canonicalUrl="https://shreeevents.com/about"
        keywords="about events, event company, event experts, Shree Events team, event management company"
      />
      <main className="min-h-screen bg-[#e7e8e2] font-sans selection:bg-[#940242] selection:text-white">
        <About />
        <div className="py-20">
          <Contact onContactClick={handleContactClick} />
        </div>
      </main>
    </>
  );
};

// ============ MANUFACTURER PAGE ============
const ManufacturerPageWrapper: React.FC = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <>
      <SEO 
        title="Manufacturing - Shree Events | Professional Event Structure Manufacturing"
        description="Discover our manufacturing excellence. Custom-built event structures, mandaps, stages, and decorative elements. Quality, durability, and design combined."
        canonicalUrl="https://shreeevents.com/manufacturer"
        keywords="event manufacturing, custom stages, mandap manufacturers, event structures, manufacturing excellence"
      />
      <main className="min-h-screen bg-[#e7e8e2] font-sans selection:bg-[#940242] selection:text-white">
        <ManufacturerPage onContactClick={handleContactClick} />
      </main>
    </>
  );
};

// ============ SERVICES PAGE ============
const ServicesPageWrapper: React.FC = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <>
      <SEO 
        title="Our Services - Weddings, Corporate Events, Productions & More"
        description="Explore our comprehensive event services including weddings, corporate gatherings, film production, exhibitions, and more. Tailored solutions for every occasion."
        canonicalUrl="https://shreeevents.com/services"
        keywords="event services, wedding planning, corporate events, film production, exhibition services, event packages"
      />
      <main className="min-h-screen bg-[#e7e8e2] font-sans selection:bg-[#940242] selection:text-white">
        <ServicesGrid />
        <Process />
        <div className="py-20">
          <Contact onContactClick={handleContactClick} />
        </div>
      </main>
    </>
  );
};

// ============ PORTFOLIO PAGE ============
const PortfolioPageWrapper: React.FC = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <>
      <SEO 
        title="Our Portfolio - Shree Events Past Projects & Success Stories"
        description="View our portfolio of successful events, weddings, corporate functions, and exhibitions. Discover our creative solutions and quality execution."
        canonicalUrl="https://shreeevents.com/portfolio"
        keywords="event portfolio, past events, wedding gallery, corporate events portfolio, exhibition projects, success stories"
      />
      <main className="min-h-screen bg-[#e7e8e2] font-sans selection:bg-[#940242] selection:text-white">
        <Gallery />
        <div className="py-20">
          <Contact onContactClick={handleContactClick} />
        </div>
      </main>
    </>
  );
};

// ============ LOCATIONS PAGES ============
const LocationPageWrapper: React.FC<{ location: string }> = ({ location }) => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  const locationData: {
    [key: string]: { title: string; description: string; keywords: string };
  } = {
    mumbai: {
      title: "Events in Mumbai | Shree Events - Wedding & Corporate Event Services",
      description: "Premier event management services in Mumbai. Weddings, corporate events, exhibitions, and productions handled by experienced professionals.",
      keywords: "events in Mumbai, wedding planner Mumbai, corporate events Mumbai, event management Mumbai, exhibition services Mumbai"
    },
    bangalore: {
      title: "Events in Bangalore | Shree Events - Professional Event Management",
      description: "Top-rated event management in Bangalore for weddings, corporate functions, exhibitions, and more. Quality execution and creative solutions.",
      keywords: "events in Bangalore, wedding planning Bangalore, corporate events Bangalore, event management Bangalore"
    },
    pune: {
      title: "Events in Pune | Shree Events - Complete Event Solutions",
      description: "Professional event management and planning services in Pune. Specializing in weddings, corporate events, exhibitions, and productions.",
      keywords: "events in Pune, wedding planner Pune, corporate events Pune, event management Pune, Pune exhibitions"
    },
    delhi: {
      title: "Events in Delhi NCR | Shree Events - Premium Event Management",
      description: "Expert event management services across Delhi NCR. Weddings, corporate gatherings, exhibitions, and film productions with excellence.",
      keywords: "events in Delhi, wedding planning Delhi, corporate events Delhi NCR, event management Delhi, exhibitions Delhi"
    },
    hyderabad: {
      title: "Events in Hyderabad | Shree Events - Professional Event Planning",
      description: "Complete event management solutions in Hyderabad. Weddings, corporate events, exhibitions, and productions with quality and creativity.",
      keywords: "events in Hyderabad, wedding planner Hyderabad, corporate events Hyderabad, event management Hyderabad"
    },
    chennai: {
      title: "Events in Chennai | Shree Events - Event Management Services",
      description: "Professional event planning and management services in Chennai. Weddings, corporate events, exhibitions, and more.",
      keywords: "events in Chennai, wedding planner Chennai, corporate events Chennai, event management Chennai, exhibitions Chennai"
    }
  };

  const data = locationData[location] || locationData.mumbai;

  return (
    <>
      <SEO 
        title={data.title}
        description={data.description}
        canonicalUrl={`https://shreeevents.com/locations/${location}`}
        keywords={data.keywords}
      />
      <main className="min-h-screen bg-[#EBFFE1] font-sans selection:bg-[#940242] selection:text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold uppercase mb-8 text-[#010101]">
            Events in <span className="text-[#940242]">{location.charAt(0).toUpperCase() + location.slice(1)}</span>
          </h1>
          <p className="text-lg text-[#010101]/70 mb-8">
            Professional event management and planning services in {location.charAt(0).toUpperCase() + location.slice(1)} with expertise in weddings, corporate events, exhibitions, and more.
          </p>
          <button 
            onClick={handleContactClick}
            className="bg-[#940242] text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-[#010101] transition-all"
          >
            Get Quote for {location.charAt(0).toUpperCase() + location.slice(1)}
          </button>
        </div>
        <div className="py-20">
          <Contact onContactClick={handleContactClick} />
        </div>
      </main>
    </>
  );
};

// ============ MAIN APP COMPONENT ============
const App: React.FC = () => {
  const [navigate, setNavigate] = React.useState<ReturnType<typeof useNavigate> | null>(null);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <SocialMediaBar />
        <div className="flex flex-col min-h-screen bg-[#EBFFE1]">
          {/* Navbar wraps all routes */}
          <Navbar 
            onContactClick={() => {
              if (navigate) {
                navigate('/contact');
              }
            }}
          />
          
          {/* Main Routes */}
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPageWrapper />} />
            <Route path="/about" element={<AboutPageWrapper />} />
            <Route path="/manufacturer" element={<ManufacturerPageWrapper />} />
            <Route path="/services" element={<ServicesPageWrapper />} />
            <Route path="/portfolio" element={<PortfolioPageWrapper />} />
            
            {/* Location Pages */}
            <Route 
              path="/locations/:location" 
              element={
                <LocationPageWrapperRoute />
              } 
            />
            
            {/* Catch-all 404 Route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>

          {/* Footer wraps all routes */}
          <Footer 
            onContactClick={() => {
              if (navigate) {
                navigate('/contact');
              }
            }}
          />
        </div>
      </Router>
    </HelmetProvider>
  );
};

// ============ LOCATION ROUTE WRAPPER ============
const LocationPageWrapperRoute: React.FC = () => {
  const { location } = useParams<{ location?: string }>();
  
  const validLocations = ['mumbai', 'bangalore', 'pune', 'delhi', 'hyderabad', 'chennai'];
  
  if (!location || !validLocations.includes(location.toLowerCase())) {
    return <NotFoundPage />;
  }

  return <LocationPageWrapper location={location.toLowerCase()} />;
};

// ============ 404 NOT FOUND PAGE ============
const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO 
        title="Page Not Found - Shree Events"
        description="The page you are looking for does not exist."
        canonicalUrl="https://shreeevents.com/404"
      />
      <main className="min-h-screen bg-[#EBFFE1] font-sans selection:bg-[#940242] selection:text-white flex items-center justify-center">
        <div className="text-center py-20 px-6">
          <h1 className="text-6xl font-bold text-[#940242] mb-4">404</h1>
          <p className="text-2xl font-bold text-[#010101] mb-4">Page Not Found</p>
          <p className="text-[#010101]/70 mb-8">The page you are looking for does not exist.</p>
          <button 
            onClick={() => navigate('/')}
            className="bg-[#940242] text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-[#010101] transition-all"
          >
            Back to Home
          </button>
        </div>
      </main>
    </>
  );
};

export default App;