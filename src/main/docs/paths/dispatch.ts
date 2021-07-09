export const dispatchPath = {
  post: {
    tags: ['Dispatch'],
    summary: 'Processa o despacho da venda.',
    description: 'Essa rota realiza o processamento do despacho da venda, é uma implementação fake e há 80% de change de resultar em sucesso.',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/sale'
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
