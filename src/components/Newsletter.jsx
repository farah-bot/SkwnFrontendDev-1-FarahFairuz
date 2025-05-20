import { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import "../styles/Newsletter.css";

const Newsletter = ({ isMobile }) => {
  const [email, setEmail] = useState("");
  const { width } = useWindowSize();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Submitted email:", email);
      alert("Thank you for subscribing!");
      setEmail("");
    }
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-label">LIMITED DEALS</div>
        <h2 className="newsletter-headline">
          Become a member and get 10% off of your first purchase
        </h2>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="email"
              placeholder="Enter your email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="newsletter-submit"
              aria-label="Subscribe"
            >
              <div className="icon-container">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                    stroke="#2F241F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
