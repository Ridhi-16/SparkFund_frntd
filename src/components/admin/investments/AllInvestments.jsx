import { useEffect, useState } from "react"

import ReactSwitch from "react-switch"
import Swal from "sweetalert2"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import ApiService from "../../../services/ApiService"

export default function ALLInvestments() {
    // const investorId = sessionStorage.getItem("userId")

    const [investments, setInvestments] = useState([])
    const [loading, setLoading] = useState(false)









    const fetchData = () => {
        setLoading(true)

        ApiService.allInvestment()
            .then(res => {
                if (res.data.success) {
                    setInvestments(res.data.data || [])
                    console.log(res);
                    
                } else {
                    toast.error(res.data.message)
                }
            })
            .catch(err => toast.error(err.message))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        fetchData()
    }, [])

    

    // const filteredMatchApplications =
    //     selectedSport === "All"
    //         ? matchApplication
    //         : matchApplication.filter(
    //             (el) => el?.sportsId?._id === selectedSport
    //         );





    const changeStatus = (id, oldStatus, newStatus) => {

        if (oldStatus === newStatus) return

        Swal.fire({
            title: "Are you sure?",
            text: `Change status to "${newStatus}"?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, update"
        }).then((result) => {

            if (!result.isConfirmed) {
                fetchData() // rollback UI
                return
            }

            ApiService.changeStatusInvestment({
                _id: id,
                status: newStatus
            })
                .then((res) => {
                    if (res.data.success) {
                        Swal.fire("Updated!", res.data.message, "success")
                        fetchData()
                    }
                })
                .catch(() => fetchData()) // rollback on error
        })
    }


    const deleteInvestment = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `${!id ? "Enable" : "Delete"}`
        }).then((result) => {
            if (result.isConfirmed) {
                let data = {
                    _id: id,

                }
                let token = sessionStorage.getItem("token")
                let headers = {
                    Authorization: token
                }
                ApiService.DeleteInvestment(data)
                    .then((res) => {
                        if (res.data.success) {
                            Swal.fire({
                                title: res.data.message,
                                // text: "Your file has been deleted.",
                                icon: "success"
                            });
                            fetchData()
                        }
                        else {
                            toast.error(res.data.message)
                        }
                    })
                    .catch((err) => {
                        toast.error(err.message)
                    })
            }
        })


    }


    return (
        <>
        <div className="container-fluid bg-light py-4 my-4 mt-0">
    <div className="container text-center animated bounceInDown">
      <h1 className="display-1 mb-4"> All Investments </h1>
      <ol className="breadcrumb justify-content-center mb-0 animated bounceInDown">
        <li className="breadcrumb-item">
          <a href="/admin">Home</a>
        </li>
       
        <li className="breadcrumb-item text-dark" aria-current="page">
          Investments
        </li>
      </ol>
    </div>
  </div>





            {/* <div className="container-fluid bg-primary py-5 bg-hero mb-5">
                        <div className="container py-5">
                            <div className="row justify-content-start">
                                <div className="col-lg-8 text-center text-lg-start">
                                    <h1 className="display-1 text-white mb-md-4">All teams</h1>
                                    <Link to="/" className="btn btn-primary py-md-3 px-md-5 me-3">
                                        Home
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div> */}
           

            <div className="container py-2">
                <div className="row">
                    <div className="col">
                        {investments.length > 0 ? (
                            <div className="table-responsive">
                                < table className="table border ">
                                    <thead className="thead-dark">
                                        <tr className="text-dark">
                                            <th scope="col">Sno</th>
                                            <th scope="col">Investor Name</th>

                                            <th scope="col">Idea Owner Name</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col">equityPercent</th>





                                            <th scope="col">Status</th>
                                            <th scope="col">Actions</th>



                                        </tr>
                                    </thead>
                                    <tbody>

                                        {investments?.map((el, index) => (
                                            <tr key={index}>
                                                <td className="text-dark">{index + 1}</td>
                                                <td >
                                                    <h5>{el?.investorId?.name}</h5>
                                                </td>
                                                <td className="hover-bg">
                                                    <h5> {el?.ideaId?.ownerId?.name}</h5>
                                                </td>
                                                <td className="hover-bg">
                                                    <h5> ₹{el?.amount}</h5>
                                                </td>
                                                <td className="hover-bg">
                                                    <h5> {el?.equityPercent} %</h5>
                                                </td>



                                                {/* <td className="hover-bg text-center">
                                                        {el?.logo ? (
                                                            <img
                                                                onClick={() => setPreviewImage(el.logo)}
                                                                src={el.logo}
                                                                alt="logo"
                                                                width="70"
                                                                height="55"
                                                                style={{
                                                                    objectFit: "cover",
                                                                    borderRadius: "4px",
                                                                    border: "1px solid #ddd"
                                                                }}
                                                            />
                                                        ) : (
                                                            <span>No Image</span>
                                                        )}
                                                    </td> */}

                                                <td className="hover-bg">
                                                    <h5 className={
                                                        el.status === "Active"
                                                            ? "text-success"
                                                            : el.status === "Frozen"
                                                                ? "text-danger"
                                                                : "text-warning"
                                                    }>
                                                        {el.status}
                                                    </h5>
                                                </td>

                                                <td>
                                                    <select
                                                        className="form-select form-select-sm d-inline w-auto"
                                                        value={el.status}
                                                        onChange={(e) => changeStatus(el._id, el.status, e.target.value)}
                                                    >

                                                        <option value="Pending">Pending</option>
                                                        <option value="Active">Active</option>
                                                        <option value="Refunded">Refunded</option>
                                                        <option value="Frozen">Frozen</option>

                                                        {/* <option value="Cancelled">Cancelled</option> */}
                                                    </select>



                                                    <button className="btn" onClick={() => { deleteInvestment(el?._id) }}><i class="bi bi-trash-fill"></i></button>
                                                    {/* <Link to={`/coach/matchapplication/update/${el._id}`} className="btn btn-success mx-2"> <i class="bi bi-pencil-fill"></i></Link> */}
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="col-12 text-center">
                                <h4 className="text-muted">
                                    No Investment available
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