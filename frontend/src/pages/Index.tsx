import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import { FaDiscord, FaTelegramPlane, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaPhone, FaEnvelope, FaMapMarkerAlt,FaLink} from "react-icons/fa";
import { MdQrCodeScanner,MdSpeed } from "react-icons/md";
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
      {/* HOW IT WORKS SECTION */}
<section className="w-full py-32 bg-[#040617] ">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-4">
      How It Works
    </h2>
    <p className="text-muted-foreground max-w-2xl mx-auto mb-16">
      Your complete guide to optimizing, monitoring, and securing your network effortlessly.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      
      {/* STEP 1 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="p-8 rounded-2xl border border-primary bg-black/20 backdrop-blur-lg"
      >
        <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
           <FaLink size={30} className="text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-primary mb-2">STEP 1</h3>
        <h4 className="text-2xl font-bold mb-4">Connect Device</h4>
        <p className="text-muted-foreground mb-4">
          Connect your router or hotspot to enable real-time tracking and security monitoring.
        </p>
        <ul className="text-left space-y-2 text-muted-foreground text-sm">
          <li>• Compatible with all networks</li>
          <li>• One-click secure onboarding</li>
        </ul>
      </motion.div>

      {/* STEP 2 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="p-8 rounded-2xl border border-primary bg-black/20 backdrop-blur-lg"
      >
        <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <MdQrCodeScanner size={30} className="text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-primary mb-2">STEP 2</h3>
        <h4 className="text-2xl font-bold mb-4">Scan & Monitor</h4>
        <p className="text-muted-foreground mb-4">
          Identify bandwidth hoggers, unknown devices, and suspicious activity instantly.
        </p>
        <ul className="text-left space-y-2 text-muted-foreground text-sm">
          <li>• Real-time bandwidth analysis</li>
          <li>• Threat detection AI</li>
        </ul>
      </motion.div>

      {/* STEP 3 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="p-8 rounded-2xl border border-primary bg-black/20 backdrop-blur-lg"
      >
        <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                          <MdSpeed size={30} className="text-primary" />
   

        </div>
        <h3 className="text-lg font-semibold text-primary mb-2">STEP 3</h3>
        <h4 className="text-2xl font-bold mb-4">Optimize Speed</h4>
        <p className="text-muted-foreground mb-4">
          Apply smart fixes to get maximum speed and stabilize your network instantly.
        </p>
        <ul className="text-left space-y-2 text-muted-foreground text-sm">
          <li>• Auto speed optimization</li>
          <li>• AI-based congestion prediction</li>
        </ul>
      </motion.div>

    </div>
  </div>
</section>
{/* READY TO GET STARTED SECTION */}
{/* READY TO GET STARTED SECTION */}
<section className="w-full pt-32 pb-6 bg-[#030712] text-center">
  <h2 className="text-4xl md:text-5xl font-bold mb-4">
    Ready to Supercharge Your Network?
  </h2>

  <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
    Join thousands of users monitoring their bandwidth, eliminating congestion, 
    and keeping their networks fast and secure.
  </p>

  <Button
    size="lg"
    className="bg-primary text-black px-10 py-6 rounded-xl hover:bg-primary/90 transition"
  >
    START MONITORING →
  </Button>
</section>

{/* FOOTER SECTION */}
<footer className="w-full bg-[#030712] text-white py-10 border-t border-white/10">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

    {/* LEFT SIDE */}
    <div>
      <h3 className="text-primary font-semibold text-lg mb-2">OptiFi</h3>

      <p className="text-muted-foreground max-w-xl">
        <span className="text-primary font-semibold">OptiFi</span> is a smart network performance 
        and congestion detection system that helps users analyze bandwidth usage, 
        detect unknown devices, and secure their Wi-Fi with AI-driven monitoring.
      </p>

      {/* SOCIAL ICONS */}
      <div className="flex items-center gap-4 mt-6">
        <button className="px-2 w-14 h-10 rounded-full border border-primary/40 flex items-center justify-center text-primary hover:bg-primary/10 transition">
  <FaDiscord size={24}/>
</button>

<button className="px-2 w-14 h-10 rounded-full border border-primary/40 flex items-center justify-center text-primary hover:bg-primary/10 transition">
  <FaTelegramPlane size={24} />
</button>

<button className="px-2 w-14 h-10 rounded-full border border-primary/40 flex items-center justify-center text-primary hover:bg-primary/10 transition">
  <FaTwitter size={24} />
</button>

<button className="px-2 w-14 h-10 rounded-full border border-primary/40 flex items-center justify-center text-primary hover:bg-primary/10 transition">
  <FaLinkedin size={24} />
</button>

<button className="px-2 w-14 h-10 rounded-full border border-primary/40 flex items-center justify-center text-primary hover:bg-primary/10 transition">
  <FaGithub size={24} />
</button>
        {/* LINKS */}
        <button className="px-5 py-2 rounded-full border border-primary/50 text-primary hover:bg-primary/10 transition whitespace-nowrap">
          Follow Updates ↗
        </button>

        <button className="px-8 py-3 rounded-full bg-primary text-black hover:bg-primary/80 transition whitespace-nowrap">
          Join Community ↗
        </button>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="flex flex-col pl-[400px] gap-4 md:items-start">

  <div className="flex items-center gap-3">
    <button className="w-12 h-12 flex items-center justify-center rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition">
      <FaPhone size={20} className="text-primary rotate-90" />
    </button>
    <p className="text-muted-foreground">+91 7019450249</p>
  </div>

  <div className="flex items-center gap-3">
    <button className="w-12 h-12 flex items-center justify-center rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition">
      <FaEnvelope size={20} />
    </button>
    <p className="text-muted-foreground">support@OptiFi.ai</p>
  </div>

  <div className="flex items-center gap-3">
    <button className="w-12 h-12 flex items-center justify-center rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition">
      <FaMapMarkerAlt size={20} />
    </button>
    <p className="text-muted-foreground">Bengaluru, India</p>
  </div>

</div>

  </div>

  {/* BOTTOM COPYRIGHT */}
  <div className="border-t border-white/10 mt-16 pt-6 text-center text-sm text-muted-foreground">
    © 2025 <span className="text-primary font-semibold">OptiFi Technologies</span>. 
    All Rights Reserved.
    <br />
    Smart Network Monitoring & Congestion Detection Platform.
  </div>
</footer>


    </div>
  );
};

export default Index;
