type Props = {
  icon: string;
  category: string;
  title: string;
  description: string;
  href?: string;
  status?: string;
  tone: string;
};

export default function ProductCard({
  icon,
  category,
  title,
  description,
  href,
  status,
  tone
}: Props) {
  return (
    <article className="productCard">
      <div className={`productVisual ${tone}`} aria-hidden="true">
        {icon}
      </div>
      <div className="productBody">
        <span className="eyebrow">{category}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        {href ? (
          <a className="textLink" href={href} target="_blank" rel="noreferrer">
            View on Amazon →
          </a>
        ) : (
          <span className="comingSoon">{status ?? "Coming soon"}</span>
        )}
      </div>
    </article>
  );
}
