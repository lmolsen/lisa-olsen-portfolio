import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import heron from "../../assets/images/heron.png";
import quiet from "../../assets/images/quiet.png";
import antifa from "../../assets/images/antifa.png";
import io from "../../assets/images/io.png";
import pithy from "../../assets/images/pithy.png";
import emergence from "../../assets/images/emergence.png";
import "./Writing.scss";

export default function Writing() {
  return (
    <>
      <Header />
      <main className="writing">
        <div className="writing__block">
          <div className="writing__container">
            <h1 className="writing__journal">Writing & Poetry</h1>
            <p className="writing__intro">
              One of my interests is writing. In 2020, I took the course
              "Autobiography & Poetry - Revenge on Circumstance", taught by
              esteemed poet Paul Tran, as part of Washington University in St.
              Louis' Summer Writers Institute. A number of my poems have been
              published in online and print collections.
            </p>
          </div>
        </div>
        <div className="writing__block writing__block--even">
          <div className="writing__container">
            <h1 className="writing__title writing__title--upper">Poems</h1>
            <div className="writing__entry writing__entry--even">
              <img
                src={heron}
                alt="The Night Heron Barks"
                className="writing__image"
              />
              <div className="writing__text">
                <a
                  href="https://nightheronbarks.com/spring-2021/lisa-olsen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="writing__poem"
                >
                  When the road is a flat line
                </a>
                <p className="writing__journal">
                  The Night Heron Barks (Spring 2021)
                </p>
              </div>
            </div>

            <div className="writing__entry writing__entry--odd">
              <img
                src={quiet}
                alt="Not Very Quiet"
                className="writing__image"
              />
              <div className="writing__text">
                <a
                  href="https://not-very-quiet.com/2020/09/14/the-shore-you-left-me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="writing__poem"
                >
                  The Shore You Left Me
                </a>
                <p className="writing__journal">
                  Not Very Quiet (issue 7, September 2020)
                </p>
              </div>
            </div>

            <div className="writing__entry writing__entry--even">
              <img
                src={antifa}
                alt="We Are Antifa"
                className="writing__image writing__image--top"
              />
              <div className="writing__text">
                <a
                  href="https://www.indigo.ca/en-ca/we-are-antifa-expressions-against-fascism-racism-and-police-violence-in-the-united-states-and-beyond/9781999086817.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="writing__poem"
                >
                  Not All Wolves
                </a>
                <p className="writing__journal writing__journal--squish">
                  Into the Void (We Are Antifa: Expressions Against Fascism,
                  Racism and Police Violence in the United States and Beyond,
                  2020)
                </p>
              </div>
            </div>

            <div className="writing__entry writing__entry--odd">
              <img
                src={io}
                alt="iō Literary Journal vol. 3"
                className="writing__image writing__image--top"
              />
              <div className="writing__text">
                <a
                  href="https://www.ioliteraryjournal.com/product-page/volume-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="writing__poem"
                >
                  Hemoptysis
                </a>
                <p className="writing__journal">
                  iō Literary Journal (vol. 3, 2020)
                </p>
              </div>
            </div>

            <div className="writing__entry writing__entry--even">
              <img
                src={pithy}
                alt="antilang. no.5"
                className="writing__image writing__image--center"
              />
              <div className="writing__text">
                <a
                  href="https://issuu.com/antilangmag/docs/antilang._no._5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="writing__poem"
                >
                  To Hell with Witch-Hunters
                </a>
                <p className="writing__journal">
                  antilang. (no.5: Pithy Politics, 2019)
                </p>
              </div>
            </div>

            <div className="writing__entry writing__entry--odd">
              <img
                src={emergence}
                alt="antilang no. 10"
                className="writing__image writing__image--center"
              />
              <div className="writing__text">
                <a
                  href="https://issuu.com/antilangmag/docs/antilang._no._10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="writing__poem"
                >
                  Meghna, Somnia, Things I learned from our kitchen table
                </a>
                <p className="writing__journal">
                  antilang (no. 10: Emergence, 2021)
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
