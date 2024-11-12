import Link from "next/link";

export default function Topbar() {
  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-5 col-12">
              <p className="top-link">
                Rivadavia 2671 3 A, Mar del Plata, 7600 Bs As Argentina
              </p>
            </div>
            <div className="col-lg-6 col-md-7 col-12">
              <ul className="top-contact">
                <li>
                  <i className="fa fa-phone"></i>+5492236233321
                </li>
                <li>
                  <i className="fa fa-phone"></i>+549 2234425856
                </li>
                <li>
                  <i className="fa fa-envelope"></i>
                  <Link href="mailto:ventas@vemedic.com.ar">
                    ventas@vemedic.com.ar
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
