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

var moviesElements = movies.map(function(movie){
  return React.createElement('li',{key:movie.id},
    React.createElement('h2', {}, movie.title),
    React.createElement('p', {}, movie.desc),
    React.createElement('img',{src:movie.img_src,height:100,width:100})
  )
});

var element = React.createElement('div',{},
  React.createElement('h1',{}, 'Lista filmów'),
  React.createElement('ul',{}, moviesElements)
);


ReactDOM.render(element,document.getElementById('app'));
