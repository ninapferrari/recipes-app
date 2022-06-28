import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import DoneRecipesProvider from '../../context/doneRecipesProvider';
import MainProvider from '../../context/MainProvider';
import ExplorerProvider from '../../context/exploreProvider';
import FavoriteRecipesProvider from '../../context/favoriteRecipesProvider';

const renderWithRouter = (component, route = '/') => {
  const history = createMemoryHistory({ initialEntries: [route] });
  return ({
    ...render(
      <DoneRecipesProvider>
        <ExplorerProvider>
          <FavoriteRecipesProvider>
            <MainProvider>
              <Router
                history={ history }
              >
                { component }
              </Router>
            </MainProvider>
          </FavoriteRecipesProvider>
        </ExplorerProvider>
      </DoneRecipesProvider>,
    ),
    history,
  });
};

export default renderWithRouter;
