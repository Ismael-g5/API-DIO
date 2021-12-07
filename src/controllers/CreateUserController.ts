
import { Request, Response} from 'express';
import { v4 as uuid } from 'uuid';
import { CreateUserService } from '../services/CreateUserService';

class GetAllUserController{
 async handle (request: Request, response:Response)  {

    const createUserService = new CreateUserService;

    const nome = request.body.nome;
    const email = request.body.email;
    const id = uuid();

        if(nome.length === 0 ){
            return response.status(400).json({mensagem:'Preencha todos os Campos'});
        }
        
        const user = await createUserService.execute({id, nome, email,});

    return response.status(201).json({user})

    }

}
 
export { GetAllUserController }