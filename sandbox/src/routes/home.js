import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='HomePage'>


      <div className='container site-body'>
        <div className='card text-center'>
          <h3 className='card-header'>PROJETOS</h3>
          <div className='card-body'>
            <h4 className='card-title'>SciShare</h4>
            <p className='card-text'>A rede social para o progresso da ciência.</p>
            <a href='https://scishare.lfmpaes.com.br/' className='btn btn-primary'>
              Visitar
            </a>
          </div>
        </div>

        <div className='card text-center'>
          <div className='card-body'>
            <h4 className='card-title'>Twitter</h4>
            <p className='card-text'>
              Me siga no Twitter para ver minhas atualizações.
            </p>
            <a href='https://twitter.com/Lfmpaes' className='btn btn-primary'>
              @Lfmpaes
            </a>
          </div>
        </div>

        {/* <p className="align-middle oldvisit-link">
          VISITE: <a href="https://scishare.lfmpaes.com.br/">SciShare</a>
        </p> */}
      </div>

      <div className='fixed-bottom'>
        <div className='card text-white bg-dark mb-3 footer-card'>
          <div className='card-body'>
            <p className='card-text'>Created by: @Lfmpaes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
