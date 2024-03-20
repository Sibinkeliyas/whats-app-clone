import React from 'react'
import Icon from '..';
import useTheme from '@/hooks/useTheme';
import { useSelector } from '@/store';
import { FlashMode } from 'expo-camera';

const Flash = () => {
  const { flashMode } = useSelector((state) => state.cameraSettingsReducer)
 return (
   <Icon
     color={flashMode === FlashMode.off ? '#FFF' : "yellow"}
     name="flash"
     size={23}
   />
 );
}

export default Flash