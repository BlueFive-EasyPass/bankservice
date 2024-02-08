import { IMid } from "../interfaces/interfaceMid";
import { IArrayUser } from "../interfaces/interfaceUser";

export class Mid implements IMid {
    private users: IArrayUser
    constructor(users: IArrayUser) {
        this.users = users;
    }

    async transformUsers() {
      console.log(this.users);
      
        return this.users.map(user => ({
            name: user.user_nome,
            email: user.user_email,
            address: {
              postal_code: user.user_endCEP,
              state: user.user_endUF,
              city: user.user_endcidade,
              line1: `${user.user_endbairro}, ${user.user_endrua}, ${user.user_endnum} - ${user.user_endcomplemento}`
            },
            phone: user.user_cel,
            metadata: {
              'CPF/CNPJ': user.user_CPF,
              RG: user.user_RG,
              tipo: user.user_tipo
            }
        }));
    }
}