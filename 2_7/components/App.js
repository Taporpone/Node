var contacts = [
  {
    id:1,
    firstName: 'Jan',
    lastName: 'Nowak',
    email: 'jan.nowak@ex.ex',
  },
  {
    id:2,
    firstName: 'Adam',
    lastName: 'Malysz',
    email: 'adam@maly.pl',
  },
  {
    id:3,
    firstName: 'Ilona',
    lastName: 'Boguwinna',
    email: 'notfound@wp.pl',
  },
];

var contactForm = {
  firstName: '',
  lastName: '',
  email: '',
};


var App = React.createClass({
  render: function(){
    return (
      React.createElement('div',{className:'app'},
        React.createElement(ContactForm,{contact: contactForm}),
        React.createElement(Contacts,{items: contacts}, {})
      )
    );
  }
})
