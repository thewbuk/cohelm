import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
const Inputs = () => {
  return (
    <main className="flex   justify-around p-24">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="picture">Medical Record</Label>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input id="picture" type="file" />
          <Button type="submit">Submit</Button>
        </div>
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="picture">Guidelines </Label>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input id="picture" type="file" />
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </main>
  );
};

export default Inputs;
