const Payment = require("../models/payment");

async function updatePaymentStatus(req, res) {
  try {
    const { paymentId, status } = req.body;

    const updatedPayment = await Payment.findByIdAndUpdate(
      paymentId,
      { status },
      { new: true }
    );

    res.status(200).json({
      message: "Payment status updated successfully",
      data: updatedPayment,
    });
  } catch (err) {
    res.status(500).json({
      error: true,
      message: err.message,
    });
  }
}

module.exports = updatePaymentStatus;