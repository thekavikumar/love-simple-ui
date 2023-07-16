import React from 'react';

class Masonry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: this.calculateColumns(),
    };
    this.containerRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.calculateColumns();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.calculateColumns();
  };

  calculateColumns = () => {
    const containerWidth = this.containerRef.current.offsetWidth;
    const { columnWidth, gutter } = this.props;
    const columns = Math.floor(containerWidth / (columnWidth + gutter));
    return columns;
  };

  renderItems = () => {
    const { children } = this.props;
    const { columns } = this.state;

    const columnElements = [];
    for (let i = 0; i < columns; i++) {
      columnElements.push([]);
    }

    React.Children.forEach(children, (child, index) => {
      const columnIndex = index % columns;
      columnElements[columnIndex].push(child);
    });

    return columnElements.map((column, index) => (
      <div key={index} style={{ flex: `1 0 ${100 / columns}%`, padding: `${this.props.gutter / 2}px` }}>
        {column}
      </div>
    ));
  };

  render() {
    const { gutter } = this.props;

    return (
      <div ref={this.containerRef} style={{ display: 'flex', flexWrap: 'wrap', marginLeft: `-${gutter / 2}px` }}>
        {this.renderItems()}
      </div>
    );
  }
}

export default Masonry;
