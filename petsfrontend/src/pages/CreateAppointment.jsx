import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Carousel from "../components/Carousel";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const CreateAppointment = () => {
  const [selectedDate, setSelectedDate] = useState();
  const [pets, setPets] = useState([]);
  const [responseError, setResponseError] = useState();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    async function fetchPets() {
      const response = await fetch("http://localhost:4000/pet");
      const data = await response.json();
      setPets(data);
    }
    fetchPets();
  }, []);

  async function createAppointment(dataForm) {
    const response = await fetch(
      `http://localhost:4000/appointment/${dataForm.pet}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(dataForm),
      }
    );
    const data = await response.json();
    if (data.message === "New appointment created") {
      navigate("/viewappointments");
    } else {
      setResponseError(data.message);
    }
  }

  return (
    <div className="hero min-h-screen min-w-fit" data-theme="cupcake">
      <div className="hero-content flex-col lg:flex-row">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
          <form
            className="card-body grid grid-cols-2 gap-2"
            onSubmit={handleSubmit(createAppointment)}
          >
            <h1 className="text-3xl lg:text-4xl font-bold col-span-2 text-center">
              Appointments
            </h1>

            <div className="form-control col-span-2">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <Controller
                name="date"
                control={control}
                rules={{ required: "This field is required." }}
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
              {errors.date && (
                <div className="text-red-600 text-center">
                  <small>{errors.date.message}</small>
                </div>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Hour</span>
              </label>
              <select
                className="select select-bordered w-full max-w-xs"
                name="hour"
                {...register("hour", {
                  required: true,
                })}
              >
                <option value="">Select the hour</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
              </select>
              {errors.hour?.type === "required" && (
                <div className="text-red-600 text-center">
                  <small>This field is required.</small>
                </div>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <select
                className="select select-bordered w-full max-w-xs"
                name="type"
                {...register("type", {
                  required: true,
                })}
              >
                <option value="">Select the type</option>
                <option value="Urgency">Urgency</option>
                <option value="General check">General check</option>
                <option value="Control">Control</option>
              </select>
              {errors.type?.type === "required" && (
                <div className="text-red-600 text-center">
                  <small>This field is required.</small>
                </div>
              )}
            </div>
            <div className="form-control col-span-2">
              <label className="label">
                <span className="label-text">Pet</span>
              </label>
              <select
                className="select select-bordered w-full max-w-xs"
                name="pet"
                {...register("pet", {
                  required: true,
                })}
              >
                <option value="">Select the pet</option>
                {pets.map((pet) => (
                  <option key={pet._id} value={pet._id}>
                    Id: {pet._id} Name: {pet.name}
                  </option>
                ))}
              </select>
              {errors.pet?.type === "required" && (
                <div className="text-red-600 text-center">
                  <small>This field is required.</small>
                </div>
              )}
            </div>
            <div className="form-control mt-6 col-span-2">
              <button className="btn btn-primary">Create Appointment</button>
            </div>
            {responseError && (
              <div className="text-red-600 col-span-2 text-center">
                <small>{responseError}</small>
              </div>
            )}
          </form>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <Carousel type="form" />
      </div>
    </div>
  );
};

export default CreateAppointment;
