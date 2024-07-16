import { useState } from "react";

const Todo = () => {
const [value, setValue] = useState("");
const [id, setId] = useState("");
const [valueList, setValueList] = useState([]);

const handleSubmit = (e) => {
    e.preventDefault();
    if(value && !id){
        setValueList([...valueList,{text:value,isCompleted:false}]);
    } else {
       const newValue  =  valueList.map((list,index)=>{
            return index === id-1 ? {...list,text:value} : list;
        });
        setValueList(newValue);
    }
    setValue("");
    setId("")
}
const handleEdit = (index,list) => {
    setId(index+1);
    setValue(list)
}

const handleDelete = (index) => {
    const newValue  =  valueList.filter((list,indexList)=>{
        return indexList !== index && list
    });
    setValueList(newValue);
}

const handleComp = (index,isCompleted) => {
    const newValue  =  valueList.map((list,indexList)=>{
        return indexList === index ? {...list,isCompleted} :  list
    });
    setValueList(newValue);

}

    return (
        
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
            <button type="submit">{`${id ? 'edit' : 'Add'}`}</button>

        </form>
        {valueList && valueList.map((list,index) => 
        <ul key={index}>
            <li><input type="checkbox" onChange={(e) => handleComp(index,e.target.checked)}/></li>
            {index+1} : <li style={{textDecoration: list.isCompleted &&'line-through'}}>{list.text}</li>
            <li onClick={() => handleEdit(index,list.text)}>Edit</li>
            <li onClick={() => handleDelete(index)}>Delete</li>
        </ul>
        )}
        </>
    )

}

export default Todo;