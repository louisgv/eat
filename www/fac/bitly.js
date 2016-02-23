/*
Usage:
BitlyBuilder.buildBitlyUrl(encodedLink).success(function(data){
       $scope.shortURL=data.url;
        console.log( $scope.shortURL);
})
*/

function BitlySrvc($http) {
  var access_token = "d1aedb05ecc6574e495f50a88a81a79cd45040aa";

  return {
    shortIt: function (link) {
      return $http({
          method: 'GET',
          url: 'https://api-ssl.bitly.com/v3/shorten',
          params: {
            access_token: access_token,
            longUrl: link
          }
        })
        /* will get data in controller */
        /* .success(function (data, status, headers, config) {
             return data.data.url;})*/
        .error(function (data, status, headers, config) {
          console.log('bit.ly failed us');
        });
    }
  }
}
