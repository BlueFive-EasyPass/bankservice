import { FastifyReply } from "fastify"

export interface IController {
    save(reply: FastifyReply): Promise<any>;
    searchID(reply: FastifyReply): Promise<any>;
    searchAll(reply: FastifyReply, arg1: Object): Promise<any>;
    update(reply: FastifyReply, id: string): Promise<any>;
    delete(reply: FastifyReply): Promise<any>;
    recovery(reply: FastifyReply): Promise<any>;
}