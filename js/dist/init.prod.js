"use strict";!function(n){n(function(){n(".carousel").carousel({numVisible:9,padding:200}),n(".modal").modal(),n.scrollify({section:".scrollLink",sectionName:"section-name",interstitialSection:"",easing:"easeOutExpo",scrollSpeed:1800,offset:0,scrollbars:!1,standardScrollElements:"",setHeights:!0,overflowScroll:!0,updateHash:!0,touchScroll:!0,before:function(a,e){var t=e[a].attr("data-section-name");n(".pagination .active").removeClass("active"),n(".pagination").find('a[href="#'+t+'"]').addClass("active")},after:function(){},afterResize:function(){},afterRender:function(){var e='<ul class="pagination">',t="";n(".scrollLink").each(function(a){t="",a===n.scrollify.currentIndex()&&(t="active"),e+='<li><a class="'+t+'" href="#'+n(this).attr("data-section-name")+'"><span class="hover-text">'+n(this).attr("data-section-name").charAt(0).toUpperCase()+n(this).attr("data-section-name").slice(1)+"</span></a></li>"}),e+="</ul>",n(".menu").append(e),n(".pagination a").on("click",n.scrollify.move)}})})}(jQuery);