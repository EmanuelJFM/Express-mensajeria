class EmailRequest {
    constructor(to, subject, content) {
        this.to = to;
        this.subject = subject;
        this.content = content;
    }

    getTo() {
        return this.to;
    }

    setTo(to) {
        this.to = to;
    }

    getSubject() {
        return this.subject;
    }

    setSubject(subject) {
        this.subject = subject;
    }

    getContent() {
        return this.content;
    }

    setContent(content) {
        this.content = content;
    }
}
module.exports = EmailRequest