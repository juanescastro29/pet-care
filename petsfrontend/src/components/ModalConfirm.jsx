import React from "react";

const Modal = ({ data, type }) => {
  async function deleteElement() {
    if (type === "pets") {
      const response = await fetch(`http://localhost:4000/pet/${data}`, {
        method: "DELETE",
      });
      const dataResponse = await response.json();
      if (dataResponse.message === "Pet deleted succesfully") {
        window.location.reload(true);
      }
    } else {
      const response = await fetch(
        `http://localhost:4000/appointment/${data}`,
        {
          method: "DELETE",
        }
      );
      const dataResponse = await response.json();
      if (dataResponse.message === "Appointment deleted succesfully") {
        window.location.reload(true);
      }
    }
  }

  return (
    <dialog id="deleteModal" className="modal modal-bottom sm:modal-middle">
      <form method="dialog" className="modal-box">
        {type === "pets" ? (
          <>
            <h3 className="font-bold text-lg">Delete Pet</h3>
            <p className="py-4 text-center">Are you sure you want to delete the pet?</p>
          </>
        ) : (
          <>
            <h3 className="font-bold text-lg">Delete Appointment</h3>
            <p className="py-4 text-center">Are you sure you want to delete the appointment?</p>
          </>
        )}
        <div className="modal-action">
          <button className="btn btn-success" onClick={() => deleteElement()}>
            Confirm
          </button>
          <button className="btn">Cancel</button>
        </div>
      </form>
    </dialog>
  );
};

export default Modal;
