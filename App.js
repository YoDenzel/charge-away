import React, {StrictMode} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigation, TabsNavigation} from './src/pages';

const App = () => {
  return (
    <StrictMode>
      <NavigationContainer>
        <TabsNavigation />
      </NavigationContainer>
    </StrictMode>
  );
};

export default App;
