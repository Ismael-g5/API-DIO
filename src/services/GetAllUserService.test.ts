import { getConnection } from "typeorm";
import  createConnection  from '../database';
import { GetAllUserService } from './GetAllUserService';
import { FakeData } from '../utils/FakeData/';


describe ('GetAllUserService', async () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations
    })

    afterAll(async () => {
        const connection = getConnection();
        await connection.query('DELETE FROM usuarios')
        await connection.close()
    })


    
    it ('Deve retornar todos os usuarios cadastrados', async() => {
    const fakeData = new FakeData();
   
    await fakeData.execute()

    const expectedResponse = [
        {
            nome: 'Algum usuario',
                 email: 'algumusuario@gmail.com',
        },
        {
            nome: 'outro usuario',
            email: '',
        }
    ]
 

const  getAllUserService = new GetAllUserService();

const result = await getAllUserService.execute()

expect(result).toMatchObject(expectedResponse);
    
})

})