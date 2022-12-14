import React, { useState } from 'react';
import PropTypes from 'prop-types';
import doneRecipesContext from './doneRecipesContext';

function DoneRecipesProvider({ children }) {
  const recipesDone = JSON.parse(localStorage.getItem('doneRecipes'));

  const [indexMessage, setIndexMessage] = useState();
  const [filtered, setFiltered] = useState(recipesDone);

  // Req 57 - Aplicado a funcionalidade de copiar o link da receita clicada
  function clipboard({ target }) {
    setIndexMessage(target.id); // Recebe index da receita clicada
    // https://blog.logrocket.com/implementing-copy-clipboard-react-clipboard-api/
    navigator.clipboard.writeText(target.value);
  }

  // Req 58 - Implentado a logica para filtrar pelo tipo da receita
  function filterRecipes(type, array) {
    console.log(array);
    setFiltered(array.filter((recipes) => {
      if (type === 'all') return true;
      return recipes.type === type;
    }));
  }

  const contextValue = {
    filtered,
    indexMessage,
    clipboard,
    filterRecipes,
  };

  return (
    <doneRecipesContext.Provider value={ contextValue }>
      { children }
    </doneRecipesContext.Provider>
  );
}

DoneRecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DoneRecipesProvider;
