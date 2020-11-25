const Attendence = require("../models/Attendence");

const AttendenceController = () => {
  const markAttendence = async (req, res) => {
    const macId = req.params.macId;
    try {
      let { mark, fine } = req.body;
      // validate
      if (!mark || !fine)
        return res.status(400).json({ msg: "Field should not be empty." });
      const Mac = await User.findOne({
        where: {
          macId: macId,
        },
      });
      if (!Mac)
        return res
          .status(400)
          .json({ msg: "Try to upload Attendence using you own phone." });
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
