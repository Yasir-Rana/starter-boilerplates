import { Request, Response } from "express";
import asyncHandler from "express-async-handler"
import Test from "../models/testModel";


// @desc   Get Data
// @route  GET /test
// @access Public
const getData = asyncHandler(async (req: Request, res: Response) => {
    const data = await Test.find({});
    res.status(200).json(data);
})

// @desc   Set Data
// @route  POST /test
// @access Public
const setData = asyncHandler(async (req: Request, res: Response) => {
    const {name, email} = req.body;
    const data = await Test.create({
        name,
        email
    });
    res.status(200).json(data);
})


export {
    getData,
    setData,
}