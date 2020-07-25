class User {
    first_name: string;
    last_name: string;
    age: number;

    constructor({first_name, last_name, age}) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }
}

class SaveUserToDatabase {
    save(user: User): void {
        // connecting to database
        console.log(`User "${user.first_name}" saved to the database`)
    }
}

const user = new User({
    first_name: 'John',
    last_name: 'Doe',
    age: 23,
})
new SaveUserToDatabase().save(user);

interface AbstractSavingUserToDatabase {
    save(user: User): void
}



class Decorator implements AbstractSavingUserToDatabase {
    abs: AbstractSavingUserToDatabase;

    constructor(abs: AbstractSavingUserToDatabase) {
        this.abs = abs;
    }

    save(user: User): void {
        this.abs.save(user);
    }
}

class ValidationDecorator extends Decorator {
    constructor(abs: AbstractSavingUserToDatabase) {
        super(abs);
    }

    save(user: User) {
        if (user.age <= 0) {
            throw new Error("Wrong age")
        } else {
            super.save(user);
        }
    }
}




