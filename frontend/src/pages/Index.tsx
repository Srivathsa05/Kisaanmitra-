import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import AnimatedButton from "@/components/AnimatedButton";
import UserProfile from "@/components/UserProfile";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";

const Index = () => {
  const { user, loading } = useAuth();
  const [isClient, setIsClient] = useState(false);

  // This ensures we only render the correct UI after hydration
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return (
    <div className="flex flex-col">

      {/* 🔹 Page Content */}
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProblemSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
