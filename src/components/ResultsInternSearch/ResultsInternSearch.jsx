import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  BoxInternSearch,
  ItemInternSearch,
  NamesInternSearch,
} from './ResultsInternSearch.styled';

function ResultsInternSearch({ resultsInternSearch }) {
  return (
    <BoxInternSearch>
      {resultsInternSearch.map((results) => (
        <ItemInternSearch key={results.id}>
          <NamesInternSearch>
            <div>
              <Link to={`/personagem/${results.id}`}>
                <p>{results.name}</p>
              </Link>
            </div>
          </NamesInternSearch>
        </ItemInternSearch>
      ))}
    </BoxInternSearch>
  );
}

ResultsInternSearch.defaultProps = {
  resultsInternSearch: [],
};

ResultsInternSearch.propTypes = {
  resultsInternSearch: PropTypes.array,
};

export default ResultsInternSearch;
