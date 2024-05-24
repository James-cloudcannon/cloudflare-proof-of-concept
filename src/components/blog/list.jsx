import PostSummary from './summary';
import './_blog-list.scss';

export default function BlogList({ posts }) {
  console.log(posts.data)
  if (posts.length > 0) {
    return (
        <div className="blog-list">
          {posts.map((post, i) => (
            <PostSummary post={post} key={i} />
          ))}
        </div>
    );
  }
  return;
}
