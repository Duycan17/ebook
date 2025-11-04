import { json } from "@sveltejs/kit";
import Stripe from "stripe";
import { STRIPE_API_KEY, PRICE_ID } from "$env/static/private";
import { PUBLIC_FRONTEND_URL } from "$env/static/public";

if (!STRIPE_API_KEY) {
    throw new Error("STRIPE_API_KEY is not set");
}

if (!PRICE_ID) {
    throw new Error("PRICE_ID is not set");
}

const stripe = new Stripe(STRIPE_API_KEY);

export async function POST(){
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price: PRICE_ID,
                    quantity: 1,
                }
            ],
            mode: "subscription",
            success_url: `${PUBLIC_FRONTEND_URL}/checkout/success`,
            cancel_url: `${PUBLIC_FRONTEND_URL}/checkout/cancel`,
        });
        return json({sessionId: session.id, url: session.url});
    } catch (error) {
        console.error("Error creating checkout session:", error);
        return json({ error: error.message }, { status: 500 });
    }
}