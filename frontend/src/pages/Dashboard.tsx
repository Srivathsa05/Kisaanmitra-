import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import InteractiveDashboard from "@/components/InteractiveDashboard";
import DataVisualization from "@/components/DataVisualization";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/EnhancedAnimations";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Leaf, 
  Bell,
  Settings,
  Download,
  RefreshCw
} from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <FadeIn>
        <div className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Farm Dashboard</h1>
                <p className="text-gray-600 mt-1">Welcome back! Here's what's happening on your farm today.</p>
              </div>
              <div className="flex items-center gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleRefresh}
                  disabled={isRefreshing}
                >
                  <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
                  Refresh
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
                <div className="relative">
                  <Bell className="w-6 h-6 text-gray-600" />
                  <Badge className="absolute -top-2 -right-2 px-1 min-w-[1.25rem] h-5 text-xs">
                    3
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Quick Stats */}
      <FadeIn delay={0.1}>
        <div className="container mx-auto px-6 py-6">
          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <StaggerItem>
                <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-green-100">Active Crops</p>
                        <p className="text-3xl font-bold">12</p>
                      </div>
                      <Leaf className="w-8 h-8 text-green-200" />
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-blue-100">Total Area</p>
                        <p className="text-3xl font-bold">45.2 ha</p>
                      </div>
                      <BarChart3 className="w-8 h-8 text-blue-200" />
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-purple-100">Monthly Revenue</p>
                        <p className="text-3xl font-bold">₹2.4L</p>
                      </div>
                      <TrendingUp className="w-8 h-8 text-purple-200" />
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-orange-100">Team Members</p>
                        <p className="text-3xl font-bold">8</p>
                      </div>
                      <Users className="w-8 h-8 text-orange-200" />
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </FadeIn>

      {/* Main Content */}
      <FadeIn delay={0.2}>
        <div className="container mx-auto px-6 pb-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <InteractiveDashboard />
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <DataVisualization />
            </TabsContent>

            <TabsContent value="reports" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Detailed Reports</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
                      <BarChart3 className="w-6 h-6 mb-2" />
                      <span>Yield Report</span>
                    </Button>
                    <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
                      <TrendingUp className="w-6 h-6 mb-2" />
                      <span>Financial Report</span>
                    </Button>
                    <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
                      <Leaf className="w-6 h-6 mb-2" />
                      <span>Crop Health Report</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </FadeIn>
    </div>
  );
};

export default Dashboard;
