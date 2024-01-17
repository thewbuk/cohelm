import { Separator } from './ui/separator';

const Path = () => {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Path taken</h4>
        <p className="text-sm text-muted-foreground">
          Step by step process of the model
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>1</div>
        <Separator orientation="vertical" />
        <div>2</div>
        <Separator orientation="vertical" />
        <div>3</div>
      </div>
    </div>
  );
};

export default Path;
