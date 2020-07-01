$(window).on('load', () => {
  
  $('#project-button').click(() => {
    $('.right-content-project-view').css('display', 'block');
    $('.right-content-customer-view').css('display', 'none');
  });

  $('#customer-button').click(() => {
    $('.right-content-project-view').css('display', 'none');
    $('.right-content-customer-view').css('display', 'block');
  });
});