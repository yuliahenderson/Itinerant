import React from 'react';

const propTypes = {
  travelFrom: React.PropTypes.string,
  moneyToSpend: React.PropTypes.currency,
  dateTo: React.PropTypes.string,
  dateBack: React.PropTypes.string,
  handleSearch: React.PropTypes.func,
};

class FlightsSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localTravelFrom: this.props.travelFrom || '',
      localMoneyToSpend: this.props.moneyToSpend || '',
      localDateTo: this.props.dateTo || '',
      localDateBack: this.props.dateBack || '',
    };
    this.handleEditOfTravelFrom = this.handleEditOfTravelFrom.bind(this);
    this.handleEditOfMoneyToSpend = this.handleEditOfMoneyToSpend.bind(this);
    this.handleEditOfDateTo = this.handleEditOfDateTo.bind(this);
    this.handleEditOfDateBack = this.handleEditOfDateBack.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
componentWillReceiveProps(nextProps) {
  this.setState({
    localTravelFrom: nextProps.travelFrom || '',
    localMoneyToSpend: nextProps.moneyToSpend || '',
    localDateTo: nextProps.dateTo || '',
    localDateBack: nextProps.dateBack || '',
  });
 }
 handleEditOfTravelFrom(e) {
  const newTravelFrom = e.target.value;
  this.setState({
    localTravelFrom: newTravelFrom,
  });
 }
 handleEditOfMoneyToSpend(e) {
  const newMoneyToSpend = e.target.value;
  this.setState({
    localMoneyToSpend: newMoneyToSpend,
  });
 }
 handleEditOfDateTo(e) {
  const newDateTo = e.target.value;
  this.setState({
    localDateTo: newDateTo,
  });
 }
 handleEditOfDateBack(e) {
  const newDateBack = e.target.value;
  this.setState({
    localDateBack: newDateBack,
  });
 }
 handleSearch(e) {
  e.preventDefault();
 }
 render() {
  return(
    <div>
      <section id="input_fields">
        <input
          type="text"
          name="travelFrom"
          valu={this.state.travelFrom}
          onChange={this.handleEditOfTravelFrom}
          placeholder="WHERE ARE YOU TRAVELLING FROM?"
        />
        <input
          type="currency"
          name="moneyToSpend"
          value={this.state.moneyToSpend}
          onChange={this.handleEditOfMoneyToSpend}
          placeholder="HOW MUCH MONEY TO SPEND?"
        />
        <input className="dates"
          type="date"
          name="dateTo"
          value={this.state.localDateTo}
          onChange={this.handleEditOfDateTo}
        />
        <input className="dates"
          type="date"
          name="dateBack"
          value={this.state.localDateBack}
          onChange={this.handleEditOfDateBack}
        />
        <button className="search_button">SEARCH</button>
      </section>
    </div>
  );
 }
}
FlightsSearch.propTypes = propTypes;
export default FlightsSearch;
