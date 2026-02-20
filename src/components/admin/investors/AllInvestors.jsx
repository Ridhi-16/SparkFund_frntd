import { useEffect, useState } from "react"

import ReactSwitch from "react-switch"
import Swal from "sweetalert2"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import ApiService from "../../../services/ApiService"


export default function AllInvestors() {
    const [investors, setInvestors] = useState([])
    const [previewImage, setPreviewImage] = useState(null);



    const fetchData = () => {

        // const data = {
        //     limit: Limit,
        //     currentPage: currentPage
        // }
        ApiService.allInvestor()
            .then((res) => {
                console.log(res)
                if (res.data.success) {
                    setInvestors(res.data.data)


                }
                else {
                    toast.error(res.data.essage)
                }
            })
            .catch((err) => {
                toast.error(err.message)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])


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
    
                ApiService.changeStatusInvestor({
                    _id: id,
                    kycStatus: newStatus
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

    const deleteInvestors = (id) => {
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
                ApiService.DeleteInvestor(data)
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
      <h1 className="display-1 mb-4">All Investors</h1>
      <ol className="breadcrumb justify-content-center mb-0 animated bounceInDown">
        <li className="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        
        <li className="breadcrumb-item text-dark" aria-current="page">
          All Investors
        </li>
      </ol>
    </div>
  </div>



           

            <div className="container py-2">
                <div className="row">
                    <div className="col">
                        {investors.length > 0 ? (
                            <div className="table-responsive">
                                < table className="table border ">
                                    <thead className="thead-dark">
                                        <tr className="text-dark">
                                            <th scope="col">Sno</th>
                                            <th scope="col">Investors Name</th>
                                            <th scope="col">Email</th>
                                            
                                            <th scope="col">Contact</th>
                                            
                                            <th scope="col">Country</th>
                                             <th scope="col">Risk Preference</th>
                                            <th scope="col">Image</th>

                                            
                                            <th scope="col">KycStatus</th>
                                            <th scope="col">Actions</th>



                                        </tr>
                                    </thead>
                                    <tbody>

                                        {investors?.map((el, index) => (
                                            <tr key={index}>
                                                <td className="text-dark">{index + 1}</td>
                                                <td >
                                                    <h5>{el?.userId?.name}</h5>
                                                </td>

                                                <td >
                                                    <h5>{el?.userId?.email}</h5>
                                                </td>
                                                <td className="hover-bg">
                                                    <h5> {el?.userId?.contact}</h5>
                                                </td>
                                                <td >
                                                    <h5>{el?.country}</h5>
                                                </td>
                                                
                                                

                                                <td className="hover-bg">
                                                    <h5> {el?.riskPreference}</h5>
                                                </td>
                                                <td className="hover-bg text-center">
                                                    {el?.userId?.profileImage ? (
                                                        <img
                                                            onClick={() => setPreviewImage(el?.userId?.profileImage)}
                                                            src={el?.userId?.profileImage}
                                                            alt="land"
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
                                                </td>
                                               
                                                

                                                <td className="hover-bg">
                                                   <h5 className={
                                                        el.status === "Verified"
                                                            ? "text-success"
                                                            : el.status === "Rejected"
                                                                ? "text-danger"
                                                                : "text-warning"
                                                    }>
                                                        {el.kycStatus}
                                                    </h5>
                                                </td>
                                                <td>
                                                <select
                                                        className="form-select form-select-sm d-inline w-auto"
                                                        value={el.kycStatus}
                                                        onChange={(e) => changeStatus(el._id, el.kycStatus, e.target.value)}
                                                    >

                                                        <option value="Pending">Pending</option>
                                                        <option value="Verified">Verified</option>
                                                        <option value="Rejected">Rejected</option>
                                                        {/* <option value="Cancelled">Cancelled</option> */}
                                                    </select>

                                               
                                                    <button className="btn" onClick={() => { deleteInvestors(el?._id) }}><i class="bi bi-trash-fill"></i></button>
                                                    {/* <Link to={`/admin/Investors/update/${el._id}`} className="btn btn-success mx-2"> <i class="bi bi-pencil-fill"></i></Link> */}
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="col-12 text-center">
                                <h4 className="text-muted">
                                    No Investors available
                                </h4>
                                <p>Please check back later.</p>
                            </div>
                        )}

                    </div>
                </div>
            </div>

            {previewImage && (
                <div
                    onClick={() => setPreviewImage(null)} // click outside closes
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "rgba(0,0,0,0.7)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 1000
                    }}
                >
                    <img
                        src={previewImage}
                        alt="Preview"
                        onClick={(e) => e.stopPropagation()} // clicking image does not close
                        style={{
                            maxWidth: "90%",
                            maxHeight: "90%",
                            borderRadius: "6px",
                            boxShadow: "0 0 10px #000"
                        }}
                    />
                </div>
            )}



        </>
    )
}