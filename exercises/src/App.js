import React from 'react';
import FilteredList from './FilteredList';

const App = () => {
    const list = [
        {id:45, name:"Leonardo", age: 25},
        {id:87, name:"Pino", age: 120},
        {id:12, name:"Antonio", age: 2},
        {id:1, name:"Peppe", age: 10},
    ]
        return(
            <div>
                <FilteredList list={list} />
            </div>
        );
};
export default App;