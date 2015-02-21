var pokemonApp = angular.module('pokedex', []);

pokemonApp.controller('PokemonController', function($scope, $http){
    $scope.pokemon = [];

    $http.get('data/pokemon.json')
        .success(function(results){
            $scope.pokemon = results;
						$scope.selectedPokemon = $scope.pokemon[0];
        })
		.error(function(){
			alert('ruh roh');	
		});

});
