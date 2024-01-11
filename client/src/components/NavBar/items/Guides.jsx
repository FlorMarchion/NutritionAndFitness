import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { getAllGuides } from "../../../redux/actions/guidesActions";

const Guides = () => {
    const dispatch = useDispatch();
    const guides = useSelector(state => state.guide.allGuides)
    console.log("Guias de la db: ", guides)

    const [showNutritionGuides, setShowNutritionGuides] = useState(false);
    const handleOnPressNutrition = () => {
        setShowNutritionGuides(!showNutritionGuides);
        console.log("Botón nutrición")
    }

    const [showTrainingGuides, setShowTrainingGuides] = useState(false)
    const handleOnPressTraining = () => {
        setShowTrainingGuides(!showTrainingGuides);
        console.log("Botón Entrenamiento")
    }

    const [showTrainingAndNutrition, setTrainingAndNutrition] = useState(false)
    const handleOnPressTrainingAndNutrition = () => {
        setTrainingAndNutrition(!showTrainingAndNutrition);
        console.log("Botón Entrenamiento y nutrición")
    }

    const nutritionGuide = guides.filter(guide => guide.category === "Nutrición")
    const trainingGuide = guides.filter(guide => guide.category === "Entrenamiento")
    const trainingAndNutritionGuide = guides.filter(guide => guide.category === "trainingNutrition")

    useEffect(() => {
        dispatch(getAllGuides())
    }, []);

    return (
        <div>
            <div>
                <h2>¿Cuál es para mi?</h2>
                <div>
                    <button onClick={handleOnPressNutrition}>
                        <h3>Guías de Nutrición</h3>
                    </button>
                </div>
                {showNutritionGuides && (
                    <div>
                        <ul>
                            {nutritionGuide?.map(guide => (
                                <li key={guide.id}>{guide.title}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <div>
                    <button onClick={handleOnPressTraining}>
                        <h3>Guías de Entrenamiento</h3>
                    </button>
                </div>
                {showTrainingGuides && (
                    <div>
                        <ul>
                            {trainingGuide?.map(guide => (
                                <li key={guide.id}>{guide.title}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <div>
                    <button onClick={handleOnPressTrainingAndNutrition}>
                        <h3>Guías de Entrenamiento y Nutrición</h3>
                    </button>
                </div>
                {showTrainingAndNutrition && (
                    <div>
                        <ul>
                            {trainingAndNutritionGuide?.map(guide => (
                                <li key={guide.id}>{guide.title}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Guides;