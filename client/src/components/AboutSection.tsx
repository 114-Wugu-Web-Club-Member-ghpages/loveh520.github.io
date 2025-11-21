import { Card } from "@/components/ui/card";
import { Code2, Palette, BookOpen, Sparkles } from "lucide-react";

const interests = [
  {
    icon: Code2,
    title: "程式開發",
    description: "熱愛學習新技術，享受解決問題的過程"
  },
  {
    icon: Palette,
    title: "設計美學",
    description: "追求簡潔優雅的視覺體驗"
  },
  {
    icon: BookOpen,
    title: "持續學習",
    description: "保持好奇心，不斷充實自己"
  },
  {
    icon: Sparkles,
    title: "創意實踐",
    description: "將想法轉化為實際的專案作品"
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            關於我
          </h2>
          <p className="text-muted-foreground font-mono text-sm">
            ABOUT ME
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <Card className="p-8 border-primary/20">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              我是一名學生，對科技和設計充滿熱情。
              喜歡用程式碼創造有趣的東西，也喜歡記錄生活中的美好時刻。
              這個網站是我的數位空間，在這裡分享我的學習歷程、創作成果，
              以及日常生活的點點滴滴。
            </p>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center hover-elevate active-elevate-2 border-primary/20"
                data-testid={`interest-card-${index}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
