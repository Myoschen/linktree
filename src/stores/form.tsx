import { createContext, type Dispatch, type ReactNode, type SetStateAction, useState } from 'react'

import type { Linktree } from '@/lib/types'

const defaultValue: Linktree = {
  name: '',
  about: '',
  email: '',
  photo: '',
  socialLinks: {
    facebook: '',
    instagram: '',
    x: '',
    youtube: '',
    twitch: '',
    github: '',
    linkedin: '',
  },
  links: [],
}

type FormState = {
  formData: Linktree
  setFormData: Dispatch<SetStateAction<Linktree>>
  resetFormData: () => void
}

export const FormContext = createContext<FormState>({
  formData: defaultValue,
  setFormData: () => {},
  resetFormData: () => {},
})

interface FormProviderProps {
  children: ReactNode
}

export default function FormProvider({ children }: FormProviderProps) {
  const [formData, setFormData] = useState<Linktree>(defaultValue)

  const resetFormData = () => {
    setFormData(defaultValue)
  }

  return (
    <FormContext.Provider value={{ formData, setFormData, resetFormData }}>
      {children}
    </FormContext.Provider>
  )
}
