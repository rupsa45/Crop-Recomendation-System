import {Card,CardContent} from '../components/ui/card'
import {Droplet, Thermometer} from "lucide-react"
import { soilData } from '../utils/datas'
const SoilReportCard = () => {
  return (
    <div>
       <Card className="bg-white/20 backdrop-blur-lg border-none">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Soil Report</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Thermometer className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-sm text-green-600">Soil Temperature</p>
                      <p className="text-lg font-semibold text-green-800">{soilData.temperature}°F</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Droplet className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-sm text-green-600">Moisture Level</p>
                      <p className="text-lg font-semibold text-green-800">{soilData.moisture}%</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-green-800">Nutrient Levels</h3>
                  <div className="space-y-1">
                    <p className="text-sm text-green-700">Nitrogen: {soilData.nutrients.nitrogen}</p>
                    <p className="text-sm text-green-700">Phosphorus: {soilData.nutrients.phosphorus}</p>
                    <p className="text-sm text-green-700">Potassium: {soilData.nutrients.potassium}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
    </div>
  )
}

export default SoilReportCard
