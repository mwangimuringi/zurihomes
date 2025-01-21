import { type ChangeEvent } from 'react'

type IQuantities = Record<string, number>

interface IOrderWoodProps {
  prices: Record<string, number>
  quantities: IQuantities
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const OrderWood: React.FC<IOrderWoodProps> = ({ prices, quantities, onChange }) => {
  const hardWoodKeys = ['hard_wood_100', 'hard_wood_50', 'hard_wood_33']
  const softWoodKeys = ['soft_wood_100', 'soft_wood_50', 'soft_wood_33']

  const labels: Record<string, string> = {
    hard_wood_100: 'Štípaná polena 100 cm',
    hard_wood_50: 'Štípaná polínka 50 cm',
    hard_wood_33: 'Štípaná polínka 33 cm',
    soft_wood_100: 'Štípaná polena 100 cm',
    soft_wood_50: 'Štípaná polínka 50 cm',
    soft_wood_33: 'Štípaná polínka 33 cm'
  }

  return (
        <div className="flex flex-wrap -mx-2">
            <div className="w-full lg:w-1/2 px-2">
                <h2 className="block text-black text-xl font-bold mb-4">TVRDÉ PALIVOVÉ DŘEVO</h2>
                {hardWoodKeys.map(key => (
                    <div key={key} className="mb-4">
                        <div className="flex justify-between">
                            <label className="text-gray-700 text-sm font-bold mb-2">{labels[key]}</label>
                            <span className="text-gray-700 text-sm mb-2">{prices[key]} Kč</span>
                        </div>
                        <input
                            type="text"
                            value={quantities[key]}
                            name={key}
                            onChange={onChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                ))}
            </div>
            <div className="w-full lg:w-1/2 px-2">
                <h2 className="block text-black text-xl font-bold mb-4">MĚKKÉ PALIVOVÉ DŘEVO</h2>
                {softWoodKeys.map(key => (
                    <div key={key} className="mb-4">
                        <div className="flex justify-between">
                            <label className="text-gray-700 text-sm font-bold mb-2">{labels[key]}</label>
                            <span className="text-gray-700 text-sm mb-2">{prices[key]} Kč</span>
                        </div>
                        <input
                            type="text"
                            value={quantities[key]}
                            name={key}
                            onChange={onChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                ))}
            </div>
        </div>

  )
}

export default OrderWood
