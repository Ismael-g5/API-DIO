import { UpdateUserController } from "./UpdateUserController";
import  createConnection  from '../database';
import { getConnection } from 'typeorm';
import { Request } from 'express';
import { makeMockResponse } from '../services/utils/mocks/mockResponse';
import { FakeData } from '../utils/FakeData';

describe('UpdateUserController',  () => {
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

    it('Deve retornar status 204 quando usuario for editado', async () => {
        const updateUserController = new UpdateUserController();

        const mockUser = await fakeData.createUser()


        await updateUserController.handle()

        const request = {
            body: {
                id:mockUser.id ,
                nome: 'mais um nome',
                email: 'maisumnome@gmail.com' 

            }
        }as Request

        const response = makeMockResponse();

        expect(response.state.status).toBe(204)
    })

})