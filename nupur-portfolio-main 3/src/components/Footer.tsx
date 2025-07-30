import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-muted-foreground">Made with</span>
            <Heart className="w-4 h-4 text-primary fill-current" />
            <span className="text-muted-foreground">by Nupur Gaur</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nupur Gaur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;