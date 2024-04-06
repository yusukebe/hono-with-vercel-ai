import { Hono } from 'hono'
import { env } from 'hono/adapter'
import { logger } from 'hono/logger'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import OpenAI from 'openai'
import { renderer } from './renderer'

const app = new Hono()

app.use(logger())

const schema = z.object({
  messages: z.array(
    z.object({
      role: z.enum(['user', 'assistant']),
      content: z.string()
    })
  )
})

app.post('/api/chat', zValidator('json', schema), async (c) => {
  const { messages } = c.req.valid('json')

  const openai = new OpenAI({
    apiKey: env<{ OPENAI_API_KEY: string }>(c).OPENAI_API_KEY
  })

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages
  })

  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)
})

app.get('*', renderer, async (c) => {
  return c.render(<div id="root"></div>)
})

export default app
