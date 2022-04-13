interface P {
    name:string;
    age:number;
}

type Person={
    name:string;
    age : number;
}

const seho: P = {
    name:'seho',
    age : 25
}

const peole: Person ={
    name:'seho',
    age : 25
}

type Todo = {
    id : string;
    title: string;
    done:boolean;
}

function getTodo(todo: Todo){

}