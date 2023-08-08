import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        data-theme="light"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/group-portrait-adorable-puppies_53876-64796.jpg?w=996&t=st=1691341516~exp=1691342116~hmac=1085e0f9ecb1f1233d961a89177fdca56768ffd8fa5fcc0dbfaaa5809fa48533)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Animal Hospital</h1>
            <p className="mb-5">
              We are excited to welcome you and your beloved pets to our
              veterinary clinic, where the well-being and health of your furry
              friends are our top priority. We understand that your pets are
              part of your family and deserve the best possible medical care.
            </p>
          </div>
        </div>
      </div>
      <div className="hero min-h-full p-8" data-theme="cupcake">
        <div className="hero-content flex-col lg:flex-row">
          <Carousel type="pets" />
          <div>
            <h1 className="text-5xl font-bold">Regist Pet</h1>
            <p className="py-6 text-justify">
              To begin this process, it's important to register your pet in our
              system. This will allow us to gather essential details about your
              pet, such as its medical history, age, breed, and specific needs.
              Through this information, our veterinarians will be able to
              provide the best possible care.
            </p>
            <div className="text-center sm:w-full sm:text-left">
              <Link to="/registpet" className="btn btn-ghost btn-active">
                Regist Pet
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hero min-h-full p-8" data-theme="cupcake">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Carousel type="appointments" />
          <div>
            <h1 className="text-5xl font-bold">Create Appointment</h1>
            <p className="py-6 text-justify">
              To ensure that each pet receives the personalized attention it
              deserves, we have implemented an appointment system for
              consultations and treatments. This process ensures that every pet
              receives the appropriate time and attention from our expert
              veterinarians.
            </p>
            <div className="text-center sm:w-full sm:text-left">
              <Link
                to="/createappointment"
                className="btn btn-ghost btn-active"
              >
                Create Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
