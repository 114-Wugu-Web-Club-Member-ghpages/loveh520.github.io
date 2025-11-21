import { useState } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code2 } from "lucide-react";
import dashboardProject from "@assets/generated_images/Web_dashboard_project_screenshot_8ee3a8c5.png";
import mobileProject from "@assets/generated_images/Mobile_app_project_mockup_5881b449.png";

interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  image: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "數據可視化儀表板",
    description: "一個現代化的數據分析平台，提供即時數據監控和視覺化功能",
    detailedDescription: "這個專案使用 React 和 TypeScript 開發，整合了多個數據源，提供即時的數據分析和視覺化。實作了響應式設計，支援多種圖表類型，並加入了深色模式切換功能。在開發過程中學習到了許多關於資料處理和前端效能優化的知識。",
    image: dashboardProject,
    techStack: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "2",
    title: "任務管理應用",
    description: "極簡風格的待辦事項管理工具，幫助提升個人生產力",
    detailedDescription: "這是一個專注於使用者體驗的任務管理應用。採用了現代化的 UI 設計，支援拖拽排序、標籤分類、優先級設定等功能。使用 React Native 開發，實現了跨平台支援。這個專案讓我深入理解了移動端開發的挑戰和最佳實踐。",
    image: mobileProject,
    techStack: ["React Native", "TypeScript", "Redux", "SQLite"],
    demoUrl: "#",
    githubUrl: "#"
  },
];

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            作品展示
          </h2>
          <p className="text-muted-foreground font-mono text-sm">
            PROJECT SHOWCASE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover-elevate active-elevate-2 border-primary/20"
              data-testid={`project-card-${project.id}`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    variant="secondary"
                    onClick={() => setSelectedProject(project)}
                    className="backdrop-blur-md"
                    data-testid={`button-view-project-${project.id}`}
                  >
                    查看詳情
                  </Button>
                </div>
              </div>
              
              <CardHeader className="gap-2 space-y-0 pb-4">
                <h3 className="font-serif text-xl font-bold">{project.title}</h3>
              </CardHeader>
              
              <CardContent className="pb-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
              
              <CardFooter className="gap-2 flex-wrap">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
          data-testid="project-modal"
        >
          <Card
            className="max-w-3xl w-full my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video overflow-hidden rounded-t-lg">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <CardHeader className="gap-3 space-y-0">
              <h3 className="font-serif text-3xl font-bold">{selectedProject.title}</h3>
              <div className="flex gap-2 flex-wrap">
                {selectedProject.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {selectedProject.detailedDescription}
              </p>
              
              <div className="flex gap-3">
                {selectedProject.demoUrl && (
                  <Button variant="default" className="gap-2" data-testid="button-demo">
                    <ExternalLink className="w-4 h-4" />
                    查看演示
                  </Button>
                )}
                {selectedProject.githubUrl && (
                  <Button variant="outline" className="gap-2" data-testid="button-github">
                    <Code2 className="w-4 h-4" />
                    原始碼
                  </Button>
                )}
              </div>
            </CardContent>
            
            <CardFooter>
              <Button
                variant="ghost"
                onClick={() => setSelectedProject(null)}
                className="w-full"
                data-testid="button-close-modal"
              >
                關閉
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </section>
  );
}
