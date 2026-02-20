import { useEffect, useState } from "react"

import ReactSwitch from "react-switch"
import Swal from "sweetalert2"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import ApiService from "../../../services/ApiService"
import ReadMore from "../../pages/ReadMore"


export default function ManageIdea() {
    const [idea, setIdea] = useState([])
    const [previewVideo, setPreviewVideo] = useState(null);

    const userId = sessionStorage.getItem("userId")



    const fetchData = () => {

        const data = {
            
        }
        ApiService.allIdea(data)
            .then((res) => {
                console.log(res)
                if (res.data.success) {
                    setIdea(res.data.data)


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


    const statuses = ["Pending", "Rejected", "Approved", "Funded"]


    const changeStatus = (id, newStatus) => {

        Swal.fire({
            title: "Are you sure?",
            text: `Change status to "${newStatus}"?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, update"
        }).then((result) => {
            if (result.isConfirmed) {
                ApiService.changeStatusIdea({
                    _id: id,
                    status: newStatus
                })
                    .then((res) => {
                        if (res.data.success) {
                            Swal.fire("Updated!", res.data.message, "success")
                            fetchData()
                        }
                    })
                    .catch((err) => toast.error(err.message))
            }
        })
    }


    const deleteIdea = (id) => {
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
                ApiService.DeleteIdea(data)
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
      <h1 className="display-1 mb-4">All Ideas</h1>
      <ol className="breadcrumb justify-content-center mb-0 animated bounceInDown">
        <li className="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        
        <li className="breadcrumb-item text-dark" aria-current="page">
          All Ideas
        </li>
      </ol>
    </div>
  </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        {idea.length > 0 ? (
                            <div className="table-responsive">
                                < table className="table border ">
                                    <thead className="thead-dark">
                                        <tr className="text-dark">
                                            <th scope="col">Sno</th>
                                            <th scope="col">Owner Name</th>
                                            
                                            <th scope="col">Idea Title</th>
                                            <th scope="col">Category Name</th>

                                            <th scope="col">Description</th>
                                           
                                            <th scope="col">Idea</th>

                                            <th scope="col">Status</th>
                                            <th scope="col">Actions</th>



                                        </tr>
                                    </thead>
                                    <tbody>

                                        {idea?.map((el, index) => (
                                            <tr key={index}>
                                                <td  className="text-dark">{index + 1}</td>
                                                <td >
                                                    <h5>{el?.ownerId?.name}</h5>
                                                </td>
                                                <td >
                                                    <h5 style={{width:"150px"}}>{el?.title}</h5>
                                                </td>
                                                <td className="hover-bg">
                                                    <h5> {el?.categoryId?.categoryName}</h5>
                                                </td>

                                                <td className="hover-bg">
                                                    <h5 > <ReadMore
  text={el.description}
  limit={20}
  className="text-dark mb-0"
/></h5>
                                                </td>

                                                {/* <td >
                                                    <h5> ₹ {el?.currentYearSales}</h5>
                                                </td>
                                                <td >
                                                    <h5>₹ {el?.totalSales}</h5>
                                                </td> */}



                                                <td className="hover-bg text-center">
                                                    {el?.pitchVideoUrl ? (
                                                        <video
                                                            src={el.pitchVideoUrl}
                                                            width="70"
                                                            height="55"
                                                            muted
                                                            preload="metadata"
                                                            onClick={() => setPreviewVideo(el.pitchVideoUrl)}
                                                            style={{
                                                                cursor: "pointer",
                                                                objectFit: "cover",
                                                                borderRadius: "4px",
                                                                border: "1px solid #ddd"
                                                            }}
                                                        />
                                                    ) : (
                                                        <span>No Video</span>
                                                    )}
                                                </td>


                                                <td className="hover-bg">
                                                    <h5 className={
                                                        el.status === "Approved"
                                                            ? "text-success"
                                                            : el.status === "Rejected"
                                                                ? "text-danger"
                                                                : "text-warning"
                                                    }>
                                                        {el.status}
                                                    </h5>
                                                </td>

                                                <td >
                                                    <select
                                                        className="form-select form-select-sm d-inline w-auto"
                                                        value={el.status}
                                                        onChange={(e) => changeStatus(el._id, e.target.value)}
                                                    >
                                                        <option value="Pending">Pending</option>
                                                        <option value="Approved">Approved</option>
                                                        <option value="Rejected">Rejected</option>
                                                        <option value="Funded">Funded</option>
                                                    </select>

                                                    <Link to={`/admin/CheckIdea/${el._id}`} className="btn btn-success mx-2"> <i class="bi bi-eye"></i></Link>

                                                    {/* <button className="btn" onClick={() => { deleteIdea(el?._id) }}><i class="bi bi-trash-fill"></i></button> */}
                                                    {/* <Link to={`/owner/idea/update/${el._id}`} className="btn btn-success mx-2"> <i class="bi bi-pencil-fill"></i></Link> */}
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="col-12 text-center">
                                <h4 className="text-muted">
                                    No idea available
                                </h4>
                                <p>Please check back later.</p>
                            </div>
                        )}

                    </div>
                </div>
            </div>
            {previewVideo && (
                <div
                    onClick={() => setPreviewVideo(null)} // click outside closes
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
                    <video
                        src={previewVideo}
                        controls
                        autoPlay
                        onClick={(e) => e.stopPropagation()} // clicking video does not close
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