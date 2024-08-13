import React from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { type useChat } from "ai/react";

type HandleInputChange = ReturnType<typeof useChat>["handleInputChange"];
type HandleSubmit = ReturnType<typeof useChat>["handleSubmit"];
type SetInput = ReturnType<typeof useChat>["setInput"];

interface ChatFormProps {
  input: string;
  handleInputChange: HandleInputChange;
  handleSubmit: HandleSubmit;
  setInput: SetInput;
}

const ChatForm = ({
  input,
  handleInputChange,
  handleSubmit,
  setInput,
}: ChatFormProps) => {
  return (
    <div className="z-10 bg-zinc-900 relative bottom-0 left-0 w-full">
      <div className="mx-2 flex flex-row gap-3 md:mx-4 lg:mx-auto lg:max-w-5xl xl:max-w-7xl">
        <div className="relative flex h-full flex-1 items-strech md:flex-col">
          <div className="flex flex-col w-full flex-grow p-4">
            <form
              className="relative flex flex-col md:flex md:flex-row items-center gap-3"
              onSubmit={handleSubmit}
            >
              <Textarea
                onChange={handleInputChange}
                value={input}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(), setInput("");
                  }
                }}
                autoFocus
                placeholder="Enter your query here..."
                className="resize-none text-zinc-100 bg-zinc-800 rounded-xl text-base outline-none border-none"
              />
              <Button
              size="lg"
                variant="outline"
                className="z-10 border border-border hidden md:block bg-zinc-100 absolute bottom-5 right-2"
              >
                <div className="flex items-center justify-center">
                  <Send className="w-6 h-6 font-bold mr-3" />
                </div>
              </Button>
            </form>
            <Button
              variant="outline"
              className="z-10 border border-border block md:hidden bg-zinc-100 aw-full mt-2 md:py-8"
            >
              <div className="flex items-center justify-center">
                <Send className="w-6 h-6 font-bold mr-3" />
                <span className="block md:hidden text-zinc-900 text-lg">
                  Send
                </span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatForm;
