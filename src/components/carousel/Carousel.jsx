import "./carousel.scss";
// import  { useState } from "react";




// export default function Carousel() {
//     const images = [
    
//         // "https://lh3.googleusercontent.com/p/AF1QipOiCGWMYwqakmaRTTBmEprsBZKdeSTz4INEAjss=s1766-w1766-h1716-rw",
//         "https://res.cloudinary.com/dtvojwz5j/image/upload/v1712065617/wsbufvd3hvewu5br9i36.webp",
//         // "https://lh3.googleusercontent.com/p/AF1QipPpHcMRo4tiiJ4CSYI4uEGW3WtGkjwowqR92Qu9=s1766-w1766-h1716-rw",
//         "https://res.cloudinary.com/dtvojwz5j/image/upload/v1712065858/sdtjfxobasg9frfhi4i2.webp",
//         // "https://lh3.googleusercontent.com/p/AF1QipN6SOZdPb4Ctkk0WYbzQnHSG-XBUuKtV12Ni4ne=s1766-w1766-h1716-rw",
//         "https://res.cloudinary.com/dtvojwz5j/image/upload/v1712065872/udgafo6ckulygh28dy4x.webp",
//         // new URL('./Utils/Façade_1.webp', import.meta.url).href,
//         // // "https://meteoben.eu/Utils_Jeff/Eglise-de-profil.jpg",
//         // new URL('./Utils/Bureau_1.webp', import.meta.url).href,
//         // new URL('./Utils/Salle_d_attente_2.webp', import.meta.url).href,
       
    
//         // // "https://meteoben.eu/Utils_Jeff/raison-notariat.jpg"
    
//         // // "https://lh3.googleusercontent.com/p/AF1QipN49M4LstGnW3MalTVa8mfobs5pY2dAADNb8qdJ=s1766-w1766-h1716-rw"
//       ];
//     const [position, setPosition] = useState(0);

//     function increment() {
//         const newPosition = position + 1;
//         (newPosition >= images.length) ? setPosition(0) : setPosition(newPosition);
//     }

//     function decrement() {
//         const newPosition = position - 1;

//         (newPosition < 0) ? setPosition(images.length - 1) : setPosition(newPosition);
//     }

//     function arrow(direction, method) {
//         return <span onClick={method}> <i className={"arrow-" + direction}></i></span>;
//     }

//     return (
//         <div className="carousel">
//             <img src={`${images[position]}`} alt="carousel" />
//             {images.length > 1 && arrow("left", decrement)}
//             {images.length > 1 ? (<aside>{position + 1} / {images.length}</aside>) : (null)}
//             {images.length > 1 && arrow("right", increment)}
//         </div>
//     );

// }




import { useState, useEffect } from "react";

export default function Carousel() {
    const images = [
        "https://res.cloudinary.com/dtvojwz5j/image/upload/v1712065617/wsbufvd3hvewu5br9i36.webp",
        "https://res.cloudinary.com/dtvojwz5j/image/upload/v1712065858/sdtjfxobasg9frfhi4i2.webp",
        "https://res.cloudinary.com/dtvojwz5j/image/upload/v1712065872/udgafo6ckulygh28dy4x.webp",
    ];
    const [position, setPosition] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPosition(prevPosition => (prevPosition + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Clean up on component unmount
    }, [images.length]);

    return (
        <div className="carousel">
            <img src={`${images[position]}`} alt="carousel" />
            <div className="carousel-indicators">
                {images.map((_, index) => (
                    <span key={index} className={`carousel-indicator ${index === position ? 'active' : ''}`}/>
                ))}
            </div>
        </div>
    );
}