import { Router } from 'express'
import { playersAdmin, playersQuery, playersCreate, playersId, playersAll, playersUpdateId } from '../middleware'

const router = Router()

router.get('/api/players/query/:query', playersQuery)

router.put('/api/players/update/:id', playersUpdateId)

router.get('/api/players/admin/:id', playersAdmin)

router.get('/api/players/:id', playersId)

router.get('/api/players/', playersAll)

router.post('/api/players/create', playersCreate)

export default router
