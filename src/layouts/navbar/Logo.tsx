export const Logo = () => {
  return (
    <div className="flex items-center gap-2.5 cursor-pointer">
      <img
        src="/images/logo.svg"
        alt="MindMarket logo"
        className="w-8 h-auto"
      />
      <img
        src="/images/logo-text.svg"
        alt="MindMarket text"
        className="w-32 h-auto"
      />
    </div>
  );
};
