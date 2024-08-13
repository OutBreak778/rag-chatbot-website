import ChatWrapper from "@/components/ChatWrapper";
import ReconstructUrl from "@/components/ReconstructUrl";
import { ragChat } from "@/lib/rag-chat";
import { redis } from "@/lib/redis";
import { cookies } from "next/headers";
import React from "react";

interface pageProps {
  params: {
    url: string | string[] | undefined;
  };
}

const page = async ({ params }: pageProps) => {
    const sessionCookie = cookies().get("sessionId")?.value
  const reconstructUrl = ReconstructUrl({
    url: params.url as string[],
  });

    const sessionId = (reconstructUrl + "--" + sessionCookie).replace(/\//g, "")

  const isIndexed = await redis.sismember("indexed-urls", reconstructUrl);
  const initialMessage = await ragChat.history.getMessages({amount: 10, sessionId})


  if (!isIndexed) {
    await ragChat.context.add({
      type: "html",
      source: reconstructUrl,
      config: {
        chunkOverlap: 50,
        chunkSize: 200,
      },
    });

    await redis.sadd("indexed-urls", reconstructUrl);
  }

  return (
    <div className="relative max-h-full p-2 bg-black ">
      <div className="flex items-center justify-center px-4 sm:px-8 md:px-20 lg:mt-2">
        <ChatWrapper sessionId={sessionId} initialMessages={initialMessage}/>
      </div>
    </div>
  );
};

export default page;
