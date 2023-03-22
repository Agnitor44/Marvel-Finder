import { add, edit } from '@/globalRedux/features/readSlice';
import { Button, Flex, FormControl, Input, Progress, Text } from '@chakra-ui/react'
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';

export default function ComicReadStatus({ pageCount, id}) {

  const readList = useSelector((state) => state.state.read.data);
  const  thisReadStatus = readList.find(item => item.id === id)
const currentCount = thisReadStatus?.count || 0;
const currentId = thisReadStatus?.id || null

    const [isFormOpened, setIsFormOpened] = useState(false)
    const { register, handleSubmit, watch, setValue,  formState: { errors } } = useForm({mode: 'onSubmit'});
    const dispatch = useDispatch()

    const editReadPages = handleSubmit((values) => {
        const payload = {
            id: id,
            count: values.pages,
        }
       if(currentId) {
        setIsFormOpened(false)
        return dispatch(edit(payload))
       }
       else {
        setIsFormOpened(false)
        return dispatch(add(payload))
       }
     
    });

    const renderEditButton = () => {
   
        return (
            <Button onClick={() => setIsFormOpened(prev => !prev)}  size='xs'>{isFormOpened ? 'Close' : 'Edit' }</Button>
        )
    }

    const renderStatus = () => {
        const isFinished = currentCount / pageCount === 1
        return (
            <Flex>
                <Text mr={'10px'}>You have read</Text>
                <Flex>
                <Text fontWeight={'bold'}>{isFinished ? 'All' : `${currentCount} / ${pageCount}`}</Text>
                </Flex>
            </Flex>
        )
    }
    const validatePages = (value) => {
        return value <= pageCount;
      };

    const renderForm = () => {
        if(isFormOpened) { 
            return (
                <Flex as='form' onSubmit={editReadPages}>
                    <FormControl >
    
                        <Flex alignItems={'center'}>
                        <NumberInput  defaultValue={currentCount}>
  <NumberInputField
 
  {...register("pages", { required: {
    message: 'This field is required', value: true,
  },
  validate: {validatePages}
})}
  />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput>
                        <Button ml={'20px'} size='sm'  bg="#f4141c"
          color="white" type='submit'>Accept</Button>
                        </Flex>
                        {errors.pages && <Text>{errors.pages.message}</Text>}
                        {errors.pages?.type === "validatePages" && <Text>{`number must be higher than ${pageCount}`}</Text>}
                    </FormControl>
                </Flex>
            )
        }
        return (
            <Progress w='100%' value={ (currentCount / pageCount) *100 || 0 } colorScheme='red'/>
        )
    }
    const renderContent = () => {
        return (
            <Flex  w='100%' flexDir={'column'}>
           
           <Flex w='100%' justifyContent={'space-between'} alignItems='center' py={'10px'}>
           {renderStatus()}

           {renderEditButton()}
           </Flex>
            {renderForm()}
            
        </Flex>
        )
    }
if(pageCount > 0) {
    return (
        <Flex w='100%' py={'10px'} >
            {renderContent()}
        </Flex>
      )
}
return null 




}
