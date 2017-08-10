

function getData(){
  var ans1 = document.querySelector('input[name="options"]:checked').value;
  console.log(ans1);


$.ajax({
	   	url: "https://data.sfgov.org/resource/gxxq-x39z.json?pddistrict=MISSION&dayofweek=FRIDAY&$order=date DESC&$where=date>'2017-01-01T12:00:00'&category=" + ans1,
	   	dataType: "json",
	   	success: function(data) {
 
      //ALWAYS console.log the data returned from our success function and see what we're working with here
       console.log(data);

      //create new instance of the map for to drop our markers
    	var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.7599, lng: -122.4148},
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
  	     for(var i = 0; i < data.length; i++) {
          var marker = new google.maps.Marker ({
            position:{
               lat: +(data[i].location.latitude),
               lng: +(data[i].location.longitude)

            },
         //   position:{lat: parseFloat(data[i].location.latitude) , lng: parseFloat(data[i].location.longitude)},
            map: map,

            title:data[i].descript + " " + data[i]. incidentnum + " " + data[i].address
          })
         }
	   }

  })
}


//BONUS: Once finished, think how this project can be improved:

//As a developer you should always be refactoring your code and projects
//as you grow you will notice things you can tweak to make your work even better!


//IDEAS:

//What if we wanted a different neighborhood? 
//A user-picked day of the week?
//Better styling?
//Conver to Angular?
//Convert to React?


