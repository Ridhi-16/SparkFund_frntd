export default function Contact(){
    return(
        <>
        
        <>
  {/* Spinner Start */}
  
  {/* Modal Search Start */}
  <div
    className="modal fade"
    id="searchModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-fullscreen">
      <div className="modal-content rounded-0">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Search by keyword
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body d-flex align-items-center">
          <div className="input-group w-75 mx-auto d-flex">
            <input
              type="search"
              className="form-control bg-transparent p-3"
              placeholder="keywords"
              aria-describedby="search-icon-1"
            />
            <span id="search-icon-1" className="input-group-text p-3">
              <i className="fa fa-search" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Modal Search End */}
  {/* Hero Start */}
  <div className="container-fluid bg-light py-6 my-6 mt-0">
    <div className="container text-center animated bounceInDown">
      <h1 className="display-1 mb-4">Contact</h1>
      <ol className="breadcrumb justify-content-center mb-0 animated bounceInDown">
        <li className="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Pages</a>
        </li>
        <li className="breadcrumb-item text-dark" aria-current="page">
          Contact
        </li>
      </ol>
    </div>
  </div>
  {/* Hero End */}
  {/* Contact Start */}
  <div
    className="container-fluid contact py-6 wow bounceInUp"
    data-wow-delay="0.1s"
  >
    <div className="container">
      <div className="p-5 bg-light rounded contact-form">
        <div className="row g-4">
          <div className="col-12">
            <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
              Get in touch
            </small>
            <h1 className="display-5 mb-0">Contact Us For Any Queries!</h1>
          </div>
          <div className="col-md-6 col-lg-7">
            <p className="mb-4">
              The contact form is currently inactive. Get a functional and
              working contact form with Ajax &amp; PHP in a few minutes. Just
              copy and paste the files, add a little code and you're done.{" "}
              <a href="https://htmlcodex.com/contact-form">Download Now</a>.
            </p>
            <form>
              <input
                type="text"
                className="w-100 form-control p-3 mb-4 border-primary bg-light"
                placeholder="Your Name"
              />
              <input
                type="email"
                className="w-100 form-control p-3 mb-4 border-primary bg-light"
                placeholder="Enter Your Email"
              />
              <textarea
                className="w-100 form-control mb-4 p-3 border-primary bg-light"
                rows={4}
                cols={10}
                placeholder="Your Message"
                defaultValue={""}
              />
              <button
                className="w-100 btn btn-primary form-control p-3 border-primary bg-primary rounded-pill"
                type="submit"
              >
                Submit Now
              </button>
            </form>
          </div>
          <div className="col-md-6 col-lg-5">
            <div>
              <div className="d-inline-flex w-100 border border-primary p-4 rounded mb-4">
                <i className="fas fa-map-marker-alt fa-2x text-primary me-4" />
                <div className="">
                  <h4>Address</h4>
                  <p>123 Street, New York, USA</p>
                </div>
              </div>
              <div className="d-inline-flex w-100 border border-primary p-4 rounded mb-4">
                <i className="fas fa-envelope fa-2x text-primary me-4" />
                <div className="">
                  <h4>Mail Us</h4>
                  <p className="mb-2">info@example.com</p>
                  <p className="mb-0">support@example.com</p>
                </div>
              </div>
              <div className="d-inline-flex w-100 border border-primary p-4 rounded">
                <i className="fa fa-phone-alt fa-2x text-primary me-4" />
                <div className="">
                  <h4>Telephone</h4>
                  <p className="mb-2">(+012) 3456 7890 123</p>
                  <p className="mb-0">(+704) 5555 0127 296</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
  {/* Footer Start */}
  <div
    className="container-fluid footer py-6 my-6 mb-0 bg-light wow bounceInUp"
    data-wow-delay="0.1s"
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="footer-item">
            <h1 className="text-primary">
              Cater<span className="text-dark">Serv</span>
            </h1>
            <p className="lh-lg mb-4">
              There cursus massa at urnaaculis estieSed aliquamellus vitae ultrs
              condmentum leo massamollis its estiegittis miristum.
            </p>
            <div className="footer-icon d-flex">
              <a
                className="btn btn-primary btn-sm-square me-2 rounded-circle"
                href=""
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="btn btn-primary btn-sm-square me-2 rounded-circle"
                href=""
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                href="#"
                className="btn btn-primary btn-sm-square me-2 rounded-circle"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                href="#"
                className="btn btn-primary btn-sm-square rounded-circle"
              >
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footer-item">
            <h4 className="mb-4">Special Facilities</h4>
            <div className="d-flex flex-column align-items-start">
              <a className="text-body mb-3" href="">
                <i className="fa fa-check text-primary me-2" />
                Cheese Burger
              </a>
              <a className="text-body mb-3" href="">
                <i className="fa fa-check text-primary me-2" />
                Sandwich
              </a>
              <a className="text-body mb-3" href="">
                <i className="fa fa-check text-primary me-2" />
                Panner Burger
              </a>
              <a className="text-body mb-3" href="">
                <i className="fa fa-check text-primary me-2" />
                Special Sweets
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footer-item">
            <h4 className="mb-4">Contact Us</h4>
            <div className="d-flex flex-column align-items-start">
              <p>
                <i className="fa fa-map-marker-alt text-primary me-2" /> 123
                Street, New York, USA
              </p>
              <p>
                <i className="fa fa-phone-alt text-primary me-2" /> (+012) 3456
                7890 123
              </p>
              <p>
                <i className="fas fa-envelope text-primary me-2" />{" "}
                info@example.com
              </p>
              <p>
                <i className="fa fa-clock text-primary me-2" /> 26/7 Hours
                Service
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footer-item">
            <h4 className="mb-4">Social Gallery</h4>
            <div className="row g-2">
              <div className="col-4">
                <img
                  src="/assets/img/menu-01.jpg"
                  className="img-fluid rounded-circle border border-primary p-2"
                  alt=""
                />
              </div>
              <div className="col-4">
                <img
                  src="/assets/img/menu-02.jpg"
                  className="img-fluid rounded-circle border border-primary p-2"
                  alt=""
                />
              </div>
              <div className="col-4">
                <img
                  src="/assets/img/menu-03.jpg"
                  className="img-fluid rounded-circle border border-primary p-2"
                  alt=""
                />
              </div>
              <div className="col-4">
                <img
                  src="/assets/img/menu-04.jpg"
                  className="img-fluid rounded-circle border border-primary p-2"
                  alt=""
                />
              </div>
              <div className="col-4">
                <img
                  src="/assets/img/menu-05.jpg"
                  className="img-fluid rounded-circle border border-primary p-2"
                  alt=""
                />
              </div>
              <div className="col-4">
                <img
                  src="/assets/img/menu-06.jpg"
                  className="img-fluid rounded-circle border border-primary p-2"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Copyright Start */}
  <div className="container-fluid copyright bg-dark py-4">
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
          <span className="text-light">
            <a href="#">
              <i className="fas fa-copyright text-light me-2" />
              Your Site Name
            </a>
            , All right reserved.
          </span>
        </div>
        <div className="col-md-6 my-auto text-center text-md-end text-white">
          {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
          {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
          {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
          Designed By{" "}
          <a className="border-bottom" href="https://htmlcodex.com">
            HTML Codex
          </a>{" "}
          Distributed By{" "}
          <a className="border-bottom" href="https://themewagon.com">
            ThemeWagon
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Copyright End */}
  {/* Back to Top */}
  <a
    href="#"
    className="btn btn-md-square btn-primary rounded-circle back-to-top"
  >
    <i className="fa fa-arrow-up" />
  </a>
  {/* JavaScript Libraries */}
  {/* Template Javascript */}
</>

        
        </>
    )
}