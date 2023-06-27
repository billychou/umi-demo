import React, {useEffect, useState} from 'react';


let person = {
    name: "张三"
};

const handler = {
    get: (target: any, property: any) => {
        if (property in target) {
            return target[property]
        } else {
            // throw new ReferenceError("Propery: " + propery + "does not exist");
            return "周林";
        }
    }
};
// proxy demo 
let personProxy = new Proxy(person, handler);

const ProxyDemo  = () => {

    console.log(personProxy.name);
    return (
        <>
            <div>welcome, {personProxy.age}</div>
        </>
    )
}

export default ProxyDemo;