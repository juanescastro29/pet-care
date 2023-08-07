import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = ({ selected, onChange, name, register, errors }) => {
  return (
    <div className="form-control col-span-2">
      <label className="label">
        <span className="label-text">Date</span>
      </label>
      <DatePicker
        name={name}
        selected={selected}
        onChange={onChange}
        dateFormat="yyyy/MM/dd"
        placeholderText="Select date"
        className="col-span-2 w-full input input-bordered"
        {...register(name, {
          require: true,
        })}
      />
      {errors.date?.type === "required" && (
        <div className="text-red-600 text-center">
          <small>This field is required.</small>
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;
