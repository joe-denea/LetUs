import React, { Component } from 'react';
// Onsen UI
import { Page }         from 'react-onsenui';
// Redux
import { connect }      from 'react-redux';
import { load }         from '../../redux/actions';
// Utils
import { getStore }     from '../../utils/utils';
// Styles
// import { }              from '../../styles/styles';
// Global Components
import  TopBar          from './../../views/_global/topBar.jsx';
import  BottomNav       from './../../views/_global/bottomNav.jsx';
import  BottomButton    from './../../views/_global/bottomButton.jsx';
// Local Components
import  Events          from './components/events.jsx';

const listStyle = {
  height: '50%',
  overflowY: 'scroll',
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.routeToLatlon = this.routeToLatlon.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.state = {
      upcomingEvents: [],
    };
  }

  componentWillMount() {
    // TODO: query database for events of user and store in upcomingEvents state
    if (!this.props.loaded) {
      this.props.load(getStore());
    }
  }

  routeToLatlon() {
    this.props.router.push('/search');
  }

  handleBack() {
    this.props.router.push('/');
  }

  render() {
    return (
      <Page renderToolbar={TopBar({ title: 'Home', handleBack: this.handleBack })}>
        <div style={listStyle}>
          <Events events={this.state.upcomingEvents}/>
        </div>
        <BottomButton title={'Create an Event'} route={this.routeToLatlon}/>
        <BottomNav/>
      </Page>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  load: (state) => {
    dispatch(load(state));
  },
});

const mapStateToProps = state => ({
  loaded: state.loaded,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
