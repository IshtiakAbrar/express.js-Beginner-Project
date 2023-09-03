const express = require('express');
const router = express.Router();
const blogController= require('../controllers/blogController');
const blogDetailsController= require('../controllers/blogDetailsController');
const commentController= require('../controllers/commentController');
const messageController= require('../controllers/messageController');
const portfolioController= require('../controllers/portfolioController');
const productController= require('../controllers/productController');
const profitController= require('../controllers/profitController');
const projectController= require('../controllers/projectController');
const serviceController= require('../controllers/serviceController');
const titleController= require('../controllers/titleController');


// route all api.
router.get("/blogController1",blogController.create);
router.get("/blogController2",blogController.read);
router.get("/blogController3",blogController.delete);
router.get("/blogController4",blogController.update);

router.get("/blogDetailsController1",blogDetailsController.create);
router.get("/blogDetailsController2",blogDetailsController.read);
router.get("/blogDetailsController3",blogDetailsController.delete);
router.get("/blogDetailsController4",blogDetailsController.update);

router.get("/commentController1",commentController.create);
router.get("/commentController2",commentController.read);
router.get("/commentController3",commentController.delete);
router.get("/commentController4",commentController.update);

router.get("/messageController1",messageController.create);
router.get("/messageController2",messageController.read);
router.get("/messageController3",messageController.delete);
router.get("/messageController4",messageController.update);

router.get("/portfolioController1",portfolioController.create);
router.get("/portfolioController2",portfolioController.read);
router.get("/portfolioController3",portfolioController.delete);
router.get("/portfolioController4",portfolioController.update);

router.get("/productController1",productController.create);
router.get("/productController2",productController.read);
router.get("/productController3",productController.delete);
router.get("/productController4",productController.update);

router.get("/profitController1",profitController.create);
router.get("/profitController2",profitController.read);
router.get("/profitController3",profitController.delete);
router.get("/profitController4",profitController.update);

router.get("/projectController1",projectController.create);
router.get("/projectController2",projectController.read);
router.get("/projectController3",projectController.delete);
router.get("/projectController4",projectController.update);

router.get("/serviceController1",serviceController.create);
router.get("/serviceController2",serviceController.read);
router.get("/serviceController3",serviceController.delete);
router.get("/serviceController4",serviceController.update);

router.get("/titleController1",titleController.create);
router.get("/titleController2",titleController.read);
router.get("/titleController3",titleController.delete);
router.get("/titleController4",titleController.update);


module.exports = router;