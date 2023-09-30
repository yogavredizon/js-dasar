class MailService{
    time = this.#generateTime();
    hour = this.#generateHous();
    constructor(sender){
        this.sender = sender;
    }

    #generateTime(){
        this.time = new Date()
        return this.time
    }

    #generateHous(){
        const hour = new Date()
        return hour.getHours()
    }

    setProfile(){
        console.log(this.sender)
    }
}

class WhatsAppService extends MailService{
    // overidding adalah menimpa method yang sudah dideklarasikan pada superclass dan dideklarasikan pada subclassnya dan dapat dimodifikasi

    setProfile(number, age){
        console.log(this.sender,number, age )
    }
    sendMessage(receiver, message){
        console.log(`${this.sender} send ${message} to ${receiver} at ${this.time}`)
    }
}
class EmailService extends MailService{
    sender = "yoga"
    sendMessage(message, receiver, delay){
        setTimeout(() => {
            console.log(`${this.sender} send ${message} to ${receiver} at ${this.time}`)
        }, delay);
    }

    sendMessageWithTime(message, receiver, time){
        if (this.hour == time){
            console.log(`${this.sender} send ${message} to ${receiver} at ${this.time}`)
        }
    }
}

const wa = new WhatsAppService("Yoga")
wa.sendMessage("Ramli", "Gass kantin")
// akan mengakses method pada class WhatsAppService
wa.setProfile(1111, 19)

const email = new EmailService("Vredizon")
email.sendMessage("P", "Ahmad", 1000)

// akan mengakses method pada class MailService
email.setProfile()
email.sendMessageWithTime("op", "Mail", 22)
console.log(wa instanceof MailService)