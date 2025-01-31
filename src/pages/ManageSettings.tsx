import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Save, Download, Upload } from "lucide-react";

const ManageSettings = () => {
  const [resumeFile, setResumeFile] = useState("");
  const [theme, setTheme] = useState("light");
  const [socialLinks, setSocialLinks] = useState({
    github: "",
    linkedin: "",
    twitter: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Will be connected to backend later
    console.log({ resumeFile, theme, socialLinks });
  };

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-6">
          <h1 className="text-2xl font-bold mb-6">Manage Settings</h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Theme Preferences</h2>
              <RadioGroup
                value={theme}
                onValueChange={setTheme}
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="light" id="light" />
                  <label htmlFor="light">Light Mode</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dark" id="dark" />
                  <label htmlFor="dark">Dark Mode</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="system" id="system" />
                  <label htmlFor="system">System Default</label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Resume</h2>
              <div className="flex items-center gap-4">
                <Button variant="outline" type="button">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Resume
                </Button>
                {resumeFile && (
                  <Button variant="outline" type="button">
                    <Download className="mr-2 h-4 w-4" />
                    Preview Resume
                  </Button>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Social Links</h2>
              <div className="grid gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">GitHub Profile</label>
                  <Input
                    value={socialLinks.github}
                    onChange={(e) =>
                      setSocialLinks({ ...socialLinks, github: e.target.value })
                    }
                    placeholder="https://github.com/yourusername"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">LinkedIn Profile</label>
                  <Input
                    value={socialLinks.linkedin}
                    onChange={(e) =>
                      setSocialLinks({ ...socialLinks, linkedin: e.target.value })
                    }
                    placeholder="https://linkedin.com/in/yourusername"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Twitter Profile</label>
                  <Input
                    value={socialLinks.twitter}
                    onChange={(e) =>
                      setSocialLinks({ ...socialLinks, twitter: e.target.value })
                    }
                    placeholder="https://twitter.com/yourusername"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <Button type="submit">
                <Save className="mr-2 h-4 w-4" />
                Save Settings
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default ManageSettings;