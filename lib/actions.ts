"use server"
import nodemailer from "nodemailer"
import { revalidatePath } from "next/cache";

export async function sendContact(name: string, email: string, phone: string, msg: string): Promise<{success: boolean, message: string}>{
    let revalidate = false;
    const transporter = nodemailer.createTransport({
        host: "smtp.seznam.cz",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL!,
            pass: process.env.PASSWORD!,
        },
    tls: {
        ciphers: "SSLv3"
    }
    })

    try {
        const sendMail = await transporter.sendMail({
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: "Novy kontakt",
            text: `Celé jméno: ${name}, Email: ${email}, Tel. číslo: ${phone},  Zpráva: ${msg}`
        })
        
        if (!sendMail.accepted) {
          revalidate = false;
          return {
            success: false,
            message: "Nepodařilo se odeslat e-mail. Zkuste to znovu",
          };
        }
        console.log(sendMail.response)
        revalidate = true
        return {
            success: true,
            message: "Email byl odeslán",
        }
    }catch(error){
        console.log(error)
        return {
            success: false,
            message: "Email byl odeslán",
        }
        
    }finally{
        if(revalidate){
            revalidatePath("/")
        }
    }
}