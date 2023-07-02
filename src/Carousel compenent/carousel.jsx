import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  goToSlide = (index) => {
    this.setState({
      currentIndex: index,
    });
  };

  goToPrevSlide = () => {
    const { currentIndex } = this.state;
    const { slides } = this.props;
    const lastIndex = slides.length - 1;
    const newIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
    this.setState({
      currentIndex: newIndex,
    });
  };

  goToNextSlide = () => {
    const { currentIndex } = this.state;
    const { slides } = this.props;
    const lastIndex = slides.length - 1;
    const newIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
    this.setState({
      currentIndex: newIndex,
    });
  };

  renderSlides = () => {
    const { slides } = this.props;
    const { currentIndex } = this.state;

    return slides.map((slide, index) => (
      <div
        key={index}
        className={index === currentIndex ? 'slide active' : 'slide'}
      >
        {slide}
      </div>
    ));
  };

  render() {
    return (
      <div className="carousel">
        <div className="slides">{this.renderSlides()}</div>
        <button className="prev-button" onClick={this.goToPrevSlide}>
          Prev
        </button>
        <button className="next-button" onClick={this.goToNextSlide}>
          Next
        </button>
      </div>
    );
  }
}

export default Carousel;
