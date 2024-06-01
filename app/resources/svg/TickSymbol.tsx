import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { TouchableOpacity } from 'react-native';

type PropTypes = {
    size: number;
    color: string;
    style?: any;
    onPress?: any;
};

export default function TickSymbol({ size = 24, color = 'black', style, onPress }: PropTypes) {
    if (onPress) {
        return (
            <TouchableOpacity onPress={onPress}>
                <Svg style={style} viewBox={'0 -960 960 960'} height={size} width={size}>
                    <Path fill={color} d={'M382-240L154-468l57-57 171 171 367-367 57 57-424 424z'} />
                </Svg>
            </TouchableOpacity>
        );
    }

    return (
        <Svg style={style} viewBox={'0 -960 960 960'} height={size} width={size} onPress={onPress}>
            <Path fill={color} d={'M382-240L154-468l57-57 171 171 367-367 57 57-424 424z'} />
        </Svg>
    );
}
