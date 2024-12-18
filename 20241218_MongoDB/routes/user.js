import { Router } from 'express'
import * as user from '../controllers/user.js'

const router = new Router()

router.post('/', user.create)
router.post('/:id/cart', user.cart)
router.post('/:id', user.getId)


export default router
