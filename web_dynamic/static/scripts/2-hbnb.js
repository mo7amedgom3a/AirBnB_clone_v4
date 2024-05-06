$(document).ready(function () {
    const amenities = {};
    $('input[type="checkbox"]').on('change', function () {
        if (this.checked) {
            amenities[$(this).data('id')] = $(this).data('name');
        } else {
            delete amenities[$(this).data('id')];
        }
        if (Object.values(amenities).length > 0) {
            $('.amenities h4').text(Object.values(amenities).join(', '));
        } else {
            $('.amenities h4').html('&nbsp;');
        }
    });
    $.getJSON('http://127.0.0.1:5001/api/v1/status/', function (data) {
        if (data.status === 'OK') {
            $('DIV#api_status').addClass('available');
        } else {
            $('DIV#api_status').removeClass('available');
        }
    });
});