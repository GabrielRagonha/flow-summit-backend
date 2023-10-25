
export interface IUserDomain {
    idUser: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export class UserDomain {
    public idUser: string;
    public name: string;
    public email: string;
    public password: string;
    public createdAt: Date;
    public updatedAt: Date;

    constructor(user: IUserDomain) {
        this.idUser = user.idUser;
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
        this.createdAt = user.createdAt;
        this.updatedAt = user.updatedAt;
    }

}
