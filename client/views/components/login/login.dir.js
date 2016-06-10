  angular
    .module('savor.toolbar', [])// we need to sort this out
    .directive('toolbar', toolbar);
  
    function toolbar() {
    return {
      templateUrl: '/views/components/toolbar/toolbar.tpl.html',
      controller: toolbarController,
      controllerAs: 'toolbar'
    };
  }
  