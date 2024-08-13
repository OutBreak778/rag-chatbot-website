"use client";

import { Message, useChat } from "ai/react";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Messages from "./Messages";
import Logo from "./Logo";
import ChatForm from "./ChatForm";

const ChatWrapper = ({ sessionId, initialMessages }: { sessionId: string; initialMessages: Message[] }) => {
  const { messages, input, handleInputChange, handleSubmit, setInput } =
    useChat({
      api: "/api/chat-stream",
      body: { sessionId },
      initialMessages
    });

  return (
    <div className="relative min-h-[670px] mt-3 border-2 border-zinc-200/10 rounded-md bg-zinc-900 flex divide-y divide-zinc-700 flex-col justify-between gap-3">
      <div className="flex flex-row items-center justify-between px-12 gap-2">
        <div className="w-14 h-14 animate-spin-slow">
          <Logo />
        </div>
        <span className="text-zinc-200 text-bold text-3xl">OUTBREAK</span>
        <div className="hidden md:block">
          <h3 className="text-Xl font-medium text-zinc-100">
            Chat with website
          </h3>
          <p className="text-sm text-zinc-200/30">
            Ask your first question to get started
          </p>
        </div>
      </div>

      <div className="max-h-[490px] text-white bg-zinc-800 justify-between px-5 overflow-y-scroll flex flex-col">
        <Messages messages={messages} />
      </div>

      <ChatForm
        handleInputChange={handleInputChange}
        input={input}
        handleSubmit={handleSubmit}
        setInput={setInput}
      />
    </div>
  );
};

export default ChatWrapper;
