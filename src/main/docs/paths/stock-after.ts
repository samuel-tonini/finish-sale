export const stockAfterPath = {
  post: {
    tags: ['Stock'],
    summary: 'Finaliza o processamento de estoque',
    description: 'Essa rota deve finalizar o processamento de estoque, removendo a quantidade reservada do produto e abatendo do saldo do mesmo. Deve ser informado o código de processamento do estoque para que o mesmo seja finalizado.',
    parameters: [{
      in: 'path',
      name: 'processingId',
      description: 'ID da inicialização do processamento de estoque para ser finalizado',
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
