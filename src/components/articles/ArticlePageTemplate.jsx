// /src/components/articles/ArticlePageTemplate
//

import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "../../schemas";

//components
import { useParams } from "react-router-dom";
import SEOMeta from "../seo/SEOMeta";
import ArticleHeader from "./ArticleHeader";
import ArticleBody from "./ArticleBody";
import ArticleFooter from "./ArticleFooter";

// Import the individual article JSON files
import articles from "../../assets/data/articles"; // this is your index exporting all articles

export default function ArticlePageTemplate() {
  const { slug } = useParams();

  const articleData = articles.find((a) => a.slug === slug);
  if (!articleData) return <div>Article not found.</div>;

  return (
    <>
      {/* SEO and Schemas */}
      <div>
        <SEOMeta
          title={articleData.headline}
          description={articleData.description}
          keywords={articleData.tags.join(", ")}
          url={articleData.mainEntityOfPage}
          image={articleData.image}
          twitterHandle="@RushrashInc"
        />

        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://rushrashinc.com" },
            { name: "Articles", url: "/articles" },
            { name: articleData.headline, url: articleData.mainEntityOfPage },
          ]}
        />
      </div>

      <div>
        <div>
          {/* Image header + metadata row */}
          <ArticleHeader article={articleData} />
        </div>

        {/* Markdown content */}
        <div>
          <ArticleBody contentPath={articleData.content} />
        </div>

        <div>
          <ArticleFooter
            relatedArticles={articleData.relatedArticles}
            relatedProduct={articleData.relatedProduct}
          />
        </div>
      </div>
    </>
  );
}
