import React, { useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import explorerContext from '../context/exploreContext';

function ExploreDrinks() {
  const { recipes, sendTypeRecipe } = useContext(explorerContext);

  const { push } = useHistory();

  // Req 74 - Aplicado useEffect para checar se temos retorno da receita
  // caso true, pegamos o id da receita e redirecionamos para a rota correta
  useEffect(() => {
    if (recipes) {
      const id = recipes.drinks.map((e) => e.idDrink);
      push(`/drinks/${id}`);
    }
  }, [recipes, push]);

  return (
    <div>
      <Header pageName="Explore Drinks" isEnable={ false } />
      {/* Req 71 - Add botão para filtro e Req 72 criado rota para a pagina de ingrediente */ }
      <Link to="/explore/drinks/ingredients">
        <button
          data-testid="explore-by-ingredient"
          type="button"
        >
          By Ingredient
        </button>
      </Link>
      {/* Req 74 - Chama função passando o tipo da receita para o provider  */ }
      <button
        data-testid="explore-surprise"
        type="button"
        onClick={ () => sendTypeRecipe('drink') }
      >
        Surprise me!
      </button>
    </div>
  );
}

export default ExploreDrinks;
