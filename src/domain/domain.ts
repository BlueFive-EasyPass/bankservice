import { IDomain } from "../interfaces/domainInterface";
import { IService } from "../interfaces/interfaceService";
import { IArrayUser } from "../interfaces/interfaceUser";

export class Domain implements IDomain {
    data: IDomain['data'];
    private service: IService

    constructor(data: IDomain['data'], service: IService) {
        this.data = data
        this.service = service
    }

    async save(resultTranform: Array<object>) {
        try {
            const result = await this.service.save(resultTranform)
            return result
        } catch (error) {
            throw error
        }
    }
    
    async searchID() {
        try {
            const result = await this.service.searchID(this.data)
            return result
        } catch (error) {
            throw error
        }
    }

    async searchAll() {
        try {
            const result = await this.service.searchAll(this.data)
            return result
        } catch (error) {
            throw error
        }
    }

    async update(params: IDomain['data']) {
        try {
            const result = await this.service.update(this.data, params)
            return result
        } catch (error) {
            throw error
        }
    }
    async delete() {
        try {
            const result = await this.service.delete(this.data)
            return result
        } catch (error) {
            throw error
        }
    }

    async recovery() {
        try {
            const result = await this.service.delete(this.data)
            return result
        } catch (error) {
            throw error
        }
    }
}