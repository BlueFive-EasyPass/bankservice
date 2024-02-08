import axios from "axios";
import { IRepository } from "../interfaces/interfaceRepository";
import dotenv from 'dotenv'
import { IDomain } from "../interfaces/domainInterface";
import Stripe from "stripe";
dotenv.config()

export class Repository implements IRepository {
    protected api: string | undefined
    protected stripe: Stripe
    protected token: string

    constructor() {
        this.api = process.env.api
        this.token = process.env.token as string
        this.stripe = new Stripe(this.token)
    }

    private async sendIdsCustomer(user: any) {
        try {
            const array: Array<object> = [user]
            console.log('TESTE', array);

            const result = axios.patch('http://localhost:3000/customer/', { data: array })
            return result
        } catch (error) {
            return error
        }
    }

    async save(resultTransform: Array<any>) {
        const createdCustomers: any[] = [];

        for (const user of resultTransform) {
            try {
                console.log(resultTransform);

                const customer = await this.stripe.customers.create({ ...user });
                console.log(customer);
                this.sendIdsCustomer(customer).then(() => {
                    console.log('Envio para serviço externo iniciado...');
                }).catch((error) => {
                    console.error('Erro no envio para serviço externo:', error);
                });

                createdCustomers.push(customer);
            } catch (error: any) {
                console.error('Erro na requisição:', error);
                throw error;
            }
        }
        console.log(createdCustomers);

        return createdCustomers;
    }

    async searchID(data: IDomain['data']) {
        try {
            const stringSearch = `metadata[\'CPF/CNPJ\']:\'${data.cpfCnpj}\'`
            const customers = await this.stripe.customers.search({
                query: stringSearch,
            });

            return customers
        } catch (error) {
            throw error
        }
    }

    async searchAll(data: IDomain['data'], limitObject: any) {
        try {
            const customers = await this.stripe.customers.list({
                ...limitObject,
            });

            return customers
        } catch (error) {
            throw error
        }
    }

    async update(data: any, id: string) {
        try {
            console.log('repo', data, id);

            const customer = await this.stripe.customers.update(
                id,
                {
                    ...data[0]
                }
            )
            console.log('repo', customer, data);

            return customer
        } catch (error) {
            throw error
        }
    }
    async delete(data: IDomain['data']) {
        try {
            const id = data.id as string
            const deleted = await this.stripe.customers.del(id);

            return deleted
        } catch (error) {
            throw error
        }
    }

    async recovery(data: IDomain['data']) {
        try {
            const id = data.id as string
            const customer = await this.stripe.customers.retrieve(id);
            console.log(customer);
            
            return customer
        } catch (error) {
            throw error
        }
    }

}