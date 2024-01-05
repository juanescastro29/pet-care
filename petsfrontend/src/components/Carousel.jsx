import Pet1 from "../assets/pet1.webp";
import Pet2 from "../assets/pet2.webp";
import Pet3 from "../assets/pet3.webp";
import Pet4 from "../assets/pet4.webp";
import Vet1 from "../assets/vet1.webp";
import Vet2 from "../assets/vet2.webp";
import Vet3 from "../assets/vet3.webp";
import Vet4 from "../assets/vet4.webp";

const Carousel = ({ type }) => {
  return (
    <>
      {type === "pets" && (
        <div className="carousel rounded-box w-full m-2">
          <div className="carousel-item w-1/2">
            <img src={Pet1} className="w-full" alt="petCarousel" />
          </div>
          <div className="carousel-item w-1/2">
            <img src={Pet2} className="w-full" alt="petCarousel" />
          </div>
          <div className="carousel-item w-1/2">
            <img src={Pet3} className="w-full" alt="petCarousel" />
          </div>
          <div className="carousel-item w-1/2">
            <img src={Pet4} className="w-full" alt="petCarousel" />
          </div>
        </div>
      )}
      {type === "appointments" && (
        <div className="carousel rounded-box w-full m-2">
          <div className="carousel-item w-1/2">
            <img src={Vet1} className="w-full" alt="vetCarousel" />
          </div>
          <div className="carousel-item w-1/2">
            <img src={Vet2} className="w-full" alt="vetCarousel" />
          </div>
          <div className="carousel-item w-1/2">
            <img src={Vet3} className="w-full" alt="vetCarousel" />
          </div>
          <div className="carousel-item w-1/2">
            <img src={Vet4} className="w-full" alt="vetCarousel" />
          </div>
        </div>
      )}
      {type === "form" && (
        <div className="w-full md:w-96 carousel rounded-box">
          <div className="carousel-item w-full">
            <img
              src={Vet1}
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <img
              src={Vet2}
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <img
              src={Vet3}
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <img
              src={Vet4}
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Carousel;
