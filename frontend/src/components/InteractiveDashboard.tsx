import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, TrendingDown, Droplets, Thermometer, 
  Wind, Sun, CloudRain, AlertTriangle, CheckCircle,
  BarChart3, PieChart, Activity, Zap
} from "lucide-react";
import { LoadingSpinner } from "./LoadingStates";

interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
  condition: string;
  rainfall: number;
}

interface CropData {
  name: string;
  health: number;
  yield: number;
  stage: string;
  daysToHarvest: number;
}

interface MarketPrice {
  crop: string;
  currentPrice: number;
  change: number;
  trend: 'up' | 'down' | 'stable';
}

const InteractiveDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [cropData, setCropData] = useState<CropData[]>([]);
  const [marketPrices, setMarketPrices] = useState<MarketPrice[]>([]);
  const [alerts, setAlerts] = useState<string[]>([]);

  // Simulate real-time data updates
  useEffect(() => {
    const fetchData = () => {
      // Simulate API calls with realistic agricultural data
      setTimeout(() => {
        setWeatherData({
          temperature: 28 + Math.random() * 10,
          humidity: 60 + Math.random() * 30,
          windSpeed: 5 + Math.random() * 15,
          condition: ['Sunny', 'Partly Cloudy', 'Cloudy', 'Light Rain'][Math.floor(Math.random() * 4)],
          rainfall: Math.random() * 20
        });

        setCropData([
          { name: 'Rice', health: 85 + Math.random() * 10, yield: 4.2, stage: 'Flowering', daysToHarvest: 45 },
          { name: 'Wheat', health: 78 + Math.random() * 15, yield: 3.8, stage: 'Grain Filling', daysToHarvest: 30 },
          { name: 'Sugarcane', health: 92 + Math.random() * 8, yield: 65, stage: 'Maturation', daysToHarvest: 15 }
        ]);

        setMarketPrices([
          { crop: 'Rice', currentPrice: 2850 + Math.random() * 200, change: -2.5 + Math.random() * 5, trend: Math.random() > 0.5 ? 'up' : 'down' },
          { crop: 'Wheat', currentPrice: 2200 + Math.random() * 150, change: -1.8 + Math.random() * 4, trend: Math.random() > 0.5 ? 'up' : 'down' },
          { crop: 'Sugarcane', currentPrice: 350 + Math.random() * 50, change: -0.5 + Math.random() * 2, trend: Math.random() > 0.5 ? 'up' : 'down' }
        ]);

        setAlerts([
          'Optimal irrigation time for Rice field A',
          'Weather alert: Light rain expected tomorrow',
          'Market opportunity: Wheat prices trending up'
        ]);

        setIsLoading(false);
      }, 1500);
    };

    fetchData();
    const interval = setInterval(fetchData, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return <LoadingSpinner text="Loading your farm dashboard..." />;
  }

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Farm Dashboard</h1>
          <p className="text-muted-foreground">Real-time insights for your agricultural operations</p>
        </div>
        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
          <Activity className="w-4 h-4 mr-1" />
          Live Data
        </Badge>
      </div>

      {/* Weather Section */}
      <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sun className="w-5 h-5 text-yellow-500" />
            Current Weather
          </CardTitle>
        </CardHeader>
        <CardContent>
          {weatherData && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <Thermometer className="w-8 h-8 mx-auto mb-2 text-red-500" />
                <div className="text-2xl font-bold">{weatherData.temperature.toFixed(1)}°C</div>
                <div className="text-sm text-muted-foreground">Temperature</div>
              </div>
              <div className="text-center">
                <Droplets className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                <div className="text-2xl font-bold">{weatherData.humidity.toFixed(0)}%</div>
                <div className="text-sm text-muted-foreground">Humidity</div>
              </div>
              <div className="text-center">
                <Wind className="w-8 h-8 mx-auto mb-2 text-gray-500" />
                <div className="text-2xl font-bold">{weatherData.windSpeed.toFixed(1)} km/h</div>
                <div className="text-sm text-muted-foreground">Wind Speed</div>
              </div>
              <div className="text-center">
                <CloudRain className="w-8 h-8 mx-auto mb-2 text-indigo-500" />
                <div className="text-2xl font-bold">{weatherData.rainfall.toFixed(1)} mm</div>
                <div className="text-sm text-muted-foreground">Rainfall</div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Crop Health Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cropData.map((crop, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{crop.name}</span>
                <Badge variant={crop.health > 85 ? "default" : crop.health > 70 ? "secondary" : "destructive"}>
                  {crop.stage}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Health Score</span>
                  <span className="font-medium">{crop.health.toFixed(0)}%</span>
                </div>
                <Progress value={crop.health} className="h-2" />
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-muted-foreground">Expected Yield</div>
                  <div className="font-medium">{crop.yield} tons/ha</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Days to Harvest</div>
                  <div className="font-medium">{crop.daysToHarvest} days</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Market Prices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Market Prices (₹/quintal)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {marketPrices.map((price, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="font-medium">{price.crop}</div>
                  <Badge variant="outline">Live</Badge>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="font-bold">₹{price.currentPrice.toFixed(0)}</div>
                    <div className={`text-sm flex items-center gap-1 ${
                      price.change > 0 ? 'text-green-600' : price.change < 0 ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      {price.change > 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      {price.change > 0 ? '+' : ''}{price.change.toFixed(1)}%
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Smart Alerts */}
      <Card className="border-orange-200 bg-orange-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-800">
            <Zap className="w-5 h-5" />
            Smart Alerts & Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {alerts.map((alert, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-orange-200">
                <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm">{alert}</p>
                </div>
                <Button size="sm" variant="outline" className="text-xs">
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InteractiveDashboard;
