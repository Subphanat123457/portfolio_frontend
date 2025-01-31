import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { FolderPlus, Link as LinkIcon, Upload, Trash2, PenSquare } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  githubUrl: string;
}

const ManageProjects = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: "Example Project",
      description: "A sample project description",
      image: "/placeholder.svg",
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
  ]);

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Manage Projects</h1>
          <Button>
            <FolderPlus className="mr-2 h-4 w-4" />
            Add New Project
          </Button>
        </div>

        <div className="grid gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-64 h-48 bg-muted rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Project Title</label>
                    <Input defaultValue={project.title} />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Description</label>
                    <Textarea defaultValue={project.description} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Demo URL</label>
                      <div className="relative">
                        <LinkIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input defaultValue={project.demoUrl} className="pl-9" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">GitHub URL</label>
                      <div className="relative">
                        <LinkIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input defaultValue={project.githubUrl} className="pl-9" />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2">
                    <Button variant="outline" type="button">
                      <Upload className="mr-2 h-4 w-4" />
                      Update Image
                    </Button>
                    <Button variant="outline" type="button">
                      <PenSquare className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                    <Button variant="destructive" type="button">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageProjects;