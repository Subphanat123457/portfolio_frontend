import { Github, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import { projectUser } from "@/services/api"; // เรียกใช้งาน API ที่คุณสร้าง

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]); // กำหนด state สำหรับเก็บข้อมูลโปรเจกต์

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await projectUser(); // เรียกข้อมูลจาก API
        setProjects(response); // เก็บข้อมูลที่ได้รับใน state
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.length > 0 ? (
              projects.map((project) => (
                <div
                  key={project.id}
                  className="glass rounded-lg overflow-hidden hover:scale-[1.02] transition-transform"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={`data:image/png;base64,${project.image}`}
                      alt={project.title}
                      className="w-full h-full object-cover filter-none" // เอาฟิลเตอร์เบลอออก
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    {/* กำหนดความยาวของ description และเพิ่ม ... */}
                    <p className="text-muted-foreground mb-4">
                      {project.description.length > 100
                        ? project.description.slice(0, 100) + "..."
                        : project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {project.code_url && (
                        <a
                          href={project.code_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github size={20} />
                          Code
                        </a>
                      )}
                      {project.demo_url && (
                        <a
                          href={project.demo_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink size={20} />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading or no projects available...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
