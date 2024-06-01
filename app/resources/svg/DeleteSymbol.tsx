import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { TouchableOpacity } from 'react-native';

type PropTypes = {
    size: number;
    color: string;
    style?: any;
    onPress?: any;
    onLongPress?: any;
};

export default function DeleteSymbol({ size = 24, color = 'black', style, onPress, onLongPress }: PropTypes) {
    if (onPress) {
        return (
            <TouchableOpacity onPress={onPress}>
                <Svg style={style} viewBox={'0 -960 960 960'} height={size} width={size}>
                    <Path
                        fill={color}
                        d={
                            'M292.31-140q-29.92 0-51.12-21.19Q220-182.39 220-212.31V-720h-40v-60h180v-35.38h240V-780h180v60h-40v507.69Q740-182 719-161q-21 21-51.31 21H292.31zM680-720H280v507.69q0 5.39 3.46 8.85t8.85 3.46h375.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46V-720zM376.16-280h59.99v-360h-59.99v360zm147.69 0h59.99v-360h-59.99v360zM280-720v520-520z'
                        }
                    />
                </Svg>
            </TouchableOpacity>
        );
    }

    if (onLongPress) {
        return (
            <TouchableOpacity onLongPress={onLongPress}>
                <Svg style={style} viewBox={'0 -960 960 960'} height={size} width={size}>
                    <Path
                        fill={color}
                        d={
                            'M292.31-140q-29.92 0-51.12-21.19Q220-182.39 220-212.31V-720h-40v-60h180v-35.38h240V-780h180v60h-40v507.69Q740-182 719-161q-21 21-51.31 21H292.31zM680-720H280v507.69q0 5.39 3.46 8.85t8.85 3.46h375.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46V-720zM376.16-280h59.99v-360h-59.99v360zm147.69 0h59.99v-360h-59.99v360zM280-720v520-520z'
                        }
                    />
                </Svg>
            </TouchableOpacity>
        );
    }

    return (
        <Svg style={style} viewBox={'0 -960 960 960'} height={size} width={size} fill={'none'} onPress={onPress}>
            <Path
                fill={color}
                d={
                    'M292.31-140q-29.92 0-51.12-21.19Q220-182.39 220-212.31V-720h-40v-60h180v-35.38h240V-780h180v60h-40v507.69Q740-182 719-161q-21 21-51.31 21H292.31zM680-720H280v507.69q0 5.39 3.46 8.85t8.85 3.46h375.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46V-720zM376.16-280h59.99v-360h-59.99v360zm147.69 0h59.99v-360h-59.99v360zM280-720v520-520z'
                }
            />
        </Svg>
    );
}
