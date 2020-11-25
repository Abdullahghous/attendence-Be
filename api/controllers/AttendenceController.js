const Attendence = require("../models/Attendence");
const User = require('../models/User');

const AttendenceController = () => {
  const markAttendence = async (req, res) => {
    try {
      const mac = req.params.macId;
      let { mark, fine } = req.body;
      // validate
      const match = await User.findOne({
        where: {
          macId: mac
        },
      })
      if (!match)
        return res
          .status(400)
          .json({ msg: "Try to upload attendence using you own phone." });
      const newAttendence = {
        mark,
        fine,
        UserId: req.me.id,
      };
      const data = await Attendence.create(newAttendence);
      return res.status(201).json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  return {
    markAttendence,
  };
};

module.exports = AttendenceController;
