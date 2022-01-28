// let re;

// re = /hello/i;
// // re = /hello/g;
// // console.log(re);
// // console.log(re.source);

// // const result = re.exec("hello World");

// // console.log(result);
// // console.log(result[0]);

// // const result = re.test('Hello kk');
// const string = 'aa hello kk';
// // const result = string.match(re);
// // const result = string.search(re);
// const nstr = string.replace(re,'bello');


// console.log(nstr);

// Metacharacters

let re;
re=/hello/;
re=/hello/i;

re = /^h/i; //must start with
re =/d$/;//must end with

re =/^hello$/i;

re =/h.llo/i; // maches any one character
re =/h*llo/i; // maches any character 0 or more

re = /gre?a?y/;//optional charcter
re = /gre?a?y\?/;//escape char

//[] brackets ---> character sets

re = /gr[ae]y/i;//must be a or e
re = /gr[^ae]y/i;//anything except a or e
re = /gr[a-z]y/i;//anything lowercase
re = /gr[A-Za-z]y/i;//any letter any case
re = /gr[0-9]y/i;//any digit

// {} quantifiers

re = /Hel{2}o/i; // l must occur 2 times
re = /Hel{1,5}o/i;//range

// () grouping

re = /([0-9]x){3}/;


//shorthand char classes

re = /\w/;//word char alphanumberic char
re = /\w+/;//once or more
re = /\W/;//anything but word char alphanumberic char
re = /\d+/; //match any digit
re = /\D/;//non digit
re = /\s/; //white space

//assertions

re = /x(?=y)/;//only if x follwed by y



const str ='xcy';
const result =re.exec(str);
console.log(result);


function reTest(re,str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`);
    }else{
        console.log(`${str} does not match ${re.source}`);
    }
}

reTest(re,str);