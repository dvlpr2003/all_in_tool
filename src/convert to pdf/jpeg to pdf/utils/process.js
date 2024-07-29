






const array = [
    {
        "id":1,
        "name":"raja"
    },
        {
        "id":2,
        "name":"raja"
    },
         {
        "id":3,
        "name":"raja"
    },
        {
        "id":4,
        "name":"raja"
    },
        {
        "id":5,
        "name":"raja"
    },
    ];
    
    
const start = 4
const end = 3
const start_ele = array[start]
const end_ele = array[end]

const index = end; 
const element = start_ele;

const x = array.filter((item=>item !== start_ele))
x.splice(index, 0, element);

console.log(x);