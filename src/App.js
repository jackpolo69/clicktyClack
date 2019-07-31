import React from 'react';
import ImageDiv from "./components/ImageDiv/ImageDiv";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";
import images from "./images.json"

class App extends React.Component {
  state = {
      currScore: 0,
      topScore: 0,
      imagesLeft: images
  }
  shuffle = (array) => {
      let currentIndex = array.length, temporaryValue, randomIndex;
    
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    
      return array;
    }
    // click handler and also contains game logic
  handleClick = id => {
      const selectedImage = this.state.imagesLeft.filter(image => image.id === id);
      if(selectedImage.length !== 0) {
          this.setState({imagesLeft: this.state.imagesLeft.filter(image => image.id !== id)});
          this.setState({currScore: this.state.currScore +1});
          
      } else {
          this.setState({currScore: 0, imagesLeft: images})
          if(this.state.currScore > this.state.topScore) {
              this.setState({topScore: this.state.currScore});
          }
      }
      this.shuffle(images);
  };
  render() {
      return(
          <main>

          <nav className="navbar navbar bg-primary">
          <div className="navbar-brand">
              Bootstrap
          </div>
          </nav>
          <header>
          <div className="jumbotron jumbotron-fluid">
          <div className="container">
              <h1 className="display-4">Click on image to start!</h1>
              <p className="lead">keep clicking on different images to earn points. If you click on the same image twice, your score gets reset. get 12 points to win</p>
          </div>
          <div className="scoreBoard">
              <ScoreBoard currScore={this.state.currScore} topScore={this.state.topScore} />
          </div>
          </div>
          </header>
          <div className="container">
              <div className="row">
                  {images.map(image =>(
                      <ImageDiv
                          handleClick={this.handleClick}
                          id={image.id}
                          name={image.name}
                          src={image.src}
                      />
                  ))}
              </div>
          </div>
          <footer className="container-fluid">
              <p> crafted by The Real Machavelli</p>
          </footer>
      </main> 
      )
  }
}


export default App;
