"use client";

import { Bot, Send, X, Sparkles, MessageSquare } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import MarkdownPreview from "./markdown/markdown-preview";
import { AnimatePresence, motion } from "framer-motion";

interface Message {
  role: "user" | "agent";
  content: string;
}

export default function ElormAi() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "agent",
      content:
        "Hi! I'm an AI assistant trained on Elorm's work. Ask me anything about his projects, skills, blog posts, or experience!",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isOpen]);

  // Focus input when opening
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    const userMessage = inputValue.trim();
    setInputValue("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      // Create a placeholder for the streaming response
      setMessages((prev) => [...prev, { role: "agent", content: "" }]);

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error("No reader available");
      }

      let fullResponse = "";
      
      while (true) {
        const { done, value } = await reader.read();
        
        if (done) break;
        
        const chunk = decoder.decode(value, { stream: true });
        fullResponse += chunk;
        
        // Update the last message with the accumulated response
        setMessages((prev) => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1] = {
            role: "agent",
            content: fullResponse,
          };
          return newMessages;
        });
      }
    } catch (error) {
      console.error("Error thinking:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "agent",
          content: "Sorry, I encountered an error. Please try again.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 md:right-8 z-50 w-[90vw] md:w-[380px] h-[500px] max-h-[70vh] flex flex-col bg-background border border-black dark:border-4 dark:border-white/10 shadow-lg rounded-xl overflow-hidden font-sans"
          >
            {/* Minimal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border/40 bg-background/50 backdrop-blur-sm">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-border/50 bg-muted/20 flex items-center justify-center relative">
                    <img 
                      src="/chibi.gif" 
                      alt="AI" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 border-2 border-background rounded-full"></span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold tracking-tight">Elorm AI</h3>
                  <p className="text-[10px] text-muted-foreground font-medium">Online</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 rounded-full hover:bg-muted/50 text-muted-foreground"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex flex-col max-w-[85%] space-y-1",
                    msg.role === "user" ? "self-end items-end" : "self-start items-start"
                  )}
                >
                  <div
                    className={cn(
                      "px-3 py-2 text-sm leading-relaxed",
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-2xl rounded-tr-sm shadow-sm"
                        : "bg-muted/30 text-foreground rounded-2xl rounded-tl-sm border border-border/40"
                    )}
                  >
                    {msg.role === "agent" ? (
                      <MarkdownPreview content={msg.content} className="text-sm prose-sm dark:prose-invert max-w-none" />
                    ) : (
                      msg.content
                    )}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex items-center gap-1.5 ml-1 mt-2">
                   <div className="flex gap-1">
                      <motion.span 
                        animate={{ opacity: [0.4, 1, 0.4] }} 
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0 }}
                        className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full"
                      />
                      <motion.span 
                        animate={{ opacity: [0.4, 1, 0.4] }} 
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                        className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full"
                      />
                      <motion.span 
                        animate={{ opacity: [0.4, 1, 0.4] }} 
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.4 }}
                        className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full"
                      />
                   </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Minimal Input Area */}
            <div className="p-3 bg-background border-t border-border/40">
              <form
                onSubmit={handleSubmit}
                className="relative flex items-center"
              >
                <Input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type a message..."
                  className="w-full pr-10 min-h-[44px] rounded-xl border-border/50 bg-muted/20 focus-visible:ring-1 focus-visible:ring-ring/20 focus-visible:border-primary/30 shadow-none text-sm placeholder:text-muted-foreground/70"
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={!inputValue.trim() || isTyping}
                  className={cn(
                    "absolute right-1.5 h-8 w-8 rounded-lg transition-all duration-200",
                    inputValue.trim() 
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm" 
                      : "bg-transparent text-muted-foreground hover:bg-muted/50"
                  )}
                >
                  <Send className="h-3.5 w-3.5" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button with Tooltip */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="bg-primary/90 text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-full shadow-md backdrop-blur-sm pointer-events-none"
            >
              Chat with AI
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "rounded-full shadow-lg transition-all duration-300 flex items-center justify-center z-50",
            isOpen 
              ? "p-3.5 bg-background border border-border text-foreground hover:bg-muted/50" 
              : "p-0 border-0 hover:shadow-xl" 
          )}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-5 h-5" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 rounded-full overflow-hidden relative shadow-sm border-2 border-black dark:border-white">
                  <img 
                    src="/chibi.gif" 
                    alt="AI" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  );
}

