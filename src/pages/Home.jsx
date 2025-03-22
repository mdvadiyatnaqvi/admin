import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div>
        <h1 className="text-center py-3">Welcome to N-Tech Global</h1>

        <section className="mt-3">
          <div>
            <div className="text-center">
              <div>
                <h2>What We Do</h2>
                <p>
                  At Tech Solutions, we specialize in providing top-notch IT
                  services tailored to your needs. From custom software
                  development to IT consulting, we have you covered.
                </p>
              </div>
            </div>
            <div className="text-center mt-4">
              <div>
                <NavLink to="/admin/service">
                  <button className="btn btn-outline-dark">
                    Explore Our Services!
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
