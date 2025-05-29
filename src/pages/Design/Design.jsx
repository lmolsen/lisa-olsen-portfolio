import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Design.scss";

import { useState } from "react";

import snowflake from "../../assets/images/CJCE_snow.jpg";
import comma from "../../assets/images/CJCE_comma.png";
import postIt from "../../assets/images/TW_postit.jpg";
import expiry from "../../assets/images/LI_expiry.png";
import diagram from "../../assets/images/LI_diagram.png";
import diagramPDF from "../../assets/pdfs/LI_diagram.pdf";
import item from "../../assets/pdfs/UP_item-presentation.pdf";
import transport from "../../assets/pdfs/TW_transport.pdf";
import tattoo from "../../assets/pdfs/SD_tattoo.pdf";

export default function Design() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (src, alt, download = null) => {
    setModalImage({ src, alt, download });
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setModalImage({ src: "", alt: "" });
  };

  const preventRightClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <main className="design">
        <div className="design__block">
          <div className="design__container">
            <h1 className="design__title">Design</h1>
            <p className="design__intro">
              Below are some examples of the design work I've done as part of
              various jobs, programs, and freelance projects. Click on the
              images to enlarge them and access the download option. Download the PDFs to take a closer look.
            </p>
          </div>
        </div>
        <div className="design__block design__block--even">
          <div className="design__container">
            <h1 className="design__title design__title--upper">Samples</h1>
            <div className="design__portfolio">
              <div className="design__image-wrapper">
                <img
                  src={snowflake}
                  alt="Christmas social media message"
                  className="design__image"
                  draggable="false"
                  onContextMenu={preventRightClick}
                  onClick={() =>
                    openModal(snowflake, "Christmas social media message")
                  }
                />
                <div className="design__overlay">
                  <span className="design__overlay-text">
                    A holiday social media graphic for an academic journal.
                  </span>
                </div>
              </div>

              <div className="design__image-wrapper">
                <img
                  src={comma}
                  alt="Punctuation social media message"
                  className="design__image"
                  draggable="false"
                  onContextMenu={preventRightClick}
                  onClick={() =>
                    openModal(comma, "Punctuation social media message")
                  }
                />
                <div className="design__overlay">
                  <span className="design__overlay-text">
                    A guideline-promoting social media graphic for an academic
                    journal.
                  </span>
                </div>
              </div>

              <div className="design__image-wrapper">
                <img
                  src={diagram}
                  alt="WHMIS diagram"
                  className="design__image"
                  draggable="false"
                  onContextMenu={preventRightClick}
                  onClick={() =>
                    openModal(diagram, "WHMIS diagram", diagramPDF)
                  }
                />
                <div className="design__overlay">
                  <span className="design__overlay-text">
                    A diagram of WHMIS supplier labeling.
                  </span>
                </div>
              </div>

              <div className="design__image-wrapper">
                <img
                  src={expiry}
                  alt="Expiry date example materials"
                  className="design__image"
                  draggable="false"
                  onContextMenu={preventRightClick}
                  onClick={() =>
                    openModal(expiry, "Expiry date example materials")
                  }
                />
                <div className="design__overlay">
                  <span className="design__overlay-text">
                    Graphics designed to look like real-world materials for an
                    ESL class.
                  </span>
                </div>
              </div>

              <div className="design__image-wrapper">
                <img
                  src={postIt}
                  alt="Post-it infosheet"
                  className="design__image"
                  draggable="false"
                  onContextMenu={preventRightClick}
                  onClick={() => openModal(postIt, "Post-it infosheet")}
                />
                <div className="design__overlay">
                  <span className="design__overlay-text">
                    An infosheet for Post-it notes.
                  </span>
                </div>
              </div>
            </div>

            <div className="design__pdfs">
              <div className="design__image-wrapper">
                <iframe
                  src={transport}
                  className="design__pdf"
                  title="Informative website redesign PDF"
                  draggable="false"
                  onContextMenu={preventRightClick}
                ></iframe>
                <div className="design__overlay  design__overlay--pdf">
                  <span className="design__overlay-text">
                    A redesign of a government service's info page.
                  </span>
                </div>
              </div>

              <div className="design__image-wrapper">
                <iframe
                  src={item}
                  className="design__pdf"
                  title="Item Presentation PDF"
                  draggable="false"
                  onContextMenu={preventRightClick}
                ></iframe>
                <div className="design__overlay  design__overlay--pdf">
                  <span className="design__overlay-text">
                    An example item presentation for a client.
                  </span>
                </div>
              </div>

              <div className="design__image-wrapper">
                <iframe
                  src={tattoo}
                  className="design__pdf"
                  title="Tattoo Shop Info PDF"
                  draggable="false"
                  onContextMenu={preventRightClick}
                ></iframe>
                <div className="design__overlay  design__overlay--pdf">
                  <span className="design__overlay-text">
                    An info page for a fake tattoo studio.
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {modalOpen && (
          <div className="design__modal" onClick={closeModal}>
            <div
              className="design__modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="design__modal-controls">
                <a
                  href={modalImage.download || modalImage.src}
                  download
                  className="design__modal-download"
                  title="Download file"
                >
                  ⬇ Download
                </a>
                <button className="design__modal-close" onClick={closeModal}>
                  &times;
                </button>
              </div>
              <img
                className="design__modal-image"
                src={modalImage.src}
                alt={modalImage.alt}
              />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
