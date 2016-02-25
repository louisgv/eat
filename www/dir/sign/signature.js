'use strict';

// app.directive('signPad', signPad);

function signPad($ionicModal) {
  var canvas = null,
    ratio = 1.0;

  return {
    scope: {
      signature: '=ngModel',
      signer: '=',
      signTemplate: '='
    },
    link: function ($scope, $element, $attrs, $controller) {
      $scope.signer = $attrs.signer;
      $scope.signature = null;
      $scope.signaturePadModel = {};
      // console.log($attrs.signTemplate);
      $ionicModal.fromTemplateUrl($attrs.signTemplate, {
          animation: 'slide-in-up',
          scope: $scope,
        })
        .then(function (modal) {
          $scope.signatureModal = modal;
        });

      $scope.$on('$destroy', function () {
        $scope.signatureModal.remove();
      });

      $scope.openSignatureModal = function () {
        $scope.signatureModal.show();
        canvas = angular.element($scope.signatureModal.modalEl)
          .find('canvas')[0];
        if(!$scope.signature) {
          canvas.height = 150;
        }
        $scope.signaturePad = new SignaturePad(canvas, {
          backgroundColor: '#FFF',
          minWidth: 1,
          maxWidth: 1.5,
          dotSize: 3,
          penColor: 'rgb(66, 133, 244)',
          onEnd: function () {
            $scope.signature = $scope.signaturePad.toDataURL();
          }
        });

        if($scope.signature) {
          $scope.signaturePad.fromDataURL($scope.signature);
        }
        $scope.resizeCanvas();
      };

      $scope.resizeCanvas = function () {
        canvas.width = canvas.offsetWidth * ratio;
        canvas.height = canvas.offsetHeight * ratio;
        canvas.getContext('2d')
          .scale(ratio, ratio);
      };

      $scope.clear = function () {
        $scope.signaturePadModel.signatureConfirm = false;
        $scope.signaturePad.clear();
        $scope.signature = null;
      };

      $scope.save = function () {
        $scope.signaturePadModel = {};
        $scope.signatureModal.hide();
      };
    },
    require: 'ngModel',
    replace: true,
    restrict: 'A',
    templateUrl: 'dir/sign/button.html'
  };
}
