interface StepProps {
  number: string;
  question: string;
  options: Array<{
    key: string;
    text: string;
    selected: boolean;
  }>;
  decision: string;
  reasoning: string;
  evidence: Array<{
    key: string;
    content: string;
    selected: boolean;
  }>;
}
const Step: React.FC<StepProps> = ({
  number,
  question,
  options,
  decision,
  reasoning,
  evidence,
}) => {
  return (
    <div className="step p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
        Step {number}
      </h3>

      <p className="mb-2 text-gray-900 dark:text-gray-100">
        <strong className="font-semibold">Question:</strong> {question}
      </p>

      {/* Render options */}
      <div className="options grid grid-cols-1 gap-2 mb-2">
        {options.map(opt => (
          <div
            className={`p-2 rounded-lg ${opt.selected ? 'bg-blue-500 text-white' : 'bg-white dark:bg-gray-700 dark:text-gray-300'}`}
            key={opt.key}
          >
            {opt.text}
          </div>
        ))}
      </div>

      {/* Other step info */}
      <p className="mb-1 text-gray-900 dark:text-gray-100">
        <strong className="font-semibold">Decision:</strong> {decision}
      </p>
      <p className="mb-1 text-gray-900 dark:text-gray-100">
        <strong className="font-semibold">Reasoning:</strong> {reasoning}
      </p>
      <p className="mb-1 text-gray-900 dark:text-gray-100">
        <strong className="font-semibold">Evidence:</strong>{' '}
        {evidence.map(e => e.content)}
      </p>
    </div>
  );
};

export default Step;
