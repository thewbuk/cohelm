import React from 'react';
import { Separator } from './ui/separator';

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
      <div className="pb-6">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Overview
          </h1>{' '}
          <p className="text-sm text-muted-foreground">Patient Overview</p>
        </div>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <strong>Case ID:</strong>
            <span className="rounded-md bg-blue-300/70 p-2">{case_id}</span>
          </div>
          <Separator
            className="dark:bg-white  flex justify-start"
            orientation="vertical"
          />
          <div className="flex items-center space-x-2">
            <strong>Status:</strong>
            <span className="rounded-md bg-blue-300/70 p-2">{status}</span>
          </div>
          <Separator
            className="dark:bg-white flex justify-start"
            orientation="vertical"
          />
          <div className="flex items-center space-x-2">
            <strong>Procedure Name:</strong>
            <span className="rounded-md bg-blue-300/70 p-2">
              {procedureName}
            </span>
          </div>
          <Separator
            className="dark:bg-white flex justify-start"
            orientation="vertical"
          />
          <div className="flex items-center space-x-2">
            <strong>Treatment codes:</strong>
            <span className="rounded-md bg-blue-300/70 p-2">
              {cptCode.join(', ')}
            </span>
          </div>
          <Separator
            className="dark:bg-white flex justify-start"
            orientation="vertical"
          />
          <div className="flex items-center space-x-2">
            <strong>Procedure Complete:</strong>
            <span className="rounded-md bg-blue-300/70 p-2">
              {isComplete ? 'Yes' : 'No'}
            </span>
          </div>
        </div>
      </div>

      <p className="text-gray-900 dark:text-gray-100 border-slate-800 rounded-md border-1">
        <strong>Summary:</strong> {summary}
      </p>
    </div>
  );
};

export default Overview;
