import createConnection from '../database';
import { getConnection } from 'typeorm';
import { FakeData } from '../utils/FakeData';
import { DeleteUserService } from './DeleteUserService';

describe('DeleteUserService', () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations
    })

    afterAll(async () => {
        const connection = getConnection();
        await connection.query('DELETE FROM usuarios')
        await connection.close()
    })
    const fakeData = new FakeData();

    it('Deve retrnar um array vazio quando o ususario for deletado', async () => {
        const mockUser  = await fakeData.createUser();

        const deleteUserService = new DeleteUserService();

        const result = await deleteUserService.execute({ id: mockUser.id})

        expect(result).toHaveLength(0);
    })
})