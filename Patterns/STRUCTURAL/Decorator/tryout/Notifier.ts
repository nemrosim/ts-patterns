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
        // do something more
    }
}

class TelegramDecorator extends Decorator{
    doSomething(): void {
        super.doSomething();
        console.log('Telegram NOTIFY')
    }
}



const b = new ConcreteClass();

const a = new SMSDecorator(b);
const c = new FacebookDecorator(a);
const t = new TelegramDecorator(c);


t.doSomething();


