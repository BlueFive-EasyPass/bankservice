import { FastifyReply, FastifyRequest } from "fastify"
import { Resource } from "fastify-autoroutes"
import { InstanceManager } from "../../instanceManager"
import { IDomain } from "../../../interfaces/domainInterface"
import { IInstanceManager } from "../../../interfaces/interfaceInstanceManager"
import { IController } from "../../../interfaces/interfaceController"

export default () => <Resource>{
    post: {
        handler: async (request: FastifyRequest, reply: FastifyReply) => {
            try {
                const protocol = request.protocol
                const data = request.body as IDomain['data']
                const instanceManager: IInstanceManager = new InstanceManager(data, protocol, null)
                const controller: IController = instanceManager.getController()
                console.log(data);
                console.log(instanceManager);
                console.log(controller);
                await controller.recovery(reply)
            } catch (error) {
                reply.code(500).send({ error: error })
            }
        }
    },
}