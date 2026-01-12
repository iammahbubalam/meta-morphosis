"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { testimonialsData } from "@/lib/data";
import { ChevronLeft, ChevronRight, Play, Pause, ArrowRight } from "lucide-react";

export default function SuccessStories() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = 400; // Approx card width + gap
      const newScrollLeft = direction === "left" 
        ? containerRef.current.scrollLeft - scrollAmount
        : containerRef.current.scrollLeft + scrollAmount;
      
      containerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-32 bg-void relative overflow-hidden">
      <div className="container mx-auto px-6 mb-16 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
           <h2 className="text-3xl md:text-5xl font-bold mb-4">{testimonialsData.heading}</h2>
           <p className="text-xl text-gray-400 max-w-2xl">{testimonialsData.subheading}</p>
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex gap-4">
            <button 
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all active:scale-95"
            >
                <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all active:scale-95"
            >
                <ChevronRight size={24} />
            </button>
        </div>
      </div>

      {/* Video Carousel - Manual Horizontal Scroll with hidden scrollbar */}
      <div 
        ref={containerRef}
        className="relative w-full overflow-x-auto pb-8 hide-scrollbar cursor-grab active:cursor-grabbing snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
      >
        <div className="flex gap-8 px-6 w-max min-w-full">
          {testimonialsData.items.map((story) => (
             <div key={story.id} className="snap-center">
               <VideoCard story={story} />
             </div>
          ))}
          {/* Duplicate strictly for feeling full */}
          {testimonialsData.items.map((story) => (
             <div key={`dup-${story.id}`} className="snap-center">
                <VideoCard story={story} />
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoCard({ story }: { story: any }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div 
      className="relative w-[300px] md:w-[400px] h-[500px] md:h-[600px] rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 group cursor-pointer"
      onHoverStart={() => {
        setIsPlaying(true); 
        videoRef.current?.play();
      }}
      onHoverEnd={() => {
        setIsPlaying(false);
        videoRef.current?.pause();
        if(videoRef.current) videoRef.current.currentTime = 0;
      }}
      onClick={togglePlay}
    >
       {/* Video Placeholder / Actual Video */}
       <div className="absolute inset-0 bg-neutral-800">
         {/* 
           Using a static div with a gradient for now as placeholders are not real. 
           In production, uncomment video tag and ensure valid sources.
         */}
         <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900" />
         
         {/* 
         <video 
           ref={videoRef}
           src={story.video} 
           poster={story.poster}
           className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
           playsInline
           loop
           muted
         /> 
         */}
       </div>

       {/* Overlay Content */}
       <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent p-8 flex flex-col justify-end">
          
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full border border-gold-500/50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    {isPlaying ? <Pause size={20} className="text-gold-500" /> : <Play size={20} className="text-gold-500 ml-1" />}
                </div>
                <div>
                   <h3 className="text-lg font-bold text-white leading-tight">{story.author}</h3>
                   <p className="text-xs text-gold-500 font-medium">{story.role}</p>
                </div>
            </div>

            <p className="text-white text-lg font-medium italic mb-6">"{story.quote}"</p>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/20 text-gold-500 text-sm font-bold border border-gold-500/30">
               {story.stat} <ArrowRight size={14} />
            </div>
          </div>
       </div>
    </motion.div>
  );
}
