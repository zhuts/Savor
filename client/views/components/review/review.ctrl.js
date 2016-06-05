angular
  .module('savor.review',['ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'ngDialog'])
  .controller('reviewController', function($scope, $http, ngDialog) {
      
    // $scope.restaurant = {
    //   name: '',
    //   address: '',
    // }
    
    // $scope.price = '';
    // $scope.priceCategories = [{rating:1, text: "Expensive"}, {rating: 2, text: "Affordable"}, {rating: 3, text: "Cheap!" }];
    
    // $scope.service = '';
    // $scope.serviceCategories = [{rating:1, text: "It was OK"}, {rating: 2, text: "Good!"}, {rating: 3, text: "Phenomenal!" }];
    
    // $scope.food = '';
    // $scope.foodCategories = [{rating:1, text: "Decent"}, {rating: 2, text: "Yummy!"}, {rating: 3, text: "Transcendental" }];
    
    // $scope.ambience = '';
    // $scope.ambienceCategories = [{rating:1, text: "Not a priority"}, {rating: 2, text: "Welcoming"}, {rating: 3, text: "Something special" }];
    var f;
    $scope.add = function(){
      f = document.getElementById('file').files[0];
      // var r = new FileReader();
      // var data;
      
      // r.onloadend = function(e){
      //   data = e.target.result;
      //   //send you binary data via $http or $resource or do anything else with it
      // }
      
      // r.readAsBinaryString(f);
      console.log(f);
    }   
    $scope.sendPost = function () {
        //useremail file is parsed into the windowlocal storage 
        var data = ({
            restaurantName: $scope.restaurant.name,
            restaurantAddress: $scope.restaurant.address,
            priceRating: $scope.price,
            serviceRating: $scope.service,
            foodRating: $scope.food,
            ambienceRating: $scope.ambience,
            restaurantReview: $scope.restaurant.review,
            userEmail: JSON.parse(window.localStorage.profile).email,
            restaurantPhoto: "http://localhost:3000/upload/"+ f.name.toString()
        });

        console.log("data", data);
        //console.log("user", JSON.parse(window.localStorage.profile).email);
    
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }
        
        $http({
          method: "POST",
          data: data,
          url: '/api/restaurants'
        })
        // $("#start").append('<div id="container"><div id="content"><div class="row"><div class="col-md-4"><img id="restphoto" src="{{'data.image'}}" alt=""></div><div class="col-md-8"><h1>{{'data.restaurantName'}}</h1><div class="restinfo"><p>{{'data.restaurantAddress'}}</p><p>{{'data.restaurantReview'}}</p></div><h3>Ratings</h3><div class ="ratinginfo"><ul><li>Food: {{'data.foodRating'}}</li><li>Service: {{'data.serviceRating'}}</li><li>Ambience: {{'data.ambienceRating'}}</li><li>Price per: {{'$' '+ data.priceRating'}}</li></ul></div></div></div></div></div>')
        ngDialog.close();
        //doesn't do anything
        // window.refresh();
      };
  });
  
