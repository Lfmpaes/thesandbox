import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header>
        <h1 className="sitetitle">The Sandbox</h1>
      </header> */}

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">The Sandbox</a>
      </nav>

      <div className="container site-body">

        <div class="card text-center">
          <h3 class="card-header">PROJETOS</h3>
          <div class="card-body">
            <h4 class="card-title">SciShare</h4>
            <p class="card-text">A rede social para o progresso da ciência.</p>
            <a href="https://scishare.lfmpaes.com.br/" class="btn btn-primary">Visitar</a>
          </div>
        </div>

        <div class="card text-center">
          <div class="card-body">
            <h4 class="card-title">Twitter</h4>
            <p class="card-text">Me siga no Twitter para ver minhas atualizações.</p>
            <a href="https://twitter.com/Lfmpaes" class="btn btn-primary">@Lfmpaes</a>
          </div>
        </div>

        {/* <p className="align-middle oldvisit-link">
          VISITE: <a href="https://scishare.lfmpaes.com.br/">SciShare</a>
        </p> */}
      </div>
      
      <div class="fixed-bottom">
        <div class="card text-white bg-dark mb-3 footer-card">
          <div class="card-body">
            <p class="card-text">Created by: @Lfmpaes</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
