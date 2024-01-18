'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

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
  key: string;
  number: string;
  question: string;
  options: Option[];
  decision: string;
  reasoning: string;
  evidence: Evidence[];
}

const Instructions = ({ steps }: { steps: StepProps[] }) => {
  const [open, setOpen] = useState(false);
  const [selectedStep, setSelectedStep] = useState<StepProps | null>(null);

  return (
    <div className="flex items-center space-x-4 mb-8">
      <p className="text-sm text-muted-foreground">Jump to</p>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="min-w-[150px] justify-start text-center flex justify-center"
          >
            {selectedStep ? <>{selectedStep.question}</> : <>Select Step</>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" side="right" align="start">
          <Command>
            <CommandInput placeholder="Select Step..." />
            <CommandList>
              {steps.length === 0 && (
                <CommandEmpty>No steps found.</CommandEmpty>
              )}
              <CommandGroup>
                {steps.map((step, index) => (
                  <CommandItem
                    key={step.number}
                    value={step.number}
                    onSelect={() => {
                      setSelectedStep(step);
                      setOpen(false);
                    }}
                  >
                    Step {index + 1}: {step.question}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Instructions;
