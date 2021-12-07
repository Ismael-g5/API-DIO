import { Router, Request, Response } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { UpdateUserController } from '.controllers/UpdateUserController';

const router = Router();
const createUserController = new CreateUserController();
const getAllUserController = new GetAllUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

router.get('/', (request: Request, response:Response) =>{    
    return response.json({mensagem: 'Bem vindo a API DIO'})
} )

router.get('/usuarios', getAllUserController.handle); 
router.post('/usuarios', createUserController.handle);
router.patch('/usuarios', updateUserController.handle);
router.delete('/usuarios/:id', deleteUserController.handle);

export { router }