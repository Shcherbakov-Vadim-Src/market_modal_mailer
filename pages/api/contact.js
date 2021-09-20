

export default async function (req, res) {
    require('dotenv').config();

    let pass = await process.env.password;
    console.log('pass', pass);

    let nodemailer = require('nodemailer')

    let transporter = await nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "bootmailer.ru@gmail.com",
            pass: "bootmailer1209.",
        },
    });

    let mail = {
        name: req.body.name,
        phone: req.body.phone,
        mail: req.body.mail,
        site: req.body.site
    }

    let info = await transporter.sendMail({
        from: "bootmailer.ru@gmail.com",
        to: `${mail.mail}`,        // list of receivers  //  bootmailer.ru@gmail.com
        subject: "Your ArmchairMarket ✔",
        text: `Добрый день ${mail.name}, Мы получили Ваш заказ на новое кресло`,
        html: `<b>Добрый день ${mail.name}, Мы получили Ваш заказ на новое кресло. Проверьте, пожалуйста, Ваши контактные данные: ${mail.name}, ${mail.phone}, ${mail.mail}, ${mail.site}</b>`
    });


    console.log(req.body)

    console.log("Message sent", info);

    res.status(200)

}