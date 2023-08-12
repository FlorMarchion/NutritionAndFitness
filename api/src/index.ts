import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./db";

const main = async () => {
  const PORT = 3000;
  await AppDataSource.initialize(); //inicia la conexion
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
};

main();
