import React from 'react';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <button onClick={this.props.onPenColorClick}>Pen Color</button>
        <button onClick={this.props.onBackgroundColorClick}>Background Color</button>
        <button onClick={this.props.onColorGrabberClick}>Color Grabber</button>
        <button onClick={this.props.onColorFillClick}>Color Fill</button>
        <button onClick={this.props.onEraserClick}>Eraser</button>
        <button onClick={this.props.onGridSizeClick}>Grid Sizer</button>
        <button onClick={this.props.onUndoClick}>Undo</button>
        <button onClick={this.props.onRedoClick}>Redo</button>
        <button onClick={this.props.onShadeClick}>Shade</button>
        <button onClick={this.props.onLightenClick}>Lighten</button>
      </div>
    );
  }
}

export default Dashboard;
