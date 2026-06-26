import { Link, type To } from "react-router-dom";

export const Logo = ({ to }: { to: To }) => {
  return (
    <Link
      to={to}
      className="flex items-center gap-2.5 cursor-pointer"
    >
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
    </Link>
  );
};
