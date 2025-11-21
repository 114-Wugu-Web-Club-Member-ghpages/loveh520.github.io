import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar } from "lucide-react";

interface DiaryEntry {
  id: string;
  date: string;
  title: string;
  preview: string;
  content: string;
}

const diaryEntries: DiaryEntry[] = [
  {
    id: "1",
    date: "2025.11.07",
    title: "專題製作的進展",
    preview: "今天終於完成了專題的核心功能，雖然過程中遇到很多挑戰，但看到成果時真的很有成就感...",
    content: "今天終於完成了專題的核心功能，雖然過程中遇到很多挑戰，但看到成果時真的很有成就感。從一開始的構思到實作，每一步都是學習。特別是在處理資料庫連接的部分，花了很多時間debug，但也因此對後端架構有了更深的理解。接下來要繼續優化使用者介面，希望能做出更流暢的體驗。"
  },
  {
    id: "2",
    date: "2025.11.05",
    title: "週末的咖啡店時光",
    preview: "找到一家很棒的咖啡店，適合讀書和工作。安靜的環境讓人能專注思考...",
    content: "找到一家很棒的咖啡店，適合讀書和工作。安靜的環境讓人能專注思考，店內的裝潢也很有設計感。點了一杯手沖咖啡，在這裡完成了兩章的課程閱讀。有時候換個環境真的能提升效率，也讓心情變得更好。下次想帶朋友一起來。"
  },
  {
    id: "3",
    date: "2025.11.02",
    title: "學習新技術的心得",
    preview: "這週開始學習 React 和 TypeScript，雖然一開始覺得有點複雜，但漸漸掌握了基本概念...",
    content: "這週開始學習 React 和 TypeScript，雖然一開始覺得有點複雜，但漸漸掌握了基本概念。特別是理解了組件的生命週期和狀態管理後，很多之前不懂的東西突然開竅了。寫了幾個小專案練習，發現實作真的是最好的學習方式。接下來想深入研究 hooks 的進階用法。"
  },
];

export default function DiarySection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="diary" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            生活日誌
          </h2>
          <p className="text-muted-foreground font-mono text-sm">
            DAILY JOURNAL
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-primary/30" />
          
          <div className="space-y-12">
            {diaryEntries.map((entry, index) => (
              <div key={entry.id} className="relative pl-8 md:pl-20">
                <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
                
                <Card className="p-6 hover-elevate border-primary/20" data-testid={`diary-entry-${entry.id}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-primary" />
                    <p className="font-mono text-sm text-muted-foreground">{entry.date}</p>
                  </div>
                  
                  <h3 className="font-serif text-2xl font-bold mb-3">{entry.title}</h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {expandedId === entry.id ? entry.content : entry.preview}
                  </p>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2"
                    onClick={() => setExpandedId(expandedId === entry.id ? null : entry.id)}
                    data-testid={`button-read-more-${entry.id}`}
                  >
                    <BookOpen className="w-4 h-4" />
                    {expandedId === entry.id ? "收起" : "閱讀更多"}
                  </Button>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
