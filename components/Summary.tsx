import { Check } from 'lucide-react';
import { Button } from './ui/button';

const Summary = ({ isMet }: { isMet: boolean }) => {
  return (
    <>
      <div
        className={`p-4 rounded-lg shadow-md text-white ${isMet ? 'bg-green-500' : 'bg-red-500/80'} flex justify-between items-center`}
      >
        {isMet ? 'Condition met' : 'Condition not met'}
        <Button variant="outline" className="text-black dark:text-white">
          <Check className="h4 w-4 mr-2" />
          Submit
        </Button>
      </div>
    </>
  );
};

export default Summary;
