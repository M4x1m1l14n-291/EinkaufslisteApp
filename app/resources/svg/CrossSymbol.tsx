import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { TouchableOpacity } from 'react-native';

type PropTypes = {
    size: number;
    color: string;
    style?: any;
    onPress?: any;
};

export default function CrossSymbol({ size = 24, color = 'black', style, onPress }: PropTypes) {
    if (onPress) {
        return (
            <TouchableOpacity onPress={onPress}>
                <Svg style={style} viewBox={'0 -960 960 960'} height={size} width={size}>
                    <Path
                        fill={color}
                        d={
                            'M256-200l-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224z'
                        }
                    />
                </Svg>
            </TouchableOpacity>
        );
    }

    return (
        <Svg style={style} viewBox={'0 -960 960 960'} height={size} width={size}>
            <Path
                fill={color}
                d={'M256-200l-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224z'}
            />
        </Svg>
    );
}
