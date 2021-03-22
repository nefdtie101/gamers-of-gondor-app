import React from 'react' ;
import fetch from "isomorphic-fetch";
require ( 'isomorphic-fetch' );

// This will test the api make sure it works
test('the fech should return no error ',  () => {
    return fetch('http://localhost:3001/test-user?Username=piettie').then(test => {
        expect(test).not.toBe('error');
    });
});
