const Payment = require("../models/payment");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function createPayment(req, res) {
  try {
    const { amount, userId } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Amount in cents
      currency: "usd",
    });

    const payment = new Payment({
      userId,
      amount,
      status: "pending",
      paymentIntentId: paymentIntent.id,
    });

    await payment.save();

    res.status(200).json({
      message: "Payment created successfully", 
      clientSecret: paymentIntent.client_secret,
      paymentId: payment._id,
    });
  } catch (err) {
    res.status(500).json({
      error: true,
      message: err.message,
    });
  }
}

module.exports = createPayment;