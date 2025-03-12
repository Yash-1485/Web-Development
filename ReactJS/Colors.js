const id='1';
const name='ABC';
const colors={
    1: 'red',
    2: 'brown',
    3: 'crimson',
    4: 'coral',
    5: 'orange',
    6: 'yellow',
    7: 'white',
    8: 'green',
    9: 'blue',
    10: 'violet'
};

// export {id,name,colors};
// export default colors;
// export default {id,name,colors};

// Using both exports
export {id,name};
export default colors;