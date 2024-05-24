import './_summary.scss';

export default function PostSummary({ post }) {
  const {
    data: { thumb_image_path, thumb_image_alt, image, image_alt, title, excerpt, author, date, tags },
    slug,
  } = post;
  const dateObj = new Date(date);
  const formattedDate = dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  // log any post with post.data.featured === true
  console.log(post.data.featured);

  return (
    <>
      {post.data.featured ? (
        <article className="blog-card--featured">
          <div className="blog-card--featured__wrapper">
            <a href={`/blog/${slug}`} className="blog-card--featured__wrapper__headline">
              <h2>{title}</h2>
            </a>
            <p className="blog-card--featured__wrapper__date">{formattedDate}</p>
            <p className="blog-card--featured__wrapper__excerpt">{excerpt}</p>
            <a href={`/blog/${slug}`} className="blog-card--featured__wrapper__button">Continue reading »</a>
            <ul className="blog-card--featured__wrapper__author">
              {author.map((authorName, i) => (
                <li key={i} className="blog-card--featured__wrapper__author__list">
                  <a href={`/author/${authorName.name.toLowerCase().replace(' ', '-')}`} className="blog-card--featured__wrapper__author__list__avatar">
                    <img src={authorName.avatar} alt={authorName.name} width="62" height="62" />
                  </a>
                  <div className="blog-card--featured__wrapper__author__list__name">
                    <a href={`/author/${authorName.name.toLowerCase().replace(' ', '-')}`} className="fw5 f4 no-underline black">{authorName.name}</a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="blog-card--featured__image">
            <img className="dn di-l" src={image} alt={image_alt} />
          </div>
        </article>
      ) : (
        <article className="blog-card">
          <div className="blog-card__wrapper">
            <a href={`/blog/${slug}`} className="blog-card__wrapper__heading">
              <h2>{title}</h2>
            </a>
            <p className="blog-card__wrapper__date">{formattedDate}</p>
            <div className="blog-card__wrapper__tags">
              {tags.map((tag, i) => (
                <a href={`/tags/${tag.toLowerCase()}`} key={i}>
                  {tag[0].toUpperCase() + tag.slice(1)}
                </a>
              ))}
            </div>
            <p className="blog-card__wrapper__excerpt">{excerpt}</p>
            <ul className="blog-card__wrapper__author">
              {author.map((authorName, i) => (
                <li key={i} className="blog-card__wrapper__author__list">
                  <a href={`/author/${authorName.name.toLowerCase().replace(' ', '-')}`} className="blog-card__wrapper__author__list__avatar">
                    <img className="author-profile-image br-100 mr2" alt={authorName.name} width="62" height="62" src={authorName.avatar} />
                  </a>
                  <div className="blog-card__wrapper__author__list__name">
                    <a href={`/author/${authorName.name.toLowerCase().replace(' ', '-')}`} className="fw4 f3 no-underline black">{authorName.name}</a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </article>
      )}
    </>
  );
}
