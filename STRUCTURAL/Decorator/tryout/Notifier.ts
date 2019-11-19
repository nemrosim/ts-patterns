interface I_Notifier {
    notify(): void;
}

class NotifyDecorator implements I_Notifier {

    private notifier: I_Notifier;

    constructor(notifier: I_Notifier) {
        this.notifier = notifier;
    }

    notify(): void {
        this.notifier.notify();
    }
}

class SMSDecorator extends NotifyDecorator{
    notify(): void {
        super.notify();
        console.log('SMS NOTIFY')
    }
}

class FacebookDecorator extends NotifyDecorator{
    notify(): void {
        super.notify();
        console.log('Facebook NOTIFY')
    }
}

class TelegramDecorator extends NotifyDecorator{
    notify(): void {
        super.notify();
        console.log('Telegram NOTIFY')
    }
}

class BaseNotifier implements I_Notifier{
    notify(): void {
        console.log('Base notify');
    }
}

const b = new BaseNotifier();

const a = new SMSDecorator(b);
const c = new FacebookDecorator(a);
const t = new TelegramDecorator(c);


t.notify();


