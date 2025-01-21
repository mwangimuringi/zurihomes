import { useRef, useState, type ChangeEvent, useEffect } from 'react'

type IPrices = Record<string, number>

type IQuantities = Record<string, number | string>

export function useOrderForm (): any {
  const [isFormSubmitted, setFormSubmitted] = useState(false)
  const [isAgreementChecked, setAgreementChecked] = useState(false)
  const [isSubmissionFailed, setSubmissionFailed] = useState(false)
  const form = useRef<HTMLFormElement>(null)
  const [total, setTotal] = useState(0)
  const prices: IPrices = {
    hard_wood_100: 2000,
    hard_wood_50: 2200,
    hard_wood_33: 2300,
    soft_wood_100: 1400,
    soft_wood_50: 1600,
    soft_wood_33: 1700
  }
  const [quantities, setQuantities] = useState<IQuantities>({
    hard_wood_100: 0,
    hard_wood_50: 0,
    hard_wood_33: 0,
    soft_wood_100: 0,
    soft_wood_50: 0,
    soft_wood_33: 0
  })

  const [personalData, setPersonalData] = useState({
    user_name: '',
    user_sureName: '',
    user_phone: '',
    user_email: '',
    user_address: '',
    user_city: '',
    user_psc: ''
  })

  const handlePersonalDataChange = (e: ChangeEvent<HTMLInputElement>): any => {
    setPersonalData({
      ...personalData,
      [e.target.name]: e.target.value
    })
  }

  const handleAgreementChange = (e: ChangeEvent<HTMLInputElement>): any => {
    setAgreementChecked(e.target.checked)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target

    setQuantities({
      ...quantities,
      [name]: value
    })

    const numericValue = value === '' ? 0 : Number(value)

    const newTotal = Object.keys(quantities).reduce((acc, key) => {
      const itemValue = key === name ? numericValue : (Number(quantities[key]) !== 0 ? Number(quantities[key]) : 0)
      return acc + (itemValue * prices[key])
    }, 0)
    setTotal(newTotal)
  }

  const resetForm = (): any => {
    setQuantities({
      hard_wood_100: 0,
      hard_wood_50: 0,
      hard_wood_33: 0,
      soft_wood_100: 0,
      soft_wood_50: 0,
      soft_wood_33: 0
    })
    setPersonalData({
      user_name: '',
      user_sureName: '',
      user_phone: '',
      user_email: '',
      user_address: '',
      user_city: '',
      user_psc: ''
    })
    setTotal(0)
    setAgreementChecked(false)
  }

  useEffect(() => {
    if (isFormSubmitted) {
      const timer = setTimeout(() => {
        setFormSubmitted(false)
      }, 5000)
      return () => { clearTimeout(timer) }
    }
  }, [isFormSubmitted])

  useEffect(() => {
    if (isSubmissionFailed) {
      const timer = setTimeout(() => {
        setSubmissionFailed(false)
      }, 5000)
      return () => { clearTimeout(timer) }
    }
  }, [isSubmissionFailed])

  return {
    isFormSubmitted,
    setFormSubmitted,
    isAgreementChecked,
    setAgreementChecked,
    isSubmissionFailed,
    setSubmissionFailed,
    form,
    total,
    setTotal,
    prices,
    quantities,
    setQuantities,
    personalData,
    setPersonalData,
    handlePersonalDataChange,
    handleAgreementChange,
    handleChange,
    resetForm
  }
}
