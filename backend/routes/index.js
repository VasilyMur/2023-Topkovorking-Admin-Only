const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/userController');
const spacesController = require('../controllers/spacesController');
const staticController = require('../controllers/staticController');
const authMiddleware = require('../middlewares/auth-middleware');
const adminMiddleware = require('../middlewares/admin-middleware');

// remove >>>
router.post('/createDb', userController.createDb);

router.post('/register', 
    body('email').isEmail(), 
    body('password').isLength({ min: 3, max: 32 }), 
    userController.register
    );

router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);

router.get('/getUserSpaces', 
    authMiddleware, 
    spacesController.getUserSpaces
    );

// LANDING PAGES (Main Feature - paginations, city, tags)
router.get('/getPaginatedSpaces/:currentPage/:city/:tagData', 
    spacesController.getPaginatedSpaces
    );

// MAIN MAP PAGE
router.get('/getCityPlacemarks/:city', 
    spacesController.getCityPlacemarks
    );

// Single Space PAGE
router.get('/getSingleSpace/:slug', 
    spacesController.getSingleSpace
    );

// Main Page - search Space by name
// router.get('/searchSpacesByName/:city/:text', 
//     spacesController.searchSpacesByName
//     );

// Create new Customer Request
router.post('/createCustomerRequest', 
    body('name').not().isEmpty().trim().escape(),
    body('phone').not().isEmpty().trim().escape(),
    body('message').trim().escape(),
    spacesController.createCustomerRequest
    );

// Admin only
router.get('/getFilteredUserSpaces/:pending/:text', 
    authMiddleware, 
    adminMiddleware,
    spacesController.getFilteredUserSpaces
    );
router.get('/getFilteredUserSpacesByEmail/:email', 
    authMiddleware, 
    adminMiddleware,
    spacesController.getFilteredUserSpacesByEmail
    );
router.get('/deleteUserSpace/:id', 
    authMiddleware, 
    adminMiddleware,
    spacesController.deleteUserSpace
    );

//
router.get('/getUserSpace/:id', 
    authMiddleware, 
    spacesController.getUserSpace
    );

router.get('/getCustomerRequests', 
    authMiddleware, 
    spacesController.getCustomerRequests
    );
    
router.get('/deleteCustomerRequest/:id', 
    authMiddleware, 
    spacesController.deleteCustomerRequest
    );

router.get('/toggleSpacePublish/:slug', 
    authMiddleware, 
    adminMiddleware,
    spacesController.toggleSpacePublish
    );

router.post('/assignSpaceAdminEmail', 
    body('email').not().isEmpty().isEmail().trim(),
    authMiddleware, 
    adminMiddleware,
    spacesController.assignSpaceAdminEmail
    );

// USERS
router.get('/getUsers', 
    authMiddleware, 
    adminMiddleware,
    userController.getUsers
    );

router.get('/deleteUser/:id', 
    authMiddleware, 
    adminMiddleware,
    userController.deleteUser
    );
router.get('/activateUser/:id', 
    authMiddleware, 
    adminMiddleware,
    userController.activateUser
    );
router.get('/toggleCanCreate/:id', 
    authMiddleware, 
    adminMiddleware,
    userController.toggleCanCreate
    );

// Save Space
router.post('/saveUserSpace', 
    authMiddleware, 
    body('name').not().isEmpty().trim().escape(),
    body('description').not().isEmpty().trim().escape(),
    body('priceDay').trim().escape(),
    spacesController.saveUserSpace
    );


// BACKBLAZE
router.get('/getUploadImageUrl', 
    authMiddleware,
    spacesController.getUploadImageUrl
    );
router.post('/deleteImage', 
    authMiddleware,
    spacesController.deleteImage
    );
router.post('/updateTitleImage', 
    authMiddleware,
    spacesController.updateTitleImage
    );
router.post('/updateMainImage', 
    authMiddleware,
    spacesController.updateMainImage
    );

// Static API
router.get('/staticGetCityPlacemarks/:city', staticController.getCityPlacemarks);
router.get('/staticGetPaginatedSpaces/:currentPage/:city/:tagData', staticController.getPaginatedSpaces);
router.get('/staticGetSingleSpace/:slug', staticController.getSingleSpace);
router.get('/staticGetAllSpaces', staticController.getAllSpaces);


// TEST >>> to delete
router.post('/processTraffic', 
    authMiddleware,
    userController.processTraffic
    );











module.exports = router;