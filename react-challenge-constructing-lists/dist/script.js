class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      countries: [
      {
        id: 0,
        name: 'Greece',
        continent: 'Europe' },

      {
        id: 1,
        name: 'Laos',
        continent: 'Asia' },

      {
        id: 2,
        name: 'Zambia',
        continent: 'Africa' },

      {
        id: 3,
        name: 'Laos',
        continent: 'Asia' }] };



  }

  renderCountries(countries) {
    return /*#__PURE__*/(
      React.createElement("div", null,
      countries.map(country => /*#__PURE__*/React.createElement("div", { key: country.id }, country.name))));


  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", { className: "title" }, "My Travel Bucket List"),
      this.renderCountries(this.state.countries)));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));