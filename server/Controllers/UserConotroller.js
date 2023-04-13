import UserModal from "../Models/userModel.js";
import jwt from "jsonwebtoken";

export const updateUser = async (req, res) => {
    console.log(req.body);
    try {
        const user = await UserModal.findByIdAndUpdate(req.body._id, req.body, { new: true });
        const token = jwt.sign({
            username: user.username, id: user._id
        }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({ user, token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}