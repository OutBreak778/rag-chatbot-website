import { cn } from "@/lib/utils";
import { BotIcon, UserCircleIcon } from "lucide-react";
import React from "react";

interface MessageComponentProps {
  content: string;
  isUserMessage: boolean;
}

const MessageComponent = ({
  content,
  isUserMessage,
}: MessageComponentProps) => {
  return (
    <div
      className={cn({
        "bg-zinc-800": isUserMessage,
        "bg-zinc-800/25": !isUserMessage,
      })}
    >
      <div className="px-1 py-2 sm:px-4 sm:py-3 md:p-6">
        <div className="max-w-3xl mx-auto flex items-start gap-3">
          <div
            className={cn(
              "size-10 shrink-0 aspect-square rounded-full border border-zinc-600 bg-zinc-800 flex items-center justify-center",
              {
                "bg-blue-800 border-blue-500 text-zinc-100": isUserMessage,
                "bg-green-800 border-green-500 text-zinc-100" : !isUserMessage
              }
            )}
          >
            {isUserMessage ? (
              <UserCircleIcon className="w-5 h-5" />
            ) : (
              <BotIcon className="w-5 h-5" />
            )}
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-semibold text-zinc-200">
                {isUserMessage ? "you" : "website"}
              </span>
            </div>
            <p className="text-sm font-normal py-1 text-zinc-200 ">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageComponent;
