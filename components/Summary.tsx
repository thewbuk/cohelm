import { Button } from './ui/button';

const Summary = ({ isMet }: { isMet: boolean }) => {
  return (
    <>
      <div
        className={`p-4 rounded-lg shadow-md text-white ${isMet ? 'bg-green-500' : 'bg-red-500/80'} flex justify-between items-center`}
      >
        {isMet ? 'Condition met' : 'Condition not met'}
        <Button variant="outline">Submit</Button>
      </div>
    </>
  );
};

export default Summary;
