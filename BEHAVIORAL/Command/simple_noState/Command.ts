interface ICommand {
    execute(): void;
}

export class AddUserToDB_Command implements ICommand {
    private user: User_Commands;

    constructor(user: User_Commands) {
        this.user = user;
    }

    //@Override
    execute(): void {
        this.user.addUserToDB();
    }

}

export class RemoveUserToDB_Command implements ICommand {

    private user: User_Commands;


    constructor(user: User_Commands) {
        this.user = user;
    }

    //@Override
    execute(): void {
        this.user.removeUserFromDB();
    }

}

export class User_Commands {

    public addUserToDB(): void {
        console.log('User added to db');
    }

    public removeUserFromDB(): void {
        console.log('User removed from db');
    }

}

export class Switch {

    public doSomething(command: ICommand) {
        command.execute();
    }
}
