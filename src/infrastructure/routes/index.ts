import { FastifyReply, FastifyRequest } from "fastify"
import { InstanceManager } from "../instanceManager"
import { IInstanceManager } from "../../interfaces/interfaceInstanceManager"
import { IDomain } from "../../interfaces/domainInterface"
import { IController } from "../../interfaces/interfaceController"
import { Resource } from "fastify-autoroutes"
import { IUserData } from "../../interfaces/interfaceUser"

export default () => <Resource>{
    post: {
        handler: async (request: FastifyRequest, reply: FastifyReply) => {
            try {
                const { data } = request.body as any
                console.log("DATA", data);
                const instanceManager: IInstanceManager = new InstanceManager(null, data)
                const controller: IController = instanceManager.getController()
                await controller.save(reply)

            } catch (error) {
                reply.code(500).send({ error: error })
            }
        }
    },

    get: {
        handler: async (request: FastifyRequest, reply: FastifyReply) => {
            try {
                const limit = request.query as Object
                console.log(request.query);
                console.log(limit);
                
                const instanceManager: IInstanceManager = new InstanceManager(null, null)
                const controller: IController = instanceManager.getController()
                console.log(instanceManager);
                console.log(controller);
                await controller.searchAll(reply, limit)
            } catch (error) {
                reply.code(500).send({ error: error })
            }
        }
    },

    put: {
        url: '/:id',
        handler: async (request: FastifyRequest, reply: FastifyReply) => {
            try {
                const {id} = request.params as any
                console.log(id);
                
                const data = [request.body as any]                
                console.log("DATA", data);
                const instanceManager: IInstanceManager = new InstanceManager(null, data)
                const controller: IController = instanceManager.getController()
                await controller.update(reply, id)
            } catch (error) {
                reply.code(500).send({ error: error, 'test': "Erro mermo" })
            }
        }
    },

    delete: {
        handler: async (request: FastifyRequest, reply: FastifyReply) => {
            try {
                const data = request.body as IDomain['data']
                const instanceManager: IInstanceManager = new InstanceManager(data, null)
                const controller: IController = instanceManager.getController()
                await controller.delete(reply)
            } catch (error) {
                reply.code(500).send({ error: error })
            }
        }
    }
}