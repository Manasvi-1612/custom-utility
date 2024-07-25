import { Select, SelectItem, SelectList, SelectTrigger } from "./components/select"

function App() {

  return (
    <>
      <Select className="mx-auto mt-10">
        <SelectTrigger>Select an option</SelectTrigger>
        <SelectList>
          <SelectItem>Option 1</SelectItem>
          <SelectItem>Option 2</SelectItem>
          <SelectItem>Option 3</SelectItem>
        </SelectList>
      </Select>
      <Select className="mx-auto mt-10" value="Option 1" onValueChange={(value) => console.log(value)}>
        <SelectTrigger>Select an option</SelectTrigger>
        <SelectList>
          <SelectItem>Option 1</SelectItem>
          <SelectItem>Option 2</SelectItem>
          <SelectItem>Option 3</SelectItem>
        </SelectList>
      </Select>
    </>
  )
}

export default App
