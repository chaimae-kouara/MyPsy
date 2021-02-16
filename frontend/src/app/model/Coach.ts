import { Address } from './Address';
export class Coach {
    private name: string;
    private email: string;
    private password: string;
    private phone: string;
    private speciality: string;
    private address: Address;
    private image: String;

    constructor(name: string, email: string, password: string, phone: string, speciality: string, address: Address, image:String) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.speciality = speciality;
        this.address = address;
        this.image = image;
    }

    getName(): string {
        return this.name;
    }

    getEmail(): string {
        return this.email;
    }

    getPassword(): string {
        return this.password;
    }

    getPhone(): string {
        return this.phone;
    }

    getSpeciality(): string {
        return this.speciality;
    }

    getAddress(): Address {
        return this.address;
    }
    getImage(): String {
        return this.image;
    }
}