/**
 * Button Component
 */

import React from 'react';
import withMouseEvent from './shared/withMouseEvent';
import { IWithMouseEventProps } from './shared/withMouseEvent';
import './index.css';

const Button: React.FunctionComponent<IWithMouseEventProps> = (props: IWithMouseEventProps) => {
    const { isMouseOver, changeColor, onMouseOver, onMouseClick } = props;
    return (
        <button className={changeColor ? 'btn-color' : ''} onMouseEnter={onMouseOver} onClick={onMouseClick} onMouseLeave={onMouseOver}>
            Mouse {isMouseOver ? 'Over' : 'Out'}
        </button>
    );
};

export default withMouseEvent(Button);
