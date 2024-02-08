import { Controller } from "../adapters/controller";
import { Repository } from "../adapters/repository";
import { Mid } from "../application/mid";
import { Service } from "../application/service";
import { Domain } from "../domain/domain";
import { IDomain } from "../interfaces/domainInterface";
import { IController } from "../interfaces/interfaceController";
import { IInstanceManager } from "../interfaces/interfaceInstanceManager";
import { IMid } from "../interfaces/interfaceMid";
import { IRepository } from "../interfaces/interfaceRepository";
import { IService } from "../interfaces/interfaceService";
import { IArrayUser } from "../interfaces/interfaceUser";

export class InstanceManager implements IInstanceManager {
  private data: any;
  private repository: IRepository;
  private service: IService;
  private domain: IDomain;
  private controller: IController;
  private users: IArrayUser
  private mid: IMid

  constructor(data: any, users: any) {
    this.data = data;
    this.users = users
    this.mid = new Mid(this.users)
    this.repository = new Repository();
    this.service = new Service(this.repository);
    this.domain = new Domain(this.data, this.service);
    this.controller = new Controller(this.domain, this.mid);
  }

  getController(): IController {
    console.log(this.data);
    console.log(this.users);

    return this.controller;
  }
}
