import Gamers from "../../models/Gamers.js";

export default async (req, res) => {
    try {
        let all = await Gamers.find()
        if (all.length > 0) {
            return res.status(200).json({
                response: all,
                success: true,
                message: 'The request to bring the data has been received correctly',
            })
        } else {
            return res.status(404).json({
                response: null,
                success: false,
                message: 'not found data',
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            response: null,
            success: false,
            message: error.message
        })
    }
}