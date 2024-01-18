'use client';

import { Button } from '@/components/ui/button';
import { IconArrowElbow, IconArrowRight } from '@/components/ui/icons';
import { useChat } from 'ai/react';
import { Input } from '@/components/ui/input';
import { Bot, CheckIcon, Minimize2, Twitch, Youtube } from 'lucide-react';
import BotEmptyMessege from '@/components/BotEmptyMessege';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import UserAvatar from './UserAvatar';

declare global {
  interface Window {
    MyNamespace: any;
  }
}

const ChatBot = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const isLocalhost =
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1';

  // const isLocalhost = false;

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const chatbotVariants = {
    hidden: { opacity: 0, y: 20, transition: { duration: 0.1 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.1 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.1 } },
  };

  return (
    <>
      <Button
        onClick={event => {
          event.stopPropagation();
          setIsPopupOpen(!isPopupOpen);
        }}
        className="border-1 fixed bottom-4 right-4 flex h-16 w-16 items-center justify-center
          rounded-full border bg-blue-500/20 text-black hover:bg-blue-600/30
          dark:border-blue-500 dark:text-white dark:hover:bg-blue-600"
        variant="ghost"
      >
        <Bot />
      </Button>

      {/* Add this popup */}
      {isPopupOpen ? (
        <AnimatePresence>
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={chatbotVariants}
            className="fixed bottom-16 right-2 mb-8 mr-4 h-[600px] w-[90%] max-w-[500px] rounded-lg
              z-10"
            onClick={event => event.stopPropagation()}
          >
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-2 right-2 rounded-full p-2 text-white hover:bg-slate-600/40"
            >
              <Minimize2 />
            </button>{' '}
            <div
              className="h-full border-2 border-slate-600 rounded-lg shadow-md"
              onClick={event => event.stopPropagation()}
            >
              <div className="flex h-full flex-col rounded-lg bg-white p-4 dark:bg-slate-900">
                <div className="mb-2 flex w-full justify-center"></div>
                {messages.length === 0 && <BotEmptyMessege />}
                <div className="w-full flex-1 overflow-auto">
                  <div className="w-full flex-1 space-y-4 overflow-auto p-4">
                    {messages.map(m => (
                      <div
                        key={m.id}
                        className={`flex items-center whitespace-pre-wrap ${
                          m.role === 'user' ? 'justify-start' : 'justify-end'
                        } space-around`}
                      >
                        {m.role === 'user' ? (
                          <>
                            <UserAvatar
                              image="https://github.com/shadcn.png"
                              name="Nurse"
                              className="mr-2"
                            />
                            <div className="rounded-r-lg rounded-tl-lg bg-blue-200 p-2 text-blue-700">
                              {' '}
                              {m.content}
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="rounded-l-lg rounded-tr-lg bg-gray-200 p-2 text-gray-700">
                              {' '}
                              {m.content}'
                            </div>
                            <Bot className="ml-2 h-10 w-10" />
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                {isLocalhost && (
                  <div className="mx-auto px-4  mb-4">
                    <div className="rounded-lg border bg-slate-300 dark:bg-slate-600 p-2 hover:bg-slate-600 dark:hover:bg-slate-800">
                      <h1 className="text-lg font-semibold ">
                        <Link
                          href="https://cohelm-nine.vercel.app/"
                          className="text-gray-800 dark:text-white"
                        >
                          Visit Live Version
                        </Link>
                      </h1>
                    </div>
                  </div>
                )}
                <div className="flex w-full items-center justify-center space-x-4 p-4">
                  <form
                    onSubmit={handleSubmit}
                    className="flex items-center justify-center space-x-4"
                  >
                    <Input
                      type="text"
                      disabled={isLocalhost}
                      placeholder="Type your message"
                      value={input}
                      onChange={handleInputChange}
                      className="w-[300px]"
                      onKeyDown={event => {
                        if (event.key === 'Enter') {
                          event.preventDefault();
                          handleSubmit(event as any);
                        }
                      }}
                    />

                    <Button
                      disabled={isLocalhost}
                      type="submit"
                      variant="default"
                      className="h-full"
                      onClick={event => {
                        event.preventDefault();
                        handleSubmit(event as any);
                      }}
                    >
                      Send <IconArrowRight />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      ) : null}
    </>
  );
};

export default ChatBot;
