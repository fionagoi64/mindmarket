import clsx from "clsx";

export const cn = (
  ...classes: Array<string | undefined | boolean>
) => clsx(...classes);
