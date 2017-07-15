import React, { Component } from 'react';
import Resume from './assets/CLeesonTechResume.pdf'
import { Grid, Segment } from 'semantic-ui-react';


class Work extends Component {
 
  render() {
    return (
     <Grid columns='equal'>
    	<Grid.Column>
     		<Segment>
     			<p>ConnectED </p>
     		</Segment>
    	</Grid.Column>
    	<Grid.Column>
      		<Segment>Who Are You? - The Game</Segment>
    	</Grid.Column>
    	<Grid.Column>
      		<Segment>Green Charge</Segment>
    	</Grid.Column>
    </Grid>
    )
  }

}

export default Work;
