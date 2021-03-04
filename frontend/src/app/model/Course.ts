export class Course {
    private id: Number;
    private idCoach: Number;
    private title: string;
    private url: string;
    

    constructor(id:Number, idCoach:Number, title: string, url: string) {
        this.id = id;
        this.idCoach = idCoach;
        this.title = title;
        this.url = url;
    }

    getIdCoach(): Number {
        return this.idCoach;
    }

    getId(): Number {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }

    getUrl(): string {
        return this.url;
    }

}