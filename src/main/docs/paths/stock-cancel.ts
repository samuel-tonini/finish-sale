export const stockCancelPath = {
  post: {
    tags: ['Stock'],
    summary: 'Cancela o processamento de estoque',
    description: 'Essa rota deve cancelar o processamento de estoque, removendo a quantidade reservada do produto. Deve ser informado o código de processamento do estoque para que o mesmo seja cancelado.',
    parameters: [{
      in: 'path',
      name: 'processingId',
      description: 'ID da inicialização do processamento de estoque para ser cancelado',
      required: true,
      schema: {
        type: 'number'
      }
    }],
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
