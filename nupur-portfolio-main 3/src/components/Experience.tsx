import { Briefcase, Calendar, Award } from 'lucide-react';
const Experience = () => {
  return <section id="experience" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              My <span className="font-semibold text-primary">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">
              Building experience through impactful design projects and leadership roles.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
            
            <div className="space-y-12">
              <div className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-card shadow-soft"></div>
                
                <div className="ml-16 card-soft bg-secondary p-6 rounded-2xl">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl text-foreground">Design Head</h3>
                      <p className="text-primary font-medium">[Avijo]</p>
                    </div>
                    <div className="ml-auto flex items-center space-x-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">March - April 2025</span>
                    </div>
                  </div>
                  
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Led UI/UX design projects as the primary design intern, working on 
                    user-centered solutions and collaborating with cross-functional teams 
                    to deliver impactful design solutions.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {['UI/UX Design', 'Team Leadership', 'Prototyping', 'User Research'].map(skill => <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {skill}
                      </span>)}
                  </div>
                </div>
              </div>
              
              <div className="relative flex items-start">
                
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Experience;