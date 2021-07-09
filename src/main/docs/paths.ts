import {
  dispatchPath,
  paymentPath,
  salePath,
  stockAfterPath,
  stockBeforePath,
  stockCancelPath
} from './paths/'

export default {
  '/dispatch': dispatchPath,
  '/payment': paymentPath,
  '/sale': salePath,
  '/stock/before': stockBeforePath,
  '/stock/after/{processingId}': stockAfterPath,
  '/stock/cancel/{processingId}': stockCancelPath
}
