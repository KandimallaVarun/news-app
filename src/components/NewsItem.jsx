import news from "../assets/news.png";

export const NewsItem = ({ author, title, description, url, urlToImage }) => {
  return (
    <div
      className="card bg-dark text-light h-100 p-1"
      style={{
        minHeight: "420px",
        maxHeight: "420px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <img
        src={urlToImage ? urlToImage : news}
        className="card-img-top"
        // alt={title}
        style={{ height: "180px", minHeight: "180px", objectFit: "cover", flexShrink: 0 }}
      />
      <div
        className="card-body d-flex flex-column p-1"
        style={{ overflow: "hidden", flex: 1 }}
      >
        <h5
          className="card-title"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          {title}
        </h5>
        <h6
          className="mb-2 text-decoration-underline"
          style={{
            color: "white",
            flexShrink: 0,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {author}
        </h6>
        <p
          className="card-text"
          style={{
            overflowY: "auto",
            flex: 1,
            minHeight: 0,
            marginBottom: "0.75rem",
          }}
        >
          {description}
        </p>
        <a
          href={url}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
          style={{ flexShrink: 0 }}
        >
          Read more
        </a>
      </div>
    </div>
  );
};