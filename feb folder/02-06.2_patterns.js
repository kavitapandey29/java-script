/**Q
 * 1
 * 12
 * 1234
 * 12345
 */
/**
 * variable n = 5
 * loop surrounding row
 * loop surrounding col ; col row tak ; col + by 1
 * string empty
 * string ke andar column ki value
 * string ke andar new line 
 * log with string
 */
// let n =5;
// for(let row=1; row<=n; row++){
//     let str="";
//     for(let col=1;col<=row;col++){
//      str=str+col;
//     }
//     str=str+"\n"
//     console.log(str);
// }

/**Q
 * 1
 * 12
 * 1234
 * 12345
 */

/**
 * variable 5 baar
 * row mai ghumega
 * empty string
 * variable with the value of one
 * column ko row no. tak column++
 * string concinate with one
 * one ki value 1 se plus
 * string ke andar new line "\n" escape character
 * log the string
 */
//  let m= 5;
//  for (let row=1;row<=m; row++){
//     let str="";
//     let one =1;
//     for(let col=1;col<=row; col++){
//         str=str+one;
//         one=one+1
//     }
//     str=str+"\n"
//     console.log(str);
//  }

 /**
  * Q print this pattern
  *             *   *
  *              * *
  *               *
  *              * *
  *             *   *
  */

 /**
  *n variable mai no.(value 5)
  * row-ram-1; 1<=5 true
  * col-var-1(value); 1<=n true
  * 78>> 1==1 true || 1+1==5+1 false
  * or operater 1 bhi condition true hai then loop ke andar
  * row-2 2<=5 true reapeat the process
  * process and the log it will print 5 row with 5 col star
  * if (row==col) row and column same hai toh star print ho 
  * || or row +col == n+1 6 ho jaye toh bhi star print ho
  * else(" ") space 
  */
//  let n =5;
//  for(let row=1;row<=n;row++){
//     for(let col=1;col<=n;col++){
//         if (row==col || row+col==n+1){
//         process.stdout.write("*")
//     } else {
//         process.stdout.write(" ")
//     }

//     }
//     console.log()
//  }

 //Q print 20 fibonacci number 
/**
 * fibonacci number= 0+1=1 1+1=2 2+3=5  3+5=8 5+8=13
 * n variable =20 , fn variable =0 , sn variable=1;
 * 
 * i=1 ; 1<=20  true           i=2; 2<=20  true
 * fn=0;                       fn=0;
 * nn variable= 0+1=1          1+1=2
 * 1                           1
 * 1=1                         1=2
 */

//  let n=20;
//  let fn=0;
//  let sn=1;
//  for (let i=1;i<=n;i++){
//     console.log(fn);
//     let nn=fn+sn;
//     fn=sn;
//     sn=nn;
//  }

/**
 * Q.print this    *     * * * *
    pattern>>>     *     *
                   *     *
                   * * * * * * *
                         *     *
                         *     *
                   * * * *     *
 */
/**
 * row_____________________________
 * column|
 * 2 loops one for row and one for column
 * process.stout > for same line
 * console. log > enter
 * if row 1 hai , else if row<=4 , else if row==4 , else if row<7 , else last row
 *  then handle the column > with(*) and space ( ) with the tab(\t)
 */

    let n=7;
    for( let row=1;row<=n;row++){
     for( let col=1;col<=n;col++){
          if(row==1){
            if (col<=1 || col>=4){
                  process.stdout.write("*\t")
            }else{
                  process.stdout.write("\t")  
            }

          }else if(row<4){
            if(col<=1||col==4){
                  process.stdout.write("*\t")

            }else{
                  process.stdout.write("\t")  
            }

          }else if (row==4){
            if (col<=7){
                  process.stdout.write("*\t")
            }

          }else if(row<7){
            if (col==4||col==7){
                  process.stdout.write("*\t")  
            }else{
                  process.stdout.write("\t")   
            }

          }else{
            if (col<=4||col==7){
                  process.stdout.write("*\t")
            }
            else{
                  process.stdout.write("\t")  
            }
          }
     }
     console.log();
    }

     console.log();
    //or
    /**
     * Math.floor7/2 3 so 3+1=4
     */

    let nu=7;
    for( let row=1;row<=nu;row++){
     for( let col=1;col<=nu;col++){
          if(row==1){
            if (col<=1 || col>=Math.floor(nu/2+1)){
                  process.stdout.write("*\t")
            }else{
                  process.stdout.write("\t")  
            }

          }else if(row<Math.floor(nu/2+1)){
            if(col<=1||col==Math.floor(nu/2+1)){
                  process.stdout.write("*\t")

            }else{
                  process.stdout.write("\t")  
            }

          }else if (row==Math.floor(nu/2+1)){
            if (col<=nu){
                  process.stdout.write("*\t")
            }

          }else if(row<n){
            if (col==Math.floor(nu/2+1)||col==nu){
                  process.stdout.write("*\t")  
            }else{
                  process.stdout.write("\t")   
            }

          }else{
            if (col<=Math.floor(nu/2+1)||col==nu){
                  process.stdout.write("*\t")
            }
            else{
                  process.stdout.write("\t")  
            }
          }
     }
     console.log();
    }
    console.log();
/**
 * Q.print this
 * A
 * AA
 * AAA
 * AAAA
 * AAAAA
 */
/**
 * ASCII CODE > amarican Standard code for information Interchange A to Z
 */

let numb=5;
for(let row=1; row<=numb; row++){
      for (let col=1;col<=row;col++){
            process.stdout.write
            ("A\t")
      }
   console.log();   
}
