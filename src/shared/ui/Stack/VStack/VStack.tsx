import { type FC } from 'react'
import { Flex, type FlexProps } from '../Flex/Flex'

type HStackProps = Omit<FlexProps, 'direction'>

export const VStack: FC<HStackProps> = (props) => {
    const { align = 'start', children } = props
    return (
        <Flex {...props} direction={'column'} align={align}>
            {children}
        </Flex>
    )
}
