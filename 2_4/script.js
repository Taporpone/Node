var movies = [{
  id: 1,
  title: 'Harry Potter',
  desc: 'Film o czarodzieju',
  img_src: 'http://www.linternaute.com/cinema/image_cache/objdbfilm/image/640/18002.jpg'
},
{
  id:2,
  title: 'Krol Lew',
  desc: 'Film dla dzieci i opoznionych doroslych',
  img_src: 'https://s-media-cache-ak0.pinimg.com/originals/0d/d4/82/0dd482016db8fe93829d37912d568a36.jpg'
},
{
  id:3,
  title: 'Thin red line',
  desc: 'Spotkanie filmu z poezja, nudny na trzezwo, smutny po 3 piwach',
  img_src: 'https://s-media-cache-ak0.pinimg.com/originals/5b/d8/2a/5bd82a62dbfa6807ff95cf10909e4f5d.jpg'
},
{
  id:4,
  title: 'Manchester by the sea',
  desc: 'Film zagadka. Nie wiesz, czy dialogi zostaly napisane przez niedorozwinietego emocjonalnie studenta, czy moze aktorzy sa autystyczni',
  img_src: 'http://www.awardsdaily.com/wp-content/uploads/2016/09/manchester.jpg'
}
];

var Movie = React.createClass({
  propTypes:{
    item:React.PropTypes.object.isRequired,
  },
  render: function(){
        return React.createElement('li',{},
        React.createElement('h2', {}, this.props.item.title),
        React.createElement('p', {}, this.props.item.desc),
        React.createElement('img',{src:this.props.item.img_src,height:100,width:100})
      );
  },
});

var Movies = React.createClass({
  propTypes:{
    items: React.PropTypes.array.isRequired,
  },
  render: function(){
    var movies = this.props.items.map(function(movie){
      return React.createElement(Movie,{item:movie,key:movie.id});
    });
    return React.createElement('ul',{},movies);
  },
});

ReactDOM.render(React.createElement(Movies, {items:movies}), document.getElementById('app'));
