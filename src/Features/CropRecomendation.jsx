import { TabsContent } from "../components/ui/tabs";
import { Card, CardContent } from "../components/ui/card";
import { Sprout } from "lucide-react";
const CropRecomendation = () => {
  const cropRecommendations = [
    { crop: "Tomatoes", season: "Summer", waterNeeds: "Medium" },
    { crop: "Lettuce", season: "Spring/Fall", waterNeeds: "Low" },
    { crop: "Corn", season: "Summer", waterNeeds: "High" },
  ];

  return (
    <div>
      <TabsContent value="crops">
        <Card className="bg-white/20 backdrop-blur-lg border-none">
          <CardContent className="p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-green-800 mb-4">
              Recommended Crops
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cropRecommendations.map((crop, index) => (
                <div key={index} className="p-4 bg-white/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Sprout className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                    <h3 className="text-lg md:text-xl font-medium text-green-800">
                      {crop.crop}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-green-700">
                    Season: {crop.season}
                  </p>
                  <p className="text-sm md:text-base text-green-700">
                    Water Needs: {crop.waterNeeds}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </div>
  );
};

export default CropRecomendation;
