import React from 'react';
import PropTypes from 'prop-types';
import { CharacterName } from './CharacterDetails.styled';

function CharacterDetails({ items, comics }) {
  return (
    <section>
      <CharacterName>
        {items.map((item) => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <p>{item.description}</p>

            <p>
              <strong>
                Quadrinhos:
                <br />
              </strong>
              <img src="/ic_quadrinhos.svg" alt="Quadrinhos" />{' '}
              <span>{item.comics.available}</span>
            </p>

            <p>
              <strong>
                Filmes:
                <br />
              </strong>
              <img src="/ic_trailer.svg" alt="Filmes" />{' '}
              <span>{item.series.available}</span>
            </p>

            <img src={`${item.thumbnail.path}/detail.jpg`} alt={item.name} />
          </div>
        ))}
      </CharacterName>

      <section>
        <h2>Todas as aparições:</h2>
        {comics.map((item) => (
          <div key={item.name}>
            <p>{item.name}</p>
          </div>
        ))}
      </section>
    </section>
  );
}

CharacterDetails.defaultProps = {
  items: [],
  comics: [],
};

CharacterDetails.propTypes = {
  items: PropTypes.array,
  comics: PropTypes.array,
};

export default CharacterDetails;
