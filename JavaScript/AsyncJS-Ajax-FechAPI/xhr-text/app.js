document.getElementById('button').addEventListener('click', loadData);

function loadData(e){

  const xhr = new XMLHttpRequest();
  
  xhr.open('GET','data.txt',true);
  // console.log(xhr.readyState);

xhr.onprogress = function(){
  console.log(xhr.readyState);
}

  xhr.onload = function(){
    if(this.status === 200){
      console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  xhr.onerror = function(){
    console.log('error');
  }

  // xhr.onreadystatechange = function(){
  //   if(this.status === 200 && this.readyState === 4){
  //     console.log(this.responseText);
  //     console.log(xhr.readyState);
  //   }
  // }

  xhr.send();
}