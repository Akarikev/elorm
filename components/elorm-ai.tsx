"use client";

import { AudioLines, Bot, Send, ArrowUpRight, X } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { config } from "@/utils/gemini-ai";
import MarkdownPreview from "./markdown/markdown-preview";

function ChatBox({
  messages,
  userInput,
  setUserInput,
  isTyping,
  handleSubmit,
  inputRef,
  showChatMenu,
}: {
  messages: { role: string; content: string }[];
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  isTyping: boolean;
  handleSubmit: (event: React.FormEvent) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  showChatMenu: boolean;
}) {
  return (
    <div
      className={cn(
        "fixed bottom-16 right-4 md:right-8 md:bottom-20 w-full max-w-sm md:max-w-md bg-white dark:bg-gray-800 shadow-2xl rounded-xl overflow-hidden z-50 transition-all duration-300 border border-border/50",
        showChatMenu
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0"
      )}
    >
      <Card className="border-0 shadow-none bg-transparent">
        <CardHeader className="flex flex-row items-center pb-3 bg-muted/30">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="https://github.com/Akarikev.png" />
              <AvatarFallback className="bg-blue-500 text-white text-sm">
                EB
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold leading-none">
                elorm&apos;s AI buddy
              </p>
              <p className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Online & ready to chat!
              </p>
              {isTyping && (
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  <Bot className="w-3 h-3 animate-bounce" />
                  <span>Thinking...</span>
                </div>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="max-h-60 overflow-y-auto p-3 space-y-3 bg-gray-50/50 dark:bg-gray-900/50">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "flex w-max max-w-full flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                message.role === "user"
                  ? "ml-auto bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white"
              )}
            >
              <MarkdownPreview content={message.content} />
            </div>
          ))}
        </CardContent>
        <CardFooter className="bg-white dark:bg-gray-800 border-t border-border/50 p-3">
          <div className="flex w-full items-center space-x-2">
            <Input
              placeholder="Ask me anything! 💬"
              className="flex-1 border-border/50 focus:border-primary"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              ref={inputRef}
              onKeyPress={(e) => e.key === "Enter" && handleSubmit(e)}
            />
            <Button
              size="icon"
              disabled={!userInput.trim()}
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-600"
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

function ElormAi() {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "agent",
      content:
        "Hey there! 👋 I'm elorm's AI buddy! Ask me anything about his work, projects, or just chat - I'm here to help and have fun! 😄",
    },
  ]);
  const [showChatMenu, setShowChatMenu] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showAttentionArrow, setShowAttentionArrow] = useState(true);

  const inputRef = useRef<HTMLInputElement | null>(null);

  // Auto-hide attention arrow after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAttentionArrow(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const trimmedInput = userInput.trim();
    if (!trimmedInput) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: trimmedInput,
      },
    ]);
    setUserInput("");
    setIsTyping(true);
    try {
      const response = await config(trimmedInput);
      const content = response || "Sorry, something went wrong.";

      setMessages((prev) => [
        ...prev,
        {
          role: "agent",
          content,
        },
      ]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
    } finally {
      setIsTyping(false);
      inputRef.current?.focus();
    }
  };

  return (
    <div>
      <ChatBox
        messages={messages}
        userInput={userInput}
        setUserInput={setUserInput}
        isTyping={isTyping}
        handleSubmit={handleSubmit}
        inputRef={inputRef}
        showChatMenu={showChatMenu}
      />

      {/* Attention Arrow - shows only when chat is closed and for first few seconds */}
      {!showChatMenu && showAttentionArrow && (
        <div className="fixed bottom-20 right-8 md:bottom-24 md:right-10 z-40 animate-bounce">
          <div className="relative bg-white/90 backdrop-blur-md border border-gray-200 dark:bg-gray-800/90 dark:border-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg shadow-xl">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowAttentionArrow(false);
              }}
              className="absolute -top-2 -right-2 bg-white text-gray-600 hover:text-gray-800 rounded-full p-1 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110"
            >
              <X className="h-3 w-3" />
            </button>
            <div className="flex items-center gap-2 text-sm font-medium">
              <Bot className="h-4 w-4" />
              <span>Chat with me! 💬</span>
              <ArrowUpRight className="h-4 w-4 animate-pulse" />
            </div>
            {/* Arrow pointing down to chatbot */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-gray-200 dark:border-t-gray-700"></div>
          </div>
        </div>
      )}

      <div
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 group"
        onClick={() => {
          setShowChatMenu((prev) => !prev);
          setShowAttentionArrow(false); // Hide arrow once user interacts
        }}
      >
        <div className="relative p-3 bg-white/20 backdrop-blur-md border border-white/30 text-gray-700 dark:text-gray-200 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer hover:bg-white/30">
          <Bot className="h-5 w-5 group-hover:scale-110 transition-transform" />
          <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-400 rounded-full animate-pulse"></div>
          {!showChatMenu && (
            <div className="absolute -top-12 -left-8 bg-black/90 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <Bot className="h-3 w-3" />
                <span>Chat with elorm&apos;s AI!</span>
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black/90"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ElormAi;
