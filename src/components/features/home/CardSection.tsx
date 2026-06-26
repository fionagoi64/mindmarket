import { StackCards } from "@/components/features/home/StackCards";

export const CardSection = () => {
  return (
    <div className="flex justify-between">
      <div className="w-1/2"></div>
      <div className="w-1/2">
        <StackCards />
      </div>
    </div>
  );
};
