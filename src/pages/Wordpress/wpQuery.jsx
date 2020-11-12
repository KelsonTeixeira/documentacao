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

  return (
    <div className="pt-4">
      <div className="container px-5 mb-5">
        <h1 className="pb-3 border-bottom">Custom Post Loop</h1>

        <div className="w-75 my-4">
          <SyntaxHighlighter language="php" style={coldarkDark}> 
            {code}
          </SyntaxHighlighter>
        </div>

          
        <p className="w-75 text-secundary" >
          Esse código serve para fazer um loop pelos CPT's (Custom Post Type).
          <br/> <br/>
          <span className="mark">'post_type' => array( 'unidade' ), </span> 
          serve para selecionar o tipo de post.
          <br/> <br/>
          <span className="mark">'showposts' => -1,</span> esse argumento serve 
          para definir quantos post pegar, é uma versão obsoleta do argumento 
          <span className="mark"> posts_per_page </span>.
          <br/> <br/>
          <span className="mark">'nopaging'  => true</span> é usado para mostrar
          todos os posts. 
        </p>
      </div>
    </div>
  )
}

export default WPQuery;