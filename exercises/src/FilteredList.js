import { useMemo } from "react";

const FilteredList = ({list}) => {
    const filterList = useMemo(()=>{
        return list.filter(item => item.age > 18)
    },[list])

    return(
        <div>
            <ul>
                {filterList.map((item) => <li key={item.id}>{item.name}</li>)}
            </ul>
        </div>
    )
    }
    export default FilteredList;