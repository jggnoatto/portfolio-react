import imgCresol from "../../../assets/projeto-cresol-image-1.png";
import mobile1 from "../../../assets/interface-mobile1.png";
import mobile2 from "../../../assets/interface-mobile2.png";
import mobile3 from "../../../assets/interface-mobile3.png";
import landingPage from "../../../assets/landing-page-carousel.png"
import webSystem from "../../../assets/sistemas-web-carousel.png"

export const services = [
  { 
    id: 1, 
    title: "Interfaces modernas", 
    images: [imgCresol], 
    type: "desktop" 
  },
  { 
    id: 2, 
    title: "Interfaces mobile", 
    images: [mobile1, mobile2, mobile3], 
    type: "mobile" 
  },
  { id: 3, title: "Sistemas WEB", images: [webSystem], type: "desktop" },
  { id: 4, title: "Landing Pages", images: [landingPage], type: "desktop" },
];