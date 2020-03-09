const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_SK);

router.post("/", (req, res) => {
  stripe.charges
    .create({
      amount: 999,
      currency: "usd",
      description: "payment",
      source: req.body.token
    })
    .then(res => {
      console.log(res);
      res.send({ sucess: true });
    })
    .catch(err => {
      res.send({ sucess: false });
    });
});

module.exports = router;
