
export class User {
    private id: Number;
    private nickname: string;
    private password: string;

    constructor(id: Number, nickname: string, password: string) {
        this.nickname = nickname;
        this.password = password;
        this.id = id;
    }

    getId(): Number {
        return this.id;
    }

    getNickname(): string {
        return this.nickname;
    }

    getPassword(): string {
        return this.password;
    }
}