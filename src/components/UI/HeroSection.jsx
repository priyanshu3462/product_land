import { FaLongArrowAltRight } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore the Sound, One Tune at a Time.
          </h1>
          <p className="paragraph">
            Discover the real base, tune, and beauty of every song. Sort,
            search, and filter through categories to find the best you need.
          </p>
          <button className="btn btn-darken btn-inline bg-white-box">
            Start Exploring <FaLongArrowAltRight />
          </button>
        </div>
        <div className="hero-image">
          <img
            src="/images/1.jpg"
            alt="world is beauty"
            className="banner-image"
          />
        </div>
      </div>
    </main>
  );
};