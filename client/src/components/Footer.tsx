import { Github, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold mb-2">林小明</h3>
            <p className="text-sm text-muted-foreground font-mono">
              © 2025 · 用科技記錄生活
            </p>
          </div>
          
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => console.log('GitHub clicked')}
              data-testid="button-github"
            >
              <Github className="w-5 h-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => console.log('Email clicked')}
              data-testid="button-email"
            >
              <Mail className="w-5 h-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => console.log('LinkedIn clicked')}
              data-testid="button-linkedin"
            >
              <Linkedin className="w-5 h-5" />
            </Button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
