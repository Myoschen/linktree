import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

import type { LinktreeData } from '@/types'

type FormContextType = {
  formData: LinktreeData
  setFormData: Dispatch<SetStateAction<LinktreeData>>
}

const FormContext = createContext<FormContextType | undefined>(undefined)

const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<LinktreeData>({
    name: '',
    about: '',
    photo: '',
    facebook: '',
    instagram: '',
    twitter: '',
    youtube: '',
    twitch: '',
    email: '',
    github: '',
    linkedin: '',
    links: [],
  })

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  )
}

const useFormContext = () => {
  const context = useContext(FormContext)

  if (context === undefined) {
    throw new Error('useFormContext must be used within FormProvider.')
  }

  return context
}

export { FormProvider, useFormContext }
