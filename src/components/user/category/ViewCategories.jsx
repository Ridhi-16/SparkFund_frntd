import { useEffect, useState } from "react"
import ApiService from "../../../services/ApiService"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"
import ReadMore from "../../pages/ReadMore";

export default function ViewCategories() {

    const [category, setCategory] = useState([])

    const fetchData = () => {

        ApiService.allCategory({status:true})
            .then((res) => {
                if (res.data.success) {
                    console.log(res.data)
                    setCategory(res.data.data)
                }
                else {
                    toast.error(res.message)
                }
            })
            .catch((err) => {
                toast.error(err.message)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])





    return (


        <>

            {/* <div
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
            </div> */}
            {/* Modal Search End */}
            {/* Hero Start */}
            <div className="container-fluid bg-light py-3  mt-0">
                <div className="container text-center animated bounceInDown">
                    <h1 className="display-1 mb-4">Categories</h1>
                    <ol className="breadcrumb justify-content-center mb-0 animated bounceInDown">
                        <li className="breadcrumb-item">
                            <a href="/">Home</a>
                        </li>
                        
                        <li className="breadcrumb-item text-dark" aria-current="page">
                            Categories
                        </li>
                    </ol>
                </div>
            </div>


            <div className="container-fluid team py-6">
                <div className="container">
                    {/* <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                        <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
                            Our Team
                        </small>
                        <h1 className="display-5 mb-5">We have experienced chef Team</h1>
                    </div> */}
                    <div className="row g-4">
                        {category.length > 0 ? (
                            category.map((el, index) => (
                                <div className="col-lg-3 col-md-6 wow bounceInUp" data-wow-delay="0.1s">
                                    <Link to={`/manageideas/${el._id}`}>
                                        <div className="team-item rounded">
                                            <img 
                                                className="img-fluid rounded-top  w-100 h-100"
                                                src={el.image}
                                                alt=""
                                            />
                                            <div className="team-content text-center py-3 bg-dark rounded-bottom">
                                                <h4 className="text-primary">{el.categoryName}</h4>
                                                <ReadMore
  text={el.description}
  limit={20}
  className="text-white mb-0"
/>

                                            </div>
                                            {/* <div className="team-icon d-flex flex-column justify-content-center m-4">
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
                                </div> */}
                                        </div>
                                    </Link>

                                </div>
                            ))
                        ) : (
                            <div className="col-12 text-center">
                                <h4 className="text-muted">
                                    No Categories available
                                </h4>
                                <p>Please check back later.</p>
                            </div>
                        )}



                    </div>
                </div>
            </div>


        </>






    )
}