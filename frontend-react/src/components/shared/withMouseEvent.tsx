/**
 * HOC component
 */

import React, { useState } from 'react';

export interface IWithMouseEventProps {
    isMouseOver: boolean;
    changeColor: boolean;
    onMouseOver(event: any): void;
    onMouseClick(): void;
}

const withMouseEvent = (WrappedComponent: React.FunctionComponent<IWithMouseEventProps>) => (props: any) => {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [color, setColor] = useState(false);

    const onMouseOver = (event: any) => {
        event.type === 'mouseenter' ? setIsMouseOver(true) : setIsMouseOver(false);
    };

    const onMouseClick = () => {
        setColor(!color);
    };

    return <WrappedComponent onMouseClick={onMouseClick} changeColor={color} isMouseOver={isMouseOver} onMouseOver={onMouseOver} />;
};

export default withMouseEvent;
