import { Router } from "express";
import { CategoryController } from "../controllers/category.controller";

export class CategoryRoutes {
    PATH = `/category`;
    controller = new CategoryController();
    router = Router();

    constructor() {
        this.router.get(this.PATH, this.controller.get);
        this.router.post(this.PATH, this.controller.get);
        this.router.patch(this.PATH, this.controller.get);
        this.router.delete(this.PATH, this.controller.get);
    }
}
