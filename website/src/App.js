import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero animate-on-scroll">
        <div className="hero-card">
          <img src="/Vector.png" alt="Hero" className="hero-image" />
          
          {/* Navigation */}
          <nav className="hero-nav">
            <div className="nav-left">
              <div className="logo">
                <span className="logo-main">Care Navigation</span>
                <div className="logo-divider"></div>
                <span className="logo-sub">Advocates</span>
              </div>
              <ul className="nav-menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#blogs">Blogs</a></li>
              </ul>
            </div>
            <div className="nav-right">
              <button className="btn btn-download">
                <span>Download App</span>
                <div className="btn-icon-circle">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12L10 8L6 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
            </div>
          </nav>

          {/* Two Column Content */}
          <div className="hero-content-grid">
            <div className="hero-content-left">
              <div className="hero-badge">
                <span className="badge-dot"></span>
                Your #1 Care Partner
              </div>
              <h1 className="hero-main-title">
                One App for Every Step of Your <span className="hero-highlight">Health Journey.</span>
              </h1>
              <p className="hero-description">
                Check symptoms, upload reports, manage prescriptions, get AI-powered guidance, and even talk to real experts — Care keeps you and your family's health organized, understood, and on track.
              </p>
              <button className="btn-hero-cta">
                <span>Get Early Access</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="hero-content-right">
              <img src="/Union.png" alt="Healthcare" className="hero-right-image" />
            </div>
          </div>
        </div>
      </section>

          {/* What Is Care Section */}
          <section className="what-is-care animate-on-scroll">
        <div className="what-is-care-container">
          <div className="what-is-care-left">
            <img src="/smartcontainer.png" alt="Smart Health" className="smart-container-image" />
          </div>
          <div className="what-is-care-right">
            <div className="section-badge">
              <img src="/Vector (1).png" alt="Icon" className="badge-image" />
              <span>What Is Care?</span>
            </div>
            <h2 className="section-title">Smarter Health <span className="accent-text">Decisions,</span> Every Day.</h2>
            <p className="section-description">
              Get clear, AI-powered insights into your symptoms, lab reports, and medications. 
              Care helps you understand what's happening in your body, what to do next, and how 
              to stay one step ahead of your health.
            </p>
            <button className="btn-section-cta">
              <span>Explore Features</span>
              <div className="btn-icon-circle-section">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>

          {/* About Smart Care Navigation Section */}
          <section className="smart-care-nav animate-on-scroll">
        <div className="smart-care-container">
          <div className="smart-care-left">
            <div className="section-badge">
              <span className="badge-emoji">🧭</span>
              <span>About Smart Care Navigation</span>
            </div>
            <h2 className="section-title"><span className="accent-text">Empowering</span> You to Make the Right Health Choices — Instantly.</h2>
            <p className="section-description">
              Care's intelligent health navigator combines trusted medical knowledge, real-time AI guidance, 
              and human assistance — helping you understand symptoms, find the right care, and act faster 
              with confidence.
            </p>
            <div className="key-points">
              <div className="key-point">
                <span className="check-icon">✓</span>
                <span>AI-powered symptom triage & condition guidance</span>
              </div>
              <div className="key-point">
                <span className="check-icon">✓</span>
                <span>Live chat or call with care agents & doctors</span>
              </div>
              <div className="key-point">
                <span className="check-icon">✓</span>
                <span>Personalized next steps: home care, GP visit, or ER</span>
              </div>
              <div className="key-point">
                <span className="check-icon">✓</span>
                <span>Transparent insurance insights with simple explanations</span>
              </div>
            </div>
          </div>
          <div className="smart-care-right">
            <img src="/Union (1).png" alt="Smart Care Navigation" className="smart-care-image" />
          </div>
        </div>
      </section>

          {/* About Lab & Reports Section */}
          <section className="lab-reports animate-on-scroll">
            <div className="lab-reports-container">
              <div className="lab-reports-left">
                <img src="/Vector (2).png" alt="Lab Reports" className="lab-report-image" />
              </div>
              <div className="lab-reports-right">
                <div className="section-badge">
                  <span className="badge-emoji">🧾</span>
                  <span>About Smart Lab Insights</span>
                </div>
                <h2 className="section-title">Understand Your Lab Results in <span className="accent-text">Plain, Simple</span> Language.</h2>
                <p className="section-description">
                  Upload any medical report — and Care instantly decodes your results, highlights what's normal
                  or concerning, and gives you a clear summary of what it means for your health. No more medical
                  jargon, just real understanding.
                </p>
                <div className="key-points">
                  <div className="key-point">
                    <span className="check-icon">✓</span>
                    <span>AI extraction from PDFs or photos of lab reports</span>
                  </div>
                  <div className="key-point">
                    <span className="check-icon">✓</span>
                    <span>Easy-to-read charts and personalized result summaries</span>
                  </div>
                  <div className="key-point">
                    <span className="check-icon">✓</span>
                    <span>Follow-up recommendations based on test trends</span>
                  </div>
                  <div className="key-point">
                    <span className="check-icon">✓</span>
                    <span>Secure storage in your private medical locker</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="services-section animate-on-scroll">
            <div className="services-container">
              <div className="section-badge services-badge">
                <span className="badge-emoji">🧩</span>
                <span>Services</span>
              </div>
              <h2 className="section-title services-title">Explore Our Range of <span className="accent-text">Smart Health</span> & Wellness Features</h2>
              <p className="section-description services-description">
                We bring together intelligent health tools, expert guidance, and connected care experiences — empowering you to manage, understand, and improve your health every day.
              </p>
              
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-icon">
                    <img src="/smartcare.png" alt="Smart Care" className="service-icon-img" />
                  </div>
                  <h3 className="service-title">Smart Care Navigation</h3>
                  <p className="service-description">
                    From symptoms to insurance questions, our AI-powered navigator helps you find clear answers, suggests next steps, and connects you with real doctors when needed — all in one seamless chat.
                  </p>
                  <a href="#learn-more" className="service-link">
                    Learn More <span className="arrow">→</span>
                  </a>
                </div>

                <div className="service-card">
                  <div className="service-icon">
                    <img src="/lab.png" alt="Lab Reports" className="service-icon-img" />
                  </div>
                  <h3 className="service-title">Lab Reports & Insights</h3>
                  <p className="service-description">
                    Upload your test results or prescriptions and get easy-to-read explanations, personalized health trends, and secure storage for all your records — powered by AI precision.
                  </p>
                  <a href="#learn-more" className="service-link">
                    Learn More <span className="arrow">→</span>
                  </a>
                </div>

                <div className="service-card">
                  <div className="service-icon">
                    <img src="/medicalton.png" alt="Medication" className="service-icon-img" />
                  </div>
                  <h3 className="service-title">Medication & Wellness Management</h3>
                  <p className="service-description">
                    Stay consistent with your medications and habits through reminders, refill alerts, and daily wellness nudges that keep your health on track, every single day.
                  </p>
                  <a href="#learn-more" className="service-link">
                    Learn More <span className="arrow">→</span>
                  </a>
                </div>

                <div className="service-card insurance-card">
                  <div className="insurance-content">
                    <div className="insurance-icon">
                      <img src="/Vector.png" alt="Insurance" className="insurance-icon-img" />
                    </div>
                    <h3 className="insurance-title">Insurance Clarity Made Simple</h3>
                    <p className="insurance-description">
                      Understand your coverage, benefits, and claims instantly — no confusion, just clear answers.
                    </p>
                    <button className="btn-download-insurance">
                      <span>Download App</span>
                      <div className="btn-icon-circle">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Provider & Practice Tools Section */}
          <section className="provider-section animate-on-scroll">
            <div className="provider-container">
              <div className="provider-content-left">
                <div className="section-badge">
                  <span className="badge-emoji">🧩</span>
                  <span>For Healthcare Professionals</span>
                </div>
                <h2 className="section-title provider-title">Empower Your Practice With <span className="accent-text-yellow">Intelligent Care Tools.</span></h2>
                <p className="section-description provider-description">
                  Care's provider dashboard helps clinics, doctors, and care managers work smarter — from managing patient data to getting real-time AI insights and automating follow-ups for better outcomes.
                </p>

                <div className="feature-tiles">
                  <div className="feature-tile">
                    <div className="feature-header">
                      <div className="feature-icon-box">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                        </svg>
                      </div>
                      <h4 className="feature-title">Smart Patient Records</h4>
                    </div>
                    <p className="feature-text">
                      Centralize all patient data — lab results, prescriptions, notes, and history — in one HIPAA-secure dashboard powered by AI tagging and quick search.
                    </p>
                  </div>

                  <div className="feature-tile">
                    <div className="feature-header">
                      <div className="feature-icon-box">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                      </div>
                      <h4 className="feature-title">Automated Treatment Tracking</h4>
                    </div>
                    <p className="feature-text">
                      Get instant reminders for follow-ups, missed appointments, and recommended screenings to ensure continuous patient care.
                    </p>
                  </div>

                  <div className="feature-tile">
                    <div className="feature-header">
                      <div className="feature-icon-box">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                          <line x1="12" y1="22.08" x2="12" y2="12"></line>
                        </svg>
                      </div>
                      <h4 className="feature-title">AI Clinical Insights</h4>
                    </div>
                    <p className="feature-text">
                      Leverage AI to highlight abnormal test results, detect trends, and suggest next-step diagnostics before symptoms escalate.
                    </p>
                  </div>

                  <div className="feature-tile">
                    <div className="feature-header">
                      <div className="feature-icon-box">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                      </div>
                      <h4 className="feature-title">Unified Communication Hub</h4>
                    </div>
                    <p className="feature-text">
                      Chat or video-call patients, share reports securely, and track all interactions inside a single, compliant workspace.
                    </p>
                  </div>
                </div>
              </div>

              <div className="provider-content-right">
                <img src="/Image Container.png" alt="Provider Dashboard" className="provider-image" />
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="faq-section animate-on-scroll">
            <div className="faq-container">
              <div className="section-badge faq-badge">
                <span className="badge-emoji">❓</span>
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="section-title faq-title">Got Questions? <span className="accent-text">We've Got Answers.</span></h2>
              
              <div className="faq-accordion">
                <div className={`faq-item ${activeAccordion === 0 ? 'active' : ''}`}>
                  <button className="faq-question" onClick={() => toggleAccordion(0)}>
                    <span>What makes Care different from other health apps?</span>
                    <svg className="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  <div className="faq-answer">
                    <p>Care goes beyond tracking — it combines AI-powered medical insights, human support, and personalized guidance. You can ask questions, upload reports, manage medications, and even talk to real doctors — all in one place.</p>
                  </div>
                </div>

                <div className={`faq-item ${activeAccordion === 1 ? 'active' : ''}`}>
                  <button className="faq-question" onClick={() => toggleAccordion(1)}>
                    <span>Is my medical data safe and private?</span>
                    <svg className="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  <div className="faq-answer">
                    <p>Absolutely. All your information is encrypted and stored securely in compliance with HIPAA standards. Only you (and providers you choose to share with) can access your data.</p>
                  </div>
                </div>

                <div className={`faq-item ${activeAccordion === 2 ? 'active' : ''}`}>
                  <button className="faq-question" onClick={() => toggleAccordion(2)}>
                    <span>Can Care replace my doctor?</span>
                    <svg className="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  <div className="faq-answer">
                    <p>No — Care is designed to assist, not replace. It provides reliable insights, symptom triage, and second-opinion guidance, helping you make informed decisions before and after seeing a healthcare professional.</p>
                  </div>
                </div>

                <div className={`faq-item ${activeAccordion === 3 ? 'active' : ''}`}>
                  <button className="faq-question" onClick={() => toggleAccordion(3)}>
                    <span>What can I do with my lab reports inside Care?</span>
                    <svg className="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  <div className="faq-answer">
                    <p>You can upload any PDF or photo of a lab report, and Care's AI will extract key details, explain them in plain English, show visual charts, and suggest recommended follow-ups.</p>
                  </div>
                </div>

                <div className={`faq-item ${activeAccordion === 4 ? 'active' : ''}`}>
                  <button className="faq-question" onClick={() => toggleAccordion(4)}>
                    <span>How does the AI understand my health questions?</span>
                    <svg className="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  <div className="faq-answer">
                    <p>Care's AI is trained on trusted medical data and verified sources. It interprets natural language questions and delivers evidence-based answers — with citations and the option to connect to human experts when needed.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cta-section animate-on-scroll">
            <div className="cta-card">
              <img src="/Vector.png" alt="CTA Background" className="cta-bg-image" />
              <div className="cta-content">
                <div className="cta-icon-circle">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="cta-title">Healthcare Solutions for everyone</h2>
                <p className="cta-description">
                  We provide reliable healthcare services, expert guidance, and digital solutions designed to support your wellness journey.
                </p>
                <button className="btn-cta-explore">
                  <span>Explore App</span>
                  <div className="btn-icon-circle">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="footer">
            <div className="footer-container">
              <div className="footer-top">
                <div className="footer-column">
                  <h3 className="footer-logo">
                    <span className="footer-logo-main">Care Navigation</span>
                    <div className="footer-logo-divider"></div>
                    <span className="footer-logo-sub">Advocates</span>
                  </h3>
                  <p className="footer-tagline">
                    Your trusted health companion for smarter decisions and better care.
                  </p>
                  <div className="footer-social">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z"/>
                      </svg>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="footer-column">
                  <h4 className="footer-heading">Product</h4>
                  <ul className="footer-links">
                    <li><a href="#features">Features</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#how-it-works">How It Works</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                  </ul>
                </div>

                <div className="footer-column">
                  <h4 className="footer-heading">Company</h4>
                  <ul className="footer-links">
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#careers">Careers</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                  </ul>
                </div>

                <div className="footer-column">
                  <h4 className="footer-heading">Resources</h4>
                  <ul className="footer-links">
                    <li><a href="#help">Help Center</a></li>
                    <li><a href="#privacy">Privacy Policy</a></li>
                    <li><a href="#terms">Terms of Service</a></li>
                    <li><a href="#security">Security</a></li>
                  </ul>
                </div>

                <div className="footer-column">
                  <h4 className="footer-heading">Stay Updated</h4>
                  <p className="footer-newsletter-text">Subscribe to our newsletter for health tips and updates.</p>
                  <form className="footer-newsletter">
                    <input type="email" placeholder="Enter your email" className="newsletter-input" />
                    <button type="submit" className="newsletter-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </button>
                  </form>
                </div>
              </div>

              <div className="footer-bottom">
                <p className="footer-copyright">
                  © 2024 Care Navigates. All rights reserved.
                </p>
                <div className="footer-bottom-links">
                  <a href="#privacy">Privacy</a>
                  <a href="#terms">Terms</a>
                  <a href="#cookies">Cookies</a>
                </div>
              </div>
            </div>
          </footer>
    </div>
  );
}

export default App;

