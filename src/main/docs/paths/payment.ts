export const paymentPath = {
  post: {
    tags: ['Payment'],
    summary: 'Processar o pagamento da venda.',
    description: 'Essa rota realiza o processamento do pagamento da venda, é uma implementação fake e há 80% de change de resultar em sucesso.',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/payment'
          }
        }
      }
    },
    responses: {
      204: {
        description: 'Sucesso'
      },
      400: {
        $ref: '#/components/badRequest'
      },
      404: {
        $ref: '#/components/notFound'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}
