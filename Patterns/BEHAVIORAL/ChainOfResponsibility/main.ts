class Request_Class {

    private readonly requestType: RequestType;
    private readonly amount: number;

    constructor(requestType: RequestType, amount: number) {
        this.requestType = requestType;
        this.amount = amount;
    }

    getRequestType(): RequestType {
        return this.requestType;
    }

    getAmount(): number {
        return this.amount;
    }
}

abstract class Handler {
    protected successor: Handler;

    public setSuccessor(successor: Handler): void {
        this.successor = successor;
    }

    public abstract handleRequest(request: Request_Class): void
}

enum RequestType {
    CONFERENCE, PURCHASE
}

class Director extends Handler {
    //@Override
    handleRequest(request: Request_Class): void {
        if (request.getRequestType() === RequestType.CONFERENCE) {
            console.log(`Director is getting the request of type: ${RequestType.CONFERENCE}`)
        } else {
            this.successor.handleRequest(request);
        }
    }
}

class VP extends Handler {
    //@Override
    handleRequest(request: Request_Class): void {
        if (request.getRequestType() === RequestType.PURCHASE) {
            console.log('VP is getting the request');

            if (request.getAmount() < 1500) {
                console.log('VPS can approve purchases below 1500')
            }

        } else {
            console.log('VPS can NOT approve purchases more than 1500');
            console.log('VPs successor is ', this.successor);
            this.successor.handleRequest(request);
        }
    }
}

/**
 * It is like default case in switch-case statements
 */
class CEO extends Handler {
    //@Override
    handleRequest(request: Request_Class): void {
        console.log('CEO can approve anything he want')
    }
}


const public_static_void_main = () => {

    const director = new Director();
    const vp = new VP();
    const ceo = new CEO();

    director.setSuccessor(vp);
    vp.setSuccessor(ceo);

    const request = new Request_Class(RequestType.CONFERENCE, 500);
    const request_purchase_500 = new Request_Class(RequestType.PURCHASE, 500);
    const request_purchase_2000 = new Request_Class(RequestType.PURCHASE, 2000);

    director.handleRequest(request);
    director.handleRequest(request_purchase_500);
    director.handleRequest(request_purchase_2000);
};

public_static_void_main();
