<?php
/**
 * The sidebar containing the main widget area.
 *
 * @link https://developer.wordpress.org/themes/template-files-section/partial-and-miscellaneous-template-files/#sidebar-php
 *
 * @package Primer
 * @since   1.0.0
 */

if ( ! primer_layout_has_sidebar() || ! is_active_sidebar( 'sidebar-1' ) ) {

	return;

}

?>
 <div class="content">
    <div class="panel-pane pane-page-content"  >
  
      
  
  <div class="pane-content">
    <div class="main-section-list" id="forbes-section">
  <div class="main-section-tab">
              <div class="name2">
        <span class="mobile"><h1>Новое на forbes.ru</h1></span>
      </div>
        <ul class="list">
      <li class="active tid0" >Все категории</li><li class=" tid35777" >Бизнес</li><li class=" tid5" >Финансы и инвестиции</li><li class=" tid19480" >Миллиардеры</li><li class=" tid19481" >Компании</li><li class=" tid8" >Технологии</li><li class=" tid7" >Карьера и свой бизнес</li><li class=" tid57" >ForbesLife</li><li class=" tid423" >Forbes Woman</li>      <li class="mobile">выберите категорию</li>
    </ul>
  </div>

  <div class="center-col">
	  
    <div class="block-href-material block-href-material-0  active">
		<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
		<div class="item-material ">
  <div class="pic-material">
          <a href="/biznes/355471-vremya-innovaciy-kak-obuzdat-ceny-na-lekarstva">
        <?php if ( has_post_thumbnail() ) { ?>
			  <?php the_post_thumbnail(); ?>
			  <?php } else {?>
			  <?php if(emtx_auto_thumbnail($post->ID) ) {
			  echo emtx_auto_thumbnail($post->ID); 
			  } ?>	
			  <?php }?>
	  </a>
      </div>
  <div class="date-material">
    <div class="section"><?php the_tags('', ', ', ''); ?></div>    <div class="date"><?php the_time('Y年n月j日') ?></span></div>
  </div>
  <a class="href-material" href="<?php the_permalink(); ?>" rel="bookmark"><?php the_title(); ?></a>
      <div class="author-material">
      <a href="/person/7655-herper-metyu" ><?php the_author_login(); ?></a>, Forbes Contributor    </div>
  </div>
<?php endwhile;?>
<?php endif;?>
 <div class="load_more"  data-tid="423" data-pagenumber="1" data-forsection="0"><?php dmeng_paging_nav(); ?></div></div>
    <div class="block-bnr-in-text">
      <div class="bn">
        <div class="panel-display panel-1col clearfix" id="mini-panel-right_of_new_content">
  <div class="panel-panel panel-col">
    <div>

</div>
  </div>
</div>
      </div>
    </div>
  </div>
</div>



