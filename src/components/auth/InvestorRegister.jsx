import axios from "axios"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import ApiService from "../../services/ApiService"
import { toast } from "react-toastify"

import { useEffect, useState } from "react"
import { MoonLoader } from "react-spinners"


export default function InvestorRegister() {

    let nav = useNavigate()
    const [load, setload] = useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const [sport, setSport] = useState([])
    const [sportId, setSportId] = useState("")






    const handleForm = (data) => {
        setload(true)

        const formData = new FormData();
        formData.append("name", data?.name);
        formData.append("email", data?.email);
        formData.append("password", data?.password);
        formData.append("contact", data?.contact);
        formData.append("riskPreference", data?.riskPreference);

        formData.append("country", data?.country);

        formData.append("profileImage", profileFile);        // user
        formData.append("verificationImage", verification); // investor




        console.log("form Submitted", formData);
        ApiService.investorregister(formData)
            .then((res) => {
                console.log(res)

                if (res.data.success) {
                    setload(false)
                    toast.success(res.data.message)

                    let logindata = {
                        email: data.email,
                        password: data.password
                    }
                    console.log(logindata);

                    ApiService.login(logindata)
                        .then((result) => {
                            console.log(result);
                            if (result.data.success) {
                                toast.success(result.data.message)
                                setload(false)
                                sessionStorage.setItem("isLogin", true)

                                sessionStorage.setItem("token", result.data.token)
                                sessionStorage.setItem("name", result.data.data.name)
                                sessionStorage.setItem("email", result.data.data.email)
                                sessionStorage.setItem("role", result.data.data.role)
                                sessionStorage.setItem("userId", result.data.data._id)
                                if (result.data.data.role == "admin") {
                                    nav("/admin")
                                }
                                else if (result.data.data.role == "owner") {
                                    nav("/owner")
                                }
                                else {
                                    nav("/")
                                }

                            } else {
                                setload(false)
                                toast.error("something went wrong")
                            }
                        })
                        .catch((err) => {
                            setload(false)
                            toast.error(
                                err.response?.data?.message ||
                                err.message ||
                                "Something went wrong"
                            );
                            console.log("1", err);

                        })
                }
            })
            .catch((err) => {
                setload(false)
                toast.error(
                    err.response?.data?.message ||
                    err.message ||
                    "Something went wrong"
                );

            })
    }

    const handleError = (errors) => {
        setload(false);
        console.log("Form Errors:", errors);
        toast.error("Please fix the form errors");
    };











    return (
        <>
            {
                load ?
                    (<div style={{
                        position: "fixed",
                        inset: 0,
                        backgroundColor: "rgba(255,255,255,0.6)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 9999
                    }}>
                        <div style={{ transform: "translateY(-40px)" }}>
                            <MoonLoader size={50} />
                        </div>
                    </div>)
                    :

                    <div
                        className="container-fluid contact py-6 wow bounceInUp"
                        data-wow-delay="0.1s"
                    >
                        <div className="container d-flex justify-content-center w-50">
                            <div className="p-4 bg-light rounded contact-form">
                                <div className="row g-4 ">
                                    <div className="col-12 text-center">

                                        <h1 className="display-5 mb-0">Investor Register</h1>
                                    </div>
                                    <div className="col-16 mt-4 ">

                                        <form action="" method="POST" onSubmit={handleSubmit(handleForm, handleError)}>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input
                                                            required
                                                            type="text"
                                                            className="w-100 form-control p-3 mb-4 border-primary bg-light"
                                                            placeholder="Name"
                                                            style={{ height: 55 }}
                                                            {...register("name", {
                                                                required: {
                                                                    value: true,
                                                                    message: "name is req"
                                                                }
                                                            })}
                                                        />

                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input
                                                            required
                                                            type="email"
                                                            className="w-100 form-control p-3 mb-4 border-primary bg-light"
                                                            placeholder="Your Email"
                                                            style={{ height: 55 }}
                                                            {...register("email", {
                                                                required: {
                                                                    value: true,
                                                                    message: "email is req"
                                                                }
                                                            })}
                                                        />

                                                    </div>
                                                </div>



                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input
                                                            required

                                                            type="password"
                                                            className=" w-100 form-control p-3 mb-4 border-primary "
                                                            placeholder="Password"
                                                            style={{ height: 55 }}
                                                            {...register("password", {
                                                                required: {
                                                                    value: true,
                                                                    message: "password is req"
                                                                }
                                                            })}
                                                        />


                                                    </div>
                                                </div>


                                                <div className="col-md-6">
                                                    <div className="form-group">

                                                        <input
                                                            required
                                                            type="text"
                                                            inputMode="numeric"
                                                            maxLength={10}



                                                            className=" w-100 form-control p-3 mb-4 border-primary "
                                                            placeholder="Contact"
                                                            style={{ height: 55 }}
                                                            {...register("contact", {
                                                                required: {
                                                                    value: true,
                                                                    message: "contact is req"
                                                                },
                                                                pattern: {
                                                                    value: /^[0-9]{10}$/,
                                                                    message: "Contact must be exactly 10 digits"
                                                                }

                                                            })}
                                                        />

                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <select
                                                            className="form-select border-primary p-2 mb-4"
                                                            aria-label="Default select example"
                                                            {...register("country", {
                                                                required: {
                                                                    value: true,
                                                                    message: "country is req"
                                                                }
                                                            })}
                                                        >
                                                            <option selected="">Country</option>
                                                            <option value="India">India</option>
                                                            <option value="USA">USA</option>
                                                            <option value="Russia">Russia</option>
                                                            <option value="China">China</option>
                                                            <option value="Uk">Uk</option>


                                                        </select>

                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <select
                                                            className="form-select border-primary p-2 mb-4"
                                                            aria-label="Default select example"
                                                            {...register("riskPreference", {
                                                                required: {
                                                                    value: true,
                                                                    message: "riskPreference is req"
                                                                }
                                                            })}
                                                        >
                                                            <option selected="">Risk preference</option>
                                                            <option value="low">Low</option>
                                                            <option value="Medium">Medium</option>
                                                            <option value="High">High</option>
                                                        </select>

                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">

                                                        <input
                                                            required
                                                            type="file"
                                                            accept="image/*"
                                                            className=" w-100 form-control p-3 mb-4 border-primary "
                                                            {...register("profileImage", {
                                                                required: "profileImage is required"
                                                            })}
                                                        />

                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">

                                                        <input
                                                            required
                                                            type="file"
                                                            accept="image/*"
                                                            className=" w-100 form-control p-3 mb-4 border-primary "
                                                            {...register("verificationImage", {
                                                                required: "verificationImage is required"
                                                            })}
                                                        />

                                                    </div>
                                                </div>
                                            </div>



                                            <button
                                                className="w-100 btn btn-primary form-control p-3 border-primary bg-primary rounded-pill"
                                                type="submit"
                                            >
                                                Register
                                            </button>
                                            {/* <p className="text-center mt-2"><Link to="/register"  >Signup as Owner </Link>| <Link to="/coachregister">Investor</Link></p> */}

                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div >
                    </div >


            }
        </>
    )
}



