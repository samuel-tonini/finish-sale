import 'module-alias/register'
import env from '@/main/config/env'

const init = async (): Promise<void> => {
  const app = (await import('./config/app')).default
  app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}\nDocumentation running at http://localhost:${env.port}/docs`))
}

init().then(() => {}).catch(console.error)
