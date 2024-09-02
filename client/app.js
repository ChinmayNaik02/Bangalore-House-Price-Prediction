function getBathValue() {
    var uiBathrooms = document.getElementsByName("uiBathrooms");
    for (var i = 0; i < uiBathrooms.length; i++) {
        if (uiBathrooms[i].checked) {
            return parseInt(uiBathrooms[i].value);
        }
    }
    return -1; // Invalid Value
}

function getBalconyValue() {
  var uiBalcony = document.getElementsByName("uiBalcony");
  for(var i = 0; i < uiBalcony.length; i++) {
    if(uiBalcony[i].checked) {
        return parseInt(uiBalcony[i].value);
    }
  }
  return -1;
}

function getBHKValue() {
    var uiBHK = document.getElementsByName("uiBHK");
    for (var i = 0; i < uiBHK.length; i++) {
        if (uiBHK[i].checked) {
            return parseInt(uiBHK[i].value);
        }
    }
    return -1;
}

function onClickedEstimatePrice() {
  console.log("Estimate price button clicked");
  var sqft = document.getElementById("uiSqft");
  var bhk = getBHKValue();
  var bathrooms = getBathValue();
  var location = document.getElementById("uiLocations");
  var estPrice = document.getElementById("uiEstimatedPrice");
  var area_type = document.getElementById("uiAreaType");
  var balcony = getBalconyValue();

  console.log(`area_type: ${area_type}, location: ${location}, sqft: ${sqft}, bhk: ${bhk}, bathrooms: ${bathrooms}, balcony: ${balcony}`);  // Log the data being sent

  var url = "http://127.0.0.1:5000/predict_home_price";
  // var url = "/api/predict_home_price"

  $.post(url, {
      area_type : area_type.value,
      total_sqft: parseFloat(sqft.value),
      bhk: bhk,
      bathrooms: bathrooms,
      location: location.value,
      balcony: balcony
  },function(data, status) {
      if(status === "success") {
          console.log(data.estimated_price);
          estPrice.innerHTML = "<h2>" + data.estimated_price.toFixed(2).toString() + " Lakh</h2>";
      }
      else {
          console.log(`Request failed with status: ${status}`);
      }
  }).fail(function(xhr, status, error) {
      console.log(`Request failed: ${status}, ${error}`);
  });
}

function onPageLoad() {
    console.log("document loaded");
    var url = "http://127.0.0.1:5000/get_artifacts";
    // var url = "/api/get_artifacts";

    $.get(url, function(data, status) {
        console.log("got response for get_locations request");
        if (data) {
            var locations = data.locations;
            var area_types = data.area_types;
            console.log(area_types)
            var uiLocations = document.getElementById("uiLocations");
            var uiAreaType = document.getElementById("uiAreaType");

            $('#uiLocations').empty();
            for (var i in locations) {
                var opt = new Option(locations[i]);
                $('#uiLocations').append(opt);
            }

            $('#uiAreaType').empty();
            for (var j in area_types) {
                var opt1 = new Option(area_types[j], area_types[j], false, false);
                opt1.textContent = area_types[j];
                console.log(opt1);
                $('#uiAreaType').append(opt1);
            }
        }
    });
}

window.onload = onPageLoad;