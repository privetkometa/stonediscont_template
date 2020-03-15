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

  $('.similar-carusel').owlCarousel({
    items: 4,
    margin: 30,
    nav: true,
    loop: true,
  })
  $('.similar-complex-carusel').owlCarousel({
    items: 3,
    margin: 30,
    nav: true,
    loop: true,
  })

  $('.examples-carusel').owlCarousel({
    items: 4,
    margin: 30,
    nav: true,
    loop: true,
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

});
