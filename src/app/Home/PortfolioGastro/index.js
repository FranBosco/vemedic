import SectionHead from "@/components/SectionHead";
import Sliders from "./Sliders";

export default function PortfolioGastro() {
  return (
    <>
      <section className="portfolio ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionHead title="Gastroenterologia" desc="" />
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
