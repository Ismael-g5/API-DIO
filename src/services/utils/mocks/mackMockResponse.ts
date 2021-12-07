import { Response } from 'express';


export type MockResponse<TResult> = Response & {
    state: {
        status?: number,
        json?: TResult | unknow
    }
}


export function makeMockResponse<TResult>(){
    const response = {
        state: {}
    
    }as MockResponse<TResult>;

    response.status = (status: number) => {
        response.state.status = status;
        return response
    }

    response.json = (json: TResult) => {
        response.state.json = json;
        return response
    }
}