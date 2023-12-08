import { FastifyReply } from "fastify";
import { IController } from "../interfaces/interfaceController";
import { IDomain } from "../interfaces/domainInterface";
import { IMid } from "../interfaces/interfaceMid";

export class Controller implements IController {
    private domain: IDomain
    private mid: IMid

    constructor(domain: IDomain, mid: IMid) {
        this.domain = domain
        this.mid = mid
    }

    async save(reply: FastifyReply) {
        try {
            const resultTranform = await this.mid.transformUsers()
            console.log('CONTROLLER MID', resultTranform);
            const result = await this.domain.save(resultTranform)
            console.log('CONTROLLER RESULT', result);
            if (result) {
                reply.code(200).send({ send: result })
            } else {
                reply.code(400).send({ error: 'Erro ao retornar requisição' })
            }
        } catch (error) {
            reply.code(500).send({ error: 'Erro ao processar requisição' })
        }
    }

    async searchID(reply: FastifyReply) {
        try {
            const result = await this.domain.searchID()
            if (result) {
                reply.code(200).send({ send: result })
            } else {
                reply.code(400).send({ error: 'Erro ao retornar requisição' })
            }
        } catch (error) {
            reply.code(500).send({ error: 'Erro ao processar requisição' })
        }
    }

    async searchAll(reply: FastifyReply) {
        try {
            const result = await this.domain.searchAll()
            if (result) {
                reply.code(200).send({ send: result })
            } else {
                reply.code(400).send({ error: 'Erro ao retornar requisição' })
            }
        } catch (error) {
            reply.code(500).send({ error: 'Erro ao processar requisição' })
        }
    }

    async update(reply: FastifyReply, params: IDomain['data']) {
        try {
            const result = await this.domain.update(params)
            if (result) {
                reply.code(200).send({ send: result })
            } else {
                reply.code(400).send({ error: 'Erro ao retornar requisição' })
            }
        } catch (error) {
            reply.code(500).send({ error: 'Erro ao processar requisição' })
        }
    }
    async delete(reply: FastifyReply) {
        try {
            const result = await this.domain.delete()
            if (result) {
                reply.code(200).send({ send: result })
            } else {
                reply.code(400).send({ error: 'Erro ao retornar requisição' })
            }
        } catch (error) {
            reply.code(500).send({ error: 'Erro ao processar requisição' })
        }
    }

    async recovery(reply: FastifyReply) {
        try {
            const result = await this.domain.delete()
            if (result) {
                reply.code(200).send({ send: result })
            } else {
                reply.code(400).send({ error: 'Erro ao retornar requisição' })
            }
        } catch (error) {
            reply.code(500).send({ error: 'Erro ao processar requisição' })
        }
    }
}