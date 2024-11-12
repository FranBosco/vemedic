import FeatureCard from "@/components/FeatureCard";
import SectionHead from "@/components/SectionHead";

export default function Features(props) {
  const { sectionName } = props;

  return (
    <>
      <section className={sectionName ? sectionName : "Feautes section"}>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-12">
              <SectionHead
                title="Quienes somos?"
                desc="Vemedic es una empresa establecida en 2010, con una larga trayectoria en el mercado de insumos médicos e implantes quirúrgicos. Con sede en Mar del Plata y una sucursal en CABA, hemos logrado llegar a todo el país a través de canales directos y estrategias comerciales con distribuidores comprometidos."
              />
            </div>
            <div className="col-lg-12">
              <SectionHead
                title="Nuestra Trayectoria"
                desc="Con más de una década en el sector de la salud, en Vemedic nos hemos destacado por ofrecer productos de alta calidad y soluciones innovadoras para profesionales médicos y centros de salud en todo el territorio argentino."
              />
            </div>
            <div className="col-lg-12">
              <SectionHead
                title="Nuestros Servicios"
                desc="Comercializamos e importamos una amplia gama de insumos médicos e implantes quirúrgicos, brindando a nuestros clientes acceso a tecnología de vanguardia y productos confiables que cumplen con los más altos estándares de calidad."
              />
            </div>
            <div className="col-lg-12">
              <SectionHead
                title="Alianzas Estratégicas"
                desc="Valoramos la colaboración con distribuidores especializados que contribuyen significativamente al desarrollo y la distribución eficiente de nuestros productos. A través de estas asociaciones, logramos expandir nuestra presencia y garantizar un servicio integral a nuestros clientes.
En Vemedic, estamos comprometidos con la excelencia y la satisfacción del cliente, y trabajamos cada día para seguir siendo líderes en la industria de insumos médicos en Argentina. ¡Contáctanos y descubre cómo podemos ayudarte en tu práctica médica!
"
              />
            </div>
          </div>
          {/* <div className="row">
            <div className="col-lg-4 col-12">
              <FeatureCard
                cardClass="single-features"
                icon="icofont icofont-ambulance-cross"
                title="Emergency Help"
                desc="Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate."
              />
            </div>
            <div className="col-lg-4 col-12">
              <FeatureCard
                cardClass="single-features"
                icon="icofont icofont-medical-sign-alt"
                title="Enriched Pharmecy"
                desc="Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam
                vulputate."
              />
            </div>
            <div className="col-lg-4 col-12">
              <FeatureCard
                cardClass="single-features last"
                icon="icofont icofont-stethoscope"
                title="Medical Treatment"
                desc="Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam
                vulputate."
              />
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
