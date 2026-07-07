import type { HttpContext } from '@adonisjs/core/http'
import Post from '#models/post'

export default class PostsController {
  async index() {
    return Post.all()
  }

  async store({ request, response }: HttpContext) {
    const data = request.only(['title', 'content'])
    const post = await Post.create(data)
    return response.status(201).json(post)
  }

  async show({ params, response }: HttpContext) {
    const post = await Post.find(params.id)
    if (!post) {
      return response.status(404).json({ error: 'Post not found' })
    }
    return post
  }
}
