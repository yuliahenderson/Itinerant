import React from 'react';
import FlightApi from './FlightApi.jsx'

const propTypes = {
  handleResultsView: React.PropTypes.func,
  travelFrom: React.PropTypes.string,
  moneyToSpend: React.PropTypes.number,
  dateTo: React.PropTypes.string,
  dateBack: React.PropTypes.string,
};

class FlightsSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localTravelFrom: this.props.travelFrom || '',
      localMoneyToSpend: this.props.moneyToSpend || '',
      localDateTo: this.props.dateTo || '',
      localDateBack: this.props.dateBack || '',
      linkToSearch: false,
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
  const newTravelFrom = e.target.value.toUpperCase();
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
 handleSearch() {
  this.setState({
    linkToSearch: true,
  })
 }
 render() {
  return(
    <div>
      {this.state.linkToSearch ?
        <FlightApi
            handleResultsView = {this.props.handleResultsView}
            travelFrom = {this.state.localTravelFrom}
            moneyToSpend = {this.state.localMoneyToSpend}
            dateTo = {this.state.localDateTo}
            dateBack = {this.state.localDateBack}
        /> :
        <div id="main">
          <section id="input_fields">
            <input
              type="text"
              name="travelFrom"
              value={this.state.travelFrom}
              onChange={this.handleEditOfTravelFrom}
              placeholder="WHERE ARE YOU TRAVELING FROM?"
            />
            <input
              type="currency"
              name="moneyToSpend"
              value={this.state.moneyToSpend}
              onChange={this.handleEditOfMoneyToSpend}
              placeholder="HOW MUCH MONEY DO YOU HAVE TO SPEND?"
            />
            <input
              className="dates"
              type="date"
              name="dateTo"
              value={this.state.localDateTo}
              onChange={this.handleEditOfDateTo}
              placeholder="Depart mm/dd/yyyy"
            />
            <input
              className="dates"
              type="date"
              name="dateBack"
              value={this.state.localDateBack}
              onChange={this.handleEditOfDateBack}
              placeholder="Arrive mm/dd/yyyy"
            />
            <button
              className="search_button"
              onClick = {this.handleSearch}
            >SEARCH</button>
          </section>
        </div>
      }
    </div>
  );
 }
}
FlightsSearch.propTypes = propTypes;
export default FlightsSearch;
