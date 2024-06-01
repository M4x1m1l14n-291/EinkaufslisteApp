import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { TouchableOpacity } from 'react-native';

type PropTypes = {
    size: number;
    color: string;
    style?: any;
    onPress?: any;
};

export default function ReplyArrowSymbol({ size = 24, color = 'black', style, onPress }: PropTypes) {
    if (onPress) {
        return (
            <TouchableOpacity style={style} onPress={onPress}>
                <Svg viewBox={'0 -960 960 960'} height={size} width={size}>
                    <Path
                        fill={color}
                        d={
                            'M760-220v-140q0-53.85-38.08-91.92Q683.85-490 630-490H254.92l154 154-42.77 42.15L140-520l226.15-226.15L408.92-704l-154 154H630q78.77 0 134.38 55.62Q820-438.77 820-360v140h-60z'
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
                d={
                    'M760-220v-140q0-53.85-38.08-91.92Q683.85-490 630-490H254.92l154 154-42.77 42.15L140-520l226.15-226.15L408.92-704l-154 154H630q78.77 0 134.38 55.62Q820-438.77 820-360v140h-60z'
                }
            />
        </Svg>
    );
}
