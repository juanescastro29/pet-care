import EditPet from "../assets/editPet.png";
import DeletePet from "../assets/deletePet.png";
import { Link } from "react-router-dom";

const Card = ({ _id, name, race, size, image, age }) => {
  

  async function deleteElement() {
    const response = await fetch(`http://localhost:4000/pet/${_id}`, {
      method: "DELETE",
    })
    const data = await response.json();
    if(data.message === "Pet deleted succesfully") {
      window.location.reload()
    }
  }

  return (
    <>
      <div className="card md:w-80 bg-base-200 shadow-2xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="pet"
            className="rounded-xl h-64 w-52 object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>Characteristics:</p>
          <ul>
            <li>- Race: {race}</li>
            <li>- Age: {age}</li>
            <li>- Size: {size}</li>
          </ul>
          <div className="card-actions p-3">
            <Link
              className="btn btn-sm btn-ghost tooltip normal-case"
              data-tip="Edit Pet"
              to={"/editpet"}
              state={_id}
            >
              <img src={EditPet} alt="icon" width={32} />
            </Link>
            <Link
              className="btn btn-sm btn-ghost tooltip normal-case"
              data-tip="Delete Pet"
              onClick={() => document.getElementById(`${_id}`).showModal()}
            >
              <img src={DeletePet} alt="icon" width={32} />
            </Link>
          </div>
        </div>
      </div>
      <dialog id={_id} className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Delete Pet</h3>
          <p className="py-4 text-center">
            Are you sure you want to delete the pet?
          </p>
          <div className="modal-action">
            <button className="btn btn-success" onClick={() => deleteElement()}>
              Confirm
            </button>
            <button className="btn">Cancel</button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default Card;
