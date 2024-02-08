import { IDomain } from "./domainInterface";

export interface IRepository {
    save(resultTranform: Array<object>): Promise<any>;
    searchID(data: IDomain['data']): Promise<any>;
    searchAll(data: IDomain['data'], arg1: Object): Promise<any>;
    update(arg0: any, id: string): Promise<any>;
    delete(data: IDomain['data']): Promise<any>;
    recovery(data: IDomain['data']): Promise<any>;
}