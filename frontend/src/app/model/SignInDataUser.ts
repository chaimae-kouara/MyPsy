export class SignInDataUser {
    private nickname: string;
    private password: string;

    constructor(nickname: string, password: string) {
        this.nickname = nickname;
        this.password = password;
    }
    
    getNickname(): string {
        return this.nickname;
    }

    getPassword(): string {
        return this.password;
    }
}