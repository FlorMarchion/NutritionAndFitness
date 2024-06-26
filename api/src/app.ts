import express from "express"; //ESModules
import morgan from "morgan";
import cors from "cors";
import userRoutes from './users/routes/user.routes'
import reviewsRouter from './review/routes/review.routers'
import productRoutes from './product/product.routes'
import adminRoutes from './admin/admin.routes'
import categoryProductRoutes from './categories/category.routes'
import guideRoutes from './guide/guide.routes'

const app = express();
app.use(express.json()); // Esto es un middleware que transforma la req.body a un json (los endPOits que envio a la app se transforman automáticamente, para no hacerlo de manera manual)
app.use(morgan("dev"));
app.use(cors());

app.use(userRoutes);
app.use(reviewsRouter)
app.use(productRoutes)
app.use(adminRoutes)
app.use(categoryProductRoutes)
app.use(guideRoutes)

export default app;
