export default function BlogPagination({ pagination }) {
  const {
    currentPage,
    lastPage,
    url: { next, prev },
  } = pagination;

  if (lastPage === 1) {
    return <></>;
  }

  const pageLinks = [];
  const maxDisplayedPages = 3; 

  pageLinks.push(
    <li className={`page-item ${currentPage === 1 ? "active" : ""}`} key={1}>
      <a className="page-link" href="/blog/">
        1
      </a>
    </li>
  );

  if (currentPage > 3) {
    pageLinks.push(<li className="page-item" key="ellipsis1">...</li>);
  }

  const startPage = Math.max(2, currentPage - 1);
  const endPage = Math.min(lastPage - 1, currentPage + 1);

  for (let i = startPage; i <= endPage; i++) {
    pageLinks.push(
      <li className={`page-item ${i === currentPage ? "active" : ""}`} key={i}>
        <a className="page-link" href={`/blog/${i}`}>
          {i}
        </a>
      </li>
    );
  }

  if (currentPage < lastPage - 2) {
    pageLinks.push(<li className="page-item" key="ellipsis2">...</li>);
  }

  if (lastPage > 1) {
    pageLinks.push(
      <li className={`page-item ${currentPage === lastPage ? "active" : ""}`} key={lastPage}>
        <a className="page-link" href={`/blog/${lastPage}`}>
          {lastPage}
        </a>
      </li>
    );
  }

  return (
    <nav className="blog-pagination">
      <ul className="pagination">
        {prev && (
          <li className="page-item">
            <a className="page-link" href={prev}>← Newer Posts</a>
          </li>
        )}
        {pageLinks}
        {next && (
          <li className="page-item">
            <a className="page-link" href={next}>Older Posts →</a>
          </li>
        )}
      </ul>
    </nav>
  );
}
