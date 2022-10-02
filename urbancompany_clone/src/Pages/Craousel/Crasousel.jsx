import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";



export default function Carousels() {

    return (
      <Carousel>
        <div>
          <img src="https://imgk.timesnownews.com/media/dussehra_1.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1603078782132-dfcd55.jpeg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1606211470897-f4afbc.jpeg" />
        </div>
      </Carousel>
    );
}