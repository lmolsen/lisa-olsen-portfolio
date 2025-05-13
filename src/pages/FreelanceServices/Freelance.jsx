import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Freelance.scss";

export default function Freelance() {
 
  return (
    <>
      <Header />
      <main className="freelance">
        <div className="freelance__container">
          <h1 className="freelance__title">Freelance Services</h1>
        </div>
      </main>
      <Footer />
    </>
  );
}
