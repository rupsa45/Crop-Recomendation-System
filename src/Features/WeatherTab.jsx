import { TabsContent } from "../components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Navigation } from "lucide-react";
import { getWeatherIcon, weatherData } from "../utils/datas";
import SixCards from "./SixCards";
import SoilReportCard from './SoilReportCard'

const   WeatherTab = () => {

  return (
    <div >
      <TabsContent value="weather">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {/* Current Weather Card */}
          <Card className="bg-white/20 backdrop-blur-lg border-none">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl md:text-2xl font-semibold text-green-800">
                  Current Weather
                </h2>
                {getWeatherIcon(weatherData.current.condition.toLowerCase())}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-green-800">
                  <p className="text-3xl md:text-4xl font-bold">
                    {weatherData.current.temp}°F
                  </p>
                  <p className="text-base md:text-lg">
                    {weatherData.current.condition}
                  </p>
                </div>
                <div className="space-y-2 text-green-700 text-sm md:text-base">
                  <div className="flex items-center">
                    <Droplets className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    <span>{weatherData.current.humidity}% Humidity</span>
                  </div>
                  <div className="flex items-center">
                    <Navigation className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    <span>{weatherData.current.windSpeed} mph</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <SoilReportCard/>
        </div>
        <div>
        <SixCards/>
        </div>
      </TabsContent>
    </div>
  );
};

export default WeatherTab;
