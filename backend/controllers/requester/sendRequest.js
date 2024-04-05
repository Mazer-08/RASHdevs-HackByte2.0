// Controller imports

// Middleware imports

// Model imports
import request from "../../db/models/request.js";

const MakeRequest = async (req, res) => {
  try {
    const referralId = req.params.id;
    const old = await request.findOne({
      where: { referralId, requesterId: req.user.id },
    });
    if (old) {
      let removeRequest = await request.destroy({
        where: { referralId, requesterId: req.user.id },
      });
      if (!removeRequest) {
        return res
          .status(400)
          .json({ message: "Event not removed from bookmark" });
      }
      return res.status(200).json({ message: "Event removed from bookmark" });
    }

    const newRequest = await request.create({
      referralId,
      requesterId: req.user.id,
    });
    if (!newRequest) {
      return res.status(400).json({ message: "Request not made" });
    }
    return res.status(201).json({ message: "Request made" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// const getBookmarkedList = async (req, res) => {
//   try {
//     const events = await bookmarkEvent.findAll({
//       where: { userId: req.user.id },
//       include: Event,
//       nest: true,
//       raw: true,
//     });
//     if (!events) return res.status(404).json({ message: "No events found" });
//     return res.status(200).json({ events: events });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };

// const getBookmarked = async (req, res) => {
//   try {
//     const eventId = req.params.id;
//     const event = await bookmarkEvent.findOne({
//       where: { eventId, userId: req.user.id },
//     });
//     if (!event) return res.status(404).json({ message: "Event not found" });
//     return res.status(200).json({ events: event });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };

export { MakeRequest};
