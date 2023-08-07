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
      <div className="flex flex-col lg:flex-row p-5" data-theme="cupcake">
        <div className="grid h-full flex-grow card bg-base-300 rounded-box place-items-center lg:mr-4 mb-4 lg:mb-0">
          <div className="flex flex-col items-center justify-center p-5">
            <h1 className="text-center font-semibold text-xl mb-4 lg:mb-6">Regist Pet</h1>
            <p className="text-justify mb-4 lg:mb-6">
              To begin this process, it's important to register your pet in our
              system. This will allow us to gather essential details about your
              pet, such as its medical history, age, breed, and specific needs.
              Through this information, our veterinarians will be able to
              provide the best possible care.
            </p>
            <div className="p-5">
              <Carousel type="pets" />
            </div>
            <div className="mt-auto">
              <Link to="/registpet" className="btn btn-active btn-ghost">
                Regist Pet
              </Link>
            </div>
          </div>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="grid h-full flex-grow card bg-base-300 rounded-box place-items-center lg:ml-4">
          <div className="flex flex-col items-center justify-center p-5">
            <h1 className="text-center font-semibold text-xl lg:mb-6">
              Create Appointment
            </h1>
            <p className="text-justify mb-4 lg:mb-6">
              To ensure that each pet receives the personalized attention it
              deserves, we have implemented an appointment system for
              consultations and treatments. This process ensures that every pet
              receives the appropriate time and attention from our expert
              veterinarians.
            </p>
            <div className="p-5">
              <Carousel type="appointment" />
            </div>
            <div className="mt-auto">
              <Link
                to="/createappointment"
                className="btn btn-active btn-ghost"
              >
                Create appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
