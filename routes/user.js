const express= require('express')
const{handleGetAllUser,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateUserById,
}=require('../controllers/user')
const router=express.Router();

//get all users rest api
router.route('/').get(handleGetAllUser).post(handleCreateUserById)

//id getting, updating, deleting, user by id
router.route('/:id')
.get(handleGetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById);


module.exports=router;