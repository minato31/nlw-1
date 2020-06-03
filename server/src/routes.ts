import express from "express";
import ItemsController from "./controllers/ItemsController";
import PointsController from "./controllers/PointsController";

const routes = express.Router();

const itemsController = new ItemsController();
const pointsController = new PointsController();

/**
 * Retorna todos os "items"
 */
routes.get("/items", itemsController.index);

/**
 * Insere um novo "point"
 */
routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);
routes.post("/points", pointsController.create);

export { routes };
