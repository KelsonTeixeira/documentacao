import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


function Loop() {
  const code  = '\
  <?php if( have_posts() ): while( have_posts() ): the_post(); ?> \n \
    [Add Here the block of extract post] \n \
  <?php endwhile; endif; ?>'

  return <div className="container px-5 mb-5">
    <h3 className="">Wordpress Loop</h3>

    <div className="w-75 my-4">
      <SyntaxHighlighter language="php" style={coldarkDark}> 
        {code}
      </SyntaxHighlighter>
    </div>

      
    <p className="w-75 text-secundary" >
      Este código serve pegar todos os posts disponíveis, onde está escrito
      "[Add Here the block of extract post]" deve ser adicionado o código 
      para montar o bloco a ser apresentedo em tela.
    </p>
  </div>;
}

export default Loop;