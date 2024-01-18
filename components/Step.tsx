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
import { ArrowBigRightDash, ArrowDownUp, CircleOff, Cog } from 'lucide-react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Label } from './ui/label';
import { Input } from './ui/input';

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
  isFinal: boolean;
  nextStep: string;
}

// Define the Step component
const Step: React.FC<StepProps> = ({
  number,
  question,
  options,
  decision,
  reasoning,
  evidence,
  isFinal,
  nextStep,
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
      <div className="flex justify-between tems-center">
        {' '}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Step {number}: {question}
        </h3>
        <div className="flex space-x-2">
          <Button
            variant="default"
            size="sm"
            className="w-flex items-center space-x-1"
            disabled={isFinal}
          >
            <span className="">Next step</span>
            <ArrowBigRightDash className="h-4 w-4" />
          </Button>
          <div className="flex">
            <Button
              variant="default"
              size="sm"
              className={`p-2 rounded ${isFinal ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'} w-flex items-center space-x-3`}
            >
              {isFinal ? 'Final decision' : 'Not final decision'}
              <CircleOff className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-2">
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
        <div className="flex items-center space-x-3 mt-2">
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-[350px] space-y-2 bg-white dark:bg-slate-500 rounded-lg shadow-md"
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
      </div>
      <div className="grid w-full gap-2 my-3">
        <Textarea placeholder="Type your comment here." />
        <div className="flex justify-start">
          {' '}
          <Button className="w-1/6">Add comment</Button>
        </div>
      </div>
      <strong>Reasoning:</strong> <br />
      {displayedReasoning}
      <p className="reasoning mt-2 text-gray-900 dark:text-gray-100">
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
            <div className="flex items-center justify-between">
              <li
                key={ev.pdf_id + ev.page_number}
                className="text-gray-900 dark:text-gray-100"
              >
                {ev.content}
              </li>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Sources</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                      Make changes to your profile here. Click save when you're
                      done.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                    <div className="flex items-center gap-4">
                      <Label htmlFor="pdf_name" className="text-right w-16">
                        PDF Name:
                      </Label>
                      <span className="text-gray-900 dark:text-gray-100">
                        {ev.pdf_name || 'N/A'}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Label htmlFor="pdf_id" className="text-right w-16">
                        PDF ID:
                      </Label>
                      <span className="text-gray-900 dark:text-gray-100">
                        {ev.pdf_id || 'N/A'}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Label htmlFor="page_number" className="text-right w-16">
                        Page Number:
                      </Label>
                      <span className="text-gray-900 dark:text-gray-100">
                        {ev.page_number || 'N/A'}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Label
                        htmlFor="event_datetime"
                        className="text-right w-16"
                      >
                        Event Datetime:
                      </Label>
                      <span className="text-gray-900 dark:text-gray-100">
                        {ev.event_datetime
                          ? new Date(ev.event_datetime).toLocaleDateString()
                          : 'N/A'}
                      </span>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
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
