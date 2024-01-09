import express from 'express'
import {
  createUser,
  deleteUser,
  findAllUser,
  findOneUser,
  updateUser,
  login,
  register,
  changePassword,
} from './users.controller.js'

import {
  protect,
  protectAccountOwner,
  restrictTo,
  validateExistUser,
} from './user.middleware.js'

export const router = express.Router()

router

  .post('/register', register)

router

  .post('/login', login)

  router

  .route('/')
  .get(protect, findAllUser)
  .post(createUser)

router

  .use(protect)

  router
  
  .use("/:id", validateExistUser)

  router
  
  .patch('/change-password', changePassword)

  router
  .route('/:id')
  .get(findOneUser)
  .patch(validateExistUser, protectAccountOwner, restrictTo("client, employee"), updateUser)
  .delete(validateExistUser, protectAccountOwner, restrictTo("client, employee"), deleteUser)