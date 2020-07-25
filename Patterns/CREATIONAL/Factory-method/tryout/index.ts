abstract class Creator {
    abstract factoryMethod(): IConnection;

    public getConnection(): string {
        return this.factoryMethod().getConnection();
    }
}

class ConnectionCreator extends Creator {
    factoryMethod(): IConnection {
        // ypu can easily change to new Oracle(),
        // and not to change in 1000 lines of code
        return new MySQL();
    }
}

interface IConnection {
    getConnection(): string
}

class MySQL implements IConnection {
    getConnection(): string {
        return "Connecting to MySQL";
    }
}

class Oracle implements IConnection {
    getConnection(): string {
        return "Connecting to OracleDB";
    }
}

for (let i = 0; i < 1000; i++) {
    console.log(`${i + 1} - ${new ConnectionCreator().getConnection()}`);
}




