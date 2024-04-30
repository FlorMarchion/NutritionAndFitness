import express from "express"; //ESModules
import morgan from "morgan";
import cors from "cors"; //Comunica desde un servidor a otro
import userRoutes from './users/routes/user.routes'
import guidesRoutes from './guides/routes/guides.routes';
import articleRoutes from './articles/routes/articles.routes';
import adminRoutes from './admin/routes/admin.routes'
import favoritesRoutes from './favorites/routes/favorites.routes'
import reviewsRouter from './review/routes/review.routers'
import cartRoutes from './cart/routes/cart.route';

const app = express();
app.use(express.json()); // Esto es un middleware que transforma la req.body a un json (los endPOits que envio a la app se transforman automáticamente, para no hacerlo de manera manual)
app.use(morgan("dev"));
app.use(cors());

app.use(userRoutes);
app.use(guidesRoutes);
app.use(articleRoutes);
app.use(adminRoutes);
app.use(favoritesRoutes);
app.use(reviewsRouter)
app.use(cartRoutes)
export default app;
