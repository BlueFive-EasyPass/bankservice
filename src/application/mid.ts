import { IMid } from "../interfaces/interfaceMid";
import { IArrayUser } from "../interfaces/interfaceUser";

export class Mid implements IMid {
    private users: IArrayUser
    constructor(users: IArrayUser) {
        this.users = users;
    }

    async transformUsers() {
        return this.users.map(user => ({
            name: user.user_nome,
            cpfCnpj: user.user_CPF,
            email: user.user_email,
            mobilePhone: user.user_cel,
            address: `${user.user_endcidade} - ${user.user_endUF}`,
            addressNumber: user.user_endnum,
            complement: user.user_endcomplemento,
            province: user.user_endbairro,
            postalCode: user.user_endCEP,
            externalReference: user.user_CPF,
            notificationDisabled: true,
            groupName: user.user_CPF 
        }));
    }
}