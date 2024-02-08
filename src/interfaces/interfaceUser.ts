export interface IUserData {
    user_CPF: string;
    user_RG: string;
    user_nome: string;
    user_email: string;
    user_senha: string;
    user_nascimento: string;
    user_FotoPerfil: string | null;
    user_RGFrente: string | null;
    user_RGTras: string | null;
    user_endCEP: string;
    user_endUF: string;
    user_endbairro: string;
    user_endrua: string;
    user_endnum: string;
    user_endcomplemento: string;
    user_endcidade: string;
    user_tipo: string;
    list_CPF_list_id: string | null;
    user_credit: string;
    user_Background: string | null;
    user_FotoRec: string | null;
    user_status: string;
    user_cel: string;
    user_idcli: string | null;
    user_verifyemail: string;
    user_verifycel: string;
}

export type IArrayUser = IUserData[];
