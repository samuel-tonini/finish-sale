import 'module-alias/register'
import env from '@/main/config/env'

const init = async (): Promise<void> => {
  const { appSale, appPayment, appDispatch, appStock } = (await import('./config/app')).default
  appSale.listen(env.saleAppPort, () => console.log(`Sale documentation running at http://localhost:${env.saleAppPort}/docs\n\nSale server running at http://localhost:${env.saleAppPort}`))
  appPayment.listen(env.paymentAppPort, () => console.log(`Payment server running at http://localhost:${env.paymentAppPort}`))
  appDispatch.listen(env.dispatchAppPort, () => console.log(`Dispatch server running at http://localhost:${env.dispatchAppPort}`))
  appStock.listen(env.stockAppPort, () => console.log(`Stock server running at http://localhost:${env.stockAppPort}`))
}

init().then(() => {}).catch(console.error)
