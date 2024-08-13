import React from "react";
import { type Message as TMessage } from "ai";
import MessageComponent from "./MessageComponent";
import { MessageSquareDotIcon } from "lucide-react";

interface MessagesProps {
  messages: TMessage[];
}

const Messages = ({ messages }: MessagesProps) => {
  return (
    <div className="flex max-h-[calc(100vh - 3.5rem - 7rem)] flex-1 flex-col">
      {messages
        ? messages.map((item, index) => (
            <MessageComponent
              key={index}
              content={item.content}
              isUserMessage={item.role === "user"}
            />
          ))
        : null}
    </div>
  );
};

export default Messages;
