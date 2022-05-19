import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Table({ items, loading }) {
  return loading ? (
    <h1>Carregando...</h1>
  ) : (
    <section>
      {items.map((item) => (
        <div key={item.id}>
          <div>
            <Link to={`/personagem/${item.id}`}>
              <img
                src={`${item.thumbnail.path}/standard_fantastic.jpg`}
                alt={item.name}
              />
            </Link>
          </div>

          <div>
            <div>
              <Link to={`/personagem/${item.id}`}>
                <h2>{item.name}</h2>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

Table.defaultProps = {
  items: [],
};

Table.propTypes = {
  items: PropTypes.array,
  loading: PropTypes.bool.isRequired,
};

export default Table;
