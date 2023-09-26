const express = require("express");
const router = express.Router();
const {setData, getData, updateData, deleteData} = require("../controllers/nameController")

router.route('/').get(getData).post(setData);
router.route('/:id').put(updateData).delete(deleteData);

module.exports = router;
