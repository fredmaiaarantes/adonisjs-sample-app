/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import db from '@adonisjs/lucid/services/db'

const PostsController = () => import('#controllers/posts_controller')

router.get('/', () => {
  return { hello: 'world' }
})

router.get('/health', () => {
  return { status: 'ok' }
})

router.get('/db-check', async ({ response }) => {
  try {
    const result = await db.rawQuery('SELECT NOW() as now')
    return { status: 'connected', timestamp: result.rows[0].now }
  } catch (error) {
    return response.status(500).json({ status: 'error', message: 'Database connection failed' })
  }
})

router.get('/posts', [PostsController, 'index'])
router.post('/posts', [PostsController, 'store'])
router.get('/posts/:id', [PostsController, 'show'])
