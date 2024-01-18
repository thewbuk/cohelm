'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import dynamic from 'next/dynamic';

const PDFReader = dynamic(() => import('../components/PDFReader'), {
  ssr: false,
});

const Inputs = () => {
  const [medicalRecord, setMedicalRecord] = useState(null);
  const [guidelines, setGuidelines] = useState(null);
  const [uploadProgress, setUploadProgress] = useState({
    medicalRecord: 0,
    guidelines: 0,
  });

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFile: {
      (value: React.SetStateAction<null>): void;
      (value: React.SetStateAction<null>): void;
      (arg0: any): void;
    },
    type: string
  ) => {
    const file = (e.target.files as FileList)[0];
    if (file) {
      setFile(file);
      simulateUpload(type);
    }
  };

  const simulateUpload = (type: string) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(prev => ({ ...prev, [type]: progress }));

      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 1000);
  };

  const handleSubmit = (file: null, type: string) => {
    console.log(`Submitting ${type}`, file);
    simulateUpload(type);
  };

  return (
    <main className="flex justify-around p-24">
      <div className="grid w-full max-w-xl items-center gap-1.5">
        <Label htmlFor="medicalRecord">Medical Record</Label>
        <div className="flex w-full max-w-xl items-center space-x-2">
          <Input
            id="medicalRecord"
            type="file"
            onChange={e =>
              handleFileChange(e, setMedicalRecord, 'medicalRecord')
            }
          />
          <Button
            type="button"
            onClick={() => handleSubmit(medicalRecord, 'medicalRecord')}
          >
            Submit
          </Button>
          <PDFReader type="medicalRecord" />
        </div>
        <Progress value={uploadProgress.medicalRecord} className="w-full" />
      </div>

      <div className="grid w-full max-w-lg items-center gap-1.5">
        <Label htmlFor="guidelines">Guidelines</Label>
        <div className="flex w-full max-w-lg items-center space-x-2">
          <Input
            id="guidelines"
            type="file"
            onChange={e => handleFileChange(e, setGuidelines, 'guidelines')}
          />
          <Button
            type="button"
            onClick={() => handleSubmit(guidelines, 'guidelines')}
          >
            Submit
          </Button>
          <PDFReader type="guidelines" />
        </div>
        <Progress value={uploadProgress.guidelines} className="w-full" />
      </div>
    </main>
  );
};

export default Inputs;
