const Step = ({ number, question, options, decision, reasoning, evidence }) => {
  return (
    <div className="step">
      <h3>Step {number}</h3>

      <p>
        <strong>Question:</strong> {question}
      </p>

      {/* Render options */}
      <div className="options">
        {options.map(opt => (
          <div className={opt.selected ? 'selected' : ''} key={opt.key}>
            {opt.text}
          </div>
        ))}
      </div>

      {/* Other step info */}
      <p>Decision: {decision}</p>
      <p>Reasoning: {reasoning}</p>
      <p>Evidence: {evidence.map(e => e.content)}</p>
    </div>
  );
};

export default Step;
