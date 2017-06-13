# Red Line Finance

- **gestor financeiro pessoal**
- [DEMO](https://sombriks.github.io/red-line-finance/)

## Feature-storm

- ajuda a entender para onde foi o dinheiro
  - usuário tem que ajudar dizendo com o que **gastou** ou quanto **recebeu**.
  - gastar ou receber chamamos de **lançamento**
- define **categorias** de lançamentos
- define categorias de ganhos
- monta-se uma **projeção**
  - usuário espera receber X e os gastos serão Y num período de X dias
  - a partir da projeção dá pra ter uma ideia de quanto deve ser, por exemplo, o gasto diário
  - as projeções pertencem ao usuário
- lançamentos de um período são avaliados de acordo com a projeção
- lançamentos pertencem a um usuário
- um usuário só pode ter uma projeção
- categorias pertencem a uma única projeção
- lançamentos precisam informar uma categoria (cria uma caso não exista)
- sugestões iniciais de projeções
- usuário pode editar a projeção
- quando uma das categorias excede o limite esperado do dia, ela "cruza a linha vermelha"
- os gráficos devem ser bonitos e oferecer visões sobre os lançamentos por período
- ao definir uma categoria, definimos também uma expectativa diária de despesa com esta categoria.
- subcategorias não podem exceder o custo da categoria pai
- posso salvar o json que representa meus dados (lançamentos, categorias, projeção, usuários)
- posso carregar um json com meus dados, que irá substituir a configuração atual.
- tem que rodar web mobile e offline sem maiores problemas

## Screen count

- S0001 - login
- S0002 - cadastro
- S0003 - menu configurações (router mountpoint)
  - S0004 - gráficos (relatórios)
  - S0005 - categorias (custo, gasto, descrição, cor)
  - S0006 - projeções (perfil financeiro)
  - S0007 - lançamento (novo custo ou gasto)
  - S0008 - histórico lançamentos
  - S0009 - dados perfil
