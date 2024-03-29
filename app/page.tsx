'use client';
import Inputs from '@/components/Inputs';
import Instructions from '@/components/Instructions';
import Overview from '@/components/Overview';
import Status from '@/components/Status';
import Step from '@/components/Step';
import Summary from '@/components/Summary';
import data from '@/data/example-response.json';
import { useState } from 'react';
export default function Home() {
  const [responseData, setResponseData] = useState(data);

  return (
    <>
      <Inputs />
      <Instructions
        steps={responseData.steps.map(step => ({ ...step, number: step.key }))}
      />
      <Overview
        isComplete={responseData.is_complete}
        case_id={responseData.case_id}
        status={responseData.status}
        procedureName={responseData.procedure_name}
        cptCode={responseData.cpt_codes}
        summary={responseData.summary}
      />{' '}
      {responseData.steps.map(step => (
        <Step
          key={step.key}
          number={step.key}
          question={step.question}
          options={step.options}
          decision={step.decision}
          reasoning={step.reasoning}
          evidence={step.evidence}
          nextStep={step.next_step}
          isFinal={step.is_final}
        />
      ))}
      <Summary isMet={responseData.is_met} />
    </>
  );
}
