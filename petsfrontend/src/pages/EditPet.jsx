import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

const EditPet = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [responseError, setResponseError] = useState();
  const [pet, setPet] = useState();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    async function fetchPet() {
      const _id = location.state;
      const response = await fetch(`http://localhost:4000/pet/${_id}`);
      const data = await response.json();
      console.log(data);
      setPet(data);
    }
    fetchPet();
  }, []);

  async function registPet(dataForm) {
    const _id = location.state;
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
      dataForm.image = imageUrl.secure_url;
    } 
    const response = await fetch(`http://localhost:4000/pet/${_id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(dataForm),
    });
    const data = await response.json();

    if (data.message === "Pet updated succesfully") {
      navigate("/viewpets");
    } else {
      setResponseError(data.message);
    }
  }

  return (
    <>
      {pet ? (
        <>
          <div className="flex" data-theme="cupcake">
            <button
              className="btn btn-active btn-ghost sm:col-span-3 m-5"
              onClick={() => navigate("/viewpets")}
            >
              Go back
            </button>
          </div>
          <div className="hero min-h-screen min-w-fit" data-theme="cupcake">
            <div className="hero-content flex-col-reverse lg:flex-row">
              <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-200">
                <form
                  className="card-body grid grid-cols-2"
                  onSubmit={handleSubmit(registPet)}
                >
                  <h1 className="text-3xl lg:text-4xl font-bold col-span-2 text-center">
                    Edit Pet
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
                        value: pet.name,
                        pattern: /^[A-Za-z]+$/,
                      })}
                    />
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
                        value: pet.image,
                      })}
                    />
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
                        value: pet.race,
                        pattern: /^[A-Za-z]+$/,
                      })}
                    />
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
                        value: pet.age,
                      })}
                    />
                  </div>
                  <div className="form-control col-span-2">
                    <label className="label">
                      <span className="label-text">Size</span>
                    </label>
                    <select
                      className="select select-bordered w-full max-w-xs"
                      name="size"
                      {...register("size", {
                        value: pet.size,
                      })}
                    >
                      <option value="">Select the size of the pet</option>
                      <option value="Small">Small</option>
                      <option value="Medium">Medium</option>
                      <option value="Big">Big</option>
                    </select>
                  </div>
                  <div className="form-control mt-6 col-span-2">
                    <button className="btn btn-primary">Confirm</button>
                  </div>
                  {responseError && (
                    <div className="text-red-600 col-span-2 text-center">
                      <small>{responseError}</small>
                    </div>
                  )}
                </form>
              </div>
              <div className="divider lg:divider-horizontal"></div>
              <img
                src={pet.image}
                className="max-w-sm md:max-w-md rounded-lg shadow-2xl w-full"
                alt="petRegist"
              />
            </div>
          </div>
        </>
      ) : (
        <div className="hero min-h-screen" data-theme="cupcake">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <span className="loading loading-ring loading-lg"></span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditPet;
