import React, { Component } from 'react';
import { Container, Image } from 'semantic-ui-react';
import Me from './assets/me.jpg'
class Main extends Component {
 
  render() {
    return (
      <Container>
        <Image src={Me} size='medium' shape='circular' centered />
          <p>
            Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip
            detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos
            choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.
          </p>
          <p>
            Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint
            solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim
            vivendum maiestatis in.
          </p>
      </Container>
    )
  }

}

export default Main;


