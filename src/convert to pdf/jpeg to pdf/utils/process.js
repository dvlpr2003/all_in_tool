

export function ArrangedList(array,st,en){
    const start = st
    const end = en
    const start_ele = array[start]
   
    
    const index = end; 
    const element = start_ele;
    
    const x = array.filter((item=>item !== start_ele))
    
    x.splice(index, 0, element);
    return(x);
    
} 

