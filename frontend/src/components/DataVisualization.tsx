import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, DollarSign, Droplets, Thermometer } from "lucide-react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';

// Sample data for visualizations
const yieldData = [
  { month: 'Jan', rice: 4.2, wheat: 3.8, sugarcane: 65 },
  { month: 'Feb', rice: 4.5, wheat: 4.1, sugarcane: 68 },
  { month: 'Mar', rice: 4.8, wheat: 4.3, sugarcane: 70 },
  { month: 'Apr', rice: 5.1, wheat: 4.6, sugarcane: 72 },
  { month: 'May', rice: 5.3, wheat: 4.8, sugarcane: 75 },
  { month: 'Jun', rice: 5.0, wheat: 4.5, sugarcane: 73 }
];

const priceData = [
  { month: 'Jan', rice: 2800, wheat: 2200, sugarcane: 280 },
  { month: 'Feb', rice: 2850, wheat: 2250, sugarcane: 285 },
  { month: 'Mar', rice: 2900, wheat: 2300, sugarcane: 290 },
  { month: 'Apr', rice: 2950, wheat: 2350, sugarcane: 295 },
  { month: 'May', rice: 3000, wheat: 2400, sugarcane: 300 },
  { month: 'Jun', rice: 2980, wheat: 2380, sugarcane: 298 }
];

const cropDistribution = [
  { name: 'Rice', value: 35, color: '#10b981' },
  { name: 'Wheat', value: 25, color: '#f59e0b' },
  { name: 'Sugarcane', value: 20, color: '#3b82f6' },
  { name: 'Cotton', value: 12, color: '#8b5cf6' },
  { name: 'Others', value: 8, color: '#6b7280' }
];

const weatherTrend = [
  { day: 'Mon', temp: 28, humidity: 65, rainfall: 0 },
  { day: 'Tue', temp: 30, humidity: 70, rainfall: 2 },
  { day: 'Wed', temp: 32, humidity: 68, rainfall: 0 },
  { day: 'Thu', temp: 29, humidity: 75, rainfall: 5 },
  { day: 'Fri', temp: 27, humidity: 80, rainfall: 12 },
  { day: 'Sat', temp: 26, humidity: 85, rainfall: 8 },
  { day: 'Sun', temp: 28, humidity: 72, rainfall: 0 }
];

const DataVisualization = () => {
  return (
    <div className="space-y-6 p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Yield Trends */}
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              Crop Yield Trends (Tons/Hectare)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={yieldData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => [`${value} tons/ha`, name]}
                  labelStyle={{ color: '#374151' }}
                />
                <Bar dataKey="rice" fill="#22c55e" name="Rice" radius={[4, 4, 0, 0]} />
                <Bar dataKey="wheat" fill="#f59e0b" name="Wheat" radius={[4, 4, 0, 0]} />
                <Bar dataKey="sugarcane" fill="#3b82f6" name="Sugarcane" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Price Trends */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-blue-500" />
              Market Price Trends (₹/Quintal)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={priceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => [`₹${value}`, name]}
                  labelStyle={{ color: '#374151' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="rice" 
                  stroke="#22c55e" 
                  strokeWidth={3}
                  dot={{ fill: '#22c55e', strokeWidth: 2, r: 4 }}
                  name="Rice"
                />
                <Line 
                  type="monotone" 
                  dataKey="wheat" 
                  stroke="#f59e0b" 
                  strokeWidth={3}
                  dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
                  name="Wheat"
                />
                <Line 
                  type="monotone" 
                  dataKey="sugarcane" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                  name="Sugarcane"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Crop Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Farm Crop Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={cropDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {cropDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Share']} />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {cropDistribution.map((crop, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: crop.color }}
                  />
                  <span className="text-sm">{crop.name}: {crop.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Weather Forecast */}
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Thermometer className="w-5 h-5 text-orange-500" />
              7-Day Weather Forecast
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={weatherTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis yAxisId="temp" orientation="left" />
                <YAxis yAxisId="humidity" orientation="right" />
                <Tooltip 
                  formatter={(value, name) => {
                    if (name === 'Temperature') return [`${value}°C`, name];
                    if (name === 'Humidity') return [`${value}%`, name];
                    if (name === 'Rainfall') return [`${value}mm`, name];
                    return [value, name];
                  }}
                  labelStyle={{ color: '#374151' }}
                />
                <Area
                  yAxisId="temp"
                  type="monotone"
                  dataKey="temp"
                  stackId="1"
                  stroke="#f59e0b"
                  fill="#fef3c7"
                  name="Temperature"
                />
                <Area
                  yAxisId="humidity"
                  type="monotone"
                  dataKey="humidity"
                  stackId="2"
                  stroke="#3b82f6"
                  fill="#dbeafe"
                  name="Humidity"
                />
                <Bar dataKey="rainfall" fill="#22c55e" name="Rainfall" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Key Metrics Cards */}
        <div className="col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-600 font-medium">Total Yield</p>
                  <p className="text-2xl font-bold text-green-800">24.7 tons</p>
                  <p className="text-xs text-green-600 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    +12% from last month
                  </p>
                </div>
                <div className="p-2 bg-green-200 rounded-full">
                  <TrendingUp className="w-6 h-6 text-green-700" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-600 font-medium">Revenue</p>
                  <p className="text-2xl font-bold text-blue-800">₹2.4L</p>
                  <p className="text-xs text-blue-600 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    +8% from last month
                  </p>
                </div>
                <div className="p-2 bg-blue-200 rounded-full">
                  <DollarSign className="w-6 h-6 text-blue-700" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-purple-600 font-medium">Farm Health</p>
                  <p className="text-2xl font-bold text-purple-800">87%</p>
                  <Progress value={87} className="h-2 mt-2" />
                </div>
                <div className="p-2 bg-purple-200 rounded-full">
                  <Droplets className="w-6 h-6 text-purple-700" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-orange-600 font-medium">Efficiency</p>
                  <p className="text-2xl font-bold text-orange-800">94%</p>
                  <p className="text-xs text-orange-600 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    +3% from last month
                  </p>
                </div>
                <div className="p-2 bg-orange-200 rounded-full">
                  <Thermometer className="w-6 h-6 text-orange-700" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DataVisualization;
