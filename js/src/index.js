const { async } = require("q")

import emailjs from 'emailjs-com';

const sendEmail = async e => {
    e.preventDefault()
    console.log(e.target)
    emailjs.init('user_VHMnZa739EKkjeUqDVdzV');
    const result = await emailjs.sendForm('service_574mgsb', 'template_rtorgr8', e.target, 'user_VHMnZa739EKkjeUqDVdzV');
    if(result.text == 'OK') alert('Message successfully sent!');
}

document.getElementById('contactForm').addEventListener('submit', sendEmail);
