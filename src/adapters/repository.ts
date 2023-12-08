import axios from "axios";
import { IRepository } from "../interfaces/interfaceRepository";
import dotenv from 'dotenv'
import { IDomain } from "../interfaces/domainInterface";
dotenv.config()
export class Repository implements IRepository {
    protected api: string | undefined
    protected protocol: string

    constructor(protocol: string) {
        this.protocol = protocol
        this.api = process.env.api
    }

    private async optionGet(data: IDomain['data']) {
        console.log('TA INDO');
        console.log(process.env.token);
        console.log(this.protocol);

        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                access_token: '$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDAzMjk4NTA6OiRhYWNoX2JiM2I4YmRmLWVjMTctNDU5NC1iZDkzLTk0ZDFmNTZjMDYzYQ=='
            },
            body: JSON.stringify(data)
        };
        console.log(options);

        return options
    }

    async save(resultTranform: Array<any>) {
        try {

            console.log('CHEGUEI REPO');

            console.log('REPO', resultTranform);
            console.log(resultTranform[0]);

            const options = await this.optionGet(resultTranform[0]);
            console.log('REPO', options);
            const result: any = await axios.post(`${this.api}customers`, options);
            console.log('REPO', result);
            const responseData = await result.json();
            console.log('Cliente criado com sucesso:', responseData);
            console.log('REPO', responseData);


            return responseData;
        } catch (error: any) {
            console.error('Erro na requisição:', error);
            throw error;
        }
    }

    async searchID(data: IDomain['data']) {
        try {

        } catch (error) {
            throw error
        }
    }

    async searchAll(data: IDomain['data']) {
        try {

        } catch (error) {
            throw error
        }
    }

    async update(data: IDomain['data'], params: IDomain['data']) {
        try {

        } catch (error) {
            throw error
        }
    }
    async delete(data: IDomain['data']) {
        try {

        } catch (error) {
            throw error
        }
    }

    async recovery(data: IDomain['data']) {
        try {

        } catch (error) {
            throw error
        }
    }

}