import { Request, Response } from 'express';
import { UpdateUserService} from '../service/UpdateUserService';


class UpdateUserController {
async handle(request:Request, response:Response ){ 
    const UpdateUserService = new UpdateUserService();
    const { nome, email, id } = request.body

    if (id.length === 0){
        return response.status(400).json({mensagem: 'id não informado'});
    }
    if (id.length === 0){
        return response.status(400).json({mensagem: 'informe o nome'});
    }
    await updateUserService.execute({id, nome, email})

    return response.status(204).json()
}

export { UpdateUserController }