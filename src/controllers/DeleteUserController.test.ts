import  createConnection  from '../database';
import { getConnection } from 'typeorm';
import { makeMockResponse } from '../services/utils/mocks/mockResponse';
import { makeMockRequest } from  '../services/utils/mocks/moskRequest';
import { FakeData } from '../utils/FakeData';
import { DeleteUserContoller } from './DeleteUserContoller';


describe('DeleteUserController', () => {
    beforeAll(async () => {
        const connection = await createConnection()
        connection.runMigrations()
    })
    afterAll(async () => {
        const connection = getConnection();
        connection.query('DELETE FROM usuarios')
        connection.close()
    })
    const fakeData = new FakeData();


    it('DeleteUserContoller', async() => {
        cosnt mockerUser = await fakeData.creatUser()

        const deleteUserContoller = new DeleteUserContoller();

        const request = makeMockRequest({
            params: {
                id: mockerUser.id
            }
        });

        const response = makeMockResponse()

        await deleteUserContoller.handle(request, response)
        expect(response.state.status).toBe(204) 
    })
})
