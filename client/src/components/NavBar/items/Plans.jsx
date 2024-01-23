import React from "react";
import { Link } from "react-router-dom";
import nutrition from "../../../assets/img/monika-grabkowska-pCxJvSeSB5A-unsplash.jpg"
import training from "../../../assets/img/hayley-kim-design-eot-ka5dM7Q-unsplash.jpg"
import nutritionAndTraining from "../../../assets/img/mark-adriane-xQghSLXYD3M-unsplash.jpg"

const Plans = () => {
    return (
        <div>
            <div>
                <h1>¿Por qué elegirme? </h1>
                <h2>¿Qué ofrezco?</h2>
            </div>
            <h3>¿Cuál es para mi?</h3>
            <div>
                <Link>Plan de Nutrición</Link>
                <img src={nutrition} alt="image"></img>
            </div>
            <div>
                <Link>Plan de Entrenamiento</Link>
                <img src={training}></img>
            </div>
            <div>
                <Link>PLan de Nutrición y entrenamiento</Link>
                <img src={nutritionAndTraining}></img>
            </div>
        <div>
            <h>Testimonios</h>
        </div>
        </div>
    )
}
export default Plans;