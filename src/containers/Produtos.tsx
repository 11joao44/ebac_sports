import { Produto as ProdutoType } from '../App'
import { useGetJogosQuery } from '../services/api'

import Produto from '../components/Produto'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetJogosQuery()

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            key={produto.id}
            produto={produto}
            favoritar={function (produto: ProdutoType): void {
              throw new Error('Function not implemented.')
            }}
            estaNosFavoritos={false}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
