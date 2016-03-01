"use strict()";

var recipesAPI = "./com/home/db/recipes.json";

function HomeCtrl($http, $state, $ionicLoading, $ionicPopup, BitlyService, DatabaseService, $ionicSlideBoxDelegate, $ionicScrollDelegate, $timeout) {
  console.log("HomeCtrl");

  var home = this;

  home.colors = ["button-positive", "button-royal", "button-balanced"];

  home.log = function (stuff) {
    console.log(stuff);
  }

  home.step = 0;

  home.nextStep = function () {
    ++home.step;
  }

  var adult = {

  }

  home.data = {
    children: [],
    adults: []
  }

  home.form = {
    child: {
      showER: false
    },
    adult: {

    }
  }

  home.formNormalize = function (form) {
    for(var property in home.form[form]) {
      if(home.form[form].hasOwnProperty(property)) {
        home.form[form][property] = false;
      }
    }
  }

  home.slideTo = function (index) {
    $ionicSlideBoxDelegate.slide(index, 999);
  }

  home.addChild = function () {
    home.data.children.push({
      name: {
        f: "",
        m: "",
        l: ""
      },
      isStudent: false,
      isHMR: false
    });
    home.formNormalize('child');
    $ionicSlideBoxDelegate.update();
    $ionicScrollDelegate.scrollTop();
    console.log(home.data.children.length - 1);
    $timeout(function () {
      $ionicSlideBoxDelegate.slide(home.data.children.length - 1, 999);
    }, 99);
  }

  home.addChild();

  home.filler = {

  }

  home.tutGo = true;

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

  // home.

  function zipToAddress(zip) {
    return $http({
        method: 'GET',
        url: 'https://api.zippopotam.us/us/' + zip
      })
      .success(function (response) {
        console.log(response);
      })
      .error(function (err) {
        console.log('No city found... : ' + err);
      });

    // 'api.zippopotam.us/us/' + zip
  }

  zipToAddress(98002);

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
