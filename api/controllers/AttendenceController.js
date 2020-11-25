const Attendence = require('../models/Attendence');

const AttendenceController = () => {
  const markAttendence = async (req, res) => {
    try {
      let { mark, fine } = req.body;
      // validate
      if (!mark || !fine)
        return res.status(400).json({ msg: "field cannot be empty" });
          const newAttendence = ({
            mark,
            fine,
            UserId : req.me.id
          });
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
