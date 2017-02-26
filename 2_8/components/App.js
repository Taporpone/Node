var GIPHY_PUB_KEY = 'dc6zaTOxFJmzC';
var GIPHY_API_URL = 'http://api.giphy.com'

App = React.createClass({
  getInitialState(){
    return {
      loading:false,
      searchTerm: '',
      gif: {}
    };
  },
  handleSearch: function(searchTerm){
    this.setState({
      loading: true
    });
    this.getGif(searchTerm, function(gif){
      this.setState({
        loading: false,
        gif:gif,
        searchTerm: searchTerm
      });
    }.bind(this));
  },
  getGif: function(searchTerm,callback){
    var url= GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchTerm;
    var xhr = new XMLHttpRequest();
    xhr.open('GET',url);
    xhr.onload = function(){
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText).data;
        var gif = {
          url: data.fixed_width_downsampled_url,
          sourceUrl: data.url
        };
        callback(gif);
      }
    };
    xhr.send();
  },
  render:function(){
    var styles = {
      margin: '0 auto',
      textAlign: 'center',
      width: '90%'
    };
    return (
      <div style={styles}>
      <h1> Wyszukiwarka gifów </h1>
      <p> Znajdz gifa na <a href='http://www.giphy.com'>giphy</a>! </p>
      <Search
      onSearch={this.handleSearch}
      />
      <Gif
      loading={this.state.loading}
      url={this.state.gif.url}
      sourceUrl={this.state.gif.sourceUrl}
      />
      </div>
    );
  }
});
