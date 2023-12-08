import { FastifyReply } from "fastify"

export interface IController {
    save(reply: FastifyReply): Promise<any>;
    searchID(reply: FastifyReply): Promise<any>;
    searchAll(reply: FastifyReply): Promise<any>;
    update(reply: FastifyReply, arg1: any): Promise<any>;
    delete(reply: FastifyReply): Promise<any>;
    recovery(reply: FastifyReply): Promise<any>;
}