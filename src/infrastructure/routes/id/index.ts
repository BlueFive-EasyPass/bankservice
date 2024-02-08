import { FastifyReply, FastifyRequest } from "fastify"
import { Resource } from "fastify-autoroutes"
import { InstanceManager } from "../../instanceManager"
import { IDomain } from "../../../interfaces/domainInterface"
import { IInstanceManager } from "../../../interfaces/interfaceInstanceManager"
import { IController } from "../../../interfaces/interfaceController"

export default () => <Resource>{
    get: {
        handler: async (request: FastifyRequest, reply: FastifyReply) => {
            try {
                const data = request.query as IDomain['data']
                console.log(request.query);
                
                const instanceManager: IInstanceManager = new InstanceManager(data, null)
                const controller: IController = instanceManager.getController()
                console.log(instanceManager);
                console.log(controller);
                await controller.searchID(reply)
            } catch (error) {
                reply.code(500).send({ error: error })
            }
        }
    },
}