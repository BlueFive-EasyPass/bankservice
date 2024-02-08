import { IDomain } from "../interfaces/domainInterface";
import { IRepository } from "../interfaces/interfaceRepository";
import { IService } from "../interfaces/interfaceService";

export class Service implements IService {
    private repository: IRepository
    constructor(repository: IRepository) {
        this.repository = repository
    }

    async save(resultTranform: Array<object>) {
        try {
            const result = await this.repository.save(resultTranform)
            return result
        } catch (error) {
            throw error
        }
    }
    async searchID(data: IDomain['data']) {
        try {
            const result = await this.repository.searchID(data)
            return result
        } catch (error) {
            throw error
        }
    }

    async searchAll(data: IDomain['data'], limit: Object) {
        try {
            const result = await this.repository.searchAll(data, limit)
            return result
        } catch (error) {
            throw error
        }
    }

    async update(data: any, id: string) {
        try {
            console.log('service', data, id);
            const result = await this.repository.update(data, id)
            console.log('service', result, data);

            return result
        } catch (error) {
            throw error
        }
    }
    async delete(data: IDomain['data']) {
        try {
            const result = await this.repository.delete(data)
            return result
        } catch (error) {
            throw error
        }
    }

    async recovery(data: IDomain['data']) {
        try {
            const result = await this.repository.recovery(data)
            return result
        } catch (error) {
            throw error
        }
    }

}