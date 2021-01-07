var boolflix = new Vue ({
  el : '#root',
  data : {
    films:[],
    searchInput: ' ',
    points: ''
  },
  methods:{
    searchMovies: function() {
      var self = this
      axios
      .get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: '5cb0b53521cc9c3b16476bcbe94fe787',
          query: self.searchInput,
          language: 'it-IT'
        }
      })
      .then(function (response) {
        self.films = response.data.results;
        // var completeRate=parseInt(self.films.vote_average/2);
        // var rateRound = parseInt(Math.round(completeRate);
        // self.points = rateRound
      })
    }

  }
});
