import type { Dispatch, SetStateAction } from 'react'

const tipOptions = [
  {
    id: 'tip-10',
    value: 0.1,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: 0.2,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: 0.5,
    label: '50%'
  }
]
type TipsPercentageFormProps = {
  setTip: Dispatch<SetStateAction<number>>
  tip:number
}
export default function TipsPercentageForm ({
  setTip,
  tip
}: TipsPercentageFormProps) {
  return (
    <div>
      <h3 className='font-black text-2xl'>Tips</h3>

      <form>
        {tipOptions.map(tipOption => (
          <div key={tipOption.id} className='flex gap-10'>
            <label htmlFor=''>{tipOption.label}</label>

            <input
              id={tipOption.id}
              type='radio'
              name='tip'
              value={tipOption.value}
              checked={tipOption.value === tip}
              onChange={e => setTip(+e.target.value)}
            />
          </div>
        ))}
      </form>
    </div>
  )
}
