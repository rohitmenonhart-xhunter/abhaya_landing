import React, { useEffect, useRef, useState } from 'react';
import { Quote, Heart, Star, Shield, BookOpen, Bookmark, ChevronRight, X, ArrowRight } from 'lucide-react';

const HearFromOthers = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [expandedStory, setExpandedStory] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.story-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in-up');
              }, index * 300);
            });
            setIsLoaded(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const stories = [
    {
      id: 1,
      title: "Journey of Healing",
      impactPhrase: "Despite anything that happened, I believed I had a future and took that one step forward.",
      content: "I am a survivor of child sexual abuse. The incident happened when I was 10 years old. A neighbor, someone I should have trusted, violated my innocence. Since then I haven't told anyone about it for almost a decade. It took years for me to process what happened. I'm not sure what was painful, the incident itself, or the trauma that followed. I felt guilty as I began to hate myself. I was no longer the girl I used to be. To survive is to experience the nightmares that feel all too real. Some days become more like hell. I had disturbing thoughts. I tried cutting myself, took pills, and overdosed on medications. He made me believe that I'm weak. I was scared of sleeping, eating, or anything that triggered me to remember that day. I still hold the scars he left on me. I experienced a lot of emotions and doubted my feelings. Despite anything that happened, I believed I had a future and took that one step forward. Overcoming abuse is not a one-day task. It takes time and sharing it with the right person or professionals can aid in the healing process.",
      theme: "Courage & Recovery",
      icon: Heart,
      gradient: "from-pink-500 to-rose-500"
    },
    {
      id: 2,
      title: "Finding Strength",
      impactPhrase: "My sister was awed by my courage - she had also been facing this from him, but couldn't muster up the courage to tell our parents.",
      content: "I was 15. Had completed my matriculation with flying colours and for the first time in my life was made to attend tuitions - for Maths, Physics and Chemistry. While the P & C Sirs were ok, the M one wasn't. He was feeling me all over and one day it crossed a threshold, resulting in me complaining to my parents. My sister was awed by my courage - she had also been facing this from him, but couldn't muster up the courage to tell our parents. Well, I was sent to a different class after that, but what was even worse was my mother saying \"don't behave/dress properly and then complain that he did that and this\" in a completely different context months later. That is weird patriarchy, wouldn't you say - mother to daughter with no man involved? Good for me that my dad never mentioned it ever again, and I didn't have too much respect for my mom. So here I am on the verge of 50, and was able to laugh about the episode when it was recalled to me recently. While I don't believe that any girl can grow up without at least a few such episodes, I do believe that these can impact some severely and scar them for life. Given that the UN predicts we have about 3 centuries to attain gender equality - if the same pace continues that is without any deterioration like what happened during the Covid time - girls have to develop coping mechanisms as an integral part of their survival kit for life. Good Luck!",
      theme: "Resilience & Wisdom",
      icon: Shield,
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      id: 3,
      title: "Breaking the Silence",
      impactPhrase: "For years, I carried the weight of my silence. But the day I spoke up, I began to truly heal.",
      content: "For years, I carried the weight of my silence. But the day I spoke up, I began to truly heal. I was 19 when it happened - a trusted family friend who everyone adored. After the incident, I blamed myself. I questioned what I had done to invite such behavior. The shame kept me quiet for nearly five years, during which I struggled with anxiety, trust issues, and depression. It wasn't until I joined a support group that I realized I wasn't alone. Hearing others share their stories gave me the courage to voice my own. Speaking about my experience was terrifying at first, but with each telling, the burden lightened. Today, I advocate for others who have been silenced by fear and shame. By breaking my silence, I reclaimed my power and found purpose in helping others find their voice. If you're carrying a similar burden, know that your healing begins when you allow yourself to be heard.",
      theme: "Empowerment & Voice",
      icon: BookOpen,
      gradient: "from-amber-500 to-orange-600"
    },
    {
      id: 4,
      title: "Finding My Way Back",
      impactPhrase: "The journey back to myself was the hardest path I've ever walked, but every step was worth taking.",
      content: "The journey back to myself was the hardest path I've ever walked, but every step was worth taking. After the assault in college, I lost my sense of self. I stopped pursuing my passions, withdrew from friends, and lived in a constant state of hypervigilance. For three years, I was a shadow of who I used to be. Recovery wasn't linear - there were days of progress followed by weeks of setbacks. Working with a trauma-informed therapist helped me understand that my reactions were normal responses to an abnormal situation. Gradually, I learned to reconnect with my body through yoga and meditation. I started setting boundaries and recognizing my worth. The breakthrough came when I joined a survivor-led art therapy program. Creating art gave me a language when words failed, allowing me to express and process emotions I had buried deep inside. Today, I'm not just surviving but thriving. The experience will always be part of my story, but it no longer defines me. To anyone still finding their way back: the path is yours to create, and you don't have to walk it alone.",
      theme: "Healing & Transformation",
      icon: Bookmark,
      gradient: "from-teal-500 to-emerald-600"
    }
  ];

  const handleStoryClick = (id: number) => {
    setExpandedStory(id);
    // Scroll to top of page when story is expanded
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeStory = () => {
    setExpandedStory(null);
  };

  // Create modal content for the expanded story
  const renderExpandedStory = () => {
    if (expandedStory === null) return null;
    
    const story = stories.find(s => s.id === expandedStory);
    if (!story) return null;
    
    const IconComponent = story.icon;
    
    return (
      <div className="fixed inset-0 bg-off-black/80 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        <div className="relative w-full max-w-4xl max-h-[90vh] bg-warm-white rounded-3xl shadow-2xl overflow-hidden animate-fade-in">
          <div className="h-2 bg-off-black w-full"></div>
          
          <button 
            onClick={closeStory}
            className="absolute top-4 right-4 w-10 h-10 bg-warm-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-warm-white-200 transition-colors z-10"
          >
            <X className="w-5 h-5 text-off-black" />
          </button>
          
          <div className="p-6 sm:p-10 overflow-y-auto max-h-[calc(90vh-2rem)]">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 bg-off-black rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                <IconComponent className="w-8 h-8 text-warm-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-off-black mb-2 font-serif-title">{story.title}</h3>
                <div className="flex items-center">
                  <Quote className="w-5 h-5 text-off-black-100 mr-2" />
                  <span className="text-off-black-100 font-semibold">{story.theme}</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-off-black rounded-full"></div>
              <div className="pl-8">
                <p className="text-off-black-100 leading-relaxed text-lg mb-8">
                  {story.content}
                </p>
                
                <div className="flex justify-between items-center pt-6 border-t border-warm-white-200">
                  <p className="text-sm text-off-black-200 italic flex items-center">
                    <Heart className="w-4 h-4 text-off-black mr-2" />
                    Shared with courage, hope, and the belief in healing
                  </p>
                  <button 
                    onClick={closeStory} 
                    className="flex items-center gap-2 text-off-black font-semibold hover:text-off-black-100 transition-colors"
                  >
                    Close story
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Modal for expanded story */}
      {renderExpandedStory()}
      
      <section id="stories" ref={sectionRef} className="py-24 bg-warm-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-16 w-80 h-80 bg-warm-white-200 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-20 left-16 w-96 h-96 bg-warm-white-300 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-warm-white-200 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-20 h-20 bg-off-black rounded-3xl flex items-center justify-center shadow-2xl">
                  <Quote className="w-10 h-10 text-warm-white" />
                </div>
                <div className="absolute -top-2 -right-2">
                  <Star className="w-6 h-6 text-warm-white-300 animate-pulse" />
                </div>
              </div>
            </div>
            <h2 className="text-6xl font-bold text-off-black mb-8 font-serif-title">
              Hear from Others
            </h2>
            <p className="text-xl text-off-black-100 max-w-4xl mx-auto leading-relaxed">
              Powerful stories of courage, healing, and hope from survivors who chose to share their journey. 
              These voices remind us that we are not alone and that healing is possible.
            </p>
          </div>

          {/* Stories Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {stories.map((story) => {
              const IconComponent = story.icon;
              return (
                <div
                  key={story.id}
                  className="story-card opacity-0 transform translate-y-10"
                >
                  <div 
                    className="bg-warm-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-warm-white-200 hover:border-off-black-200 cursor-pointer group h-full"
                    onClick={() => handleStoryClick(story.id)}
                  >
                    <div className="h-2 bg-off-black"></div>
                    
                    <div className="p-8">
                      <div className="flex items-start mb-6">
                        <div className="w-14 h-14 bg-off-black rounded-2xl flex items-center justify-center mr-5 shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-7 h-7 text-warm-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-off-black mb-1 font-serif-title">{story.title}</h3>
                          <div className="flex items-center">
                            <Quote className="w-4 h-4 text-off-black-100 mr-2" />
                            <span className="text-off-black-100 font-semibold text-sm">{story.theme}</span>
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute top-0 left-0 w-1 h-full bg-off-black rounded-full"></div>
                        <div className="pl-6">
                          <p className="text-off-black-100 leading-relaxed text-lg italic font-medium">
                            "{story.impactPhrase}"
                          </p>
                          
                          <div className="mt-6 flex items-center">
                            <button className="text-off-black font-semibold flex items-center group-hover:underline">
                              Read full story
                              <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Support Message */}
          <div className="mt-20 text-center">
            <div className="story-card opacity-0 transform translate-y-10">
              <div className="bg-off-black rounded-3xl p-12 text-warm-white shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-6 left-6 w-20 h-20 border border-warm-white/30 rounded-full"></div>
                  <div className="absolute bottom-6 right-6 w-24 h-24 border border-warm-white/30 rounded-full"></div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-6 font-serif-title">Your Story Matters</h3>
                  <p className="text-xl text-warm-white-100 mb-8 max-w-3xl mx-auto">
                    If you're ready to share your story or need support, we're here to listen. 
                    Every voice contributes to our collective healing and strength.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="group bg-warm-white text-off-black hover:bg-warm-white-200 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 transform hover:scale-110 shadow-lg hover:shadow-xl">
                      <span className="flex items-center">
                        Share Your Story
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </button>
                    <button className="group border-2 border-warm-white/80 hover:border-warm-white text-warm-white hover:bg-warm-white/10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500">
                      <span className="flex items-center">
                        Get Support
                        <Heart className="w-5 h-5 ml-2 group-hover:scale-125 transition-transform duration-300" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default HearFromOthers;