import { FastifyReply, FastifyRequest } from "fastify"
import { InstanceManager } from "../instanceManager"
import { IInstanceManager } from "../../interfaces/interfaceInstanceManager"
import { IDomain } from "../../interfaces/domainInterface"
import { IController } from "../../interfaces/interfaceController"
import { Resource } from "fastify-autoroutes"
import { IArrayUser } from "../../interfaces/interfaceUser"


export default () => <Resource>{
    post: {
        handler: async (request: FastifyRequest, reply: FastifyReply) => {
            try {
                const protocol = request.protocol
                const { data } = request.body as any
                console.log("DATA", data);
                const instanceManager: IInstanceManager = new InstanceManager(null, protocol, data)
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
                const protocol = request.protocol
                const data = request.query as IDomain['data']
                const instanceManager: IInstanceManager = new InstanceManager(data, protocol, null)
                const controller: IController = instanceManager.getController()
                console.log(data);
                console.log(instanceManager);
                console.log(controller);
                await controller.searchAll(reply)
            } catch (error) {
                reply.code(500).send({ error: error })
            }
        }
    },


    put: {
        url: "/:id",
        handler: async (request: FastifyRequest, reply: FastifyReply) => {
            try {
                const { id: id }: any = request.params as IDomain['data']
                const protocol = request.protocol
                const data = request.body as IDomain['data']
                const instanceManager: IInstanceManager = new InstanceManager(data, protocol, null)
                const controller: IController = instanceManager.getController()
                await controller.update(id, reply)
            } catch (error) {
                reply.code(500).send({ error: error })
            }
        }
    },

    delete: {
        handler: async (request: FastifyRequest, reply: FastifyReply) => {
            try {
                const protocol = request.protocol
                const data = request.body as IDomain['data']
                const instanceManager: IInstanceManager = new InstanceManager(data, protocol, null)
                const controller: IController = instanceManager.getController()
                await controller.delete(reply)
            } catch (error) {
                reply.code(500).send({ error: error })
            }
        }
    }
}