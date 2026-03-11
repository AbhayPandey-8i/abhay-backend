import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        messsage: "Hello Abhay This Side"
    })
}
)

export {registerUser}