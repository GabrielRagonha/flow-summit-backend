
export interface IUser {
    idUser: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export class User {
    public idUser: string;
    public name: string;
    public email: string;
    public password: string;
    public createdAt: Date;
    public updatedAt: Date;

    constructor(user: IUser) {
        this.idUser = user.idUser;
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
        this.createdAt = user.createdAt;
        this.updatedAt = user.updatedAt;
    }

}
