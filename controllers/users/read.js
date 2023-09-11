import User from '../../models/User.js';

export default async (req, res, next) => {
    try {
        let all = await User.find()
        if (all.length > 0) {
            return res.status(200).json({
                response: all,
                success: true,
                message: '',
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