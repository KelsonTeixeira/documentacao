import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


function CustomPost() {

  const customPostCode = "\
    <?php \n \
    \n \
      add_action( 'init', 'create_post_type_cpts' );\n \
    \n \
      function create_post_type_cpts() {\n \
    \n\
    $labels = array(\n\
	    'name' => _x('Cpts', 'post type general name'),\n\
	    'singular_name' => _x('Cpt', 'post type singular name'),\n\
	    'add_new' => _x('Adicionar Novo', 'Cpt'),\n\
	    'add_new_item' => __('Adicionar Novo Cpt'),\n\
	    'edit_item' => __('Editar Cpt'),\n\
	    'new_item' => __('Novo Cpts'),\n\
	    'all_items' => __('Todos os Cpts'),\n\
	    'view_item' => __('Ver Cpt'),\n\
	    'search_items' => __('Pesquisar Cpts'),\n\
	    'not_found' =>  __('Nenhum Cpt Encontrado'),\n\
	    'not_found_in_trash' => __('Nenhum Cpt na Lixeira'),\n\
	    'parent_item_colon' => '',\n\
	    'menu_name' => 'Cpts'\n\
    );\n\
    \n\
    register_post_type( 'cpts', array(\n\
	    'labels' => $labels,\n\
	    'public' => true,\n\
	    'publicly_queryable' => true,\n\
	    'show_ui' => true,\n\
	    'show_in_menu' => true,\n\
	    'has_archive' => 'cpts',\n\
	    'rewrite' => array(\n\
		 'slug' => 'cpts',\n\
		 'with_front' => false,\n\
	    ),\n\
	    'capability_type' => 'post',\n\
	    'has_archive' => true,\n\
	    'hierarchical' => false,\n\
	    'menu_position' => null,\n\
	    'supports' => array('title','editor','revisions','thumbnail')\n\
	    )\n\
    );\n\
    \n\
  }"

  return (
    <div className="pt-4">      
      <div className="container px-5 mb-5">
        <h1 className="pb-3 border-bottom">Create a Custom Post Type</h1>

        <p className="w-75 text-secundary mt-5" >
          Para criar um custom post type, basta definir isso no
          arquivo <span className="mark">functions.php</span>, 
          referência: 
          <a 
            href="https://www.hostinger.com.br/tutoriais/como-criar-custom-post-types-wordpress/" 
            target="_blank" 
            rel="noopener noreferrer"
          > Hostinger CPT</a>
        </p>
        <p className="w-75 text-secundary" >
          Porém, para ficar mais organizado, o ideal é criar um arquivo só para 
          criar CPT's, <span className="mark">custom-post-type.php</span> e 
          chamá-lo no arquivo <span className="mark">functions.php</span>, 
          assim: 
        </p>

        <div className="w-75 my-4">
          <SyntaxHighlighter language="php" style={coldarkDark}> 
            require_once get_template_directory() . 
            '/custom-post-type.php';
          </SyntaxHighlighter>
        </div>

        <p className="w-75 text-secundary" >
          Dentro do arquivo <span className="mark">custom-post-type.php</span>, 
          adicione o seguinte código para cada CPT que quiser criar:
        </p>

        <div className="w-75 my-4">
          <SyntaxHighlighter language="php" style={coldarkDark}> 
            {customPostCode}
          </SyntaxHighlighter>
        </div>    

        <p className="w-75 text-secundary" >
          No código acima, substitua a 
          palavra <span className="mark">ctp</span> pelo nome do custom post. 
          Para entender melhor o código, acesse o link de referência da 
          hostinger.
        </p>  
      </div>
    </div>
  )
}

export default CustomPost;