function DtgeTreeDeleteController($scope, $http, treeService, navigationService) {

    $scope.performDelete = function () {

        //mark it for deletion (used in the UI)
        $scope.currentNode.loading = true;

        $http.post("/umbraco/backoffice/DtgeTree/Manifest/DeleteManifest", { alias: $scope.currentNode.id }).then(function (data) {
            $scope.currentNode.loading = false;
            
            treeService.removeNode($scope.currentNode);
            navigationService.hideMenu();
        }, function (err) {
        
        });

    };

    $scope.cancel = function () {
        navigationService.hideDialog();
    };
}

angular.module("umbraco").controller("DtgeTree.DeleteController", DtgeTreeDeleteController);
