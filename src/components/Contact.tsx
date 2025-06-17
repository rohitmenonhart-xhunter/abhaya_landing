import React, { useEffect, useRef, useState, FormEvent } from 'react';
import { MapPin, Mail, Phone, Instagram, Facebook, Twitter, Send, Sparkles } from 'lucide-react';
import { handleFormSubmit } from '../utils/formUtils';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with a delay
    setTimeout(() => {
      console.log('Form submitted with data:', formData);
      setIsSubmitting(false);
      setShowConfirmation(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Hide confirmation after 3 seconds
      setTimeout(() => {
        setShowConfirmation(false);
      }, 3000);
    }, 1500);
  };

  const handleSocialMediaClick = (platform: string) => {
    // In a real app, these would link to actual social media profiles
    console.log(`Clicked on ${platform} social media link`);
    
    // Simulate opening social media in a new tab
    window.open(`https://www.${platform}.com/abhaya`, '_blank');
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = "mailto:abhayacares@gmail.com";
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-warm-white opacity-0 transform translate-y-10 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-warm-white-200 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-warm-white-300 rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Form submission confirmation */}
      {showConfirmation && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-off-black text-warm-white px-6 py-4 rounded-xl shadow-2xl z-50 animate-fade-in flex items-center">
          <Send className="w-5 h-5 mr-3 text-warm-white" />
          <p>Thank you! Your message has been sent successfully.</p>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-off-black rounded-3xl flex items-center justify-center shadow-2xl">
                <Send className="w-10 h-10 text-warm-white" />
              </div>
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-6 h-6 text-warm-white-300 animate-pulse" />
              </div>
            </div>
          </div>
          <h2 className="text-6xl font-bold text-off-black mb-8 font-serif-title">
            Contact Us
          </h2>
          <p className="text-xl text-off-black-100 max-w-4xl mx-auto">
            Reach out to us for support, guidance, or to get involved in our mission. 
            We're here to listen and help in any way we can.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Enhanced Contact Information */}
          <div className="space-y-8">
            <div className="group bg-warm-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-warm-white-200 hover:border-off-black-200 transform hover:-translate-y-2">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-off-black rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-warm-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-off-black mb-4 font-serif-title">Our Location</h3>
                  <p className="text-off-black-100 leading-relaxed text-lg">
                    Shera Square<br />
                    212, Choolaimedu High Road<br />
                    Choolaimedu, Near Lotus Beauty Parlour<br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-warm-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-warm-white-200 hover:border-off-black-200 transform hover:-translate-y-2">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-off-black rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-warm-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-off-black mb-4 font-serif-title">Email Us</h3>
                  <p className="text-off-black-100 text-lg">
                    <a 
                      href="mailto:abhayacares@gmail.com" 
                      onClick={handleEmailClick}
                      className="hover:text-off-black transition-colors font-medium"
                    >
                      abhayacares@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-warm-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-warm-white-200 hover:border-off-black-200">
              <h3 className="text-2xl font-semibold text-off-black mb-6 font-serif-title">Follow Us</h3>
              <div className="flex space-x-4">
                <button 
                  onClick={() => handleSocialMediaClick('instagram')}
                  className="group w-16 h-16 bg-off-black rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Instagram className="w-8 h-8 text-warm-white group-hover:scale-110 transition-transform duration-300" />
                </button>
                <button 
                  onClick={() => handleSocialMediaClick('facebook')}
                  className="group w-16 h-16 bg-off-black rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Facebook className="w-8 h-8 text-warm-white group-hover:scale-110 transition-transform duration-300" />
                </button>
                <button 
                  onClick={() => handleSocialMediaClick('twitter')}
                  className="group w-16 h-16 bg-off-black rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Twitter className="w-8 h-8 text-warm-white group-hover:scale-110 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="bg-warm-white rounded-3xl p-10 shadow-2xl border border-warm-white-200">
            <h3 className="text-3xl font-bold text-off-black mb-8 font-serif-title">Send us a Message</h3>
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-off-black-100 mb-3">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 border border-warm-white-300 rounded-2xl focus:ring-2 focus:ring-off-black focus:border-transparent transition-all duration-300 text-lg bg-warm-white"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-off-black-100 mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 border border-warm-white-300 rounded-2xl focus:ring-2 focus:ring-off-black focus:border-transparent transition-all duration-300 text-lg bg-warm-white"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-off-black-100 mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 border border-warm-white-300 rounded-2xl focus:ring-2 focus:ring-off-black focus:border-transparent transition-all duration-300 text-lg bg-warm-white"
                  placeholder="What's this about?"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-off-black-100 mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-6 py-4 border border-warm-white-300 rounded-2xl focus:ring-2 focus:ring-off-black focus:border-transparent transition-all duration-300 resize-none text-lg bg-warm-white"
                  placeholder="Share your thoughts or questions..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full bg-off-black hover:bg-off-black-100 text-warm-white py-5 px-8 rounded-2xl font-semibold text-lg transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;