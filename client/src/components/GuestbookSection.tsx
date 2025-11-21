import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare, Send } from "lucide-react";

interface Message {
  id: string;
  name: string;
  message: string;
  timestamp: string;
}

const initialMessages: Message[] = [
  {
    id: "1",
    name: "陳小華",
    message: "很棒的網站設計！科技感十足，繼續加油！",
    timestamp: "2025.11.06 14:30"
  },
  {
    id: "2",
    name: "王大明",
    message: "喜歡你的作品展示，期待看到更多專案分享～",
    timestamp: "2025.11.05 09:15"
  },
  {
    id: "3",
    name: "李小美",
    message: "日記寫得很有感覺，加油！",
    timestamp: "2025.11.04 18:45"
  },
];

export default function GuestbookSection() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !message.trim()) {
      console.log('請填寫完整資訊');
      return;
    }

    const newMessage: Message = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      timestamp: new Date().toLocaleString('zh-TW', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      }).replace(/\//g, '.').replace(',', '')
    };

    setMessages([newMessage, ...messages]);
    setName("");
    setMessage("");
    console.log('留言已送出', newMessage);
  };

  const getInitials = (name: string) => {
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <section id="guestbook" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            訪客留言
          </h2>
          <p className="text-muted-foreground font-mono text-sm">
            GUESTBOOK
          </p>
        </div>

        <Card className="p-6 md:p-8 mb-12 border-primary/20">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="w-6 h-6 text-primary" />
            <h3 className="font-serif text-2xl font-bold">留下你的訊息</h3>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="你的名字"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-primary/30 focus:border-primary"
                data-testid="input-name"
              />
            </div>
            
            <div>
              <Textarea
                placeholder="寫下你想說的話..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="resize-none border-primary/30 focus:border-primary"
                data-testid="input-message"
              />
              <p className="text-xs text-muted-foreground mt-2 font-mono">
                {message.length} / 500
              </p>
            </div>
            
            <Button
              type="submit"
              className="w-full gap-2"
              data-testid="button-submit-message"
            >
              <Send className="w-4 h-4" />
              送出留言
            </Button>
          </form>
        </Card>

        <div className="space-y-6">
          {messages.map((msg) => (
            <Card
              key={msg.id}
              className="p-6 hover-elevate border-primary/20"
              data-testid={`message-${msg.id}`}
            >
              <div className="flex gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-primary/20 text-primary font-bold">
                    {getInitials(msg.name)}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h4 className="font-bold">{msg.name}</h4>
                    <p className="text-xs text-muted-foreground font-mono">
                      {msg.timestamp}
                    </p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {msg.message}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
