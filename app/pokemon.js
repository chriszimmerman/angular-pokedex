var pokemonApp = angular.module('pokedex', []);

pokemonApp.controller('PokemonController', function($scope, $http){
    $scope.pokemon = [];

    $http.get('app/pkmn.json')
        .success(function(results){
            $scope.pokemon = results;
        })
		.error(function(){
			alert('ruh roh');	
		});

});
