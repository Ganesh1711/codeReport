const Str = require("../models/Str");
const router = require("express").Router();

//please string word pass using array
//example :
// "s" : ["hello","how","are","you"]
//output : 
/*.............[
    "are",
    "hello",
    "how",
    "you"
  ].................*/
router.post("/",async (req, res) => {
  const newStr = new Str(req.body);


  try {
          const savedStr = await newStr.save();
          res.status(200).json(savedStr.s.sort());
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;