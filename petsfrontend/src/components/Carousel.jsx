import Pet1 from "../assets/pet1.jpg";
import Pet2 from "../assets/pet2.jpg";
import Pet3 from "../assets/pet3.jpg";
import Pet4 from "../assets/pet4.jpg";
import Vet1 from "../assets/vet1.jpg";
import Vet2 from "../assets/vet2.jpg";
import Vet3 from "../assets/vet3.jpg";
import Vet4 from "../assets/vet4.jpg";

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
        <div className="w-96 carousel rounded-box">
        <div className="carousel-item w-full">
          <img src={Vet1} className="w-full" alt="Tailwind CSS Carousel component" />
        </div> 
        <div className="carousel-item w-full">
          <img src={Vet2} className="w-full" alt="Tailwind CSS Carousel component" />
        </div> 
        <div className="carousel-item w-full">
          <img src={Vet3} className="w-full" alt="Tailwind CSS Carousel component" />
        </div> 
        <div className="carousel-item w-full">
          <img src={Vet4} className="w-full" alt="Tailwind CSS Carousel component" />
        </div>
      </div>
      )}
    </>
  );
};

export default Carousel;
