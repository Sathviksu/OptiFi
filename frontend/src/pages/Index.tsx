import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navbar />
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-6"
        >
          <h1 className="mt-8 bg-gradient-to-br from-foreground to-muted-foreground py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-7xl">
            Smarter Networks Start Here
          </h1>
          <p className="text-center text-muted-foreground text-lg md:text-xl max-w-2xl px-4">
            Detect bandwidth hoggers, secure your hotspot, and keep your network lightning-fast.</p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex gap-4 mt-4"
          >
            <Button size="xl" className="bg-primary hover:bg-primary/90 hover:text-[#BF124D] text-primary-foreground">
              Get Started
            </Button>
            
          </motion.div>
        </motion.div>
      </LampContainer>
    </div>
  );
};

export default Index;
