import Link from "next/link";

export default function OpenHour() {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-12">
        <div className="single-footer">
          <h2>Redes</h2>
          
          <ul className="social">
            <li>
              <Link href="#">
                <i className="icofont-facebook"></i>
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="icofont-google-plus"></i>
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="icofont-twitter"></i>
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="icofont-vimeo"></i>
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="icofont-pinterest"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
