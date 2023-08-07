import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ModalForm = ({ data, type }) => {
  const [selectedDate, setSelectedDate] = useState();
  const [responseError, setResponseError] = useState();
  const [dataModal, setDataModal] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({ defaultValues: dataModal });

  useEffect(() => {
    async function fetchData() {
      if (type === "pets") {
        const response = await fetch(`http://localhost:4000/pet/${data}`);
        const dataResponse = await response.json();
        setDataModal(dataResponse);
      } else if (type === "appointment") {
        const response = await fetch(
          `http://localhost:4000/appointment/${data}`
        );
        const dataResponse = await response.json();
        setSelectedDate(new Date(dataResponse.date))
        setDataModal(dataResponse);
      }
    }
    fetchData();
  }, [data]);

  useEffect(() => {
    reset(dataModal);
  }, [dataModal]);

  async function edit(dataForm) {
    if (type === "pets") {
      const response = await fetch(
        `http://localhost:4000/pet/${dataModal._id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(dataForm),
        }
      );
      const dataResponse = await response.json();
      if (dataResponse.message === "Pet updated succesfully") {
        document.getElementById("editModal").close();
        window.location.reload(true);
      } else {
        setResponseError(dataResponse.message);
      }
    } else {
      const response = await fetch(
        `http://localhost:4000/appointment/${dataModal._id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(dataForm),
        }
      );
      const dataResponse = await response.json();
      if (dataResponse.message === "Appointment update succesfully") {
        document.getElementById("editModal").close();
        window.location.reload(true);
      } else {
        setResponseError(dataResponse.message);
      }
    }
  }

  return (
    <dialog id="editModal" className="modal modal-bottom sm:modal-middle">
      {Object.keys(dataModal).length > 0 ? (
        <form className="modal-box" onSubmit={handleSubmit(edit)}>
          {type === "pets" ? (
            <>
              <h3 className="text-2xl font-bold">Edit Pet</h3>
              <div className="card-body grid grid-cols-2 gap-2">
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
                      value: dataModal.name,
                      pattern: /^[A-Za-z]+$/,
                    })}
                  />
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
                      value: dataModal.race,
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
                      value: dataModal.age,
                    })}
                  />
                </div>
                <div className="form-control col-span-2">
                  <label className="label">
                    <span className="label-text">Size</span>
                  </label>
                  <select
                    className="select select-bordered w-full col-span-2"
                    name="size"
                    {...register("size", {
                      value: dataModal.size,
                    })}
                  >
                    <option value="">Select the size of the pet</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Big">Big</option>
                  </select>
                </div>
                {responseError && (
                  <div className="text-red-600 col-span-2 text-center">
                    <small>{responseError}</small>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold col-span-2 text-center">
                Create Appointment
              </h1>
              <div className="form-control col-span-2">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <Controller
                  name="date"
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => {
                        setSelectedDate(date);
                        field.onChange(date);
                      }}
                      dateFormat="yyyy/MM/dd"
                      placeholderText="Select a date"
                      className="input input-bordered col-span-2 w-full"
                    />
                  )}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Hour</span>
                </label>
                <select
                  className="select select-bordered w-full"
                  name="hour"
                  {...register("hour", {
                    value: dataModal.hour,
                  })}
                >
                  <option value="">Select the hour</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Type</span>
                </label>
                <select
                  className="select select-bordered w-full"
                  name="type"
                  {...register("type", {
                    value: dataModal.type,
                  })}
                >
                  <option value="">Select the type</option>
                  <option value="Urgency">Urgency</option>
                  <option value="General check">General check</option>
                  <option value="Control">Control</option>
                </select>
              </div>
            </>
          )}
          <div className="modal-action">
            <button className="btn form-control btn-success">Confirm</button>
            <button
              className="btn"
              type="button"
              onClick={() => {
                document.getElementById("editModal").close();
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="flex items-center justify-center h-full">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      )}
    </dialog>
  );
};

export default ModalForm;
