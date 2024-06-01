import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { TouchableOpacity } from 'react-native';

type PropTypes = {
    size: number;
    color: string;
    style: any;
    onPress?: any;
};

export default function ReturnArrowSymbol({ size = 24, color = 'black', style, onPress }: PropTypes) {
    if (onPress) {
        return (
            <TouchableOpacity style={style} onPress={onPress}>
                <Svg viewBox={'0 -960 960 960'} height={size} width={size}>
                    <Path
                        fill={color}
                        d={'M294.92-450l227.85 227.85L480-180 180-480l300-300 42.77 42.15L294.92-510H780v60H294.92z'}
                    />
                </Svg>
            </TouchableOpacity>
        );
    }

    return (
        <Svg style={style} viewBox={'0 -960 960 960'} height={size} width={size}>
            <Path
                fill={color}
                d={'M294.92-450l227.85 227.85L480-180 180-480l300-300 42.77 42.15L294.92-510H780v60H294.92z'}
            />
        </Svg>
    );
}
