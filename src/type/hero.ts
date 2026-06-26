export type THeroContent = {
  title: string;
  desc: string;
};

export type TImageTitleHero = Pick<
  THeroContent,
  "title"
> & {
  src: string;
  alt: string;
};
