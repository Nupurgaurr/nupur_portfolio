import { GraduationCap, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              About <span className="font-semibold text-primary">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground/80">
                Hey there, I'm Nupur, a UI/UX designer from Delhi. I love solving problems 
                through thoughtful and user-focused design. Currently, I'm pursuing B.Tech 
                at IP University, BVCOE, and sharpening my skills in design and front-end 
                development.
              </p>
              
              
            </div>
            
            <div className="space-y-6">
              <div className="card-soft bg-secondary p-6 rounded-2xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Education</h3>
                    <p className="text-muted-foreground">2024 - 2028</p>
                  </div>
                </div>
                <p className="text-foreground/80">
                  B.Tech at Bharati Vidyapeeth's College of Engineering (BVCOE)
                  <br />
                  IP University, Delhi
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;