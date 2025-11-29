import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  Instagram,
  Facebook,
  ArrowRight,
  // Existing Icons
  Ruler,
  Box,
  PenTool,
  Hammer,
  Armchair,
  Layout,
  CheckCircle,
  Award,
  Eye,
  Target,
  // New Icons for expanded services
  PencilRuler,
  Monitor,
  Scale,
  MessageCircle,
  Users,
  ClipboardList,
  HardHat,
  Utensils,
  Wrench,
  Grid,
  Lightbulb,
  PaintBucket,
  Trees,
  Sparkles,
  ShieldCheck,
  Headset,
} from "lucide-react";

// --- Custom Hook for Scroll Animations ---
const useOnScreen = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return [ref, isVisible];
};

// --- Animated Section Component ---
const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- Preloader Component ---
const Preloader = ({ logoUrl }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-[#1B1B1B] flex flex-col items-center justify-center transition-opacity duration-700 ease-out">
      <div className="relative animate-pulse">
        <img
          src={logoUrl}
          alt="Loading..."
          className="w-32 h-auto md:w-48 object-contain drop-shadow-2xl"
        />
        {/* Glow effect */}
        <div className="absolute inset-0 bg-[#A8906F] blur-3xl opacity-20 rounded-full"></div>
      </div>
      <div className="mt-8 flex gap-2">
        <div className="w-3 h-3 bg-[#A8906F] rounded-full animate-bounce delay-75"></div>
        <div className="w-3 h-3 bg-[#A8906F] rounded-full animate-bounce delay-150"></div>
        <div className="w-3 h-3 bg-[#A8906F] rounded-full animate-bounce delay-300"></div>
      </div>
    </div>
  );
};

// --- WhatsApp Floating Button (UPDATED WITH PRE-FILLED MESSAGE) ---
const WhatsAppButton = () => {
  // The message you want to send
  const message =
    "Hello Space Them Upp, I visited your website and would like to know more about your interior design services.";

  // Create the full URL with the encoded message
  const whatsappUrl = `https://wa.me/919623233175?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl transition-transform duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75"></div>
      {/* SVG for WhatsApp Icon */}
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8 fill-current relative z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-[#1B1B1B] text-xs font-bold py-1 px-3 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
};

// --- Estimate Section Component ---
const EstimateSection = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto my-[30px] lg:my-[100px] px-4 md:px-0 relative z-20">
      {/* Mobile View */}
      <div className="md:hidden relative h-[380px] w-full max-w-[360px] mx-auto rounded-tr-[100px] overflow-hidden shadow-2xl mt-[50px]">
        <img
          loading="lazy"
          src="https://vishwaswamiinteriors.com//estimate1Img.png"
          alt="Modern interior mobile"
          className="h-full w-full object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end">
          <p className="text-white text-[18px] font-medium leading-snug w-full mb-4">
            Get a free estimate for your interior design project today! Contact
            us now to schedule a consultation.
          </p>
          <div className="flex items-center gap-4">
            <div className="h-[50px] w-[50px] rounded-full flex justify-center items-center bg-white text-[#C16828] shadow-lg">
              <Phone className="h-[24px] w-[24px]" />
            </div>
            <div className="text-white">
              <p className="text-[18px] font-semibold">7722083718</p>
              <p className="text-sm opacity-90">Call Us Anytime</p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block relative h-[650px] w-full rounded-tr-[200px] overflow-hidden shadow-2xl group">
        <img
          loading="lazy"
          src="https://vishwaswamiinteriors.com//new.png"
          alt="Modern living room interior"
          className="h-full w-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-28 left-[80px] z-10 max-w-[600px]">
          <p className="text-[22px] leading-[34px] font-medium text-white drop-shadow-md mb-8">
            Get a free estimate for your interior <br /> design project today!
            Contact us now to schedule a consultation.
          </p>

          <div className="flex gap-6 items-center">
            <div className="h-[70px] w-[70px] rounded-full flex justify-center items-center bg-white hover:bg-[#C16828] text-[#C16828] hover:text-white transition-all duration-300 shadow-xl cursor-pointer transform hover:scale-110">
              <Phone className="h-[32px] w-[32px]" />
            </div>
            <div className="text-white drop-shadow-md">
              <p className="text-[26px] font-bold tracking-wide">7722083718</p>
              <p className="text-[18px] font-medium uppercase tracking-wider opacity-90">
                Call Us Anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Process Wave Section ---
const ProcessWaveSection = () => {
  const steps = [
    {
      id: "01",
      title: "Consultation",
      desc: "Discover client goals and preferences in detail.",
    },
    {
      id: "02",
      title: "Design Concept",
      desc: "Craft personalized plans with 3D visualizations.",
    },
    {
      id: "03",
      title: "Execution",
      desc: "Oversee sourcing, construction, and installation.",
    },
    {
      id: "04",
      title: "Completion",
      desc: "Deliver exquisitely transformed spaces exceeding expectations.",
    },
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 relative py-10">
      <div className="text-center mb-16">
        <AnimatedSection>
          <h3 className="text-[#A8906F] text-sm tracking-widest uppercase mb-2 font-bold">
            Our Workflow
          </h3>
          <h2 className="text-4xl md:text-5xl font-serif text-[#EFE7DA]">
            Our Design Process
          </h2>
          <p className="text-gray-400 mt-4 text-lg">From Vision to Reality</p>
        </AnimatedSection>
      </div>

      {/* Mobile Process (Vertical Stack) */}
      <div className="md:hidden space-y-8">
        {steps.map((step, index) => (
          <AnimatedSection key={index} delay={index * 100}>
            <div className="bg-[#EFE7DA] p-6 rounded-2xl relative shadow-lg border-l-8 border-[#A8906F]">
              <div className="absolute -top-4 -right-2 w-10 h-10 bg-[#A8906F] rounded-full flex items-center justify-center text-[#1B1B1B] font-bold shadow-md">
                {step.id}
              </div>
              <h3 className="text-[#1B1B1B] text-xl font-bold mb-2 font-serif">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Desktop Process (Wave Layout) */}
      <div className="hidden md:block relative h-[500px] w-full">
        {/* The Gold Connecting Ribbon (Center Line) */}
        <div className="absolute top-1/2 left-0 w-full h-[12px] bg-[#A8906F] rounded-full -translate-y-1/2 z-0 opacity-80 shadow-[0_0_15px_rgba(168,144,111,0.5)]"></div>

        <div className="grid grid-cols-4 gap-8 h-full relative z-10">
          {steps.map((step, index) => {
            const isTop = index % 2 !== 0;

            return (
              <AnimatedSection
                key={index}
                delay={index * 200}
                className={`flex flex-col items-center justify-center h-full relative ${
                  isTop ? "pb-32" : "pt-32"
                }`}
              >
                {/* Connector Line to Center */}
                <div
                  className={`absolute left-1/2 w-[2px] bg-[#A8906F] -translate-x-1/2 z-0
                    ${isTop ? "bottom-1/2 h-[80px]" : "top-1/2 h-[80px]"}
                  `}
                ></div>

                {/* The Card */}
                <div className="bg-[#EFE7DA] text-[#1B1B1B] w-full p-8 rounded-[20px] shadow-2xl relative hover:-translate-y-2 transition-transform duration-300 border-b-4 border-[#A8906F]">
                  {/* Number Bubble */}
                  <div
                    className={`
                    absolute left-1/2 -translate-x-1/2 w-14 h-14 bg-[#A8906F] text-white 
                    rounded-full flex items-center justify-center text-xl font-bold border-4 border-[#1B1B1B] shadow-xl
                    ${isTop ? "-bottom-7" : "-top-7"}
                  `}
                  >
                    {step.id}
                  </div>

                  <h3 className="text-2xl font-serif font-bold mb-3 mt-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-center leading-relaxed text-sm">
                    {step.desc}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// --- Vision & Mission Section ---
const VisionMissionSection = () => {
  const content = [
    {
      title: "Our Vision",
      icon: <Eye className="w-8 h-8" />,
      text: "Everyone deserves a beautiful home. Our vision is to serve everyone who wants to decorate their beautiful space reflecting their persona. We propose best designs/interior decor/styling within the budget of each client with our expertise. Established in Pune by Sibling duo Interior Designers.",
    },
    {
      title: "Our Mission",
      icon: <Target className="w-8 h-8" />,
      text: "Our mission is to focus on visualizing and expressing the client’s desires and personal needs of style by exceeding the limits of perfection in their interiors. To provide the best customer service, our 3D rendering experts will bring your ideas to life-like visuals to better envision the classical or modern fit-outs of your choice before the project execution.",
    },
  ];

  return (
    <div className="container mx-auto px-6 relative z-10 py-10">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Side - Circular Image container */}
        <AnimatedSection className="w-full lg:w-1/2 flex justify-center relative">
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border-[12px] border-[#A8906F]/80 shadow-2xl overflow-hidden z-20">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative dots */}
          <div className="hidden lg:block absolute top-[25%] right-0 translate-x-1/2 w-6 h-6 bg-[#A8906F] rounded-full z-30 border-4 border-[#1B1B1B]"></div>
          <div className="hidden lg:block absolute bottom-[25%] right-0 translate-x-1/2 w-6 h-6 bg-[#A8906F] rounded-full z-30 border-4 border-[#1B1B1B]"></div>
        </AnimatedSection>

        {/* Right Side - Content Blocks */}
        <div className="w-full lg:w-1/2 flex flex-col gap-12">
          {content.map((item, index) => (
            <AnimatedSection key={index} delay={index * 200}>
              <div className="flex gap-6 relative group">
                <div className="shrink-0 relative z-10">
                  <div className="w-20 h-20 bg-[#A8906F] rounded-full flex items-center justify-center text-[#1B1B1B] shadow-xl border-4 border-[#4B3F35] group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="hidden lg:block absolute top-1/2 right-full w-[100px] h-[3px] bg-[#A8906F] -translate-y-1/2 -z-10 opacity-70"></div>
                </div>
                <div>
                  <h3 className="text-3xl font-serif font-bold text-[#EFE7DA] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-base md:text-lg bg-[#4B3F35]/20 p-6 rounded-r-xl border-l-4 border-[#A8906F]">
                    {item.text}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- StatsPart Component ---
const StatsPart = () => {
  return (
    <div className="bg-[#A8906F]">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-12 lg:px-8 lg:py-20 ">
        <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4 gap-2">
          <div className="text-center md:border-r border-[#1B1B1B]/30">
            <h1 className="text-3xl md:text-3xl font-bold lg:text-5xl xl:text-[65px] text-[#1B1B1B]">
              12+
            </h1>
            <p className="text-[12px] md:text-[16px] lg:text-xl font-medium tracking-widest text-[#1B1B1B] uppercase mt-2">
              Years Of Experience
            </p>
          </div>

          <div className="text-center md:border-r border-[#1B1B1B]/30">
            <h1 className="text-3xl md:text-3xl font-bold lg:text-5xl xl:text-[65px] text-[#1B1B1B]">
              12.9K
            </h1>
            <p className="text-[12px] md:text-[16px] lg:text-xl font-medium tracking-widest text-[#1B1B1B] uppercase mt-2">
              Subscribers
            </p>
          </div>

          <div className="text-center md:border-r border-[#1B1B1B]/30">
            <h1 className="text-3xl md:text-3xl font-bold lg:text-5xl xl:text-[65px] text-[#1B1B1B]">
              48.3K
            </h1>
            <p className="text-[12px] md:text-[16px] lg:text-xl font-medium tracking-widest text-[#1B1B1B] uppercase mt-2">
              Successful Projects
            </p>
          </div>

          <div className="text-center">
            <h1 className="text-3xl md:text-3xl font-bold lg:text-5xl xl:text-[65px] text-[#1B1B1B]">
              24.5K
            </h1>
            <p className="text-[12px] md:text-[16px] lg:text-xl font-medium tracking-widest text-[#1B1B1B] uppercase mt-2">
              Happy Customers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const heroImageRef = useRef(null);

  const logoUrl = "https://adswisemarketing.com//logo%20(3).png";

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds loading time
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHeroMouseMove = (e) => {
    if (!heroImageRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const xMove = (clientX / innerWidth - 0.5) * -20;
    const yMove = (clientY / innerHeight - 0.5) * -20;
    heroImageRef.current.style.transform = `scale(1.1) translate(${xMove}px, ${yMove}px)`;
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { title: "Site Measurement", icon: <Ruler className="w-8 h-8" /> },
    { title: "Space Planning", icon: <PencilRuler className="w-8 h-8" /> },
    { title: "3D Render", icon: <Monitor className="w-8 h-8" /> },
    { title: "Honest Advice", icon: <Scale className="w-8 h-8" /> },
    {
      title: "Transparent Communication",
      icon: <MessageCircle className="w-8 h-8" />,
    },
    { title: "Experienced Team", icon: <Users className="w-8 h-8" /> },
    {
      title: "Project Management",
      icon: <ClipboardList className="w-8 h-8" />,
    },
    { title: "Furniture", icon: <Armchair className="w-8 h-8" /> },
    { title: "Civil Work", icon: <HardHat className="w-8 h-8" /> },
    { title: "Modular Kitchen", icon: <Utensils className="w-8 h-8" /> },
    { title: "Plumbing", icon: <Wrench className="w-8 h-8" /> },
    { title: "Ceiling Design", icon: <Grid className="w-8 h-8" /> },
    { title: "Light & Decor", icon: <Lightbulb className="w-8 h-8" /> },
    { title: "Paint & Decor", icon: <PaintBucket className="w-8 h-8" /> },
    { title: "Landscape & Balcony", icon: <Trees className="w-8 h-8" /> },
    { title: "Site Cleaning", icon: <Sparkles className="w-8 h-8" /> },
    { title: "Quality Assurance", icon: <ShieldCheck className="w-8 h-8" /> },
    { title: "After Sales Service", icon: <Headset className="w-8 h-8" /> },
  ];

  return (
    <>
      {/* --- Loader --- */}
      {loading && <Preloader logoUrl={logoUrl} />}

      {/* --- Main App Content --- */}
      <div
        className={`min-h-screen bg-[#1B1B1B] text-[#EFE7DA] font-sans overflow-x-hidden selection:bg-[#A8906F] selection:text-white transition-opacity duration-1000 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* --- Navigation --- */}
        <nav
          className={`fixed w-full z-50 transition-all duration-300 ${
            scrolled
              ? "bg-[#1B1B1B]/95 backdrop-blur-md shadow-lg py-4"
              : "bg-transparent py-6"
          }`}
        >
          <div className="container mx-auto px-6 flex justify-between items-center">
            {/* Logo in Header */}
            <div className="flex items-center gap-3">
              <img
                src={logoUrl}
                alt="Space Them Upp Logo"
                className="h-12 w-auto"
              />
              {/* <div className="text-2xl font-serif font-bold text-[#A8906F] tracking-wider hidden sm:block">
                SPACE THEM UPP
              </div> */}
            </div>

            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#EFE7DA] hover:text-[#A8906F] transition-colors duration-300 text-sm tracking-widest uppercase font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="px-6 py-2 border border-[#A8906F] text-[#A8906F] hover:bg-[#A8906F] hover:text-[#1B1B1B] transition-all duration-300 rounded-sm font-medium"
              >
                Get Started
              </a>
            </div>

            <button
              className="md:hidden text-[#EFE7DA]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-[#1B1B1B] absolute top-full left-0 w-full border-t border-[#4B3F35] py-4 px-6 flex flex-col space-y-4 shadow-xl">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#EFE7DA] hover:text-[#A8906F] text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}
        </nav>

        {/* --- Hero Section --- */}
        <section
          id="home"
          className="relative h-screen w-full bg-[#1B1B1B] flex items-center justify-center p-6 md:p-12 overflow-hidden"
          onMouseMove={handleHeroMouseMove}
        >
          <div className="relative w-full h-full rounded-tl-[100px] rounded-br-[100px] rounded-tr-none rounded-bl-none overflow-hidden mt-16 group">
            <div
              ref={heroImageRef}
              className="absolute inset-0 transition-transform duration-100 ease-out will-change-transform scale-110"
            >
              <img
                src="https://i.pinimg.com/1200x/ba/a2/ba/baa2bac42d3c33da1e20b366ee007241.jpg"
                alt="Luxury Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 md:px-16 lg:px-24">
              <AnimatedSection>
                <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-5xl">
                  <h1 className="font-serif text-[#EFE7DA] leading-none mb-6 drop-shadow-2xl">
                    <span className="block text-5xl md:text-7xl lg:text-8xl font-bold mb-2">
                      Space Them Upp
                    </span>
                    <span className="block text-3xl md:text-5xl lg:text-6xl font-medium tracking-wide">
                      Interior Design Studio
                    </span>
                  </h1>

                  <p className="text-white tracking-[0.2em] uppercase text-sm md:text-base font-bold mb-10 drop-shadow-md bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full inline-block">
                    Transform Your Space
                  </p>

                  <a
                    href="#contact"
                    className="bg-[#D6823F] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#b56d34] transition-all duration-300 flex items-center gap-3 group shadow-xl hover:shadow-2xl hover:scale-105 transform"
                  >
                    Get Started
                    <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* --- About Section --- */}
        <section
          id="about"
          className="py-20 md:py-32 bg-[#1B1B1B] relative pb-0"
        >
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
              <AnimatedSection className="relative">
                <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl border-4 border-[#4B3F35]">
                  <img
                    src="https://i.pinimg.com/736x/67/7a/29/677a29fe0f8389a46ec2652b56b94e69.jpg"
                    alt="About Us Interior"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#A8906F] rounded-lg -z-0 hidden md:block"></div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <h3 className="text-[#A8906F] text-sm tracking-widest uppercase mb-2 font-bold">
                  About Us
                </h3>
                <h2 className="text-4xl md:text-5xl font-serif text-[#EFE7DA] mb-6">
                  Creating Timeless{" "}
                  <span className="text-[#A8906F]">Interiors</span>
                </h2>
                <div className="space-y-6 text-gray-400 leading-relaxed">
                  <p>
                    Space Them Upp Specializes in providing turnkey design
                    solutions for high end residential luxury homes and
                    commercial projects. Our ability to create luxurious,
                    sophisticated interiors of timeless quality, extraordinary
                    design, and functionality, infused with client's personal
                    style and desires. Most importantly we respect our client’s
                    budget and established timeline…

                  </p>
                  <p>
                    At Space Them Upp, we believe that interior design is not
                    just about aesthetics; it's about creating spaces that
                    enhance the way you live and work. Our team of experienced
                    designers is dedicated to bringing your vision to life,
                    ensuring every detail is meticulously crafted to reflect
                    your unique style and personality.
                 

                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* --- Vision & Mission Section --- */}
          <VisionMissionSection />
        </section>

        {/* --- Estimate Section --- */}
        <AnimatedSection>
          <EstimateSection />
        </AnimatedSection>

        {/* --- Services Section --- */}
        <section id="services" className="py-20 bg-[#4B3F35]/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <AnimatedSection>
                <h3 className="text-[#A8906F] text-sm tracking-widest uppercase mb-2 font-bold">
                  What We Do
                </h3>
                <h2 className="text-4xl font-serif text-[#EFE7DA]">
                  Our Expertise
                </h2>
              </AnimatedSection>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {services.map((service, index) => (
                <AnimatedSection key={index} delay={index * 50}>
                  <div className="group bg-[#4B3F35] p-6 rounded-lg hover:bg-[#A8906F] transition-all duration-300 h-full flex flex-col items-center text-center cursor-pointer border border-[#4B3F35] hover:border-[#A8906F] shadow-lg hover:shadow-2xl hover:-translate-y-2">
                    <div className="text-[#A8906F] group-hover:text-[#1B1B1B] mb-4 transition-colors duration-300 bg-[#1B1B1B] p-4 rounded-full group-hover:bg-[#EFE7DA]">
                      {service.icon}
                    </div>
                    <h4 className="text-lg font-bold text-[#EFE7DA] group-hover:text-[#1B1B1B] transition-colors duration-300 leading-tight">
                      {service.title}
                    </h4>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* --- Process Section --- */}
        <section
          id="process"
          className="bg-[#1B1B1B] relative overflow-hidden py-10"
        >
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#A8906F]/5 blur-[100px] pointer-events-none"></div>
          <ProcessWaveSection />
        </section>

        {/* --- Stats Section --- */}
        <section>
          <StatsPart />
        </section>

        {/* --- Gallery/Split Section --- */}
        <section className="py-0">
          <div className="grid md:grid-cols-2 h-auto md:h-[600px]">
            <div className="relative group overflow-hidden h-[400px] md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Dining Area"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                <span className="text-[#EFE7DA] text-2xl font-serif tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Residential
                </span>
              </div>
            </div>
            <div className="relative group overflow-hidden h-[400px] md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1447&q=80"
                alt="Cafe Seating"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                <span className="text-[#EFE7DA] text-2xl font-serif tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Commercial
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* --- Contact / CTA Section --- */}
        <section id="contact" className="py-20 bg-[#1B1B1B] relative">
          <div className="container mx-auto px-6">
            <div className="bg-[#4B3F35] rounded-2xl p-8 md:p-16 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#A8906F]/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>

              <div className="grid md:grid-cols-2 gap-12 relative z-10">
                <AnimatedSection>
                  <h3 className="text-[#A8906F] text-sm tracking-widest uppercase mb-4 font-bold">
                    Let's Talk
                  </h3>
                  <h2 className="text-4xl md:text-5xl font-serif text-[#EFE7DA] mb-6">
                    Ready to Transform Your Space?
                  </h2>
                  <p className="text-gray-300 mb-8">
                    Contact us to discuss your vision and goals. Receive a
                    tailored plan that fits your needs perfectly.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-[#EFE7DA]">
                      <div className="w-10 h-10 rounded-full bg-[#1B1B1B] flex items-center justify-center text-[#A8906F]">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase">
                          Call Us
                        </p>
                        <p className="font-bold text-lg">+91-9623233175</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-[#EFE7DA]">
                      <div className="w-10 h-10 rounded-full bg-[#1B1B1B] flex items-center justify-center text-[#A8906F]">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase">
                          Website
                        </p>
                        <p className="font-bold text-lg">
                          www.spacethemupp.com
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={200}>
                  <form
                    className="bg-[#1B1B1B] p-8 rounded-lg shadow-lg border border-[#A8906F]/20"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="mb-6">
                      <label className="block text-gray-400 text-sm mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-[#4B3F35]/20 border border-[#4B3F35] rounded p-3 text-[#EFE7DA] focus:border-[#A8906F] focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-gray-400 text-sm mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full bg-[#4B3F35]/20 border border-[#4B3F35] rounded p-3 text-[#EFE7DA] focus:border-[#A8906F] focus:outline-none transition-colors"
                        placeholder="+91..."
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-gray-400 text-sm mb-2">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        className="w-full bg-[#4B3F35]/20 border border-[#4B3F35] rounded p-3 text-[#EFE7DA] focus:border-[#A8906F] focus:outline-none transition-colors"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>
                    <button className="w-full bg-[#A8906F] text-[#1B1B1B] font-bold py-4 rounded hover:bg-[#8f7a5b] transition-all duration-300">
                      Get Free Consultation
                    </button>
                  </form>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* --- Footer --- */}
        <footer className="bg-[#0f0f0f] pt-16 pb-8 border-t border-[#4B3F35]">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div className="col-span-1 md:col-span-2">
                {/* Logo in Footer */}
                <div className="flex items-center gap-3 mb-6">
                  <img
                    src={logoUrl}
                    alt="Space Them Upp Logo"
                    className="h-14 w-auto"
                  />
                  <h2 className="text-2xl font-serif font-bold text-[#A8906F] tracking-wider">
                    SPACE THEM UPP
                  </h2>
                </div>
                <p className="text-gray-400 max-w-sm">
                  Turning your dream space into reality with extraordinary
                  design and functionality. Specializing in luxury residential
                  and commercial fit-outs.
                </p>
              </div>
              <div>
                <h4 className="text-[#EFE7DA] font-bold mb-6">Quick Links</h4>
                <ul className="space-y-3 text-gray-400">
                  <li>
                    <a
                      href="#home"
                      className="hover:text-[#A8906F] transition-colors"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="hover:text-[#A8906F] transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="hover:text-[#A8906F] transition-colors"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#process"
                      className="hover:text-[#A8906F] transition-colors"
                    >
                      Process
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-[#EFE7DA] font-bold mb-6">Connect</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#1B1B1B] border border-[#4B3F35] flex items-center justify-center text-[#A8906F] hover:bg-[#A8906F] hover:text-[#1B1B1B] transition-all"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#1B1B1B] border border-[#4B3F35] flex items-center justify-center text-[#A8906F] hover:bg-[#A8906F] hover:text-[#1B1B1B] transition-all"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-[#4B3F35] pt-8 text-center text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Space Them Upp. All rights
              reserved.
            </div>
          </div>
        </footer>

        {/* --- WhatsApp Floating Button --- */}
        <WhatsAppButton />
      </div>
    </>
  );
};

export default App;
