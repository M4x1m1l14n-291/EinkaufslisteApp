import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

type PropTypes = {
    size: number;
    color: string;
    style?: any;
    onPress?: any;
};

export default function PlusSymbol({ size = 24, color = 'black', style, onPress }: PropTypes) {
    return (
        <Svg style={style} height={size} width={size} fill={'none'} viewBox={'0 -960 960 960'} onPress={onPress}>
            <Path fill={color} d={'M460-460H240v-40h220v-220h40v220h220v40H500v220h-40v-220z'} />
        </Svg>
    );
}
