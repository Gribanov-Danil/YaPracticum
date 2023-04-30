import { ChangeEvent, useState } from "react"

export function useForm<T extends object>(inputValues: T) {
  const [values, setValues] = useState<T>(inputValues)
  const setValue = (name: string, value: string) => {
    setValues({ ...values, [name]: value })
  }
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { value, name } = event.target
    setValues({ ...values, [name]: value })
  }
  return { values, handleChange, setValues, setValue }
}