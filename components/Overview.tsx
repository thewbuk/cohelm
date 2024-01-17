import React from 'react';

interface OverviewProps {
  isComplete: boolean;
  case_id: string;
  status: string;
  procedureName: string;
  cptCode: Array<string>;
  summary: string;
}

const Overview: React.FC<OverviewProps> = ({
  isComplete,
  case_id,
  status,
  procedureName,
  cptCode,
  summary,
}) => {
  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Overview
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <p className="text-gray-900 dark:text-gray-100">
          <strong>Case ID:</strong> {case_id}
        </p>
        <p className="text-gray-900 dark:text-gray-100">
          <strong>Status:</strong> {status}
        </p>
        <p className="text-gray-900 dark:text-gray-100">
          <strong>Procedure Name:</strong> {procedureName}
        </p>
        <p className="text-gray-900 dark:text-gray-100">
          <strong>CPT Codes:</strong> {cptCode.join(', ')}
        </p>
        <p className="text-gray-900 dark:text-gray-100">
          <strong>Summary:</strong> {summary}
        </p>
        <p className="text-gray-900 dark:text-gray-100">
          <strong>Procedure Complete:</strong> {isComplete ? 'Yes' : 'No'}
        </p>
      </div>
    </div>
  );
};

export default Overview;
