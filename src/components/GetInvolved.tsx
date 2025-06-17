import React, { useEffect, useRef } from 'react';
import { Sparkles, Star, HandHeart, Calendar, Mail, MapPin } from 'lucide-react';

const GetInvolved = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // On dedicated page, we want the component to be visible immediately
    if (sectionRef.current && window.location.pathname === '/get-involved') {
      sectionRef.current.classList.add('animate-fade-in');
      sectionRef.current.style.opacity = '1';
      sectionRef.current.style.transform = 'translateY(0)';
    } else {
      // On homepage, we use intersection observer for animations
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
    }
  }, []);

  return (
    <section id="get-involved" ref={sectionRef} className="py-24 bg-warm-white opacity-0 transform translate-y-10 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-warm-white-200 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-warm-white-300 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-warm-white-200 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-off-black rounded-3xl flex items-center justify-center shadow-2xl">
                <HandHeart className="w-10 h-10 text-warm-white" />
              </div>
              <div className="absolute -top-2 -right-2">
                <Star className="w-6 h-6 text-warm-white-300 animate-pulse" />
              </div>
            </div>
          </div>
          <h2 className="text-6xl font-bold text-off-black mb-8 font-serif-title">
            Get Involved
          </h2>
        </div>

        {/* Get Involved Grid */}
        <div className="grid gap-12 lg:gap-16">
          {/* Volunteer Section */}
          <div className="service-card opacity-0 transform translate-y-10 animate-fade-in">
            <div className="bg-warm-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-warm-white-200 hover:border-off-black-200">
              <div className="h-2 bg-off-black w-full"></div>
              
              <div className="p-10">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-off-black rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <HandHeart className="w-8 h-8 text-warm-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-off-black mb-2 font-serif-title">VOLUNTEER</h3>
                    <div className="flex items-center">
                      <Sparkles className="w-4 h-4 text-off-black-100 mr-2" />
                      <span className="text-off-black-100 font-medium">Be the change</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative mb-8">
                  <div className="absolute top-0 left-0 w-1 h-full bg-off-black rounded-full"></div>
                  <div className="pl-8">
                    <p className="text-off-black-100 leading-relaxed text-lg mb-6">
                      Dedicated volunteers like you are the backbone of our mission. Your commitment is vital, and we look forward to welcoming more like-minded individuals to our volunteer family. ABHAYA cannot succeed without you - our untiring and committed volunteers.
                    </p>
                    <div className="bg-warm-white-200 p-4 rounded-xl border border-warm-white-300">
                      <p className="text-off-black font-medium">G-Form link</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <button className="group bg-off-black hover:bg-off-black-100 text-warm-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl shadow-lg">
                    <span className="flex items-center">
                      Join Our Volunteers
                      <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Events Section */}
          <div className="service-card opacity-0 transform translate-y-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-warm-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-warm-white-200 hover:border-off-black-200">
              <div className="h-2 bg-off-black w-full"></div>
              
              <div className="p-10">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-off-black rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <Calendar className="w-8 h-8 text-warm-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-off-black mb-2 font-serif-title">EVENTS</h3>
                    <div className="flex items-center">
                      <Sparkles className="w-4 h-4 text-off-black-100 mr-2" />
                      <span className="text-off-black-100 font-medium">Education & empowerment</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative mb-8">
                  <div className="absolute top-0 left-0 w-1 h-full bg-off-black rounded-full"></div>
                  <div className="pl-8">
                    <p className="text-off-black-100 leading-relaxed text-lg mb-6">
                      We organize dynamic and interactive events within schools and colleges to actively promote gender education. These events are designed to engage students in meaningful discussions, activities, and awareness campaigns that foster a deeper understanding of gender equality and inclusivity. Through thought-provoking presentations, workshops, and engaging initiatives, we aim to empower students with the knowledge and skills needed to contribute positively to creating a more equitable and inclusive society. Join us in breaking barriers, challenging stereotypes, and building a future where everyone has equal opportunities, regardless of gender.
                    </p>
                    <div className="bg-warm-white-200 p-4 rounded-xl border border-warm-white-300">
                      <p className="text-off-black font-medium">G-Form link</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <button className="group bg-off-black hover:bg-off-black-100 text-warm-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl shadow-lg">
                    <span className="flex items-center">
                      Attend Our Events
                      <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="service-card opacity-0 transform translate-y-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-warm-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-warm-white-200 hover:border-off-black-200">
              <div className="h-2 bg-off-black w-full"></div>
              
              <div className="p-10">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-off-black rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <Mail className="w-8 h-8 text-warm-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-off-black mb-2 font-serif-title">CONTACT US</h3>
                    <div className="flex items-center">
                      <Sparkles className="w-4 h-4 text-off-black-100 mr-2" />
                      <span className="text-off-black-100 font-medium">Reach out to us</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative mb-8">
                  <div className="absolute top-0 left-0 w-1 h-full bg-off-black rounded-full"></div>
                  <div className="pl-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-start mb-4">
                          <MapPin className="w-5 h-5 text-off-black mr-2 flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-off-black-100 leading-relaxed">
                              Shera Square<br />
                              212, Choolaimedu High Road<br />
                              Choolaimedu, Near Lotus Beauty Parlour<br />
                              Tamil Nadu, India
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-start mb-4">
                          <Mail className="w-5 h-5 text-off-black mr-2 flex-shrink-0 mt-1" />
                          <a href="mailto:abhayacares@gmail.com" className="text-off-black hover:text-off-black-100 transition-colors">
                            abhayacares@gmail.com
                          </a>
                        </div>
                        
                        <p className="text-off-black font-medium mt-4">Follow us</p>
                        <p className="text-off-black-200 text-sm mt-1">All rights reserved</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <button className="group bg-off-black hover:bg-off-black-100 text-warm-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl shadow-lg">
                    <span className="flex items-center">
                      Contact Us
                      <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved; 