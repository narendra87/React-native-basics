import React from 'react'

import { View, Text } from 'react-native'
import {API_HOST} from '../../src/config'

export default ConfigDemo = () => {
    return (
        <View>
            <Text>
                {`Hello ${API_HOST}`}
            </Text>
        </View>
    );

}
