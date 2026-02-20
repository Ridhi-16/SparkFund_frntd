export default function About(){
    return(
        <>

        <>
  
 <>
  
  {/* Navbar start */}
 
  {/* Navbar End */}
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
      <h1 className="display-1 mb-4">About Us</h1>
      <ol className="breadcrumb justify-content-center mb-0 animated bounceInDown">
        <li className="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Pages</a>
        </li>
        <li className="breadcrumb-item text-dark" aria-current="page">
          About
        </li>
      </ol>
    </div>
  </div>
  {/* Hero End */}
  {/* About Satrt */}
  <div className="container-fluid py-6">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-5 wow bounceInUp" data-wow-delay="0.1s">
          <img src="/assets/img/about.jpg" className="img-fluid rounded" alt="" />
        </div>
        <div className="col-lg-7 wow bounceInUp" data-wow-delay="0.3s">
          <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
            About Us
          </small>
          <h1 className="display-5 mb-4">Trusted By 200 + satisfied clients</h1>
          <p className="mb-4">
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore eit esdioilore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullaemco laboeeiris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor iesdein reprehendeerit in
            voluptate velit esse cillum dolore.
          </p>
          <div className="row g-4 text-dark mb-5">
            <div className="col-sm-6">
              <i className="fas fa-share text-primary me-2" />
              Fresh and Fast food Delivery
            </div>
            <div className="col-sm-6">
              <i className="fas fa-share text-primary me-2" />
              24/7 Customer Support
            </div>
            <div className="col-sm-6">
              <i className="fas fa-share text-primary me-2" />
              Easy Customization Options
            </div>
            <div className="col-sm-6">
              <i className="fas fa-share text-primary me-2" />
              Delicious Deals for Delicious Meals
            </div>
          </div>
          <a href="" className="btn btn-primary py-3 px-5 rounded-pill">
            About Us
            <i className="fas fa-arrow-right ps-2" />
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Fact Start*/}
  <div className="container-fluid faqt py-6">
    <div className="container">
      <div className="row g-4 align-items-center">
        <div className="col-lg-7">
          <div className="row g-4">
            <div className="col-sm-4 wow bounceInUp" data-wow-delay="0.3s">
              <div className="faqt-item bg-primary rounded p-4 text-center">
                <i className="fas fa-users fa-4x mb-4 text-white" />
                <h1 className="display-4 fw-bold" data-toggle="counter-up">
                  689
                </h1>
                <p className="text-dark text-uppercase fw-bold mb-0">
                  Happy Customers
                </p>
              </div>
            </div>
            <div className="col-sm-4 wow bounceInUp" data-wow-delay="0.5s">
              <div className="faqt-item bg-primary rounded p-4 text-center">
                <i className="fas fa-users-cog fa-4x mb-4 text-white" />
                <h1 className="display-4 fw-bold" data-toggle="counter-up">
                  107
                </h1>
                <p className="text-dark text-uppercase fw-bold mb-0">
                  Expert Chefs
                </p>
              </div>
            </div>
            <div className="col-sm-4 wow bounceInUp" data-wow-delay="0.7s">
              <div className="faqt-item bg-primary rounded p-4 text-center">
                <i className="fas fa-check fa-4x mb-4 text-white" />
                <h1 className="display-4 fw-bold" data-toggle="counter-up">
                  253
                </h1>
                <p className="text-dark text-uppercase fw-bold mb-0">
                  Events Complete
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 wow bounceInUp" data-wow-delay="0.1s">
          <div className="video">
            <button
              type="button"
              className="btn btn-play"
              data-bs-toggle="modal"
              data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
              data-bs-target="#videoModal"
            >
              <span />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Modal Video */}
  <div
    className="modal fade"
    id="videoModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content rounded-0">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Youtube Video
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          {/* 16:9 aspect ratio */}
          <div className="ratio ratio-16x9">
            <iframe
              className="embed-responsive-item"
              src=""
              id="video"
              allowFullScreen=""
              allowscriptaccess="always"
              allow="autoplay"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Fact End */}
  {/* Team Start */}
  <div className="container-fluid team py-6">
    <div className="container">
      <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
        <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
          Our Team
        </small>
        <h1 className="display-5 mb-5">We have experienced chef Team</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-3 col-md-6 wow bounceInUp" data-wow-delay="0.1s">
          <div className="team-item rounded">
            <img
              className="img-fluid rounded-top "
              src="/assets/img/team-1.jpg"
              alt=""
            />
            <div className="team-content text-center py-3 bg-dark rounded-bottom">
              <h4 className="text-primary">Henry</h4>
              <p className="text-white mb-0">Decoration Chef</p>
            </div>
            <div className="team-icon d-flex flex-column justify-content-center m-4">
              <a
                className="share btn btn-primary btn-md-square rounded-circle mb-2"
                href=""
              >
                <i className="fas fa-share-alt" />
              </a>
              <a
                className="share-link btn btn-primary btn-md-square rounded-circle mb-2"
                href=""
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="share-link btn btn-primary btn-md-square rounded-circle mb-2"
                href=""
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="share-link btn btn-primary btn-md-square rounded-circle mb-2"
                href=""
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow bounceInUp" data-wow-delay="0.3s">
          <div className="team-item rounded">
            <img
              className="img-fluid rounded-top "
              src="/assets/img/team-2.jpg"
              alt=""
            />
            <div className="team-content text-center py-3 bg-dark rounded-bottom">
              <h4 className="text-primary">Jemes Born</h4>
              <p className="text-white mb-0">Executive Chef</p>
            </div>
            <div className="team-icon d-flex flex-column justify-content-center m-4">
              <a
                className="share btn btn-primary btn-md-square rounded-circle mb-2"
                href=""
              >
                <i className="fas fa-share-alt" />
              </a>
              <a
                className="share-link btn btn-primary btn-md-square rounded-circle mb-2"
                href=""
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="share-link btn btn-primary btn-md-square rounded-circle mb-2"
                href=""
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="share-link btn btn-primary btn-md-square rounded-circle mb-2"
                href=""
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow bounceInUp" data-wow-delay="0.5s">
          <div className="team-item rounded">
            <img
              className="img-fluid rounded-top "
              src="/assets/img/team-3.jpg"
              alt=""
            />
            <div className="team-content text-center py-3 bg-dark rounded-bottom">
              <h4 className="text-primary">Martin Hill</h4>
              <p className="text-white mb-0">Kitchen Porter</p>
            </div>
            <div className="team-icon d-flex flex-column justify-content-center m-4">
              <a
                className="share btn btn-primary btn-md-square rounded-circle mb-2"
                href=""
              >
                <i className="fas fa-share-alt" />
              </a>
              <a
                className="share-link btn btn-primary btn-md-square rounded-circle mb-2"
                href=""
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="share-link btn btn-primary btn-md-square rounded-circle mb-2"
                href=""
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="share-link btn btn-primary btn-md-square rounded-circle mb-2"
                href=""
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow bounceInUp" data-wow-delay="0.7s">
          <div className="team-item rounded">
            <img
              className="img-fluid rounded-top "
              src="/assets/img/team-4.jpg"
              alt=""
            />
            <div className="team-content text-center py-3 bg-dark rounded-bottom">
              <h4 className="text-primary">Adam Smith</h4>
              <p className="text-white mb-0">Head Chef</p>
            </div>
            <div className="team-icon d-flex flex-column justify-content-center m-4">
              <a
                className="share btn btn-primary btn-md-square rounded-circle mb-2"
                href=""
              >
                <i className="fas fa-share-alt" />
              </a>
              <a
                className="share-link btn btn-primary btn-md-square rounded-circle mb-2"
                href=""
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="share-link btn btn-primary btn-md-square rounded-circle mb-2"
                href=""
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="share-link btn btn-primary btn-md-square rounded-circle mb-2"
                href=""
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
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

        </>
    )
}