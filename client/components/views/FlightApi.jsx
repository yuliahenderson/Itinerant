import React from 'react';
import request from 'superagent';
import FlightView from './FlightView.jsx';

const propTypes = {
  handleResultsView: React.PropTypes.func,
  travelFrom: React.PropTypes.string,
  moneyToSpend: React.PropTypes.currency,
  dateTo: React.PropTypes.string,
  dateBack: React.PropTypes.string,
  handleSearch: React.PropTypes.func,
};
class FlightApi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      doors: [],
      airportDestinationArray: ["ANC", "BRW", "BET", "BTT", "CDV", "DLG", "DUT", "EEK",
      "FAI", "FYU", "Big", "HOM", "JNU", "ENA", "AKN", "ADQ", "OME", "SDP", "SIT",
      "SGY", "OOK", "UNK", "VDZ", "WRG", "YAK", "BHM", "DHN", "HSV", "MOB", "MGM",
      "MSL", "ELD", "XNA", "FSM", "HRO", "LIT", "TXK", "Hll", "FLG", "IGM", "PGA",
      "PHX", "PRC", "TUS", "YUM", "JPR", "BFL", "BUR", "CLD", "CIC", "IPL", "ACV",
      "FAT", "IYK", "LGB", "MOD", "MRY", "MRY", "OAK", "ONT", "SNA", "PSP", "RDD",
      "SMF", "SAN", "SFO", "SJC", "SBP", "SBA", "SMX", "STS", "VIS", "LAX", "YYC",
      "YEG", "YMM", "YQU", "YQL", "YXH", "YXX", "YAA", "YBL", "YCG", "YXC", "YYE",
      "YXJ", "YKA", "YLW", "YCD", "YYF", "YZT", "YPW", "YPR", "YQZ", "YZP", "YYD",
      "YXT", "YVR", "YYJ", "YWL", "YYQ", "YTH", "YWG", "YFC", "YQM", "YSJ", "YDF",
      "YQX", "YYT", "YWK", "YHZ", "YQY", "YSM", "YZF", "YEK", "YFB", "YRT", "YHD",
      "YHM", "YQK", "YGK", "YXU", "YYB", "YOW", "YRL", "YZR", "YAM", "YXL", "YSB",
      "YQT", "YTS", "YYZ", "YTZ", "YQG", "YYG", "YBG", "YGR", "YMT", "YGP", "YYY",
      "YUL", "YQB", "YRJ", "YUY", "YZV", "YVO", "YQR", "YXE", "YXY", "SPY", "ALS",
      "ASE", "COS", "DEN", "DRO", "GJT", "GUC", "MTJ", "PUB", "SBS", "EGE", "BDL",
      "HVN", "DCA", "IAD", "ILG", "QSF", "DAB", "FLL", "RSW", "VPS", "GNV", "JAX",
      "EYW", "MLB", "MIA", "MCO", "PFN", "PNS", "SRQ", "PIE", "TLH", "TPA", "PBI",
      "ABY", "AHN", "ATL", "AGS", "BQK", "CSG", "MCN", "SAV", "VLD", "QLA", "YEO",
      "HNM", "HNL", "MKK", "OGG", "LUP", "JHM", "LNY", "LIH", "BRL", "CID", "DSM",
      "DBQ", "FOD", "MCW", "SUX", "ALO", "BOI", "IDA", "LWS", "PIH", "SUN", "TWF",
      "TAX", "BMI", "CMI", "MDW", "ORD", "DEC", "MWA", "MLI", "PIA", "UIN", "RFD",
      "SPI", "BMG", "CLU", "EVV", "FWA", "IND", "SBN", "SRY", "ABF", "DDC", "GCK",
      "GBD", "HYS", "LBL", "MHK", "SLN", "ICT", "CVG", "LEX", "SDF", "OWB", "PAH",
      "AEX", "BTR", "LFT", "LCH", "MLU", "MSY", "SHV", "BED", "BOS", "HYA", "MVY",
      "ACK", "PVC", "CEF", "BWI", "HGR", "AUG", "BGR", "BHB", "LEW", "PWM", "PQI",
      "RKD", "APN", "DTW", "ESC", "FNT", "GRR", "CMX", "IMT", "IWD", "AZO", "LAN",
      "MBL", "MQT", "MKG", "PLN", "MBS", "CIU", "TVC", "BJI", "DLH", "HIB", "INL",
      "MSP", "RST", "STC", "TVF", "CGI", "COU", "TBN", "JLN", "MCI", "IRK", "SGF",
      "STL", "GTR", "GLH", "GPT", "JAN", "PIB", "MEI", "TUP", "BIL", "BZN", "BTM",
      "GDV", "GTF", "HVR", "HLN", "FCA", "LWT", "MLS", "MSO", "SDY", "WYS", "OLF",
      "AVL", "CLT", "FAY", "GSO", "PGV", "OAJ", "EWN", "RDU", "ILM", "BIS", "DVL",
      "DIK", "FAR", "GFK", "JMS", "MOT", "ISN", "AIA", "GRI", "EAR", "LNK", "MCK",
      "LBF", "OMA", "BFF", "MHT", "PSM", "ACY", "EWR", "TTN", "ABQ", "CNM", "CVN",
      "FMN", "HOB", "LRU", "ROW", "SAF", "SVC", "KTM", "EKO", "LAS", "RNO", "ALB",
      "BGM", "BUF", "ELM", "ISP", "ITH", "JHW", "MSS", "LGA", "JFK", "SWF", "OGS",
      "ROC", "SLK", "ART", "HPN", "CAK", "CLE", "CMH", "DAY", "TOL", "WDG", "LAW",
      "OKC", "TUL", "EUG", "LMT", "MFR", "OTH", "PDT", "PDX", "RDM", "ABE", "AOO",
      "DUJ", "ERI", "MDT", "JST", "LNS", "LBE", "PHL", "PIT", "SCE", "AVP", "IPT",
      "LAB", "PVD", "CHS", "CAE", "FLO", "GSP", "HHH", "ABR", "BKX", "HON", "PIR",
      "RAP", "FSD", "ATY", "CHA", "MKL", "TYS", "MEM", "BNA", "ABI", "AMA", "AUS",
      "BPT", "BRO", "CLL", "CRP", "DAL", "DFW", "ELP", "HRL", "EFD", "HOU", "IAH",
      "EFD", "GRK", "LRD", "GGG", "LBB", "MFE", "MAF", "SJT", "SAT", "TYR", "VCT",
      "ACT", "SPS", "SLC", "SGU", "CHO", "LYH", "PHF", "ORF", "RIC", "ROA", "SHD",
      "BTV", "RUT", "VSF", "BLI", "PSC", "PUW", "SEA", "GEG", "ALW", "EAT", "YKM",
      "ATW", "EAU", "GRB", "LSE", "MSN", "MKE", "OSH", "RHI", "CWA", "BKW", "BLF",
      "CRW", "CKB", "LWB", "HTS", "MGW", "PKB", "CPR", "CYS", "COD", "GCC", "JAC",
      "LAR", "RIW", "RKS", "SHR", "WRL", "CHI", "CHI", "MWH", "NYC", "OXR", "SOP",
      "PNC", "TOP", "WAS", "YMQ", "YTO"]

    };
  }
  componentDidMount() {
    this.httpGetFlights();
  }

  httpGetFlights() {
      let newData = [];
      let openFlights = [];
      for(let i = 0; i < 30; i++) {
      let randomVariable = Math.floor(Math.random()*519);
      let destinationAirportCode = this.state.airportDestinationArray[randomVariable];
      console.log(destinationAirportCode)
      const url = `http://terminal2.expedia.com/x/mflights/search?departureAirport=${this.props.travelFrom}&arrivalAirport=${destinationAirportCode}&departureDate=${this.props.dateTo}&apikey=X4ccWU6YHcmRcc8AowPNxAGgVA8QaZ92`;
      request.get(url).then((response) => {
      const budgetData = response.body.offers;
      if (budgetData) {
        let budget = Object.keys(budgetData).map((id) => {
          const individualBudgetData = budgetData[id];
          let RealLegsId = individualBudgetData.legIds[0].toString();
          let totalFare = individualBudgetData.totalFare
          let detailsURL = individualBudgetData.detailsUrl.toString();
          const flightData = response.body.legs;
          let money = this.props.moneyToSpend
          if (flightData) {
          let flights = Object.keys(flightData).map((id) => {
              const individualFlightData = flightData[id];
              let legId=individualFlightData.legId;
              if (individualFlightData.segments.length == 1 &&
                  individualFlightData.segments[0].hasSeatMap === true &&
                  RealLegsId === legId) {
                    if(parseFloat(money) > parseFloat(totalFare)) {
                let airlineName = individualFlightData.segments[0].airlineName;
                let arrivalAirportLocation = individualFlightData.segments[0].arrivalAirportLocation;
                let arrivalTime = individualFlightData.segments[0].arrivalTime;
                let departureAirportCode = individualFlightData.segments[0].departureAirportCode;
                let departureAirportLocation = individualFlightData.segments[0].departureAirportLocation;
                let departureTime = individualFlightData.segments[0].departureTime;
                let flightNumber = individualFlightData.segments[0].flightNumber;
                openFlights.push({legId, airlineName, arrivalAirportLocation, arrivalTime,
                departureAirportCode, departureTime, departureAirportLocation, flightNumber, RealLegsId,
                totalFare, detailsURL, destinationAirportCode})
                openFlights.sort(function(a,b) {
                  if(a.totalFare > b.totalFare) {
                    return 1;
                  }
                  if (a.totalFare < b.totalFare) {
                    return -1
                  } if ( a.totalFare = b.totalFare) {
                  return 0
                  }
                })
                  }
                }
                else if (openFlights.length === 0) {
                  console.log("no flights")
                  }
            });
            this.setState({
              doors: openFlights,
            });
          }
        });
      }
    })
    }
  }
  // httpGetReturnFlights() {
  //   const url = `http://terminal2.expedia.com/x/mflights/search?departureAirport=${this.props.travelFrom}&arrivalAirport=${destinationAirportCode}&departureDate=${this.props.dateTo}&apikey=X4ccWU6YHcmRcc8AowPNxAGgVA8QaZ92`;
  //   request.get(url).then((response) => {
  //     const budgetData = response.body.offers;
  //     let legsIdArrayReturn = [];
  //     let openFlightsReturn = [];
  //     if (budgetDataReturn) {
  //       let budgetReturn = Object.keys(budgetData).map((id) => {
  //         const individualBudgetData = budgetData[id];
  //         let ReturnRealLegsId = individualBudgetData.legIds[0].toString();
  //         let ReturnTotalFare = individualBudgetData.totalFare.toString();
  //         let ReturnDetailsURL = individualBudgetData.detailsUrl.toString();
  //         const flightData = response.body.legs;
  //         if (flightData) {
  //         let flights = Object.keys(flightData).map((id) => {
  //             const individualFlightDataReturn = flightData[id];
  //             let legIdReturn=individualFlightData.legId;
  //             if (individualFlightData.segments.length == 1 &&
  //                 individualFlightData.segments[0].hasSeatMap === true &&
  //                 ReturnRealLegsId === legIdReturn) {
  //               let airlineNameReturn = individualFlightData.segments[0].airlineName;
  //               let arrivalAirportCodeReturn = individualFlightData.segments[0].arrivalAirportCode;
  //               let arrivalAirportLocationReturn = individualFlightData.segments[0].arrivalAirportLocation;
  //               let arrivalTimeReturn = individualFlightData.segments[0].arrivalTime;
  //               let departureAirportCodeReturn = individualFlightData.segments[0].departureAirportCode;
  //               let departureAirportLocationReturn = individualFlightData.segments[0].departureAirportLocation;
  //               let departureTimeReturn = individualFlightData.segments[0].departureTime;
  //               let flightNumberReturn = individualFlightData.segments[0].flightNumber;
  //               openFlightsReturn.push({legIdReturn, airlineNameReturn, arrivalAirportCodeReturn, arrivalAirportLocationReturn, arrivalTimeReturn,
  //               departureAirportCodeReturn, departureTimeReturn, departureAirportLocationReturn, flightNumberReturn, RealLegsIdReturn,
  //               totalFareReturn, detailsURLReturn});
  //             }
  //           });
  //           console.log(openFlightsReturn);
  //           this.setState({
  //             doorsReturn: openFlightsReturn,
  //           });
  //         }
  //       });
  //     }
  //   })
  // }
  render() {
    // if (this.props.moneyToSpend > (parseInt(totalFare) + parseInt(returnTotalFare))) {

    const value = this.state.doors.map((door) => {
          if (door.legId !== "null" ) {
            return (
                <FlightView
                   legId = {door.legId}
                   airlineName = {door.airlineName}
                   arrivalAirport = {door.arrivalAirportCode}
                   arrivalLocation = {door.arrivalAirportLocation}
                   arrivalTime = {door.arrivalTime}
                   departureAirport = {door.departureAirportCode}
                   departureTime = {door.departureTime}
                   departureLocation = {door.departureAirportLocation}
                   flightNumber = {door.flightNumber}
                   RealLegsId = {door.RealLegsId}
                   totalFare = {door.totalFare}
                   detailsURL = {door.detailsURL}
                   returnFlight = {this.httpGetReturnFlights}
                   destinationAirportCode = {door.departureAirportCode}
                />
              )
          } else {
            alert("Your price is way too high")
          }

      });
    return(
        <div>
          <p className="welcomeMessage"> The trips we found for you: </p>
          {value}
        </div>
      )

  }
}

export default FlightApi;
