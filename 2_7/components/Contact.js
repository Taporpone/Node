var Contact = React.createClass({
  propTypes:{
    item: React.PropTypes.object.isRequired,
  },

  render: function(){
    return (
      <div className={'contactItem'}>
        <img className={'contactImage'} src={'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'} />
        <p className={'contactLabel'}>Imię: {this.props.item.firstName} </p>
        <p className={'contactLabel'}>Nazwisko: {this.ptops.item.lastName}</p>
        <a href={'mailto:' + this.props.item.email}>{this.props.items.email}</a>
      </div>
    )
  },
});
