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
              <a className="nav-link active" aria-current="page" href="#" onClick={()=>setCategory("general")}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={()=>setCategory("business")}>
                business
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={()=>setCategory("entertainment")}>
                entertainment
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={()=>setCategory("general")}>
                general
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={()=>setCategory("health")}>
                health
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={()=>setCategory("science")}>
                science
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={()=>setCategory("sports")}>

                sports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={()=>setCategory("technology")}>
                technology
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
