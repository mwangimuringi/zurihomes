import Link from 'next/link'
import { type ChangeEvent } from 'react'

interface CheckboxProps {
  isChecked: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function Checkbox ({ isChecked, onChange }: CheckboxProps): JSX.Element {
  return (

    <div className="form-control flex flex-col items-center justify-center sm:flex-row sm:items-center sm:justify-between pt-5">
      <label className="label cursor-pointer flex items-center space-x-3  mb-5 sm:mb-0">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
          className="text-blue-500 checkbox bg-white" />
        <span className="label-text text-gray-700">Souhlasím se <Link href="/ochrana-osobnich-udaju" className="text-blue-500">zpracováním osobních údajů</Link></span>
      </label>
      <button type="submit" disabled={!isChecked} className="btn bg-green-500 hover:bg-green-600 border-none text-white" role="button" aria-disabled="true">Vytvořit poptávku</button>
    </div>
  )
}
