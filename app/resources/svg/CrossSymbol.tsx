import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function CrossSymbol({ size = 24, color = 'black', style = {}, onPress = () => {} }) {
    return (
        <Svg style={style} viewBox={'0 -960 960 960'} height={size} width={size} fill={'none'} onPress={onPress}>
            <Path
                fill={color}
                d={'M256-200l-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224z'}
            />
        </Svg>
    );
}
