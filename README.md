# Servidor para Finalização da Compra

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você tem uma máquina com o `Node.JS`

## 🚀 Instalando Servidor para Finalização da Compra

Para instalar as dependências utilize o seguinte comando:

```bash
npm install
```

## ⚙️ Personalizando Servidor para Finalização da Compra

Para personalizar siga estas etapas:

- Copie e cole o arquivo `.env.example` renomeie para `.env`;
- Para modificar a porta do servidor de finalização da venda altere a propriedade `SALE_APP_PORT` para o valor desejado, por padrão a porta é `3000`;
- Para modificar a porta do servidor de pagamento altere a propriedade `PAYMENT_APP_PORT` para o valor desejado, por padrão a porta é `3001`;
- Para modificar a porta do servidor de despacho de venda altere a propriedade `DISPATCH_APP_PORT` para o valor desejado, por padrão a porta é `3002`;
- Para modificar a porta do servidor de estoque altere a propriedade `STOCK_APP_PORT` para o valor desejado, por padrão a porta é `3003`;
- Para modificar a url base altere a propriedade `BASE_URL` para o valor desejado, por padrão a url base é `http://localhost`;
- Caso alguma propriedade não precise ser alterada remova ela do arquivo ou comente a linha colocando `#` no início da mesma.

## ☕ Usando Servidor para Finalização da Compra

Para iniciar o servidor utilize o seguinte comando:

```bash
npm run start
```

## 📚 Usando a documentação do Servidor para Finalização da Compra

Para ver a documentação de cada rota utilize o endpoint `/docs`, por padrão a url é `http://localhost:3000/docs`
