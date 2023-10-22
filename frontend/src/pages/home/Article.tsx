import { Link } from "react-router-dom";

interface ArticleProps {
  id: number;
  authorID: number;
  title: string;
  description: string;
  author: string;
  imageURL: string;
}

const Article = ({
  id,
  title,
  description,
  author,
  imageURL,
  authorID,
}: ArticleProps) => {
  return (
    <article className="grid grid-cols-2 md:grid-cols-none gap-3 md:gap-0 md:grid-rows-2 items-center group max-md:border-b-2 max-md:border-gray-300 max-md:pb-3">
      <div className="overflow-hidden rounded-xl h-fit aspect-[16/13] md:aspect-[16/13] lg:aspect-[16/11] max-sm:self-start">
        <Link to={`/article/${id}`}>
          <img
            className="w-[100%] h-[100%] object-cover group-hover:w-[120%] group-hover:h-[120%] transition-all duration-700 ease-in-out"
            src={imageURL}
            alt={`${title}-pic`}
          />
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <Link to={`/article/${id}`}>
          <h2 className="text-xl lg:text-2xl font-bold hover:underline transition-all duration-75 ease-in-out">
            {title}
          </h2>
        </Link>
        <p
          className="text-gray-400 text-sm"
          style={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </p>
        <p className="text-[12px] sm:text-sm">
          By{" "}
          <Link to={`/author/${authorID}`}>
            <span className="font-bold text-inherit uppercase hover:underline">
              {author}
            </span>
          </Link>
        </p>
      </div>
    </article>
  );
};

export default Article;
