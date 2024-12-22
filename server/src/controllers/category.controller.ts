import { AppResponse } from "../common/response.common";
import { CategoryService } from "../services/category.service";
import { NextFunction, Request, Response} from "express";

export class CategoryController {
    categoryService: CategoryService = new CategoryService();

    get = (req: Request, res: Response, next: NextFunction) => {
        AppResponse.notImplemented(res);
    }

    create = (req: Request, res: Response, next: NextFunction) => {
        AppResponse.notImplemented(res);
    }

    update = (req: Request, res: Response, next: NextFunction) => {
        AppResponse.notImplemented(res);
    }

    delete = (req: Request, res: Response, next: NextFunction) => {
        AppResponse.notImplemented(res);
    }

}
