import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="home" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full animate-float" style={{
      animationDelay: '1s'
    }}></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-primary/15 rounded-full animate-float" style={{
      animationDelay: '2s'
    }}></div>
      
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in py-[6px]">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-accent rounded-full flex items-center justify-center animate-float">
                <span className="text-sm">✨</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light mb-6">
            Hi, I'm <span className="font-semibold text-primary">Nupur</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            A UI/UX designer from Delhi
          </p>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto">I love to Solve problems through design.</p>
          
          <Button onClick={scrollToAbout} size="lg" className="bg-gradient-primary hover:shadow-soft transition-all duration-300 hover:scale-105">
            Explore My Work
            <ChevronDown className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-primary" />
      </div>
    </section>;
};
export default Hero;