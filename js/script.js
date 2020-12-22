var boolflix = new Vue ({
  el : '#root',
  data : {
    films:[],
    searchInput: ' '
  },
  methods:  function() {
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
      console.log(self.films);
    })
  }
});
