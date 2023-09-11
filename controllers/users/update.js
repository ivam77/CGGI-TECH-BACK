import User from '../../models/User.js'

export default async (req, res, next) => {
  try {
    const UserId = req.params.id;
    const updatedData = req.body;
    
    const updated = await User.findOneAndUpdate(
      { _id: UserId },
      updatedData,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
        response: updated,
        success: true,
        message: "User updated",
        });
  } catch (error) {
    console.log(error);
  }
};