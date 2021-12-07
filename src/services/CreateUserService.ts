import { getRepository } from "typeorm";
import { Usuario } from "../entities/Usuario";

interface IUsuario {
    id: string,
    nome: string,
    email?: string
}

class CreateUserService {
  async  execute({id, nome, email }:IUsuario){
       const usuario = await getRepository(Usuario)
            .createQueryBuilder()
            .insert()
            .into(Usuario)
            .values([
               {
                   nome: nome,
                   email: email,
                   id: id
               }
            ])
                .execute();

            return usuario

    }
}

export { CreateUserService };