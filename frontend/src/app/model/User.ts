
export class User {
    private id: string;
    private nickname: string;
    private password: string;

    constructor(id: string, nickname: string, password: string) {
        this.nickname = nickname;
        this.password = password;
        this.id = id;
    }

    getId(): string {
        return this.id;
    }

    getNickname(): string {
        return this.nickname;
    }

    getPassword(): string {
        return this.password;
    }
}