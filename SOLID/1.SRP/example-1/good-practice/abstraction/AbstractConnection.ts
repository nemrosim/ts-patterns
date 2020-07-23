import {User} from "./User";

export interface AbstractConnection {
   saveUser(user: User):void;
}
