"use client";

import { AudioLines, Bot, Send } from "lucide-react";
import React, { useRef, useState } from "react";
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
        "fixed bottom-16 right-4 md:right-8 md:bottom-20 w-full max-w-sm md:max-w-lg bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden z-50 transition-transform",
        showChatMenu ? "translate-y-0" : "translate-y-full"
      )}
    >
      <Card>
        <CardHeader className="flex flex-row items-center">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/Akarikev.png" />
              <AvatarFallback>EB</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm leading-none">elorm&apos;s buddy</p>
              <p className="text-xs font-extrabold text-green-500">
                buddy is active 😁
              </p>
              {isTyping && (
                <div className="flex items-center gap-1">
                  <Bot className="w-4 h-4" />
                  <small>buddy is typing...</small>
                </div>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="max-h-64 overflow-y-auto p-4 space-y-2">
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
        <CardFooter>
          <div className="flex w-full items-center space-x-2 mt-4">
            <Input
              placeholder="sup buddy?"
              className="flex-1"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              ref={inputRef}
              onFocus={() => inputRef.current?.focus()}
            />
            <Button
              size="icon"
              disabled={!userInput.trim()}
              onClick={handleSubmit}
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
      content: "Hi, buddy sup?",
    },
  ]);
  const [showChatMenu, setShowChatMenu] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

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
      <div
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50"
        onClick={() => setShowChatMenu((prev) => !prev)}
      >
        <div className="p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition cursor-pointer">
          <AudioLines className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}

export default ElormAi;
