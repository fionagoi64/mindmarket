import { RiveAnimation } from "@/components/shared/RiveAnimation";

type TServiceItem = {
  src: string;
  title: string;
  desc: string;
};

type TServiceCardsProps = {
  data: TServiceItem[];
};

export const ServiceCards = ({
  data,
}: TServiceCardsProps) => {
  return (
    <div className="flex justify-between gap-24">
      {data.map((item) => (
        <div
          key={item.title}
          className="flex flex-col gap-5 w-1/2 bg-white p-10"
        >
          <RiveAnimation
            width={116}
            height={116}
            src={item.src}
          />
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
};
