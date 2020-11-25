const Attendence = require('../models/Attendence');

const AttendenceController = () => {
  const markAttendence = async (req, res) => {
    try {
      let { status } = req.body;
      // validate
      // if (!status)
      //   return res.status(400).json({ msg: "Please Mark Attendence" });
          const newAttendence = ({
            status,
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
