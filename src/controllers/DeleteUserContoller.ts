import { Request, Reponse } from 'express';
import { DeleteUserService} from '../service/DeleteUserService';

class DeleteUserContoller{
    async handle (request: Request, response: Reponse){
        const deleteUserService = new DeleteUserService()
        
        const { id }= request.params;

          await  deleteUserService.execute({ id })

            return response.status(204).json()
    }
}

export { DeleteUserContoller }