import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 backdrop-blur-xl bg-background/60 supports-[backdrop-filter]:bg-background/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
  <img 
    src="src/assets/logo.png"   // <-- replace with your logo path
    alt="Logo"
    className="h-20 w-auto"  // adjust size here
  />
</div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              className="text-foreground hover:text-primary hover:bg-secondary"
            >
              Login
            </Button>
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
