import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


function Loop() {
  const code  = "\
    <?php \n\
    \n\
    add_filter( 'rwmb_meta_boxes', 'register_meta_boxes' );\n\
    \n\
    function register_meta_boxes( $meta_boxes ){\n\
      \n\
	    $prefix = '';\n\
      \n\
      $meta_boxes[] = array(\n\
        'id'         => 'id_do_cpt',\n\
        'title'      => __( 'Configuração home', 'prefixo_do_projeto' ),\n\
        'post_types' => array( 'cpts' ),\n\
        'context'    => 'normal',\n\
        'priority'   => 'high',\n\
        'autosave'   => true,\n\
        \n\
        'fields'     => array(\n\
          array(\n\
            'id'   => 'cpt_fieldId',\n\
            'type' => 'checkbox',\n\
            'std'  => 0,\n\
          ),\n\
          array(\n\
            'name'             => __( 'Imagem:', 'prefixo_do_projeto' ),\n\
            'id'               => 'cpt_fieldId',\n\
            'type'             => 'image_advanced',\n\
            'max_file_uploads' => 1,\n\
          ),\n\
        ),\n\
      );\n\
      \n\
      return $meta_boxes;\n\
    }";

  return (
    <div className="pt-4">      
      <div className="container px-5 mb-5">
        <h1 className="pb-3 border-bottom">Meta Box</h1>

        <p className="w-75 text-secundary mt-5" >
          Para adicionar Meta Boxes aos CPT's, primeiramente é necessário 
          instalar e ativar o plugin 
          <a 
            href="https://metabox.io/" 
            target="_blank" 
            rel="noopener noreferrer"
          > Meta Box</a>
          . Após isso, a adição dos meta boxes é por meio da adição de código no
          arquivo <span className="mark">functions.php</span>. Para essa adição 
          ficar mais organizada, o ideal é a criação de um arquivo só para 
          criação dos metas boxes: <span className="mark">metabox.php</span>. 
          Depois basta chamar referenciá-lo no 
          arquivo <span className="mark">functions.php</span> desta forma:  
        </p>

        <div className="w-75 my-4">
          <SyntaxHighlighter language="php" style={coldarkDark}> 
            require_once get_template_directory() . '/metabox.php';
          </SyntaxHighlighter>
        </div>

        <p className="w-75 text-secundary" >
          Dentro do arquivo <span className="mark">metabox.php</span> adicione
          um código semelhante ao localizado abaixo para cada CPT que você 
          quiser adicionar os campos do meta box. Para mais informações acesse: 
          <a 
            href="https://docs.metabox.io/" 
            target="_blank" 
            rel="noopener noreferrer"
          > Documentação Meta Box</a>.
        </p>

        <div className="w-75 my-4">
          <SyntaxHighlighter language="php" style={coldarkDark}> 
            {code}
          </SyntaxHighlighter>
        </div>

        <p className="w-75 text-secundary" >
          Para mais informações, acessar o link apresentado anteriormente.
        </p>


      </div>
    </div>
  )
}

export default Loop;