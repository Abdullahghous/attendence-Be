const Attendence = require("../models/Attendence");

const AttendenceController = () => {
  const markAttendence = async (req, res) => {
    try {
      let { mark, fine } = req.body;
      // validate
      if (!mark || !fine) {
        return res.status(400).json({ msg: "field cannot be empty" });
      }
      if (mark === "" || fine === "") {
        return res.status(400).json({ msg: "field cannot be empty" });
      } else if (
        mark === "Present" ||
        mark === "present" ||
        mark === "p" ||
        mark === "P"
      ) {
        const newAttendence = {
          mark,
          fine,
          UserId: req.me.id,
        };
        const data = await Attendence.create(newAttendence);
        return res.status(201).json(data);
      } else {
        return res
          .status(400)
          .json({ msg: "try to upload Attendence using 'Present'" });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  return {
    markAttendence,
  };
};

module.exports = AttendenceController;
