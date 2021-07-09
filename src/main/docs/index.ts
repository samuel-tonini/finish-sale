import paths from './paths'
import components from './components'
import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Trabalho Arquitetura Orientada a Serviço',
    description: 'Essa é a documentação da API feita para a disciplina Arquitetura Orientada a Serviço.',
    version: '1.0.0'
  },
  servers: [{
    url: '/',
    description: 'Servidor Principal'
  }],
  tags: [{
    name: 'Sale',
    description: 'APIs relacionadas a finalização da venda.'
  }, {
    name: 'Dispatch',
    description: 'APIs relacionadas ao despacho da venda.'
  }, {
    name: 'Payment',
    description: 'APIs relacionadas ao pagamento da venda.'
  }, {
    name: 'Stock',
    description: 'APIs relacionadas a manipulação do estoque.'
  }
  ],
  paths,
  schemas,
  components
}
