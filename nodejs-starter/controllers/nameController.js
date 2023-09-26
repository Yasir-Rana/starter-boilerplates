const asyncHandler = require('express-async-handler');
const modelName = require('../models/nameModel');


// @desc   Get Data
// @route  GET /api/data
// @access Public
const getData = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'Get Data'});
});

// @desc   Get Single Data
// @route  GET /api/data/:id
// @access Public
const getSingleData = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'Get Single Data'});
});

// @desc   Set Data
// @route  POST /api/data
// @access Public
const setData = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'Set Data'});
});

// @desc   Update Data
// @route  PUT /api/data/:id
// @access Public
const updateData = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'Update Data'});
});

// @desc   Delete Data
// @route  DELETE /api/data/:id
// @access Public
const deleteData = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'Delete Data'});
});

module.exports = {
  getData,
  getSingleData,
  setData,
  updateData,
  deleteData
};