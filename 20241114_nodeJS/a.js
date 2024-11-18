const a1 = 1 ;
const a2 = 2 ;
let a3 = 3;
const a4 = [100,200];

const add = () =>{
    return a1 + a2 + a3 ;
};
const log = () =>{
    console.log('a.js a1: ' + a1);
    console.log('a.js a2: ' + a2);
    console.log('a.js a3: ' + a3);
    console.log('a.js a4: ' + a4);
};

const noexport = () =>{
    console.log('OVO/');
}

const test = (value) =>{
    a3 = value;
}

// 一個檔案只能有一個default的匯出 需要多個的話可以用{}
export default{
    a1, a2, a3, a4, add, log, test,
}