export const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <span className="navbar-brand">
          <span className="badge bg-secondary fs-5">NewsApp</span>
        </span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">

            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => setCategory("general")}>
                Home
              </button>
            </li>

            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => setCategory("business")}>
                Business
              </button>
            </li>

            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => setCategory("entertainment")}>
                Entertainment
              </button>
            </li>

            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => setCategory("health")}>
                Health
              </button>
            </li>

            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => setCategory("science")}>
                Science
              </button>
            </li>

            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => setCategory("sports")}>
                Sports
              </button>
            </li>

            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => setCategory("technology")}>
                Technology
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};
