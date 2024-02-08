export interface IDomain {
    data: {
        id: string | undefined,
        name: string,
        cpfCnpj: string
        email: string,
        mobilePhone: string,
        address: string,
        addressNumber: string,
        complement: string,
        province: string,
        postalCode: string,
        externalReference: string,
        notificationDisabled: true,
        groupName: string,
        company: string | undefined,
    }

    save(resultTranform: Array<object>): Promise<any>;
    searchID(): Promise<any>;
    searchAll(arg0: any): Promise<any>;
    update(arg0: any, id: string): Promise<any>;
    delete(): Promise<any>;
    recovery(): Promise<any>;
}