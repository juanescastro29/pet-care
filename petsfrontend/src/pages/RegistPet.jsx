import { useForm } from "react-hook-form";
import Bella2 from "../assets/Bella2.jpeg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistPet = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [responseError, setResponseError] = useState();
  const navigate = useNavigate();

  async function registPet(dataForm) {
    const response = await fetch("http://localhost:4000/pet", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(dataForm),
    });
    const data = await response.json();

    if (data.message === "Pet created succesfully") {
      navigate("/viewpets");
    } else {
      setResponseError(data.message);
    }
  }

  return (
    <div className="hero min-h-screen" data-theme="cupcake">
      <div className="hero-content flex-col-reverse lg:flex-row">
        <img
          src={Bella2}
          className="max-w-sm rounded-lg shadow-2xl w-2/3"
          alt="petRegist"
        />
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
          <form
            className="card-body grid grid-cols-2 gap-2"
            onSubmit={handleSubmit(registPet)}
          >
            <h1 className="text-2xl font-bold col-span-2 text-center">
              Regist Pet
            </h1>
            <div className="form-control col-span-2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                {...register("name", {
                  required: true,
                  pattern: /^[A-Za-z]+$/,
                })}
              />
              {errors.name?.type === "required" && (
                <div className="text-red-600 text-center">
                  <small>This field is required.</small>
                </div>
              )}
              {errors.name?.type === "pattern" && (
                <div className="text-red-600 text-center">
                  <small>Only letters are accepted.</small>
                </div>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Race</span>
              </label>
              <input
                type="text"
                placeholder="race"
                name="race"
                className="input input-bordered"
                {...register("race", {
                  required: true,
                  pattern: /^[A-Za-z]+$/,
                })}
              />
              {errors.race?.type === "required" && (
                <div className="text-red-600 text-center">
                  <small>This field is required.</small>
                </div>
              )}
              {errors.race?.type === "pattern" && (
                <div className="text-red-600 text-center">
                  <small>Only letters are accepted.</small>
                </div>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Age</span>
              </label>
              <input
                type="text"
                placeholder="age"
                name="age"
                className="input input-bordered"
                {...register("age", {
                  required: true,
                })}
              />
              {errors.age?.type === "required" && (
                <div className="text-red-600 text-center">
                  <small>This field is required.</small>
                </div>
              )}
            </div>
            <div className="form-control col-span-2">
              <label className="label">
                <span className="label-text">Size</span>
              </label>
              <select
                className="select select-bordered w-full max-w-xs"
                name="size"
                {...register("size", {
                  required: true,
                  
                })}
              >
                <option value="">
                  Select the size of the pet
                </option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Big">Big</option>
              </select>
              {errors.size?.type === "required" && (
                <div className="text-red-600 text-center">
                  <small>This field is required.</small>
                </div>
              )}
            </div>
            <div className="form-control mt-6 col-span-2">
              <button className="btn btn-primary">Regist</button>
            </div>
            {responseError && (
              <div className="text-red-600 col-span-2 text-center">
                <small>{responseError}</small>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistPet;
