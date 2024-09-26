import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav"
                "main"`,
        lg: `"nav nav"
             "aside main"`,
      }}
      padding={4}
    >
      <GridItem pl="2" bg="orange.300" area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        {/* If screen is above lg-size, shows aside */}
        <GridItem pl="2" bg="pink.300" area={"aside"}>
          aside
        </GridItem>
      </Show>
      <GridItem pl="2" bg="green.300" area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
