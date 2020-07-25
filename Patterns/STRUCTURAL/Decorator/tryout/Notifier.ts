interface AbstractClass {
    doSomething(): void;
}

class ConcreteClass implements AbstractClass{
    doSomething(): void {
        console.log('Base notify');
    }
}

class Decorator implements AbstractClass {

    private notifier: AbstractClass;

    constructor(notifier: AbstractClass) {
        this.notifier = notifier;
    }

    doSomething(): void {
        this.notifier.doSomething();
    }
}

class SMSDecorator extends Decorator{
    doSomething(): void {
        super.doSomething();
        console.log('SMS NOTIFY')
    }
}

class FacebookDecorator extends Decorator{
    doSomething(): void {
        super.doSomething();
        console.log('Facebook NOTIFY')
    }
}

class TelegramDecorator extends Decorator{
    doSomething(): void {
        super.doSomething();
        console.log('Telegram NOTIFY')
    }
}



const oldImplementation = new ConcreteClass();

const sms = new SMSDecorator(oldImplementation);
const facebook = new FacebookDecorator(sms);
const telegram = new TelegramDecorator(facebook);

telegram.doSomething();


