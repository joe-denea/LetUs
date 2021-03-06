import React, { Component }       from 'react';
// Onsen UI
// import ons              from 'onsenui';
import { ProgressBar } from 'react-onsenui';


class VotesProgress extends Component {

  render() {
    const talliedPercent = (this.props.talliedVotes / this.props.expectedVotes) * 100;
    const connectedPercent = (this.props.connectedPeers / this.props.expectedVotes) * 100;

    return (
      <section style={{
        padding: '12px',
        backgroundColor: 'rgb(60,64,65)',
        boxShadow: '0 -1em 0.35em -0.95em #333 inset, 0 1em 0.35em -0.85em #333 inset',
      }}>
        <ProgressBar
          value={talliedPercent}
          secondaryValue={connectedPercent}
          style={{ transform: 'scaleY(2.5)' }}
        />
      </section>
    );
  }
}

export default VotesProgress;
