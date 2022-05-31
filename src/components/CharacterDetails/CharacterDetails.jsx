import React from 'react';
import PropTypes from 'prop-types';
import LikeButton from '../LikeButton/LikeButton';
import {
  CharacterName,
  CharacterInfo,
  CharacterImage,
  CharacterNumbers,
  CharacterRecord,
  CharacterLikes,
} from './CharacterDetails.styled';

function CharacterDetails({ items, comics }) {
  return (
    <section>
      {items.map((item) => (
        <CharacterName key={item.id}>
          <CharacterInfo>
            <CharacterLikes>
              <LikeButton item={item} />
              <h1>{item.name}</h1>
            </CharacterLikes>

            <p>{item.description}</p>

            <CharacterNumbers>
              <div>
                <p>
                  <strong>
                    Quadrinhos:
                    <br />
                  </strong>
                  <img src="/ic_quadrinhos.svg" alt="Quadrinhos" />{' '}
                  <span>{item.comics.available}</span>
                </p>
              </div>
              <div>
                <p>
                  <strong>
                    Filmes:
                    <br />
                  </strong>
                  <img src="/ic_trailer.svg" alt="Filmes" />{' '}
                  <span>{item.series.available}</span>
                </p>
              </div>
            </CharacterNumbers>
          </CharacterInfo>

          <CharacterImage>
            <img src={`${item.thumbnail.path}/detail.jpg`} alt={item.name} />
          </CharacterImage>
        </CharacterName>
      ))}

      <CharacterRecord>
        <h2>Todas as aparições:</h2>
        {comics.map((item) => (
          <div key={item.name}>
            <p>{item.name}</p>
          </div>
        ))}
      </CharacterRecord>
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
