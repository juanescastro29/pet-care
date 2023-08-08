import { useForm } from "react-hook-form";
import Bella2 from "../assets/Bella2.jpeg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistPet = () => {
  const [responseError, setResponseError] = useState();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  async function registPet(dataForm) {
    setLoading(true);
    setResponseError("");
    if (dataForm.image[0]) {
      const image = new FormData();
      image.append("file", dataForm.image[0]);
      image.append("upload_preset", "pets-care");
      const responseCloud = await fetch(
        "https://api.cloudinary.com/v1_1/dbhl95fyu/image/upload",
        {
          method: "POST",
          body: image,
        }
      );
      const imageUrl = await responseCloud.json();
      if (imageUrl.error) {
        setLoading(false);
        setResponseError(imageUrl.error.message);
        return;
      }
      dataForm.image = imageUrl.secure_url;
    } else {
      dataForm.image = "";
    }
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
      setLoading(false);
      setResponseError(data.message);
    }
  }

  return (
    <div className="hero min-h-screen min-w-fit" data-theme="cupcake">
      <div className="hero-content flex-col-reverse lg:flex-row">
        <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-200">
          <form
            className="card-body grid grid-cols-2"
            onSubmit={handleSubmit(registPet)}
          >
            <h1 className="text-3xl lg:text-4xl font-bold col-span-2 text-center">
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
            <div className="form-control col-span-2">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="file"
                accept="image/*"
                className="file-input file-input-bordered file-input-md w-full max-w-xs"
                {...register("image", {
                  required: true,
                })}
              />
              {errors.image?.type === "required" && (
                <div className="text-red-600 text-center">
                  <small>This field is required.</small>
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
                <option value="">Select the size of the pet</option>
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
            {loading === false ? (
              <div className="form-control mt-6 col-span-2">
                <button className="btn btn-primary">Regist</button>
              </div>
            ) : (
              <div className="mt-6 col-span-2 content-center text-center justify-center">
                <span className="loading loading-dots loading-lg"></span>
              </div>
            )}
            {responseError && (
              <div className="text-red-600 col-span-2 text-center">
                <small>{responseError}</small>
              </div>
            )}
          </form>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <img
          src={Bella2}
          className="max-w-sm md:max-w-md rounded-lg shadow-2xl w-full"
          alt="petRegist"
        />
      </div>
    </div>
  );
};

export default RegistPet;
