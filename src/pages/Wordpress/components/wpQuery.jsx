import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


function WPQuery() {
  const code  = "\
    <?php \n \
      $args = array(\n \
        'post_type' => array( 'unidade' ),\n \
        'showposts' => -1,\n \
        'nopaging'  => true\n \
      );\n \
      $query = new WP_Query ( $args );\n \
    ?>\n \
    <?php if ( $query->have_posts() ):\
 while( $query->have_posts() ) :\
 $query->the_post() ; ?> \n\n \
        [Add Here the block of extract post] \n\n\
    <?php endwhile; endif; ?>"

  return <div className="container px-5 mb-5">
    <h3 className="">Custom Post Loop</h3>

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

export default WPQuery;