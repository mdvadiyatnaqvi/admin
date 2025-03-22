import "bootstrap/dist/css/bootstrap.min.css";

export const Footer = () => {
  return (
    <>
      <div
        style={{
          borderTop: "1px solid rgb(33, 37, 41, 0.2)",
          marginTop: "20px",
        }}
      >
        <div className="container">
          <footer style={{ paddingTop: "20px" }}>
            <div className="row">
              <div className="col-12 col-md-2 mb-3">
                <h3 style={{ fontWeight: "bold" }}>N-Tech Global</h3>
              </div>

              <div className="col-12 col-md-2 mb-3">
                <h5>Services</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                      Web Development
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                      App Development
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                      IOS Development
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                      Software Development
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                      UI/UX Design
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-2 mb-3">
                <h5>Contact / Our Network</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                      Youtube
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                      Instagram
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                      LinkedIn
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                      Facebook
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                      Discord
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-5 offset-md-1 mb-3">
                <form>
                  <h5>Subscribe to our newsletter</h5>
                  <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">
                      Email address
                    </label>
                    <input
                      id="newsletter1"
                      type="text"
                      className="form-control"
                      placeholder="Email address"
                    />
                    <button
                      className="btn btn-primary"
                      type="button"
                      style={{
                        backgroundColor: "rgb(33, 37, 41 )",
                        border: "none",
                      }}
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </footer>
        </div>
        <div className="navbar sticky-bottom bg-dark text-white d-flex flex-column flex-sm-row justify-content-center border-top">
          <p
            style={{
              paddingLeft: "20px",
              marginBottom: "10px",
              paddingTop: "10px",
            }}
          >
            © 2025 Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};
