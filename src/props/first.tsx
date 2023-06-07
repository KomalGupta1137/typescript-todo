interface FirstProps {
  name: string;
  lastname: string;
  onClick: () => void;
  children: React.ReactNode;
}

export const First: React.FC<FirstProps> = ({
  name,
  lastname,
  onClick,
  children,
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{lastname}</h1>
      <button onClick={onClick}>click</button>
      {children}
    </div>
  );
};
