import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

type PropTypes = {
    size: number;
    color: string;
    style?: any;
    onPress?: any;
};

export default function ListSymbol({ size = 24, color = 'black', style, onPress }: PropTypes) {
    return (
        <Svg style={style} viewBox={'0 -960 960 960'} height={size} width={size} fill={'none'} onPress={onPress}>
            <Path
                fill={color}
                d={
                    'M360-200v-80h480v80H360zm0-240v-80h480v80H360zm0-240v-80h480v80H360zM200-160q-33 0-56.5-23.5T120-240q0-33 23.5-56.5T200-320q33 0 56.5 23.5T280-240q0 33-23.5 56.5T200-160zm0-240q-33 0-56.5-23.5T120-480q0-33 23.5-56.5T200-560q33 0 56.5 23.5T280-480q0 33-23.5 56.5T200-400zm0-240q-33 0-56.5-23.5T120-720q0-33 23.5-56.5T200-800q33 0 56.5 23.5T280-720q0 33-23.5 56.5T200-640z'
                }
            />
        </Svg>
    );
}
