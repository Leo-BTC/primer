<?php
/**
 * Template part for displaying the post content inside The Loop.
 *
 * @package Primer
 * @since   1.0.0
 */

?>

<div class="entry-content">

<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title><?php the_title(); ?></title>
<link rel="shortcut icon" href="//resource.jinse.com/favicon.ico?v=272">
<link rel="stylesheet" type="text/css" href="<?php bloginfo("template_url"); ?>/css/master.css">
<link rel="stylesheet" type="text/css" href="<?php bloginfo("template_url"); ?>/css/headr.css">
<link rel="stylesheet" type="text/css" href="<?php bloginfo("template_url"); ?>/css/toastr.min.css">
<link rel="stylesheet" type="text/css" href="<?php bloginfo("template_url"); ?>/css/index.css">
<link rel="stylesheet" type="text/css" href="<?php bloginfo("template_url"); ?>/css/fix.css">
<link rel="stylesheet" type="text/css" href="<?php bloginfo("template_url"); ?>/css/bku.css">
<link rel="stylesheet" type="text/css" href="<?php bloginfo("template_url"); ?>/css/common.css">
<meta property="og:type" content="article"/>
<style>
</style>
</head>
<body>

<div class="wrap marginb clearfix">
<div class="wrapleft marginb left">
<div class="article bgc padding marginb">
<h1 class="fontw font24"><?php the_title(); ?></h1>
<div class="time gray5 font12" data-topic-id="131890">
<ul class="left">
<span class="left"><?php the_time('Y年n月j日') ?></span>
<span class="left namez">
<a class="blue" href="/member/23051" target="_blank"><?php the_author_login(); ?></a>
<span class="fucenga">
<svg width="13px" height="13px" viewBox="0 0 13 13" version="1.1" xmlns="http://www.w3.org/2000/svg">
<title>lv</title>
<desc>Created with Sketch.</desc>
<defs></defs>
<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<g id="lv">
<g id="geren-copy">
<path d="M0,6.5021344 C0,2.90945179 2.91026112,0 6.50059509,0 C10.0897547,0 13,2.90945179 13,6.5021344 C13,10.0906752 10.0897547,13 6.50059509,13 C2.91026112,13 0,10.0906752 0,6.5021344 Z" id="Fill-1" fill="#03B300"></path>
<path d="M7.24351846,9.42421269 L7.23856055,9.52286426 L5.91822016,9.52286426 L5.91330275,9.4315438 L2.6,3.90141152 L4.35797209,3.9 L6.5767173,7.74297944 L8.79544717,3.90002657 L10.487231,3.90138495 L7.24351846,9.42421269 Z" id="Combined-Shape" fill="#FFFFFF"></path>
</g>
</g>
</g>
</svg>
</span>
</span>
</ul>
<ol class="right">
<svg width="8px" height="11px" viewBox="0 0 8 11" version="1.1">
<path fill="#FA322B" d="M4.41578767,10.5203705 C5.18558945,9.65382726 4.79667918,9.27570397 4.35020132,8.84189025 C3.79385437,8.30115088 3.17307801,7.69788052 3.60112465,6.48850105 C1.89412431,7.87413828 2.54308605,9.50540486 2.93201627,10.2144575 C3.00450434,10.34636 3.06089502,10.4367658 3.09885452,10.4976015 C3.11152098,10.518064 3.1212951,10.5345641 3.14144177,10.5692401 C3.21851769,10.7017143 3.17249954,10.8711512 3.03789594,10.9473634 C2.97171118,10.9848977 2.89577224,10.9928422 2.82731349,10.9752184 L2.82731349,10.9757704 C2.53444891,10.8984544 2.26867263,10.8017994 2.02759094,10.688664 C1.06162853,10.2343681 0.49145819,9.51679924 0.211878432,8.72871547 C-0.0643103053,7.94975902 -0.0522023611,7.10371777 0.142841218,6.3793478 C0.206133646,6.14450171 0.288954354,5.92162167 0.386775359,5.71808052 C0.412108287,5.66461771 0.482282482,5.53612557 0.553613618,5.4133109 C0.609984358,5.31494089 0.668688922,5.21771426 0.710119226,5.15857396 C0.753823512,5.09602324 0.813106547,5.02040254 0.883859212,4.92944477 C1.25090736,4.46034401 1.96316153,3.54946528 1.81591139,2.71024488 C1.78944148,2.55900345 1.89240884,2.41572624 2.04544365,2.38954681 C2.14727403,2.37249469 2.2456735,2.41172441 2.30780897,2.4845064 C2.42057041,2.59764177 2.94470266,3.16394945 3.08217866,4.04015226 C3.27492831,3.66715445 3.41645359,3.25719399 3.51654857,2.84725321 C3.76911983,1.81525519 3.76108113,0.798081647 3.65691692,0.336945118 C3.62356523,0.187418746 3.71905241,0.0395483279 3.87037176,0.00658747322 C3.9537909,-0.0116080294 4.03665149,0.0088545135 4.09994392,0.0560681895 L4.09994392,0.0554964977 C5.92545048,1.41554571 7.29470509,3.48746656 7.77627004,5.46561062 C7.95579471,6.20364198 8.01272398,6.93142239 7.92529547,7.60690305 C7.83555307,8.29716878 7.59622676,8.93225662 7.18485594,9.47128091 C6.65326345,10.1689589 5.83800203,10.6999992 4.69195644,10.97236 C4.54119562,11.0076076 4.38989621,10.9155065 4.35423065,10.7671038 C4.33236855,10.676146 4.35824004,10.5857205 4.41578767,10.5203705 L4.41578767,10.5203705 L4.41578767,10.5203705 Z"></path>
</svg>
<span><?php echo number_format(getPostViews(get_the_ID())); ?>次</span>
</ol>
</div>
<div class="con line30 font18">
<p>
	
	<?php the_content(); ?></p>
</div>
<div class="time gray5 font12 margin-b10">

<script>window._bd_share_config = {
"common": {
"bdSnsKey": {},
"bdText": "",
"bdMini": "1",
"bdMiniList": false,
"bdPic": "",
"bdStyle": "1",
"bdSize": "24"
}, "share": {}
};
with (document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];</script>
</ul>
</div>
<div class="green source">
<p class="green">比特币实时价格 ￥<span>76759.31</span> (数据来源：)</p>
</div>
<div class="reading line30">
声明：本网站登载此文出于传递更多信息之目的，并不意味着赞同其观点或证实其描述。文章内容仅供参考，不构成投资建议。投资者据此操作，风险自担。</div>
</div>
<div class="article bgc marginb clearfix">
<section class="tigs">
<?php the_tags('', '', ''); ?>
</section>
</div>
<div class="xgnews">

</div>
</div>
<div class="wrapright right marginb">

<div id="right_g_g_777">
</div>
<div class="ranking marginb">
<div class="tit">
<ol class="font16 fontw left">新闻排行</ol>
</div>
<div class="con bgc padding line22 clearfix">
<?php 
function mostweek($where = '') {
    //获取最近七天的文章
    $where .= " AND post_date > '" . date('Y-m-d', strtotime('-7 days')) . "'";
    return $where;
  }
add_filter('posts_where', 'mostweek'); ?>
 
<?php query_posts("v_sortby=views&caller_get_posts=1&orderby=date&v_orderby=desc&showposts=10") ?>
  <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
<ul class="clearfix">
<li class="font16 center  red  left sz"><?php echo ++$clearfix ?></li>
<li class="left biaot">
<a href="<?php the_permalink() ?>" target="_blank" title="<?php the_title() ?>"><?php the_title() ?></a>
</li>
</ul>
  <?php endwhile; ?>
<?php endif; ?>

</div>
</div>

<div class="hotig">
<div class="tit">
<ol class="font16 fontw left">热门标签</ol>

</div>
<div class="con bgc padding clearfix">
<a href="/tag/汇市评论" target="_blank" title="汇市评论">汇市评论</a>
<a href="/tag/欧元英镑" target="_blank" title="欧元英镑">欧元英镑</a>
<a href="/tag/美联储" target="_blank" title="美联储">美联储</a>
<a href="/tag/瑞银集团" target="_blank" title="瑞银集团">瑞银集团</a>
<a href="/tag/高盛" target="_blank" title="高盛">高盛</a>
<a href="/tag/特朗普" target="_blank" title="特朗普">特朗普</a>
<a href="/tag/头条" target="_blank" title="头条">头条</a>
<a href="/tag/美国大选" target="_blank" title="美国大选">美国大选</a>
<a href="/tag/稳健的" target="_blank" title="稳健的">稳健的</a>
<a href="/tag/英国脱欧" target="_blank" title="英国脱欧">英国脱欧</a>
<a href="/tag/分析预测" target="_blank" title="分析预测">分析预测</a>
<a href="/tag/关键价位" target="_blank" title="关键价位">关键价位</a>
<a href="/tag/杜德利" target="_blank" title="杜德利">杜德利</a>
<a href="/tag/欧洲" target="_blank" title="欧洲">欧洲</a>
<a href="/tag/美元宏观" target="_blank" title="美元宏观">美元宏观</a>
<a href="/tag/耶伦" target="_blank" title="耶伦">耶伦</a>
<a href="/tag/韩国" target="_blank" title="韩国">韩国</a>
<a href="/tag/中国债市" target="_blank" title="中国债市">中国债市</a>
<a href="/tag/日元利率" target="_blank" title="日元利率">日元利率</a>
<a href="/tag/日本" target="_blank" title="日本">日本</a>
</div>
</div>
</div>
</div>

<script>
var CONFIG = {
'wwwDomain': '//www.jinse.com',
'staticDomain': '//resource.jinse.com'
}
</script>
<script src="<?php bloginfo("template"); ?>/js/c.js"></script>
<script type="text/javascript" src="<?php bloginfo("template"); ?>/js/almond.js"></script>
<script type="text/javascript" src="<?php bloginfo("template"); ?>/js/lodash.js"></script>
<script type="text/javascript" src="<?php bloginfo("template"); ?>/js/toast.js"></script>
<script type="text/javascript" src="<?php bloginfo("template"); ?>/js/toastr.min.js"></script>
<?php get_footer(); ?>	
