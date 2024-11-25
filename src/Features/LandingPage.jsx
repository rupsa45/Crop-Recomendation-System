
import { Card, CardContent } from "@/components/ui/card";
import { Sprout } from "lucide-react";
import Footer from "../Layout/Footer";
import {Link} from 'react-router-dom'

const LandingPage = () => {
  const getFeatureDescription = (feature) => {
    const descriptions = {
      "Accurate Weather Insights":
        "Get precise, real-time weather updates tailored to your location to make informed agricultural decisions.",
      "Easy-to-Use Interface":
        "Simplified, user-friendly design ensures you can quickly access weather information with minimal effort.",
      "Reliable Forecasts":
        "A 5-day weather forecast helps you plan ahead for farming activities like planting, watering, or harvesting.",
      "Smart Crop Recommendations":
        "Based on weather patterns, soil types, and location, receive expert recommendations for the best crops to grow.",
      "Data-Driven Decisions":
        "Optimize crop yields and reduce risks by relying on scientifically backed recommendations.",
      "Sustainable Agriculture":
        "Enhance productivity while preserving the environment through smarter farming practices.",
      "Future Expansion":
        "As the platform evolves, expect integrations with soil sensors, market trends, and pest control advisories.",
    };
    return descriptions[feature];
  };
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/farmland.jpg')",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-lime-500/80 to-green-600/80"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to CropDetector
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl">
            Grow smarter, not harder! Discover the most suitable crops for your
            land with insights powered by advanced weather tracking and
            environmental analysis.
          </p>
          <Link
            to="/weather"
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
          >
            Get Started
          </Link>
    
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12">
            What Makes Us Unique?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Accurate Weather Insights",
              "Easy-to-Use Interface",
              "Reliable Forecasts",
              "Smart Crop Recommendations",
              "Data-Driven Decisions",
              "Sustainable Agriculture",
              "Future Expansion",
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-white/80 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Sprout className="w-6 h-6 text-green-600" />
                    <h3 className="font-semibold text-lg text-green-800">
                      {feature}
                    </h3>
                  </div>
                  <p className="text-green-700">
                    {getFeatureDescription(feature)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default LandingPage;
