import { ProcessCards } from "@/components/features/about-us/ProcessCards";
import { FeatureList } from "@/components/shared/FeatureList";
import { FEATURES } from "@/constants/feature";

export const ProcessSection = () => {
  return (
    <div>
      <div className="flex w-full justify-start">
        <h2 className="text-left">
          A Process
          <br />
          Built
        </h2>
      </div>
      <div className="flex w-full justify-end">
        <h2 className="text-right">
          Around
          <br />
          you
        </h2>
      </div>
      <ProcessCards />
      <FeatureList data={FEATURES} />
    </div>
  );
};
