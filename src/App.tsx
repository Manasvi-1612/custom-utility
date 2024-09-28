import { useState } from "react";
import { Button } from "./components/button";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/dialog";
import {
  Select,
  SelectItem,
  SelectList,
  SelectTrigger,
} from "./components/select";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogSubmit,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./components/alert-dialog";

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div className="w-max mx-auto mt-10">
        <h1 className="text-lg font-semibold text-center">Button</h1>
        <div className="flex items-center gap-2">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
          <Button variant="outline">Outline</Button>
          <Button size="small">Small</Button>
          <Button size="icon">Icon</Button>
        </div>
      </div>

      <div className="w-max mx-auto mt-10">
        <h1 className="text-lg font-semibold text-center">Select Box</h1>
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

      <div className="w-max mx-auto mt-10">
        <h1 className="text-lg font-semibold text-center">Dialog</h1>
        <Dialog isOpen={isDialogOpen} setIsOpen={setIsDialogOpen}>
          <DialogTrigger>Open Dialog</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog title</DialogTitle>
              <DialogDescription>
                This is dialog description...
              </DialogDescription>
            </DialogHeader>
            <DialogBody>
              <p>Dialog body...</p>
            </DialogBody>
            <DialogFooter>
              <DialogClose>
                <Button>Close</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="w-max mx-auto mt-10">
        <h1 className="text-lg font-semibold text-center">Alert Dialog</h1>
        <AlertDialog>
          <AlertDialogTrigger>Open Alert Dialog</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Title</AlertDialogTitle>
              <AlertDialogDescription>description</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogBody>Alert dialog body...</AlertDialogBody>

            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogSubmit>Submit</AlertDialogSubmit>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
}

export default App;
