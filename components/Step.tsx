'use client';
import { useState } from 'react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ArrowDownUp, Cog } from 'lucide-react';

interface Evidence {
  content: string;
  page_number: number;
  pdf_id: string;
  pdf_name: string | null;
  event_datetime: string | null;
}

interface Option {
  key: string;
  text: string;
  selected: boolean;
}

interface StepProps {
  number: string;
  question: string;
  options: Option[];
  decision: string;
  reasoning: string;
  evidence: Evidence[];
}

// Define the Step component
const Step: React.FC<StepProps> = ({
  number,
  question,
  options,
  decision,
  reasoning,
  evidence,
}) => {
  const [showFullReasoning, setShowFullReasoning] = useState(false);
  const [showFullEvidence, setShowFullEvidence] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleFullReasoning = () => {
    setShowFullReasoning(!showFullReasoning);
  };

  const toggleFullEvidence = () => {
    setShowFullEvidence(!showFullEvidence);
  };

  const displayedReasoning = showFullReasoning
    ? reasoning
    : reasoning.slice(0, Math.ceil(reasoning.length / 2));
  const displayedEvidence = showFullEvidence
    ? evidence
    : evidence.slice(0, Math.ceil(evidence.length / 2));

  return (
    <div className="step p-4 bg-slate-200 dark:bg-gray-800 rounded-lg my-6 shadow-lg">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Step {number}: {question}
      </h3>
      <div className="options mt-2">
        {options
          .filter(option => option.selected)
          .map(option => (
            <div className="flex items-center space-x-2 my-2" key={option.key}>
              <Checkbox id={option.key} checked={option.selected} />
              <label
                htmlFor={option.key}
                className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {option.text}
              </label>
            </div>
          ))}
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="w-[350px] space-y-2 bg-white dark:bg-slate-500 rounded-lg shadow-md mt-2"
        >
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">Other Options</h4>
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="border-slate-200 border-1"
              >
                <ArrowDownUp className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="space-y-2 px-2 pb-2">
            {options
              .filter(option => !option.selected)
              .map(option => (
                <div
                  className="rounded-lg border px-4 py-2 font-mono text-sm shadow-sm"
                  key={option.key}
                >
                  {option.text}
                </div>
              ))}
          </CollapsibleContent>
        </Collapsible>
      </div>
      <div className="grid w-full gap-2 my-3">
        <Textarea placeholder="Type your comment here." />
        <div className="flex justify-start">
          {' '}
          <Button className="w-1/6">Add comment</Button>
        </div>
      </div>
      <p className="reasoning mt-2 text-gray-900 dark:text-gray-100">
        <strong>Reasoning:</strong> {displayedReasoning}
        <br />
        <Button
          onClick={toggleFullReasoning}
          variant="outline"
          className="mt-4"
        >
          {showFullReasoning ? 'Show Less' : 'Show More'}
        </Button>{' '}
      </p>
      <div className="evidence mt-2">
        <strong className="text-gray-900 dark:text-gray-100">Evidence:</strong>
        <ul className="list-disc list-inside">
          {displayedEvidence.map(ev => (
            <li
              key={ev.pdf_id + ev.page_number}
              className="text-gray-900 dark:text-gray-100"
            >
              {ev.content}
            </li>
          ))}
        </ul>
        <Button onClick={toggleFullEvidence} variant="outline" className="mt-4">
          {showFullEvidence ? 'Show Less' : 'Show More'}
        </Button>
      </div>
    </div>
  );
};

export default Step;
