
import React from "react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 py-12 mt-16">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold">
              Portfolio<span className="text-portfolio-primary">.</span>
            </div>
            <p className="text-muted-foreground mt-2">
              Crafting digital experiences with passion
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="text-center md:text-right">
              <p className="text-muted-foreground">
                &copy; {new Date().getFullYear()} Your Name. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground">
                Designed and built with 💙
              </p>
            </div>
            
            <a 
              href="#home"
              className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
