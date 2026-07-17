const transporter = require("../config/email");
const pool = require("../db/config");

exports.sendContactEmail = async (req, res) => {

    const { name, email, message } = req.body;

    if (!name || !email || !message) {

        return res.status(400).json({

            success: false,

            message: "Please fill all fields"

        });

    }

    try {

        // Save message into TiDB
        await pool.query(

            `INSERT INTO contacts (name, email, message)
             VALUES (?, ?, ?)`,

            [name, email, message]

        );

        // Send email
        await transporter.sendMail({

            from: process.env.EMAIL_USER,

            to: "salemasfaw7@gmail.com",

            subject: "New Message From Salem Portfolio",

            html: `

                <h2>New Contact Message</h2>

                <p><strong>Name:</strong> ${name}</p>

                <p><strong>Email:</strong> ${email}</p>

                <p><strong>Message:</strong></p>

                <p>${message}</p>

            `

        });

        res.status(200).json({

            success: true,

            message: "Message sent successfully"

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            message: "Something went wrong"

        });

    }

};