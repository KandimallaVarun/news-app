export const Navbar = ({setCategory}) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <span className="navbar-brand">
          <span className="badge bg-secondary fs-5">NewsApp</span>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="nav-link btn btn-link active" onClick={() => setCategory("general")}>Home</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => setCategory("business")}>business</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => setCategory("entertainment")}>entertainment</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => setCategory("general")}>general</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => setCategory("health")}>health</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => setCategory("science")}>science</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => setCategory("sports")}>sports</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => setCategory("technology")}>technology</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
