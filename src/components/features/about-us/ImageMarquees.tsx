import { MarqueeRows } from "@/components/shared/MarqueeBlock";
import { ROW_1, ROW_2, ROW_3 } from "@/constants/team";

export const ImageMarquees = () => {
  return (
    <MarqueeRows
      rowsData={[ROW_1, ROW_2, ROW_3]}
      renderItem={(src, index) => (
        <div
          key={index}
          className="group relative h-48 w-80 shrink-0 overflow-hidden rounded-[24px] border border-black/5 bg-[#E0DBCE]/40 shadow-sm transition-transform duration-500 ease-out"
        >
          <img
            src={src}
            alt="Network member or project highlight"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
    />
  );
};
