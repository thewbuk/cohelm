'use client';
import { useState } from 'react';
import { Button } from './ui/button';
import { IconArrowRight } from './ui/icons';

const exampleMessages = [
  {
    heading: 'What is this medical term?',
    message: `What is "cardiology"?`,
  },
  {
    heading: 'Summarize this medical study',
    message: 'Summarize the following medical study for a 2nd grader: \n',
  },
  {
    heading: 'Explain this medical procedure',
    message: `Explain the process of a "coronary bypass surgery": \n`,
  },
];

const BotEmptyMessege = () => {
  const [formValue, setFormValue] = useState('');
  return (
    <div className="mx-auto px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold text-gray-800 dark:text-white">
          Welcome to Co:Helm Medical AI Chatbot!
        </h1>
        <p className="mb-2 leading-normal text-gray-600 dark:text-white">
          This is an open source AI chatbot that interacts with medical
          information.
        </p>
        <p className="leading-normal text-gray-600 dark:text-white">
          You can start a conversation here or try the following medical
          examples:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base text-blue-500 hover:text-blue-700"
              onClick={() => setFormValue(message.message)}
            >
              <IconArrowRight className="mr-2" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BotEmptyMessege;
