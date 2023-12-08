import { IDomain } from "./domainInterface";

export interface IService {
    save(resultTranform: Array<object>): Promise<any>;
    searchID(data: IDomain['data']): Promise<any>;
    searchAll(data: IDomain['data']): Promise<any>;
    update(data: IDomain['data'], arg1: any): Promise<any>;
    delete(data: IDomain['data']): Promise<any>;
    recovery(data: IDomain['data']): Promise<any>;
  }
  