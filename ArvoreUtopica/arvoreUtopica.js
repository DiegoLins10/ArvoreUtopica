//@Author Diego Lins

function alturaArvoreUtopica(num){
    var altura = 1                                      
    for(var i = 1; i<=num; i++){
       if(num == 0){
         altura = 1
       }
       else if(i%2 == 0){
         altura += 1;
       }else if(i%2 == 1){
         altura *= 2;
       }
    }
    return altura;
  }
  console.log(alturaArvoreUtopica(2))