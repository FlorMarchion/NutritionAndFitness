import express from "express"; //ESModules
import morgan from "morgan";
import cors from "cors";
import userRoutes from './users/routes/user.routes'
import reviewsRouter from './review/routes/review.routers'

const app = express();
app.use(express.json()); // Esto es un middleware que transforma la req.body a un json (los endPOits que envio a la app se transforman automáticamente, para no hacerlo de manera manual)
app.use(morgan("dev"));
app.use(cors());

app.use(userRoutes);
app.use(reviewsRouter)
export default app;
