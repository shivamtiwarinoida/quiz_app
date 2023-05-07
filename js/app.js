const question = [
    {
        'que':'12*13= ?',
        'a':'156',
        'b':'124',
        'c':'158',
        'd':'120',
        'correct':"a"
    }
    ,
    {
        'que':'12*4+11= ?',
        'a':'48',
        'b':'51',
        'c':'67',
        'd':'59',
        'correct':"d"
    }
    ,
    {
        'que':'54/9+65= ',
        'a':'23',
        'b':'44',
        'c':'71',
        'd':'56',
        'correct':"c"
    }
    ,
    {
        'que':'111x11= ',
        'a':'123',
        'b':'1221',
        'c':'1231',
        'd':'1234',
        'correct':"b"
    }
    ,
    {
        'que':'44x2+(11-2) = ',
        'a':'97',
        'b':'34',
        'c':'45',
        'd':'67',
        'correct':"a"
    }
]


let ind = 0;
let total=question.length;
let right=0;
let wrong=0;

const quesbox=document.getElementById("quesbox");
const quesinp=document.querySelectorAll('.option');


const endQuiz= ()=>{
    document.getElementById("box").classList.add('closeb');
    let res=document.getElementById('res');
    console.log(right);
    res.innerHTML=right;
    document.getElementById("res2").classList.add('openb');
    alert("you scored "+right +"out of "+total +" questions");
}

const loadques=()=>{
    if(ind==total){
        return endQuiz();
    }

    const data=question[ind];
    //console.log(data);
    quesbox.innerText=`${ind+1} > ${data.que}`;
    quesinp[0].nextElementSibling.innerText=data.a;
    quesinp[1].nextElementSibling.innerText=data.b;
    quesinp[2].nextElementSibling.innerText=data.c;
    quesinp[3].nextElementSibling.innerText=data.d;
}   

const getAns = ()=>{
    let ansswer;
    quesinp.forEach(
        (input)=>{
            if(input.checked){
                console.log(input.value);
                answer=input.value;
            }
        }
    )

    return answer;
}

const reset= ()=>{
    quesinp.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}


const submitQuiz=()=>{
    const ans=getAns();
    console.log(ans);

    
    const data=question[ind];
    if(ans == data.correct){
        right++;
        //console.log("right");
    }
    else{
        wrong++;
        //console.log("wrong");
    }
    ind=(ind+1);
    loadques();
    reset();
}


loadques();