import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

type PropTypes = {
    size: number;
    color: string;
    style?: any;
    onPress?: any;
};

export default function ThemeSymbol({ size = 24, color = 'black', style, onPress }: PropTypes) {
    return (
        <Svg style={style} viewBox={'0 -960 960 960'} height={size} width={size} fill={'none'} onPress={onPress}>
            <Path
                fill={color}
                d={
                    'M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80zm40-83q119-15 199.5-104.5T800-480q0-123-80.5-212.5T520-797v634z'
                }
            />
        </Svg>
    );
}
