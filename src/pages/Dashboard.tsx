import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Users, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold mb-8">Portfolio Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/manage-profile">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <Users className="h-8 w-8 text-primary" />
                <h2 className="text-xl font-semibold">Profile</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Update your personal information and profile picture
              </p>
              <Button variant="outline" className="w-full">Manage Profile</Button>
            </Card>
          </Link>

          <Link to="/manage-projects">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <FileText className="h-8 w-8 text-primary" />
                <h2 className="text-xl font-semibold">Projects</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Add or edit your portfolio projects
              </p>
              <Button variant="outline" className="w-full">Manage Projects</Button>
            </Card>
          </Link>

          <Link to="/manage-settings">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <Settings className="h-8 w-8 text-primary" />
                <h2 className="text-xl font-semibold">Settings</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Configure your portfolio settings
              </p>
              <Button variant="outline" className="w-full">Manage Settings</Button>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;