type TextProps = {
  text: string;
  size?: "small" | "medium" | "large";
}
export function Text({ text, size="medium" }: TextProps) {
  let textSize = "text-base";
  switch (size) {
    case "small":
      textSize = "text-sm";
      break;
    case "large":
      textSize = "text-lg";
      break;
  }
  return (
    <p className={textSize}>{text}</p>
  )
}