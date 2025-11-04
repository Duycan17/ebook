import { json } from "@sveltejs/kit";
import sgMail from "@sendgrid/mail";
import { SENDGRID_API_KEY } from "$env/static/private";

if (!SENDGRID_API_KEY) {
    throw new Error("SENDGRID_API_KEY is not set");
}

sgMail.setApiKey(SENDGRID_API_KEY);

export async function POST({ request }){
    const requestBody = await request.json();
    const customerEmail = "khanhhh.duy@gmail.com"
    const customerName = requestBody.data.object.customer_details.name;
    const message = {
        to: customerEmail,
        from: "duycun1985@gmail.com",
        subject: "Purchase Confirmation",
        text: `Thank you for your purchase, ${customerName}!`,
        html: `<p>Thank you for your purchase, ${customerName}!</p>`,
    }
    console.log(requestBody);
    return json({ message: "Purchase confirmed" });
}