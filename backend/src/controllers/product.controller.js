const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");

router.get("", async (req, res) => {
  try {
    const product = await Product.find().lean().exec();
    res.status(200).json({ data: product });
  } catch (err) {
    res.status(400).json({ status: "failed", message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).lean().exec();
    res.status(200).json({ data: product });
  } catch (err) {
    res.status(400).json({ status: "failed", message: err.message });
  }
});

router.get("/eventType/:event", async (req, res) => {
  try {
    const product = await Product.find({
      eventType: req.params.event,
      [req.query.eventCatagory && "eventCatagory"]: req.query.eventCatagory,
      [req.query.eventLocationType && "eventLocationType"]:
        req.query.eventLocationType,
    })
      .lean()
      .exec();
    res.status(200).json({ data: product });
  } catch (err) {
    res.status(400).json({ status: "failed", message: err.message });
  }
});

// router.get("/eventType/:event/:eventCatagory", async (req, res) => {
//   try {
//     const product = await Product.find({
//       eventType: req.params.event,
//       eventCatagory: req.params.eventCatagory ? req.params.eventCatagory : "",
//     })
//       .lean()
//       .exec();
//     res.status(200).json({ data: product });
//   } catch (err) {
//     res.status(400).json({ status: "failed", message: err.message });
//   }
// });

// router.get("/:event/:eventCatagory/:location", async (req, res) => {
//   try {
//     const product = await Product.find({
//       eventType: req.params.event,
//       eventCatagory: req.params.eventCatagory,
//       eventLocationType: req.params.location,
//     })
//       .lean()
//       .exec();
//     res.status(200).json({ data: product });
//   } catch (err) {
//     res.status(400).json({ status: "failed", message: err.message });
//   }
// });

router.post("", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({ data: product });
  } catch (err) {
    res.status(400).json({ status: "failed", message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id)
      .lean()
      .exec();
    res.status(200).json({ data: product });
  } catch (err) {
    res.status(400).json({ status: "failed", message: err.message });
  }
});

module.exports = router;
