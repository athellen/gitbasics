//removing the first and last characters from a string
    function removeChar(str){
        let splitstr = str.split('');
        return splitstr.filter((e,i) => 
       !((i === 0) || (i === length - 1))).join('');
    }
       console.log(removeChar('microservice'));

       //alternative
       function removeChar(str) {
        return str.slice(1, -1);
      }