import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function MealSymbol({ size = 24, color = 'black' }) {
    return (
        <Svg viewBox={'0 -960 960 960'} height={size} width={size} fill={'none'}>
            <Path
                fill={color}
                d={
                    'M280-80v-366q-51-14-85.5-56T160-600v-280h80v280h40v-280h80v280h40v-280h80v280q0 56-34.5 98T360-446v366h-80zm400 0v-320H560v-280q0-83 58.5-141.5T760-880v800h-80z'
                }
            />
        </Svg>
    );
}
