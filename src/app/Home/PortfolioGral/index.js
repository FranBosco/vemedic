import SectionHead from "@/components/SectionHead";
import Sliders from "./Sliders";

export default function PortfolioGral() {
  return (
    <>
      <section className="portfolio section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionHead
                title="Cirugia General"
                // desc="Gastroenterologia"
              />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-12">
              <Sliders />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}