
export interface Pokemon {
    name:string,
    level:number,
    health:number,
    damage:number,
    img:string
    onRemove?:Function;
}

//Why Interface and not class or object - enforce contract