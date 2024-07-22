interface TextDisplayProps {
  text: string;
  font: string;
  size: number;
  color: string;
}

export const TextDisplay: React.FC<TextDisplayProps> = ({
  text,
  font,
  size,
  color,
}) => {
  return (
    <div
      className='p-4'
      style={{
        fontFamily: font,
        fontSize: `${size}px`,
        color: color,
      }}
    >
      {text}
    </div>
  );
};
