import { Request, Response } from "express";

class GetAllUserController{
    async handle(req: Request, res:Response){
        const getAllUserService = new GetAllUserService();

        const users = await getAllUserService.execute();

        return response.status(200).json.(users)
    }
}

export { GetAllUserController }