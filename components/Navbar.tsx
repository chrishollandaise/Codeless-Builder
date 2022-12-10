import React from 'react';
import {
  Button,
  CloseIcon,
  Flex,
  HStack,
  Image,
  Menu,
  Text,
} from 'native-base';
import { saveAs } from 'file-saver';
import { useGenerateFile } from '@/utils/useGenerateFile';
import { JavaScriptIcon, TypeScriptIcon } from './Icons/TSandJSicons';

const Navbar = () => {
  const { customCode, clearComponents } = useGenerateFile('CustomComponent');

  const handleExportCode = (type: 'tsx' | 'jsx') => {
    const blob = new Blob([customCode], { type: 'text/javascript' });
    saveAs(blob, `CustomCode.${type}`);
  };

  return (
    <>
      <HStack
        bg='rgba(0, 0, 32, 1)'
        px='5'
        py='3'
        justifyContent='space-between'
        alignItems='center'
        w='100%'
        h='7vh'
      >
        <HStack alignItems='center'>
          <Flex direction='row' justifyContent={'center'} align={'center'}>
            <Image
              width='55px'
              height='55px'
              marginTop={1}
              src='/images/logo/logo.png'
              alt='Codeless Logo'
            />
            <Text
              marginLeft={2}
              color='white'
              fontSize='25'
              fontWeight='semibold'
            >
              Codeless <Text fontWeight='bold'>Builder</Text>
            </Text>
          </Flex>
        </HStack>
        <HStack space={5}>
          <Menu
            bg='rgba(0, 0, 32, 1)'
            placement='bottom right'
            trigger={triggerProps => (
              <Button colorScheme='coolGray' {...triggerProps}>
                Export Code
              </Button>
            )}
          >
            <Menu.Item
              bg='rgba(0, 0, 32, 1)'
              _hover={{ bg: 'coolGray.500' }}
              onPress={() => handleExportCode('jsx')}
            >
              <JavaScriptIcon />
            </Menu.Item>
            <Menu.Item
              bg='rgba(0, 0, 32, 1)'
              _hover={{ bg: 'coolGray.500' }}
              onPress={() => handleExportCode('tsx')}
            >
              <TypeScriptIcon />
            </Menu.Item>
          </Menu>
          <Button
            colorScheme='coolGray'
            leftIcon={<CloseIcon />}
            onPress={clearComponents}
          >
            Clear
          </Button>
        </HStack>
      </HStack>
    </>
  );
};

export { Navbar };
