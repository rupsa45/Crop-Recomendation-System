import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import CropRecomendation from "./CropRecomendation";
import Guides from "./Guides";
import WeatherTab from "./WeatherTab";

const Tab = () => {
  return (
    <div>
      <Tabs defaultValue="weather" className="w-full max-w-6xl mx-auto">
        <TabsList className="bg-white/30 backdrop-blur-lg rounded-lg p-1 md:p-2 mb-6 w-full flex flex-col sm:flex-row space-y-2 sm:space-y-0">
          <TabsTrigger
            value="weather"
            className="text-sm md:text-base text-green-800 flex-1"
          >
            Weather Updates
          </TabsTrigger>
          <TabsTrigger
            value="crops"
            className="text-sm md:text-base text-green-800 flex-1"
          >
            Crop Recommendations
          </TabsTrigger>
          <TabsTrigger
            value="guides"
            className="text-sm md:text-base text-green-800 flex-1"
          >
            Farming Guides
          </TabsTrigger>
        </TabsList>
        <WeatherTab />
        <CropRecomendation/>
        <Guides/>
      </Tabs>
    </div>
  );
};

export default Tab;
