export const salePath = {
  post: {
    tags: ['Sale'],
    summary: 'Finalização da venda.',
    description: 'Essa rota realiza a finalização de uma venda. Realizando o processamento de: estoque, dispacho e salvamento. Por essa rota que todo o processamento é iniciado.',
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
