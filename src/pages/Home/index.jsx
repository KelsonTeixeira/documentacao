import React from 'react';

// import { Container } from './styles';

function Home() {
  return (
    <div className="pt-4">
      <div className="container px-5 mb-5">
        <h1 className="pb-3 border-bottom">Home</h1>

        <p className="w-75 text-secundary mt-5 text-justify" >
          Esse app foi crido na intenção de fazer uma wiki pessoal, onde eu 
          posso documentar aquilo que aprendi. Desta forma, posso consultar 
          as informações aqui colocadas a qualquer momento e em qualquer lugar,
          desde que haja internet.
        </p>
        <p className="w-75 text-secundary text-justify" >
          Aqui você não encontrará uma linguagem o formal ou termos técnicos. 
          As explicações aqui apresentadas. Foram escritas de uma forma que eu 
          pudesse compreemder e relembrar facilmente.
        </p>

        <p className="w-75 text-secundary text-justify" >
          <strong>
            Caso tenha curiosidade, esse app foi desenvolvido em React JS.
          </strong>
        </p>
        
      </div>
    </div>
  );
}

export default Home;