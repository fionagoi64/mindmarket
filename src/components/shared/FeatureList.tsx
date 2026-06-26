type TFeatureList = {
  data: string[];
};

export const FeatureList = ({ data }: TFeatureList) => {
  return (
    <ul className="flex items-center justify-between">
      {data.map((item, idx) => (
        <li key={`${item}-${idx}`} className="w-1/3 grid place-items-center">
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};
