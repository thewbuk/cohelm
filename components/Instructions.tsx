'use client';
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
import { useState } from 'react';

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

const statuses: StepProps[] = [
  {
    value: 'backlog',
    label: 'Backlog',
  },
  {
    value: 'todo',
    label: 'Todo',
  },
  {
    value: 'in progress',
    label: 'In Progress',
  },
  {
    value: 'done',
    label: 'Done',
  },
  {
    value: 'canceled',
    label: 'Canceled',
  },
];

const Instructions = ({ steps }: { steps: Array<string> }) => {
  console.log(steps);
  const [open, setOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<StepProps | null>(null);
  return (
    <div className="flex items-center space-x-4">
      <p className="text-sm text-muted-foreground">Jump to</p>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[150px] justify-start">
            {selectedStatus ? <>{selectedStatus.label}</> : <>+ Set status</>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" side="right" align="start">
          <Command>
            <CommandInput placeholder="Change status..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {statuses.map(status => (
                  <CommandItem
                    key={status.value}
                    value={status.value}
                    onSelect={value => {
                      setSelectedStatus(
                        statuses.find(priority => priority.value === value) ||
                          null
                      );
                      setOpen(false);
                    }}
                  >
                    {status.label}
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
