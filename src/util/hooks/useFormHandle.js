import { useState } from 'react'

function useFormHandle(payload) {
  const [form, setForm] = useState(payload)

  const handleChange = (e) => {
    let { name, value } = e.target
    setForm({...form, [name]: value})
  }

  return [form, handleChange]

}

export default useFormHandle