$(function() {
  // calculate disconts at card
  $(document).on('msoptionsprice_product_action', function (e, action, form, r) {
      var pageId = document.getElementById('pageId').value;
      if (action == 'modification/get' && r.success && r.data) {
        if (r.data.rid == pageId) {
          var modification = r.data.modification || {};
          var discount = modification.options.discount || 0;
          if (discount) {
            var oldPrice = Math.round(modification.cost / ((100 - discount) / 100));
            var formattedPrice = oldPrice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
            document.getElementById('old_price').textContent = formattedPrice;
            var benefit = oldPrice - modification.cost;
            var formattedBenefit = benefit.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
            $("#discount").html(`<div class="product-card__discount">Скидка <span class="product-card__discount-value">${discount} %</span></div>`)
            $("#benefit").html(`<span class="product-card__benefit-title">Экономия</span><span id="benefit-value" class="product-card__benefit-value">${formattedBenefit} ₽</span>`);
          } else {
            document.getElementById('benefit').textContent = '';
            document.getElementById('discount').textContent = '';
            document.getElementById('old_price').textContent = '';
          }
        }
        
      }
  });

  // calculate discont in other cards
  var discountNode = document.getElementById('simple-discount');
  if (discountNode) {
    var discount = discountNode.value;
    if (discount) {
      var price = document.getElementById('price').value.split(' ').join('');
      var oldPrice = Math.round(price / ((100 - discount) / 100));
      var benefit = oldPrice - price;
      var formattedOldPrice = oldPrice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
      var formattedBenefit = benefit.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
      document.getElementById('old_price').textContent = formattedOldPrice;
      $("#discount").html(`<div class="product-card__discount">Скидка <span class="product-card__discount-value">${discount} %</span></div>`)
      $("#benefit").html(`<span class="product-card__benefit-title">Экономия</span><span id="benefit-value" class="product-card__benefit-value">${formattedBenefit} ₽</span>`);
    }
  }

  if(document.body.offsetWidth > 767) {
    $('#mobile-options').remove()
  } else {
    $('#options').remove()
  }



  $('.similar-carusel').owlCarousel({
    items: 4,
    margin: 30,
    nav: true,
    loop: true,
    responsive : {
      0 : {
        items: 2,
        margin: 10,
      },
      480 : {
        items: 2,
        margin: 10,
      },
      768 : {
        items: 3,
        margin: 20,
      },
      1200 : {
        items: 4,
        margin: 30,
      }
  }
  })
  $('.similar-complex-carusel').owlCarousel({
    items: 3,
    margin: 30,
    nav: true,
    loop: true,
  })

  $('.examples-carusel').owlCarousel({
    nav: true,
    loop: true,
    responsive : {
      0 : {
        items: 2,
        margin: 10,
      },
      480 : {
        items: 2,
        margin: 10,
      },
      768 : {
        items: 3,
        margin: 20,
      },
      1200 : {
        items: 4,
        margin: 30,
      }
  }
  })

  $('[data-fancybox="examplesCarusel"]').fancybox({
    loop: true,
  })

  $('.product-gallery-carusel').owlCarousel({
    items: 1,
    margin: 20,
    nav: true,
    loop: true,
    URLhashListener:true,
  })

  $('[data-fancybox="productGallery"]').fancybox({
    loop: true,
  })

  $('#navbarCatalogMenuButton').click(function(){
    $("#navbarMenu").removeClass("show")
  })

  $('#navbarMenuButton').click(function(){
    $("#navbarCatalogMenu").removeClass("show")
  })

  // function CopyToClipboard(containerid) {
  //   if (document.selection) { 
  //       var range = document.body.createTextRange();
  //       range.moveToElementText(document.getElementById(containerid));
  //       range.select().createTextRange();
  //       document.execCommand("Copy"); 
    
  //   } else if (window.getSelection) {
  //       var range = document.createRange();
  //        range.selectNode(document.getElementById(containerid));
  //        console.log('range', range)
  //        window.getSelection().addRange(range);
  //        document.execCommand("Copy");
  //   }}

  function CopyToClipboard(containerid) {
    var copyText = document.getElementById(containerid);
    copyText.select();
    document.execCommand("Copy");
  }



  $('.epitaph__price-button').click(function(){
    var epitaphId = $(this).attr('for');
    $(`#price-table_${epitaphId}`).addClass("open");
    var textLength = $(`#content_${epitaphId}`).text().replace(/\s/g, '').length

    $(`#price-table_${epitaphId} .epitaph__price--standart`).text(`${textLength*35} ₽`)
    $(`#price-table_${epitaphId} .epitaph__price--gold`).text(`${textLength*65} ₽`)
    $(`#price-table_${epitaphId} .epitaph__price--white`).text(`${textLength*90} ₽`)
    console.log(textLength)
  })

});
