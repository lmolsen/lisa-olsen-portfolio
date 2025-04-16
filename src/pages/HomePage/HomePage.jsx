import "./HomePage.scss";
import { useState, useEffect, useRef } from "react";
import * as Tone from "tone";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import gamebookWeb from "../../assets/videos/gamebook.mp4";
import pawfectMatch from "../../assets/videos/pawfectmatch.mp4";
import triviaStation from "../../assets/videos/triviastation.mp4";
import artistWebsite from "../../assets/videos/artist-website.mp4";

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [musicNotes, setMusicNotes] = useState([]);
  const musicRef = useRef(null);

  const videos = [
    {
      id: 1,
      src: gamebookWeb,
      title: "Gamebook Web",
      link: "https://gamebook-web.netlify.app/",
    },
    {
      id: 2,
      src: artistWebsite,
      title: "Artist Website",
      link: "https://github.com/munchkinlander/munchkinland-website",
    },
    {
      id: 3,
      src: pawfectMatch,
      title: "Pawfect Match",
      link: "https://github.com/reneecwl/pawfect-match",
    },
    {
      id: 4,
      src: triviaStation,
      title: "TriviaStation",
      link: "https://github.com/lmolsen/TriviaStation",
    },
  ];

  const skills = [
    { name: "HTML", note: "C4" },
    { name: "CSS", note: "C#4" },
    { name: "Sass", note: "D4" },
    { name: "JavaScript", note: "D#4" },
    { name: "React.js", note: "E4" },
    { name: "Express.js", note: "F4" },
    { name: "Node.js", note: "F#4" },
    { name: "DOM", note: "G4" },
    { name: "APIs", note: "G#4" },
    { name: "MySQL", note: "A4" },
    { name: "Jest", note: "A#4" },
    { name: "OAuth", note: "B4" },
    { name: "Motion", note: "C5" },
    { name: "Git", note: "C#5" },
    { name: "GitHub", note: "D5" },
    { name: "Netlify", note: "D#5" },
    { name: "Railway", note: "E5" },
    { name: "Microsoft 365", note: "F5" },
    { name: "Google Workspace", note: "F#5" },
    { name: "Photoshop", note: "G5" },
    { name: "Acrobat", note: "G#5" },
    { name: "FrameMaker", note: "A5" },
    { name: "LaTeX", note: "A#5" },
    { name: "Notepad++", note: "B5" },
    { name: "VS Code", note: "C6" },
    { name: "Audacity", note: "C#6" },
    { name: "OBS Studio", note: "D6" },
    { name: "ClickUp", note: "D#6" },
    { name: "Jira", note: "E6" },
    { name: "Figma", note: "F6" },
    { name: "Miro", note: "F#6" },
    { name: "Notion", note: "G6" },
    { name: "Agile", note: "G#6" },
    { name: "Wordpress", note: "A6" },
    { name: "Twine", note: "A#6" },
    { name: "PBLA", note: "B6" },
  ];

  useEffect(() => {
    musicRef.current = new Tone.PolySynth({
      oscillator: {
        type: "sine",
      },
      envelope: {
        attack: 0.1,
        decay: 0.3,
        sustain: 0.5,
        release: 1,
      },
    }).toDestination();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
  };

  const playNote = async (note, event) => {
    await Tone.start();
    musicRef.current.triggerAttackRelease(note, "8n");

    const tag = event.target;
    const newNote = {
      id: Math.random(),
      x: tag.offsetLeft + tag.offsetWidth / 2 - 18,
      y: tag.offsetTop - 30,
    };

    setMusicNotes((prev) => [...prev, newNote]);

    setTimeout(() => {
      setMusicNotes((prev) => prev.filter((note) => note.id !== newNote.id));
    }, 1000);
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
                Editor | Educator | Software Developer
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
        </div>
        <div className="home__block home__block--even">
          <div className="home__block-container">
            <h1 className="home__title home__title--upper">Skills</h1>
            <div className="home__tags">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="home__tag"
                  onClick={(event) => playNote(skill.note, event)}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
          <div className="music-notes">
            {musicNotes.map((note) => (
              <span
                key={note.id}
                className="music-note"
                style={{ left: note.x, top: note.y }}
              >
                🎵
              </span>
            ))}
          </div>
        </div>
        <div className="home__block">
          <div className="home__block-container">
            <h1 className="home__title home__title--upper">Projects</h1>

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

          {/* <div className="home__block">
            <div className="home__block-container">
              <h1 className="home__title home__title--upper">Editing</h1>
        
            </div>
          </div> */}
        </div>
      </main>
      <Footer />
    </>
  );
}
