
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Cpu, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-lg">
              <Cpu className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">DigitalTwin Pro</h1>
              <Badge variant="secondary" className="text-xs">BETA</Badge>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/dashboard" className="text-slate-600 hover:text-slate-900 font-medium">
              Dashboard
            </Link>
            <Link to="/projects" className="text-slate-600 hover:text-slate-900 font-medium">
              Projects
            </Link>
            <Link to="/integrations" className="text-slate-600 hover:text-slate-900 font-medium">
              Integrations
            </Link>
            <Link to="/docs" className="text-slate-600 hover:text-slate-900 font-medium">
              Documentation
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex">
              Sign In
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              Get Started
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
