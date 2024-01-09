const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        email: 'meuemail',
        pass: 'minhasenha' //jurou que eu ia colocar minha senha e email em publico pra todos os cururus espinhentos da area de programação virem
    },
    tls: {
        rejectUnauthorized: false
    }
})

const mailOptions = {
    from: 'meuemail', //email do remetente
    to: 'email@destinatario', //email do destinatario
    subject: 'Assunto do Email', //assunto
    text: 'Texto Simples do Email', //texto do email
    html: '<p>Texto em HTML do Email</p>', //conteudo do email em html
    attachments: [ //para enviar arquivos
        {
            filename: 'jaguar.png',
            path: __dirname + '/jaguar.png'
        }
    ]
}

transport.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error)
    }
    console.log('Mensagem enviada:', info)
})