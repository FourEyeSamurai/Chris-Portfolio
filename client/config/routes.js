//Dependencies
import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import { Container } from 'semantic-ui-react';

//pull in components 
import Main from '../components/Main';
import Navbar from '../components/Navbar'
import Work from '../components/work';
import Resume from '../components/resume'
import Contact from '../components/contact'

// export the routes 
const App = (
  <Router>
    <div>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/' component={Navbar} />
          <Route exact path='/work' component={Work} />
          <Route exact path='/resume' component={Resume} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/CLeesonTechResume.pdf' />
        </Switch>
      </Container>
    </div>
  </Router>
)
 
export default App;
