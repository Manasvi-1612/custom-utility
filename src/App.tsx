import { Button } from "./components/button";
import {
  Select,
  SelectItem,
  SelectList,
  SelectTrigger,
} from "./components/select";

function App() {
  return (
    <>
      <div className="w-max mx-auto mt-10">
        <h1 className="text-lg font-semibold">Button</h1>
        <div className="flex items-center gap-2">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="outline">Outline</Button>
          <Button size="small">Small</Button>
          <Button size="icon">Icon</Button>
        </div>
      </div>

      <div className="w-max mx-auto mt-10 ">
        <h1 className="text-lg font-semibold">Select Box</h1>
        <div className="flex gap-2">
          <Select>
            <SelectTrigger>Select an option</SelectTrigger>
            <SelectList>
              <SelectItem>Option 1</SelectItem>
              <SelectItem>Option 2</SelectItem>
              <SelectItem>Option 3</SelectItem>
            </SelectList>
          </Select>
          <Select
            value="Option 1"
            onValueChange={(value) => console.log(value)}
          >
            <SelectTrigger>Select an option</SelectTrigger>
            <SelectList>
              <SelectItem>Option 1</SelectItem>
              <SelectItem>Option 2</SelectItem>
              <SelectItem>Option 3</SelectItem>
            </SelectList>
          </Select>
        </div>
      </div>
    </>
  );
}

export default App;
