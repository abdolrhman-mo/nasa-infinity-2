import { useState } from "react"
import Label from "../forms/components/label"
import Input from "../forms/components/input"

export default function Search({
  onSearch,
  placeholder,
}: {
  onSearch: (query: string) => void
  placeholder?: string
}) {
  const [query, setQuery] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    onSearch(e.target.value)
  }

  return (
    <div className="mb-4 flex space-x-2 text-sm">
      <Label className={'!mb-0'}>Search:</Label>
      <Input 
        value={query} 
        onChange={handleChange} 
        placeholder={placeholder} 
      />
    </div>
  )
}