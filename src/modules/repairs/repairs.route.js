import express from 'express'
import { findAllRepairs, createRepair, findOneRepair, updateRepair, deleteRepair } from './repairs.controller.js'
import { validExistRepair } from './repairs.middleware.js'

export const router = express.Router() 

router 
.route('/')
.get(findAllRepairs)
.post(createRepair)

router
.route('/id')
.get(validExistRepair,findOneRepair)
.patch(validExistRepair, updateRepair)
.delete(validExistRepair, deleteRepair)