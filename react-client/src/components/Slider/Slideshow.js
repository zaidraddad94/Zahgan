import React from 'react';
import { Fade } from 'react-slideshow-image';
import $ from 'jquery';

const fadeImages = [
  'http://www.okcsos.org/wp-content/uploads/2017/09/about-us.jpg',
  'https://image.shutterstock.com/image-vector/banner-sign-now-260nw-1080843443.jpg',
  'https://t3.ftcdn.net/jpg/00/35/05/98/240_F_35059814_35v530XQqkaFnc1fRBV2nfO2WvkzBi25.jpg'
];

const fadeProperties = {
  duration: 1000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  height: 20
}

class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items:''

    }
  }


   componentDidMount() {
    var that = this
     $.ajax({
      url: '/create',
      type: "GET",
      success: async (data) => {
       console.log('data',data)
       await that.setState({
          items: data
        })
        console.log('zaid',this.state.items)
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render() {
  
  console.log('jjjj',this.state.items)
    return (
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
          <a href="http://localhost:3000/about">
            <img src={fadeImages[0]} />
            </a>
          </div>

        </div>
        <div className="each-fade">
          <div className="image-container">
          <a href="http://localhost:3000/signin">
            <img src={fadeImages[1]} />
            </a>
          </div>

        </div>
        <div className="each-fade">
          <div className="image-container">
          <a href="http://localhost:3000/signin">
            <img src={fadeImages[2]} />
            </a>
          </div>

        </div>
      </Fade>
    )
  }
}
export default Slideshow
