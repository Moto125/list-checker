import { Text } from "./Text"

type RadioButtonProps = {
  list: {
    id:  string;
    label: string;
  }[]
  onChange: (id: string) => void
}
export function RadioButtons({ list, onChange }: RadioButtonProps) {
  return (
    <div>
      {
        list.map((option, idx) => (
          <div key={idx} className="flex items-center justify-start gap-2">
            <input type="radio" value={option.id} onChange={() => onChange(option.id)}/>
            <Text text={option.label} />
          </div>
        ))
      }
    </ div>
  )
}