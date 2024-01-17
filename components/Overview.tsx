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
          <strong>Case ID:</strong> &nbsp; {case_id}
          <Separator orientation="vertical" />
          <strong>Status:</strong> &nbsp; {status}
          <Separator orientation="vertical" />
          <strong>Procedure Name:</strong> &nbsp; {procedureName}
          <Separator orientation="vertical" />
          <strong>Treatment codes:</strong> &nbsp; {cptCode.join(', ')}
          <Separator orientation="vertical" />
          <strong>Procedure Complete:</strong> &nbsp;{' '}
          {isComplete ? 'Yes' : 'No'}
        </div>
      </div>

      <p className="text-gray-900 dark:text-gray-100 border-slate-800 rounded-md border-1">
        <strong>Summary:</strong> {summary}
      </p>
    </div>
  );
};

export default Overview;
