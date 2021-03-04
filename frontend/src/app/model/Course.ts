export class Course {
    private id: string;
    private idCoach: string;
    private title: string;
    private url: string;
    

    constructor(id:string, idCoach:string, title: string, url: string) {
        this.id = id;
        this.idCoach = idCoach;
        this.title = title;
        this.url = url;
    }

    getIdCoach(): string {
        return this.idCoach;
    }

    getId(): string {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }

    getUrl(): string {
        return this.url;
    }

}