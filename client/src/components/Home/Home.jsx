import React from "react";
import { Link, Outlet } from "react-router-dom"
import guideImg from "../../assets/img/52475fde46c17487df2c20d4297074f6.jpg"
import plansImg from "../../assets/img/tetiana-bykovets-grjHFqaCLCg-unsplash.jpg"
import challegeImg from "../../assets/img/Roads_Fitness_Run_Back_view_Brunette_girl_578820_640x960.jpg"
import meImg from "../../assets/img/caju-gomes-QDq3YliZg48-unsplash.jpg"
// import styles from "../styles/Home.module.css"

const Home = () => {


    return (
        <div>
            <Outlet />

            {/* --------------------------Quien soy--------------------------- */}

            <div>
                <h2>¿Quién soy?</h2>
                <img 
                // className={styles.itemsImg}
                 src={meImg} alt="image" />
                <p>Mi nombre es Giuliana, y nací en una pequeña ciudad rodeada de naturaleza y un fuerte espíritu deportivo. Desde muy joven, el deporte siempre ha sido una parte integral de mi vida. Me encantaba correr, nadar y practicar diferentes actividades físicas. A medida que crecía, también me interesaba la nutrición y cómo los alimentos podían afectar nuestro cuerpo de manera positiva.</p>
                <Link to="/me">
                    <button>Conóceme</button>
                </Link>
            </div>

            {/* -----------------------> Planes- Guias- Retos <------------------ */}
            <div>
                <Link to="/plans">
                    <img 
                    // className={styles.itemsImg}
                     src={plansImg} alt="image" />
                    <h3>Planes</h3>
                    <p>Conseguirás tus objetivos de la mano de profesionales dedicados al 100% en su trabajo y con la filosofía de disfrutar del camino adquiriendo unos hábitos saludables.</p>
                </Link>


                <Link to="/guides">
                    <img 
                    // className={styles.itemsImg}
                     src={guideImg} alt="image" />
                    <h3>Guías</h3>
                    <p>Guías y rpogramas de entrenamiento
                        de acuerdo a tus objetivos.</p>
                </Link>

                <Link to="/challenges">
                    <img 
                    // className={styles.itemsImg}
                     src={challegeImg} alt="img" />
                    <h3>Retos</h3>
                    <p>Desafíos semanales, mensuales y anuales que ayudarán a mantenerte constate y motivada durante el proceso</p>
                </Link>
            </div>

            {/* ----------------> Vlog y artículos <-------------- */}
            <div>
                <h3>Vlog y Artículos</h3>
            </div>
        </div>
    )
}

export default Home;