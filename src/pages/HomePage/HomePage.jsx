import "./HomePage.scss";
import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import gamebookWeb from "../../assets/videos/gamebook.mp4";
import pawfectMatch from "../../assets/videos/pawfectmatch.mp4";
import triviaStation from "../../assets/videos/triviastation.mp4";

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos = [
    {
      id: 1,
      src: gamebookWeb,
      title: "Gamebook Web",
      link: "https://gamebook-web.netlify.app/",
    },
    {
      id: 2,
      src: pawfectMatch,
      title: "Pawfect Match",
      link: "https://github.com/reneecwl/pawfect-match",
    },
    {
      id: 3,
      src: triviaStation,
      title: "TriviaStation",
      link: "https://github.com/lmolsen/TriviaStation",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
  };

  return (
    <>
      <Header />
      <main className="home">
        <div className="home__hero">
          <div className="home__hero-container">
            <div className="home__picture"></div>
            <section className="home__intro">
              <h1 className="home__title">Lisa Olsen</h1>
              <h2 className="home__subtitle">
                Editor | Educator | Software Engineer
              </h2>
              <p className="home__text">
                Welcome to my portfolio! I'm a recent Software Engineering
                bootcamp grad with a background in education, editing, and
                technical writing.
              </p>
              <p className="home__text">
                Some of my other passions are video games and storytelling. I've
                served as the text editor for two indie games —{" "}
                <a
                  className="home__link"
                  href="https://store.steampowered.com/app/1155970/Roadwarden/"
                  target="blank"
                >
                  Roadwarden
                </a>{" "}
                and{" "}
                <a
                  className="home__link"
                  href="https://store.steampowered.com/app/2366430/Windy_Meadow__A_Roadwarden_Tale/"
                  target="blank"
                >
                  Windy Meadow
                </a>{" "}
                — and hope to contribute to more games in the near future.
              </p>
              <p className="home__text">
                Check out some of my recent projects and feel free to reach out
                if you'd like to chat or collaborate!
              </p>
            </section>
          </div>
          <div className="home__projects">
            <div className="home__projects-container">
              <h1 className="home__title home__title--projects">Projects</h1>

              <div className="home__carousel">
                <button
                  className="home__button home__button--prev"
                  onClick={handlePrev}
                >
                  &#10094;
                </button>

                <div className="home__content">
                  <video
                    className="home__video"
                    key={videos[currentIndex].id}
                    controls
                  >
                    <source src={videos[currentIndex].src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <a
                    className="home__link"
                    href={videos[currentIndex].link}
                    target="blank"
                  >
                    {videos[currentIndex].title}
                  </a>
                </div>
                <button
                  className="home__button home__button--next"
                  onClick={handleNext}
                >
                  &#10095;
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
