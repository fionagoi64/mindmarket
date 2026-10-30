import { BrandMarquees } from "@/components/features/home/BrandMarquees";
import { Link } from "react-router-dom";

type TFeaturedArticle = {
  title: string;
  to: string;
  image: string;
  alt: string;
  tags: string[];
};

const FEATURED_ARTICLES: TFeaturedArticle[] = [
  {
    title: "How Much Does Qualitative Market Research Cost in 2026?",
    to: "/articles/how-much-does-market-research-cost",
    image: "/images/articles/cost-guide.webp",
    alt: "A brand director reads a research quote at a sunlit desk, a plant on the windowsill",
    tags: [],
  },
  {
    title: "The Complete Guide to International Qualitative Research 2026",
    to: "/articles/international-qualitative-research-guide",
    image: "/images/articles/international-guide.webp",
    alt: "Diverse research team in cross-cultural focus group discussion around wooden table with natural daylight",
    tags: ["Worldwide", "Educational", "Methodology"],
  },
  {
    title: "How to Run Focus Groups Across Multiple Countries",
    to: "/articles/international-focus-groups-guide",
    image: "/images/articles/focus-group-guide.webp",
    alt: "Diverse participants engaged in focus group discussion around table with natural lighting",
    tags: ["Worldwide", "Methodology", "Educational"],
  },
  {
    title: "How to Choose the Right Qualitative Research Methodology",
    to: "/articles/how-to-choose-qualitative-methodology",
    image: "/images/articles/desk-research.webp",
    alt: "Research team conducting desk research and analysing existing data on laptop",
    tags: ["Worldwide", "Educational", "Methodology"],
  },
];

export const GallerySection = () => {
  return (
    <div className="rounded-lg bg-beige-500">
      {/* Featured Articles Bento Grid */}
      <div className="c-featured-articles">
        <h2 className="sr-only">Featured Articles</h2>
        <ul className="c-featured-articles_list">
          {FEATURED_ARTICLES.map((article) => (
            <li
              key={article.to}
              className="c-featured-articles_item"
            >
              <div className="c-article-card">
                <div className="c-article-card_image-container">
                  <div className="c-article-card_tags-container">
                    {article.tags.map((tag) => (
                      <div
                        key={tag}
                        className="body-sm rounded-3xl bg-white px-2.5 py-1.5 text-charcoal"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                  <picture className="c-article-card_picture block h-full w-full">
                    <img
                      src={article.image}
                      alt={article.alt}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </picture>
                </div>
                <div className="c-article-card_content">
                  <h3 className="c-article-card_title">{article.title}</h3>
                </div>
                <Link
                  to={article.to}
                  className="c-article-card_link"
                >
                  <span className="sr-only">
                    Read more about {article.title}
                  </span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Brands Marquee Section */}
      <div className="c-brands-section">
        <div className="container">
          <div className="grid grid-cols-6 gap-gutter md:grid-cols-16">
            <div className="col-span-full md:col-start-2 md:col-span-14">
              <h2 className="c-brands-section_title">
                Brands that choose MindMarket
              </h2>
            </div>
          </div>
        </div>
        <div className="c-brands-section_rails">
          <BrandMarquees />
        </div>
      </div>
    </div>
  );
};
