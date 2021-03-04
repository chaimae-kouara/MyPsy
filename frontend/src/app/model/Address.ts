export class Address {
    private clinic_name: string;
    private country: string;
    private state: string;
    private city: string;
    private street: string;

    constructor(clinic_name: string, country: string, state: string, city: string, street: string) {
        this.clinic_name = clinic_name;
        this.country = country;
        this.state = state;
        this.city = city;
        this.street = street;
    }

    toString(): string {
        return "Clinic "+this.getClinicName()+", "+this.getStreet()+", "
                +this.getCity()+", "+this.getState()+", "+this.getCountry();
    }

    getClinicName(): string {
        return this.clinic_name;
    }

    getCountry(): string {
        return this.country;
    }

    getState(): string {
        return this.state;
    }

    getCity(): string {
        return this.city;
    }

    getStreet(): string {
        return this.street;
    }
}