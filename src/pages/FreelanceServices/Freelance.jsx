import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Freelance.scss";

export default function Freelance() {
  return (
    <>
      <Header />
      <main className="freelance">
        <div className="freelance__block">
          <div className="freelance__container">
            <h1 className="freelance__title">Freelance Services</h1>
            <p className="freelance__intro">
              I bring a versatile background in freelance work across a range of
              fields, with a strong track record of adapting to diverse style
              guides and client expectations. Send me a message on LinkedIn or
              via my contact form if you'd like to discuss hiring me. My
              services include:
            </p>
            <div className="freelance__lists">
              <ul className="freelance__list">
                <li>Copyediting</li>
                <li>Proofreading</li>
                <li>Writing feedback</li>
                <li>Copywriting</li>
                <li>Technical writing</li>
              </ul>
              <ul className="freelance__list">
                <li>Web development</li>
                <li>Web design</li>
                <li>Document design</li>
                <li>English tutoring</li>
                <li>ESL materials creation</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="freelance__block freelance__block--even">
          <div className="freelance__container">
            <h1 className="freelance__title freelance__title--upper">
              Client Feedback
            </h1>
            <div className="freelance__review">
              <p className="freelance__text">
                "Excellent experience working with Lisa. I was impressed with
                her professionalism. She did exactly what was needed, and it was
                not an easy job. And she did it very quickly. Thumbs up!"
              </p>
              <p className="freelance__rating">
                <span className="freelance__stars">★★★★★</span> - Jack of All
                Trades Presentation Rockstar and Content Writer, Upwork client
              </p>
            </div>
            <div className="freelance__review">
              <p className="freelance__text">
                "Lisa was great to work with. Awesome product, really great with
                deadlines, excellent communication, and definitely someone who
                I'll go back to for additional work as it comes. Thanks a bunch
                Lisa."
              </p>
              <p className="freelance__rating">
                <span className="freelance__stars">★★★★★</span> - Rewrite
                Content on Website (COST), Upwork client
              </p>
            </div>
            <div className="freelance__review">
              <p className="freelance__text">
                "Lisa was great to work with. The project was completed
                successfully and the work returned promptly. I will definitely
                work with Lisa again in the near future. Thanks again a bunch,
                Lisa"
              </p>
              <p className="freelance__rating">
                <span className="freelance__stars">★★★★★</span> - Write 5
                575-600 Word Articles, Upwork client
              </p>
            </div>
            <div className="freelance__review">
              <p className="freelance__text">
                "Lisa provided great feedback for my cadre of young writers. She
                was quick and timely with her responses. I watched with interest
                as several of the young writers I put in her care grew in their
                storytelling and writing abilities. It was great to have Lisa on
                this project."
              </p>
              <p className="freelance__rating">
                <span className="freelance__stars">
                  ★★★★
                  <span className="freelance__stars freelance__stars--reduced">
                    ★
                  </span>
                </span>{" "}
                - Experienced Creative Writers Needed to Help Foster the Next
                Generation, Upwork client
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
