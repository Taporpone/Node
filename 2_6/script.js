var Counter = React.createClass({

  getDefaultProps: function(){
    console.log('Server side, ustawia this.props dla instancji');
  },

  getInitialState: function(){
    console.log('Server side, ustawia this.state dla instancji');
    return {
      counter: 0
    };
  },

  componentWillMount: function(){
    console.log('Inicjalizacja przed render(), ustawienie state nie spowoduje ponownego rendera');
  },

  componentDidMount: function(){
    console.log('Inicjalizacja po render(), umozliwia manipulowanie DOM');
  },

  shouldComponentUpdate: function(nextState){
    console.log('Moze byc wykonana po pierwszej inicjalizacji, sprawdza czy rendering jest potrzebny, jezeli true, odpala componentWillUpdate')
    if (this.state.counter !== nextState.counter){
      return true;
    }
  },

  componentWillUpdate: function(nextProps,nextState){
    console.log('Przygotowanie do update, state nie powinien byc w niej zmieniany poniewaz sama w sobie nie powoduje update');
  },

  componentDidUpdate: function(prevProps,prevState){
    console.log('Mozna manipulowac w niej DOM');
  },

  componentWillUnmount: function(){
    console.log('Wykorzystywana do czyszczenia np. timerow');
  },

  increment: function(){
    this.setState({
      counter: this.state.counter + 1
    });
  },

  decrement: function(){
    this.setState({
      counter: this.state.counter - 1
    });
  },

  render: function(){
    return React.createElement('div',{},
      React.createElement('span',{}, 'Licznik ' + this.state.counter,
        React.createElement('button',{onClick:this.increment},'Add 1'),
        React.createElement('button',{onClick:this.decrement},'Sub 1')
        )
    );
  }
});

var Counter2 = React.createClass({
  getInitialState: function(){
    return {
      counter: 100
    }
  },
  increment: function(){
    this.setState({
      counter: this.state.counter + 10
    })
  },
  decrement: function(){
    this.setState({
      counter: this.state.counter - 2
    })
  },
  render: function(){
    return React.createElement('div',{},
      React.createElement('span',{}, 'Licznik ' + this.state.counter,
      React.createElement('button',{onClick:this.increment},'Add 1'),
      React.createElement('button',{onClick:this.decrement},'Sub 1')
        )
      )
  },
});

var App = React.createClass({
  render: function(){
    return React.createElement('div',{},
      React.createElement(Counter),
      React.createElement(Counter2)
    )
  }
})

var app = React.createElement(App);

ReactDOM.render(app,document.getElementById('app'));
