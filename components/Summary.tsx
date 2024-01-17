const Summary = ({ isMet }: { isMet: boolean }) => {
  return (
    <div
      className={`p-4 rounded-lg shadow-md text-white ${isMet ? 'bg-green-500' : 'bg-red-500'}`}
    >
      {isMet ? 'Condition met' : 'Condition not met'}
    </div>
  );
};

export default Summary;
