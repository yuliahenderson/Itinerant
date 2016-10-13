import React from 'react';
import FlightSearch from './FlightsSearch.jsx';

class HomePageView extends React.Component {
  render() {
  return(
    <div>
      <div id="main">
       <FlightSearch  handleResultsView = {this.props.handleResultsView} />
      </div>
      <section id="about_us">
       <h1>WHY ITINERANT</h1>
       <p className="text_about">Lorem Ipsum is simply dummy text of
       the printing and typesetting industry. Lorem Ipsum has been the
       industry's standard dummy text ever since the 1500s, when an
       unknown printer took a galley of type and scrambled it to make
       a type specimen book.</p>
      </section>
    </div>
  );
 }
}

export default HomePageView;
