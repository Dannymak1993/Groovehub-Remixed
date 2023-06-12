import React, { useEffect } from 'react';
import { TitleBar, Callout, Grid, Cell } from 'react-foundation';
import './style.css';

const Dashboard = () => {
  useEffect(() => {
    // Scroll animation code
  }, []);

  return (
    <div>
      <div className="off-canvas position-left reveal-for-large" id="my-info">
        {/* Sidebar content */}
      </div>

      <div className="off-canvas-content">
        <TitleBar className="hide-for-large">
          {/* Title bar content */}
        </TitleBar>
        <Callout className="primary">
          {/* Callout content */}
        </Callout>
        <Grid className="grid">
          <Cell className="grid-item">Anime</Cell>
          <Cell className="grid-item">Classical</Cell>
          <Cell className="grid-item">Country</Cell>
          <Cell className="grid-item">Disney</Cell>
          <Cell className="grid-item">Electronic</Cell>
          <Cell className="grid-item">Hip-Hop</Cell>
          <Cell className="grid-item">Jazz</Cell>
          <Cell className="grid-item">Korean</Cell>
          <Cell className="grid-item">Rock</Cell>
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard;
