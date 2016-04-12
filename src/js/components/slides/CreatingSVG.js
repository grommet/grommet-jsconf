import React, { Component } from 'react';

import Tile from 'grommet/components/Tile';
import Tiles from 'grommet/components/Tiles';
import Spinning from 'grommet/components/icons/Spinning';
import KeyboardAccelerators from 'grommet/utils/KeyboardAccelerators';

export default class CreatingSVG extends Component {

  constructor () {
    super();

    this._updateSvgCode = this._updateSvgCode.bind(this);
    this._stopPropagation = this._stopPropagation.bind(this);

    this.state = {
      svgCode: '<svg version="1.1" viewBox="0 0 24 24" width="24px" height="24px"></svg>'
    };
  }

  componentDidMount () {
    this._keys = {left: this._stopPropagation, right: this._stopPropagation};
    KeyboardAccelerators.startListeningToKeyboard(this, this._keys);
  }

  componentWillUnmount () {
    KeyboardAccelerators.stopListeningToKeyboard(this, this._keys);
  }

  _updateSvgCode (event) {
    this.setState({svgCode: event.target.value});
  }

  _stopPropagation () {
    return document.activeElement === this.refs.svgTextarea;
  }

  render () {
    const {svgCode} = this.state;

    let svgCodeNode = (
      <Spinning />
    );

    if (svgCode && svgCode !== '') {
      svgCodeNode = (
        <div dangerouslySetInnerHTML={{__html: svgCode}} />
      );
    }

    return (
      <Tiles fill={true}>
        <Tile pad='small'>
          <textarea ref='svgTextarea' onChange={this._updateSvgCode}
            className='svg-editor' rows='10' value={svgCode} />
        </Tile>
        <Tile pad='small' justify='center' align='center'>
          {svgCodeNode}
        </Tile>
      </Tiles>
    );
  }
};
