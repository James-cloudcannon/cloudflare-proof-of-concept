import './_related-posts.scss';

export default function PostSummary({ post }) {
  const {
    data: { title, excerpt, author, date, tags },
    slug,
  } = post;
  const dateObj = new Date(date);
  const formattedDate = dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return (
    <article className="related-posts">
      <p className="related-posts__date">{formattedDate}</p>
      <div className="related-posts__wrapper">
        <a href={`/blog/${slug}`} className="related-posts__wrapper__heading">
          <h2>{title}</h2>
        </a>
        <p className="related-posts__wrapper__excerpt">{excerpt}</p>
        <p className="related-posts__wrapper__author">
          By {author.map((authorName, i) => (
            <a href={`/blog/author/${authorName.name}`}>
              {authorName.name}{i < author.length - 1 ? ', ' : ''}
            </a>
          ))}
        </p>
        <div className="related-posts__wrapper__tags">
          {tags.map((tag, i) => (
           <span>
                <a href={`/tags/${tag.toLowerCase()}`} key={i}>
                  {tag[0].toUpperCase() + tag.slice(1)}{i < tags.length - 1 ? ', ' : ''}
                </a>
           </span>
          ))}
        </div>
      </div>
    </article>
  );
}
