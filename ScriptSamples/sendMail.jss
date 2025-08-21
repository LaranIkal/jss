var Properties = Java.type('java.util.Properties');
var Session = Java.type('jakarta.mail.Session');
var MimeMessage = Java.type('jakarta.mail.internet.MimeMessage');
var InternetAddress = Java.type('jakarta.mail.internet.InternetAddress');
var PasswordAuthentication = Java.type('jakarta.mail.PasswordAuthentication');
var Message = Java.type('jakarta.mail.Message');
var Transport = Java.type('jakarta.mail.Transport');

// SMTP properties
var props = new Properties();
props.put("mail.smtp.host", "smtp.gmail.com");
props.put("mail.smtp.auth", "true");
props.put("mail.smtp.port", "587");
props.put("mail.smtp.starttls.enable", "true");

// Authenticator (must use Java.extend in GraalVM)
var Authenticator = Java.extend(Java.type('jakarta.mail.Authenticator'), {
    getPasswordAuthentication: function() {
        return new PasswordAuthentication("your.email@gmail.com", "your_password");
    }
});

var session = Session.getInstance(props, new Authenticator());

// Create the email
var message = new MimeMessage(session);
message.setFrom(new InternetAddress("your.email@gmail.com"));
message.setRecipients(Message.RecipientType.TO, InternetAddress.parse("destination.mail@gmail.com"));
message.setSubject("Test Email from GraalVM JavaScript (Jakarta Mail)");
message.setText("This email was sent using jakarta.mail from GraalVM JavaScript!");

// Send the email
Transport.send(message);

console.log("Email sent successfully!");
