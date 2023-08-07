import { Link } from "react-router-dom";
import EditPet from "../assets/editPet.png";
import DeletePet from "../assets/deletePet.png";
import { format } from "date-fns";
import EditAppointment from "../assets/editAppointment.png";
import DeleteAppointment from "../assets/deleteAppointment.png";
import { useState } from "react";
import ModalConfirm from "./ModalConfirm";
import ModalForm from "./ModalForm";

const Table = ({ data, type }) => {
  const [deleteId, setDeleteId] = useState();
  const [dataModal, setDataModal] = useState({});
  const [typeData, setTypeData] = useState("");

  function assignId(id) {
    if (type === "pets") {
      setDeleteId(id);
      setTypeData("pets");
      document.getElementById("deleteModal").showModal();
    } else if(type === "appointment") {
      setDeleteId(id);
      setTypeData("appointment");
      document.getElementById("deleteModal").showModal();
    }
  }

  async function assignData(id) {
    if (type === "pets") {
      setDataModal(id)
      setTypeData("pets");
      document.getElementById("editModal").showModal();
    }else if (type === "appointment") {
      setDataModal(id)
      setTypeData("appointment");
      document.getElementById("editModal").showModal();
    }
  }

  return (
    <div className="w-full" data-theme="cupcake">
      <div className="overflow-x-auto p-10">
        <table className="table table-zebra">
          <thead>
            {type === "pets" ? (
              <tr className="text-center">
                <th></th>
                <th>Name</th>
                <th>Race</th>
                <th>Age</th>
                <th>Size</th>
                <th>Actions</th>
              </tr>
            ) : (
              <tr className="text-center">
                <th></th>
                <th>Date</th>
                <th>Hour</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            )}
          </thead>
          <tbody>
            {type === "pets"
              ? data.map((pet, index) => (
                  <tr key={pet._id} className="text-center">
                    <th>{index}</th>
                    <td>{pet.name}</td>
                    <td>{pet.race}</td>
                    <td>{pet.age}</td>
                    <td>{pet.size}</td>
                    <td>
                      <Link
                        className="btn btn-sm btn-ghost tooltip normal-case"
                        data-tip="Edit Pet"
                        onClick={() => assignData(pet._id)}
                      >
                        <img src={EditPet} alt="icon" width={32} />
                      </Link>
                      <button
                        className="btn btn-sm btn-ghost tooltip normal-case"
                        data-tip="Delete Pet"
                        onClick={() => assignId(pet._id)}
                      >
                        <img src={DeletePet} alt="icon" width={32} />
                      </button>
                    </td>
                  </tr>
                ))
              : data.map((appointment, index) => (
                  <tr key={appointment._id} className="text-center">
                    <th>{index}</th>
                    <td>{format(new Date(appointment.date), "yyyy/MM/dd")}</td>
                    <td>{appointment.hour}</td>
                    <td>{appointment.type}</td>
                    <td>
                      <Link
                        className="btn btn-sm btn-ghost tooltip normal-case"
                        data-tip="Edit Appointment"
                        onClick={() => assignData(appointment._id)}
                      >
                        <img src={EditAppointment} alt="icon" width={32} />
                      </Link>
                      <Link
                        className="btn btn-sm btn-ghost tooltip normal-case"
                        data-tip="Delete Appointment"
                        onClick={() => assignId(appointment._id)}
                      >
                        <img src={DeleteAppointment} alt="icon" width={32} />
                      </Link>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
      <ModalConfirm data={deleteId} type={typeData} />
      <ModalForm data={dataModal} type={typeData} />
    </div>
  );
};

export default Table;
