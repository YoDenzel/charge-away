import React, {StrictMode} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigation} from './src/pages';

const App = () => {
  return (
    <StrictMode>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </StrictMode>
  );
};

export default App;
