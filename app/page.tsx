'use client';
import Inputs from '@/components/Inputs';
import Instructions from '@/components/Instructions';
import Step from '@/components/Step';
import Summary from '@/components/Summary';
import data from '@/data/example-response.json';
import { useState } from 'react';
export default function Home() {
  console.log(data);
  const [responseData, setResponseData] = useState(data);
  return (
    <>
      <Inputs />
      <Instructions />
      {responseData.steps.map(step => (
        <Step
          key={step.key}
          number={step.key}
          question={step.question}
          options={step.options}
          decision={step.decision}
          reasoning={step.reasoning}
          evidence={step.evidence}
        />
      ))}
      <Summary isMet={responseData.is_met} />
    </>
  );
}
