$(function() {
  if(window.location.href.indexOf("tag_filter") > -1) {
    console.log('window contains tag');

    $('option.product-tags').each(function(){
    id =  $(this).attr('id');
    url = window.location.href;
    idNoPlus = id.replace('+', '');
    console.log(idNoPlus);
    if(url.indexOf(id) > -1 || url.indexOf(idNoPlus) > -1 ){
      value = url;
    }
    else{
    value = url+id;


    // idText= id.text();
    // if(url.indexOf(idText) > -1){
    // value = value.split(idText);
    // $(this).attr('value', value);
    // }
    // else{
    // }
  }
  $(this).attr('value', value);
});

    // .attr('value', +{{ tag | remove: "$" | remove: " " }});

}

});
