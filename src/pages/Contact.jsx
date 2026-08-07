import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle, ChevronDown, ChevronUp, Sparkles, Clock 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MetaTags from '../components/common/MetaTags';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import ProjectEstimator from '../components/contact/ProjectEstimator';
import { companyInfo } from '../data/companyInfo';
import { faqsData } from '../data/faqsData';
import { submitContactForm } from '../services/contactService';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'mobile-app-development',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleApplyEstimate = (scopeSummary) => {
    setFormData((prev) => ({
      ...prev,
      message: scopeSummary
    }));
    const formEl = document.getElementById('contact-form-section');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormErrors({});

    try {
      const result = await submitContactForm(formData);
      setSubmitResult(result);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: 'mobile-app-development',
        message: ''
      });
    } catch (err) {
      if (err.status === 'validation_error') {
        setFormErrors(err.errors);
      } else {
        setFormErrors({ general: 'Something went wrong. Please try calling us directly.' });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <MetaTags
        title="Contact BindaTech | Start Your Software Project"
        description="Get in touch with BindaTech in Kolkata, West Bengal. Call +91 8944935356 or email info@bindatech.com to discuss mobile app, web, or SaaS product development."
      />

      {/* Hero Header */}
      <section className="py-12 lg:py-16 relative">
        <Container size="lg">
          <SectionHeading
            badge="Get In Touch"
            title="Tell Us What You're Building."
            titleGradient="Let's Build It Together."
            subtitle="Whether you need a mobile app, complex web platform, or SaaS architecture, our team in Kolkata is ready to discuss your project."
          />
        </Container>
      </section>

      {/* Contact Form & Details Section */}
      <section className="pb-20 relative">
        <Container size="lg">
          
          {/* Interactive Instant Scope & Timeline Builder */}
          <ProjectEstimator onApplyEstimate={handleApplyEstimate} />

          <div id="contact-form-section" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start scroll-mt-24">
            
            {/* Left Column: Direct Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 space-y-8"
            >
              <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-2xl space-y-6">
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">BindaTech Headquarters</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Based in Kolkata, we engineer digital products for businesses across India and global markets.
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-800">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Location</div>
                      <div className="text-sm font-bold text-white mt-0.5">{companyInfo.address.full}</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Direct Phone</div>
                      <a href={`tel:${companyInfo.phone}`} className="text-sm font-bold text-white hover:text-cyan-400 transition-colors mt-0.5 block">
                        {companyInfo.formattedPhone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Direct Email</div>
                      <a href={`mailto:${companyInfo.email}`} className="text-sm font-bold text-white hover:text-purple-400 transition-colors mt-0.5 block">
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center space-x-3 text-xs text-emerald-300">
                  <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Response Time: Typically within 24 business hours.</span>
                </div>

              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl shadow-2xl">
                
                <AnimatePresence mode="wait">
                  {submitResult ? (
                    /* Success Banner */
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="space-y-6 text-center py-8"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-glow-sm">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-white">Project Inquiry Received!</h3>
                        <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                          {submitResult.message}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-400 inline-block">
                        Reference ID: <span className="text-emerald-400 font-bold">{submitResult.referenceId}</span>
                      </div>

                      <div className="pt-4">
                        <Button onClick={() => setSubmitResult(null)} variant="secondary" size="md" icon={false}>
                          Submit Another Inquiry
                        </Button>
                      </div>
                    </motion.div>
                  ) : (
                    /* Form */
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit} 
                      className="space-y-6"
                    >
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold text-white">Start Your Project Consultation</h3>
                        <p className="text-xs text-slate-400">Fill in the details below and we will contact you promptly.</p>
                      </div>

                      {formErrors.general && (
                        <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-400 flex items-center space-x-2">
                          <AlertCircle className="w-4 h-4 flex-shrink-0" />
                          <span>{formErrors.general}</span>
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Name */}
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-xs font-semibold text-slate-300">
                            Full Name <span className="text-rose-400">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g. Rahul Sharma"
                            className={`w-full px-4 py-3 rounded-xl text-sm glass-input transition-all ${
                              formErrors.name ? 'border-rose-500 focus:border-rose-500' : ''
                            }`}
                          />
                          {formErrors.name && (
                            <p className="text-[11px] text-rose-400 mt-1">{formErrors.name}</p>
                          )}
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-xs font-semibold text-slate-300">
                            Email Address <span className="text-rose-400">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="e.g. rahul@company.com"
                            className={`w-full px-4 py-3 rounded-xl text-sm glass-input transition-all ${
                              formErrors.email ? 'border-rose-500 focus:border-rose-500' : ''
                            }`}
                          />
                          {formErrors.email && (
                            <p className="text-[11px] text-rose-400 mt-1">{formErrors.email}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Phone */}
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-xs font-semibold text-slate-300">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="e.g. 8944935356"
                            className={`w-full px-4 py-3 rounded-xl text-sm glass-input transition-all ${
                              formErrors.phone ? 'border-rose-500 focus:border-rose-500' : ''
                            }`}
                          />
                          {formErrors.phone && (
                            <p className="text-[11px] text-rose-400 mt-1">{formErrors.phone}</p>
                          )}
                        </div>

                        {/* Company */}
                        <div className="space-y-2">
                          <label htmlFor="company" className="text-xs font-semibold text-slate-300">
                            Company / Organization
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="e.g. Sharma Tech Corp"
                            className="w-full px-4 py-3 rounded-xl text-sm glass-input transition-all"
                          />
                        </div>
                      </div>

                      {/* Service Selection */}
                      <div className="space-y-2">
                        <label htmlFor="service" className="text-xs font-semibold text-slate-300">
                          Primary Service Requirement <span className="text-rose-400">*</span>
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl text-sm glass-input transition-all bg-slate-900"
                        >
                          <option value="mobile-app-development">Mobile App Development (Android & iOS)</option>
                          <option value="web-application-development">Web Application Development</option>
                          <option value="website-development">Corporate Website & Landing Page</option>
                          <option value="saas-product-development">SaaS Product Engineering</option>
                          <option value="custom-software-development">Custom Software Development</option>
                          <option value="ui-ux-design">UI/UX Interface Design</option>
                        </select>
                      </div>

                      {/* Message Details */}
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-xs font-semibold text-slate-300">
                          Project Overview & Key Goals <span className="text-rose-400">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Describe what you want to build, target audience, key features, and timeline goals..."
                          className={`w-full px-4 py-3 rounded-xl text-sm glass-input transition-all resize-none ${
                            formErrors.message ? 'border-rose-500 focus:border-rose-500' : ''
                          }`}
                        />
                        {formErrors.message && (
                          <p className="text-[11px] text-rose-400 mt-1">{formErrors.message}</p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center space-x-2 disabled:opacity-50 active:scale-98"
                      >
                        {isSubmitting ? (
                          <span>Submitting Request...</span>
                        ) : (
                          <>
                            <span>Submit Project Request</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>

              </div>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 bg-slate-950/80 border-t border-slate-900 relative">
        <Container size="md">
          <SectionHeading
            badge="Got Questions?"
            title="Frequently Asked"
            titleGradient="Questions"
            subtitle="Clear answers about our development workflow, technologies, and engagement models."
          />

          <div className="space-y-4">
            {faqsData.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-slate-900/60 border border-slate-800 transition-colors overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
                  >
                    <span className="text-base font-bold text-white">{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />
                    )}
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
