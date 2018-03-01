$(document).ready(function() {
  $.getJSON('https://api.apixu.com/v1/current.json?key=09ddb44669854a44aab144900170708&q=auto:ip', function(data) {
    console.log(JSON.stringify(data));
    var location = data.location.tz_id;
    var strToArr = location.split('/');
    var locationFinal = strToArr[1];
    var country = data.location.country;
    var tempC = data.current.temp_c;
    var tempF = data.current.temp_f;
    var weatherDet = data.current.condition.text;
    var weatherIcon = data.current.condition.icon;

    $('.loc').text(locationFinal + ', ' + country);
    $('.tempC').text(tempC + ' °C');
    $('.tempF').text(tempF + ' °F');
    $('#temp').click(function(){
      $('#temp div').toggle();
    });
    $('.weatherDet').text(weatherDet);
    $('img').attr('src', "http:" + weatherIcon);
  });
});
