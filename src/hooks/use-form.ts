import { ChangeEvent, useState } from "react"

/**
 * Универсальный хук для форм
 * @param inputValues начальные значения формы
 *
 * @returns {values, handleChange, setValues, setValue} возвращаемые значения:
 * values - объект, содержащий значение полей формы
 * handleChange - хендлер для изменения любого поля формы
 * setValues - изменение нескольких полей вручную
 * setValue - изменение конкретного поля вручную
 */
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
