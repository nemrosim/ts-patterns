/**
 * Command
 */
interface ICommand {
    execute(): void;
}

/**
 * Concrete command
 */
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

/**
 * Concrete command
 */
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

/**
 * Receiver
 */
export class User_Commands {

    private isAdded: boolean = false;

    public undo(): void {
        if (this.isAdded) {
            this.removeUserFromDB();
            this.isAdded = true;
        }
    }

    public addUserToDB(): void {
        console.log('User added to db');
    }

    public removeUserFromDB(): void {
        console.log('User removed from db');
    }

}

/**
 * Invoker
 */
export class Switch {

    public doSomething(command: ICommand) {
        command.execute();
    }
}
