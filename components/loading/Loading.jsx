'use client'

import styles from './Loading.module.css'
import { Spinner, Text, VStack } from '@chakra-ui/react'

const Loading = () => {
    return (
    <VStack className={styles.loading}>
        <Spinner borderWidth="4px"/>
        {/* <Text>Carregando...</Text> */}
    </VStack>
    ); 
}

export default Loading