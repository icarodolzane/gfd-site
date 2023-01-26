import React from 'react';
import Header from '../components/Header';
import '../style/NotFound.css';

class NotFound extends React.Component {
  render() {
    return (
      <>
        <Header />
        <h1>Page Not Found</h1>
        <div className="not-found-container">
          <p>
            { `A página que você está procurando
              não existe!` }
          </p>
        </div>
      </>
    );
  }
}

export default NotFound;