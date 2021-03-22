// This is testing of react
import React from 'react' ;
import Home from './Compomemts/Home'
import renderer from 'react-test-renderer' ;


// This will test if the page is rendered properly
test( 'renders correctly',()=>{
  const input = renderer
      .create(
          <Home/>
      )
      .toJSON();
  expect(input).toMatchSnapshot();
});
