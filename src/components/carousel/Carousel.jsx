import "./carousel.scss";
import { useState, useEffect } from "react";

export default function Carousel() {
    // const images = [
    //     "https://res.cloudinary.com/dtvojwz5j/image/upload/v1712065617/wsbufvd3hvewu5br9i36.webp",
    //     "https://res.cloudinary.com/dtvojwz5j/image/upload/v1712065858/sdtjfxobasg9frfhi4i2.webp",
    //     "https://res.cloudinary.com/dtvojwz5j/image/upload/v1712065872/udgafo6ckulygh28dy4x.webp",
    // ];

    const images = [
        "/Façade_1.webp",
        "/Bureau_1.webp",
        "/Salle_d_attente_2.webp",
    ]
    const [position, setPosition] = useState(0);
    //laisser le useEffect pour le chargement des images pour score page speedinsight
    useEffect(() => {
        images.forEach((image) => {
            const img = new Image();
            img.src = image;
        });
    }, [images]);
    ///fin préchargement
    useEffect(() => {
        const interval = setInterval(() => {
            setPosition(prevPosition => (prevPosition + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Clean up on component unmount
    }, [images.length]);

    return (
        // <div className="carousel">
        //     {/* <img src={`${images[position]}`} alt="carousel" /> */}
        //     <img className={`carousel-image ${index === position ? 'active' : ''}`} src={`${images[position]}`} alt="carousel" />
        //     <div className="carousel-indicators">
        //         {images.map((_, index) => (
        //             <span key={index} className={`carousel-indicator ${index === position ? 'active' : ''}`}/>
        //         ))}
        //     </div>
        // </div>
        <div className="carousel">
        {images.map((image, index) => (
            <img 
                key={index}
                className={`carousel-image ${index === position ? 'active' : ''}`} 
                src={image} 
                alt="carousel" 
            />
        ))}
        <div className="carousel-indicators">
            {images.map((_, index) => (
                <span key={index} className={`carousel-indicator ${index === position ? 'active' : ''}`}/>
            ))}
        </div>
    </div>
    );
}