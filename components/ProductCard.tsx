type Props = {
  image: string;
  category: string;
  title: string;
  description: string;
  href?: string;
  status?: string;
};

export default function ProductCard({
  image,
  category,
  title,
  description,
  href,
  status,
}: Props) {
  return (
    <article className="productCard">

      <div className="productImage">
        <img
          src={image}
          alt={title}
          loading="lazy"
        />
      </div>

      <div className="productBody">

        <span className="eyebrow">
          {category}
        </span>

        <h3>{title}</h3>

        <p>{description}</p>

        {href ? (
          <a
            className="textLink"
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            View Product →
          </a>
        ) : (
          <span className="comingSoon">
            {status ?? "Coming Soon"}
          </span>
        )}

      </div>

    </article>
  );
}
