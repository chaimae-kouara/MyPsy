export class Course {
    private title: string;
    private url: string;
    private image: string;

    constructor(title: string, url: string, image: string) {
        this.title = title;
        this.url = url;
        this.image = image;
    }

    getTitle(): string {
        return this.title;
    }

    getUrl(): string {
        return this.url;
    }

    getImage(): string {
        return this.image;
    }

}