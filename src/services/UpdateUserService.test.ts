import createConnection from '../database';
import { getConnection } from 'typeorm';
import { UpdateUserService } from "./UpdateUserService";
import { FakeData } from '../utils/FakeData';

describe('UpdateUserService', () => {
        beforeAll(async () =>{
            const connection = await createConnection();
            await connection.runMigrations();
        
        })

        afterAll(async () =>{
            const connection = getConnection();
            await connection.query('DELETE FROM usuarios')
            await connection.close();
        })

const fakeData = new FakeData();

it('Deve editar o nome do usuario', async () =>{
    const mockUser = await fakeData.createUser();

    const updateUserService = new UpdateUserService();

    const result = await updateUserService.execute ({
        id: mockUser.id,
        nome: 'Ismael'
    });

 expect(result).toHaveLength(0);
})
})