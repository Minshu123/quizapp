import React from 'react'
import quest from "./Data.json"
class Hold{
    constructor()
    {
        this.arr=new Array(quest.length)
        for(let i=0;i<quest.length;i++)
        {
            this.arr[i]={"id":i,
                "response":""
            }
        }
    }
}


export default new Hold();
