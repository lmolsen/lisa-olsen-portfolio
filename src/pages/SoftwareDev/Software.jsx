import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useState, useEffect, useRef } from "react";
import "./Software.scss";

import gamebookWeb from "../../assets/videos/gamebook.mp4";
import artistWebsite from "../../assets/videos/artist-website.mp4";
import lilGuy from "../../assets/videos/lil-guy.mp4";
import pawfectMatch from "../../assets/videos/pawfectmatch.mp4";
import triviaStation from "../../assets/videos/triviastation.mp4";
import instock from "../../assets/videos/instock.mp4";
import snaps from "../../assets/videos/snaps.mp4";
import bandsite from "../../assets/videos/bandsite.mp4";
import coffee from "../../assets/videos/coffee-shop.mp4";

export default function Software() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videos = [
    {
      id: 1,
      src: gamebookWeb,
      title: "Gamebook Web",
      link: "https://gamebook-web.netlify.app/",
      description:
        "Made with React, SCSS, Express, Web Speech API, and Motion, Gamebook Web features a branching narrative with interactive elements and responsive design. Music and icons are under Creative Commons licenses, but the writing and sound effects are original.",
    },
    {
      id: 2,
      src: artistWebsite,
      title: "Artist Website",
      link: "https://www.munchkinlander.com",
      description:
        "Made with React, SCSS, Express, and Nodemailer, this is a website commissioned by an artist to show off their product designs. It features a moving image carousel, search functionality, lightboxes, a contact form and responsive design.",
    },
    {
      id: 3,
      src: lilGuy,
      title: "LilGuy (Team Hackathon)",
      link: "https://lilguy.vercel.app/",
      description:
        "Made with React, TypeScript, Next.js, and Tailwind, LilGuy is a productivity app and widget with a virtual pet that grows based on your activity. This was a team project for the Next.js Global Hackathon, where I took the lead on developing LilGuy's animations and interactivity.",
    },
    {
      id: 4,
      src: pawfectMatch,
      title: "Pawfect Match (Paired Hackathon)",
      link: "https://github.com/lmolsen/pawfect-match",
      description:
        "Made with React, SCSS, and Express, Pawfect Match is a fun take on an adoption website that features search and filtering functionality and pre-filled inquiry emails. This was a paired hackahton where I took the lead on front-end development, designed the UI, and wrote the captions.",
    },
    {
      id: 5,
      src: triviaStation,
      title: "TriviaStation (Paired Hackathon)",
      link: "https://github.com/lmolsen/TriviaStation",
      description:
        "Made with Javascript, HTML, and SCSS, TriviaStation is a trivia app that makes use of the Open Trivia Database API. This was a paired hackathon where I took the lead on the UI, HTML structure, and JS for the home page and scoring.",
    },
    {
      id: 6,
      src: instock,
      title: "InStock (Group Assignment)",
      link: "https://github.com/lmolsen/team5-instock",
      description:
        "Made with React, SCSS, Express, and SQL for database management, InStock is a warehouse/inventory management app featuring full CRUD functionality and responsive design. This was a group assignment using Agile methodology, with tasks tracked on Jira. I took a lead role, completing a large proportion of both back-end and front-end tasks, ensuring consistency across pages and components, and keeping the team on track.",
    },
    {
      id: 7,
      src: snaps,
      title: "Snaps (Assignment)",
      link: "https://github.com/lmolsen/lisa-olsen-snaps",
      description:
        "Made with React, SCSS, Express, and data from a dummy API, Snaps is the prototype of a photo-sharing application. This bootcamp assignment features tag filtering, image detail pages, comment creation and deletion, dynamic timestamps, and responsive design.",
    },
    {
      id: 8,
      src: bandsite,
      title: "BandSite (Assignment)",
      link: "https://github.com/lmolsen/lisa-olsen-bandsite",
      description:
        "Made with JavaScript, HTML, SCSS, and data from a dummy API, BandSite is a fictional band's website. This bootcamp assignment features hover-to-color image effects, comment creation and deletion with like functinality, an embedded SoundCloud track, and responsive design.",
    },
    {
      id: 9,
      src: coffee,
      title: "Coffee Shop (Assignment)",
      link: "https://github.com/lmolsen/lisa-olsen-coffeeshop",
      description: "Made with HTML and SCSS, Coffee Shop is a product site for a fictional coffee brand. This bootcamp assignment features anchor links, an offset-outline button effect, and simple animations."
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
      <main className="software">
        <div className="software__block">
          <div className="software__container">
            <h1 className="software__title">Software Development</h1>
            <p className="software__intro">
              As a graduate of an intensive Software Engineering bootcamp, I continue to grow my skills by taking online courses,
              participating in hackathons, and pursuing personal projects. 
              I have hands-on experience with JavaScript, HTML, CSS/SCSS, Express, React, Git, MySQL, APIs, and various libraries. I'm working on honing my skills in Tailwind and TypeScript and learning Python.
            </p>
          </div>
        </div>
        <div className="software__block software__block--even">
          <div className="software__container">
            <h1 className="software__title software__title--upper">Projects</h1>
            <div className="software__carousel">
              <button
                className="software__button software__button--prev"
                onClick={handlePrev}
              >
                &#10094;
              </button>

              <div className="software__content">
                <video
                  className="software__video"
                  key={videos[currentIndex].id}
                  controls
                >
                  <source src={videos[currentIndex].src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <button
                className="software__button software__button--next"
                onClick={handleNext}
              >
                &#10095;
              </button>
            </div>
            <a
              className="software__link"
              href={videos[currentIndex].link}
              target="blank"
            >
              {videos[currentIndex].title}
            </a>
            <p className="software__description">
              {videos[currentIndex].description}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
