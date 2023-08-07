import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import { Link } from "react-router-dom";

const ViewAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchAppointments() {
      const response = await fetch("http://localhost:4000/appointment");
      const data = await response.json();
      setAppointments(data.slice(10 * (page - 1), 10 * page));
    }
    fetchAppointments();
  }, [page]);

  return (
    <>
      {appointments.length > 0 ? (
        <div className="min-h-screen" data-theme="cupcake">
          <Table data={appointments} type="appointment" />
          <div
            className="join w-full p-5 content-center justify-center"
            data-theme="cupcake"
          >
            {page > 1 ? (
              <button
                className="join-item btn"
                onClick={() => setPage(page - 1)}
              >
                «
              </button>
            ) : (
              <button className="join-item btn">«</button>
            )}
            <button className="join-item btn">Page {page}</button>
            {page >= 1 && appointments.length > 0 ? (
              <button
                className="join-item btn"
                onClick={() => setPage(page + 1)}
              >
                »
              </button>
            ) : (
              <button className="join-item btn">»</button>
            )}
          </div>
        </div>
      ) : (
        <>
          {appointments.length === 0 && page === 1 ? (
            <div className="hero min-h-screen" data-theme="cupcake">
              <div className="hero-content text-center">
                <div className="max-w-md">
                  <h1 className="text-3xl font-bold py-10">
                    No registered appointments
                  </h1>
                  <Link
                    to="/createappointment"
                    className="btn btn-ghost btn-active"
                  >
                    Create appointment
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="hero min-h-screen" data-theme="cupcake">
              <div className="hero-content text-center">
                <div className="max-w-md">
                  <h1 className="text-3xl font-bold py-10">
                    No more appointments to show
                  </h1>
                  <div
                    className="join w-full p-5 content-center justify-center"
                    data-theme="cupcake"
                  >
                    {page > 1 ? (
                      <button
                        className="join-item btn"
                        onClick={() => setPage(page - 1)}
                      >
                        «
                      </button>
                    ) : (
                      <button className="join-item btn">«</button>
                    )}
                    <button className="join-item btn">Page {page}</button>
                    {page >= 1 && appointments.length > 0 ? (
                      <button
                        className="join-item btn"
                        onClick={() => setPage(page + 1)}
                      >
                        »
                      </button>
                    ) : (
                      <button className="join-item btn">»</button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ViewAppointments;
