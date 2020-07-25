import {AddUserToDB_Command, RemoveUserToDB_Command, Switch, User_Commands} from "./Command";


const userCommands = new User_Commands();


const add_command = new AddUserToDB_Command(userCommands);
const remove_command = new RemoveUserToDB_Command(userCommands);

// 2

const switch_class = new Switch();
switch_class.doSomething(add_command);
switch_class.doSomething(remove_command);
