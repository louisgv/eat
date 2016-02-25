"use strict()";

var recipesAPI = "./com/home/db/recipes.json";

function HomeCtrl($http, $state, $ionicLoading, $ionicPopup, BitlyService, DatabaseService) {
  console.log("HomeCtrl");

  var home = this;

  home.colors = ["button-positive", "button-royal", "button-balanced"];

  home.races = {
    "American or Alaskan Native": "toggle-calm",
    "Asian": "toggle-balanced",
    "African American": "toggle-energized",
    "Native Hawaiian or Other Pacific Islander": "toggle-assertive",
    "White": "toggle-positive"
  }

  function generateUUID() {
    var d = new Date()
      .getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return(c == 'x' ? r : (r & 0x3 | 0x8))
        .toString(16);
    });
    return uuid;
  };

  var childForm = {
    firstName: "",
    middleInitial: "",
    lastName: "",
    student: false,
    fosterChild: false,
    hmr: false
  }

  home.chooseRecipe = function (index) {
    // home.recipe = angular.copy(DatabaseService.recipes[index]);

    $state.go('recipe', {
      index: index
    });

    // home.recipe.steps = home.recipe.steps.reverse();
  }

  home.constructChildList = function (childCount) {
    console.log(childCount);
    if(!childCount) return;
    home.childList = [];
    for(var i = 0; i < home.childCount; i++) {
      home.childList.push(childForm);
    }
  }

  // home.



  // BitlyService.shortify(encodeURI('https://github.com/louisgv/hoc'))
  //   .success(function (response) {
  //
  //     console.log('bit.ly/' + response.data.hash);
  //
  //   })


  // if(!DatabaseService.recipes) {
  //   fetchRecipe();
  // } else {
  //   console.log(DatabaseService.recipes);
  //   home.recipes = DatabaseService.recipes;
  // }
  //
  // if(DatabaseService.user) {
  //   home.user = DatabaseService.user;
  // }
  //
  // if(!DatabaseService.userName) {
  //   var promptPopup = $ionicPopup.prompt({
  //     title: 'Provide Your User Name'
  //   });
  //
  //   promptPopup.then(function (res) {
  //     if(res) {
  //       console.log(res);
  //       DatabaseService.userName = res;
  //       home.user = DatabaseService.user = DatabaseService.newUser(res);
  //     } else {
  //       console.log('Please enter input');
  //     }
  //   });
  // }

}
