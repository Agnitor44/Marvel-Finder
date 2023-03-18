import Layout from '@/components/layout/Layout'
import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

export default function NotFound() {
  return (
    <Layout>
        <Flex h='100vh' align={'center'} justify={'center'} flexDir={'column'}>
        <Text color='#f4141c' fontWeight={'bold'} fontSize={56}>404</Text>
            <Text>Page not found</Text>
        </Flex>
    </Layout>
  )
}
