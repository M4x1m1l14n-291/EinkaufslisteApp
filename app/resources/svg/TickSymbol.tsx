import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

type PropTypes = {
    size: number;
    color: string;
    style?: any;
    onPress?: any;
};

export default function TickSymbol({ size = 24, color = 'black', style, onPress }: PropTypes) {
    return (
        <Svg style={style} viewBox={'0 -960 960 960'} height={size} width={size} onPress={onPress}>
            <Path fill={color} d={'M382-240L154-468l57-57 171 171 367-367 57 57-424 424z'} />
        </Svg>
    );
}
