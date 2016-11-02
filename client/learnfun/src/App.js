import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import './App.css';

var masonryOptions = {
    transitionDuration: 0
};

class App extends Component {
  constructor(props) {
     super(props);
     this.state = {
        picsVisible: true
      }
     this.hide = this.hide.bind(this);
     this.show = this.show.bind(this);
     this.handleImagesLoaded = this.handleImagesLoaded.bind(this);
  }

  componentDidMount() {
      this.hide();
  }

  handleImagesLoaded(imagesLoadedInstance) {
      this.show();
  }

  hide() {
      console.log('hide');
      this.setState({picsVisible: false});
  }

  show() {
      console.log('show!');
      debugger;
      this.setState({picsVisible: true});
  }

  render() {
    return (
      <div className="App">
        <div>
          <Masonry
            onImagesLoaded={this.handleImagesLoaded}
            options={masonryOptions}>
              <div><img alt="" src="http://lh4.ggpht.com/Fxyc5e1DX3GUIaOowegNFzeg_rDH2do-w-VtelDo4Qef_ORKJpGD4MY_jW9RYGnHubeUmJgxcF_61UnC9Q=s800" /></div>
              <div><img alt="" src="http://lh5.ggpht.com/T1rqRdnLBM3lG72DME8V3Sx7PYRDY_n9kuXBgyRPtW0eNdGdecgD2H8SFnp4pmdKV-1alRiePnUIswX7=s800" /></div>
              <div><img alt="" src="http://lh4.ggpht.com/NUYahE-xs1_DPRYoRP1A0T1Jeko4U99m-myooDhgYOsV8V2zhYVWjm0Clm2gbHOZ7wmbFIvKBNwavao=s800" /></div>
          </Masonry>
        </div>
      </div>
    );
  }
}

export default App;
