<script>
  let { children, ...props } = $props();
  import { loadStripe } from "@stripe/stripe-js";
  import {PUBLIC_STRIPE_KEY} from '$env/static/public';
  console.log(PUBLIC_STRIPE_KEY);
  async function onclick() {
    console.log("clicked");
    const stripe = await loadStripe(PUBLIC_STRIPE_KEY);
    const response = await fetch("/api/checkout",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const {sessionId, url} = await response.json();
    // Use direct URL redirect instead of deprecated redirectToCheckout
    window.location.href = url;
  }
</script>
<button {...props} {onclick} >
  {@render children()}
</button>
<style>
  button {
    background-color: black;
    color: white;
    padding: 20px 24px;
    font-weight: normal;
    font-size: 22px;
    text-transform: uppercase;
    transition: all 0.3s;
    border: 1px solid white;
  }

  button:hover {
    background-color: white;
    color: black;
  }
</style>
