var input = prompt('enter your table number ');


for (i=1; i<=input; i++ ){
    
    for (j=1; j<11; j++) {

    console.log(i + ' ' + '*' + ' ' + j + ' ' + "=" + '' + i * j);
}
}