export const Navbar = ({setCategory}) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-secondary fs-5">NewsApp</span>
        </a>
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
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                onClick={e => { e.preventDefault(); setCategory("general"); }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={e => { e.preventDefault(); setCategory("business"); }}
              >
                business
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={e => { e.preventDefault(); setCategory("entertainment"); }}
              >
                entertainment
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={e => { e.preventDefault(); setCategory("general"); }}
              >
                general
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={e => { e.preventDefault(); setCategory("health"); }}
              >
                health
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={e => { e.preventDefault(); setCategory("science"); }}
              >
                science
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={e => { e.preventDefault(); setCategory("sports"); }}
              >

                sports
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={e => { e.preventDefault(); setCategory("technology"); }}
              >
                technology
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
