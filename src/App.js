import React from "react";
import data from "./data/eve.json";
import styled from "styled-components";
import AlertsByCategory from "./Components/AlertsByCategory";
import AlertsBySeverity from "./Components/AlertsBySeverity";
import AlertsBySource from "./Components/AlertsBySource";
import AlertsOvertime from "./Components/AlertsOvertime";

const Container = styled.div`
  padding: 20px;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const GridItem = styled.div`
  flex: 1 1 45%;
  margin: 10px;
`;

function App() {

  const alerts= data;
  return (
    <div>
      <Grid>
        <GridItem>
          <h1>Alerts By Overtime</h1>
          <AlertsOvertime data={alerts}/>
        </GridItem>
        <GridItem>
          <h1>Alerts By Category</h1>
          <AlertsByCategory data={alerts}/>
        </GridItem>
        <GridItem>
          <h1>Alerts by Severity</h1>
          <AlertsBySeverity data={alerts}/>
        </GridItem>
        <GridItem>
          <h1>Alerts By Source</h1>
          <AlertsBySource data={alerts}/>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;