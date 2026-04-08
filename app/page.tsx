"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Leaf,
  Users,
  Heart,
  BookOpen,
  Droplets,
  Sprout,
  Tractor,
  Banknote,
  ShieldAlert,
  Scale,
  Briefcase,
  Info,
  Phone,
  Mail,
  MapPin,
  Menu,
  X
} from "lucide-react";
import "./page.css";

const heroSlides = [
  {
    image: "/images/hero_image_1.png",
    title: "Empowering Farmers & Rural Communities",
    subtitle: "Supporting agriculture, education, and sustainable livelihoods",
  },
  {
    image: "/images/hero_image_2.png",
    title: "Growing Together for a Better Future",
    subtitle: "Transforming lives through modern agricultural practices",
  },
  {
    image: "/images/tree_plantation.png",
    title: "Protecting Our Environment",
    subtitle: "Creating sustainable ecosystems for generations to come",
  },
  {
    image: "/images/tractor_farming.png",
    title: "Advancing Farm Technology",
    subtitle: "Bringing the latest tools to rural farmers",
  },
];

const programs = [
  { id: "agricultural-training", title: "Agricultural Training", desc: "Expert guidance on modern and organic farming.", icon: Sprout, img: "/images/farmer_training.png" },
  { id: "self-help-groups", title: "Self Help Groups", desc: "Empowering rural women through community groups.", icon: Users, img: "/images/women_shg.png" },
  { id: "health-camps", title: "Health Camps", desc: "Free medical checkups and awareness in villages.", icon: Heart, img: "/images/health_camp.png" },
  { id: "skill-development", title: "Skill Development", desc: "Vocational training for youth employment.", icon: BookOpen, img: "/images/skill_training.png" },
  { id: "environmental-protection", title: "Environmental Protection", desc: "Tree plantation and eco-friendly practices.", icon: Leaf, img: "/images/tree_plantation.png" },
  { id: "water-management", title: "Water Management", desc: "Efficient irrigation and rainwater harvesting methods.", icon: Droplets, img: "/images/drone_farming.png" },
];

const supportCategories = [
  { id: "financial-support", title: "Financial Support", img: "/images/rural_finance_support.png" },
  { id: "social-support", title: "Social Support", img: "/images/village_social_gathering.png" },
  { id: "educational-support", title: "Educational Support", img: "/images/rural_education_kids.png" },
  { id: "health-support", title: "Health Support", img: "/images/rural_medical_camp.png" },
  { id: "legal-support", title: "Legal Support", img: "/images/village_legal_awareness.png" },
  { id: "environmental-support", title: "Environmental Support", img: "/images/community_tree_planting.png" },
  { id: "information-support", title: "Information Support", img: "/images/drone_farming.png" },
  { id: "employment-support", title: "Employment Support", img: "/images/youth_skill_workshop.png" },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Reveal animations
      const reveals = document.querySelectorAll(".reveal-up");
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    
    // Auto-scroll hero slider
    const sliderInterval = setInterval(() => {
      if (sliderRef.current) {
        setCurrentSlide((prevSlide) => {
          const next = (prevSlide + 1) % heroSlides.length;
          sliderRef.current?.scrollTo({
            left: next * window.innerWidth,
            behavior: "smooth"
          });
          return next;
        });
      }
    }, 4000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(sliderInterval);
    };
  }, []);

  const scrollToSlide = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: index * window.innerWidth,
        behavior: "smooth"
      });
      setCurrentSlide(index);
    }
  };

  const nextSlide = () => {
    const next = (currentSlide + 1) % heroSlides.length;
    scrollToSlide(next);
  };

  const prevSlide = () => {
    const prev = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
    scrollToSlide(prev);
  };

  return (
    <main>
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="logo">
            <img src="/logo.jpeg" alt="APAPDWS Logo" className="logo-img" />
            <span className="logo-text">APAPDWS</span>
          </div>
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
            <li><a href="#programs" onClick={() => setMobileMenuOpen(false)}>Programs</a></li>
            <li><a href="#impact" onClick={() => setMobileMenuOpen(false)}>Impact</a></li>
            <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
            <li className="mobile-only-action">
              <a href="#contact" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>Join Us</a>
            </li>
          </ul>
          <div className="nav-actions desktop-only">
            <a href="#contact" className="btn btn-primary">Join Us</a>
          </div>
          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-slider" ref={sliderRef}>
          {heroSlides.map((slide, index) => (
            <div key={index} className="hero-slide">
              <img src={slide.image} alt={slide.title} className="hero-image" />
              <div className="hero-overlay">
                <div className="container">
                  <div className="hero-content reveal-up active">
                    <h1 className="hero-title">{slide.title}</h1>
                    <p className="hero-subtitle">{slide.subtitle}</p>
                    <div className="hero-actions">
                      <a href="#contact" className="btn btn-primary">Join Us</a>
                      <a href="#about" className="btn btn-secondary">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="slider-arrow slider-prev" onClick={prevSlide}><ChevronLeft size={30} /></button>
        <button className="slider-arrow slider-next" onClick={nextSlide}><ChevronRight size={30} /></button>
        <div className="slider-controls">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => scrollToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image reveal-up">
              <img src="/images/about_farmers.png" alt="Indian farmers in green fields" />
            </div>
            <div className="about-text reveal-up" style={{ animationDelay: "0.2s" }}>
              <div className="section-title">About APAPDWS</div>
              <p>
                Andhra Pradesh Agricultural & People Development Welfare Society works tirelessly for farmers, rural communities, and weaker sections of society. Our focus lies in fostering agricultural innovation, promoting education, ensuring better healthcare, and fighting for social equality.
              </p>
              <h3>Our Objectives</h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {["Agricultural Development", "People Development", "Rural Development"].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "15px", fontSize: "1.1rem" }}>
                    <div style={{ backgroundColor: "var(--color-primary-light)", color: "white", padding: "5px", borderRadius: "50%" }}>
                      <Leaf size={16} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="section service-bg">
        <div className="container">
          <div className="section-header reveal-up">
            <h2 className="section-title">Our Programs</h2>
            <p className="section-subtitle">Empowering communities through targeted initiatives and dedicated support across multiple sectors.</p>
          </div>
          <div className="services-grid">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Link href={`/programs/${program.id}`} key={index} className="service-card reveal-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="service-card-img">
                    <div className="service-card-img-wrapper">
                      <img src={program.img} alt={program.title} />
                    </div>
                    <div className="service-icon"><Icon size={24} /></div>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">{program.title}</h3>
                    <p className="service-desc">{program.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Public Support Section */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal-up">
            <h2 className="section-title">Public Support Modes</h2>
            <p className="section-subtitle">Comprehensive support frameworks designed to uplift individuals and communities.</p>
          </div>
          <div className="support-grid">
            {supportCategories.map((item, index) => {
              return (
                <Link href={`/support/${item.id}`} key={index} className="support-item reveal-up" style={{ animationDelay: `${(index % 4) * 0.1}s`, textDecoration: 'none', color: 'inherit' }}>
                  <div className="support-img-wrapper">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="support-content">
                    <div className="support-title">{item.title}</div>
                    <div style={{ color: 'var(--color-primary)' }}><ChevronRight size={20} /></div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="impact-section">
        <div className="container">
          <div className="impact-grid">
            <div className="impact-item reveal-up">
              <div className="impact-number">50,000+</div>
              <div className="impact-label">Farmers Supported</div>
            </div>
            <div className="impact-item reveal-up" style={{ animationDelay: "0.2s" }}>
              <div className="impact-number">1,200</div>
              <div className="impact-label">Villages Reached</div>
            </div>
            <div className="impact-item reveal-up" style={{ animationDelay: "0.4s" }}>
              <div className="impact-number">450+</div>
              <div className="impact-label">Programs Conducted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="contact-wrapper reveal-up">
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p style={{ marginBottom: "2rem", opacity: 0.9 }}>Join our mission to transform rural communities. Reach out to us for collaborations or support.</p>
              
              <div className="contact-detail">
                <Phone />
                <span>+91 952625881</span>
              </div>
              <div className="contact-detail">
                <Mail />
                <span>djmineralspvtltd@gmail.com</span>
              </div>
              <div className="contact-detail">
                <MapPin />
                <span>Sai complex 3rd floor opp Bank of Baroda bank Dharavari thota ongole 523002</span>
              </div>
            </div>
            <div className="contact-form">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-input" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-input" placeholder="Your Phone" />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea className="form-input" rows={4} placeholder="How can we help?"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">
                <Leaf size={24} color="var(--color-primary-light)" />
                APAPDWS
              </div>
              <p style={{ maxWidth: "300px", marginTop: "1rem" }}>
                Empowering farmers, educating youth, and building sustainable rural communities for a brighter tomorrow.
              </p>
            </div>
            <div>
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#programs">Our Programs</a></li>
                <li><a href="#impact">Our Impact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-heading">Our Location</h4>
              <div style={{ width: '100%', height: '200px', borderRadius: '8px', overflow: 'hidden' }}>
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://maps.google.com/maps?q=15.494435,80.048294&hl=en&z=15&output=embed" 
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="APAPDWS Office Location"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="footer-bottom" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <p>&copy; {new Date().getFullYear()} Andhra Pradesh Agricultural & People Development Welfare Society. All rights reserved.</p>
            <p>Made with ❤️ by <a href="https://www.staffarc.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none', transition: 'opacity 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'} onMouseOut={(e) => e.currentTarget.style.opacity = '1'}>StaffArc</a></p>
          </div>
        </div>
      </footer>
    </main>
  );
}
