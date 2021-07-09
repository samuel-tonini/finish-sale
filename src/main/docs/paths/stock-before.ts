export const stockBeforePath = {
  post: {
    tags: ['Stock'],
    summary: 'Inicia o processamento de estoque',
    description: 'Essa rota deve inciar o processamento de estoque, realizando a verificação da disponibilidade do produto e a reserva do mesmo. Quando um item é vendido pela primeira vez o saldo inicial do mesmo é 5. O código retornado é um sequêncial único para ser finalizado ou cancelado o processamento do estoque.',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/stockItem'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/stockResponse'
            }
          }
        }
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
