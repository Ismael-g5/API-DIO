import  createConnection  from '../database';
import { getConnection } from 'typeorm';
import { makeMockRequest } from '../services/utils/mocks/mockRequest';
import { makeMockResponse } from '../services/utils/mocks/mockResponse';
import { GetAllUserController } from './GetAllUserController';
import { FakeData } from '../utils/FakeData';
 
describe('GetAllUserController', () =>{
    beforeAll(async () =>{
        const connection = await createConnection()
        connection.runMigrations()
    })

    afterAll(async () =>{
        const connection = await getConnection()
        connection.query('DELETE FROM usuarios')
        connection.close()
    })
    const fakeData = new FakeData();

    it('Deve retornar status 200 quando carregar todos os usuarios', async () => {
        await fakeData.execute();


        const getAllUserController = new GetAllUserController();

        const request = makeMockRequest({});
        const response = makeMockResponse({});

        await getAllUserController.handle(request, response)

        expect(response.state.status).toBe(200)





    })

    
})