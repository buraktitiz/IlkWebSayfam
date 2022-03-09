        /* *********** Boolean Veri Türü İle Çalışmak ********** */

        /* 0 ve 1'i Anlamak */
        let isActive = false //0
        isActive = true //1
        console.log(isActive)

        let userName;
        let isUserName = Boolean(userName)
        console.log(isActive)

        Boolean("11") //True
        Boolean("0") //True
        Boolean("") //false

        userName = "user"

        console.log("User Name: ", Boolean(userName))
        /* Boolean'ın içinde bir ifade varsa true veriyor, bir ifade yoksa false veriyor */


        /* 0, -0, null, false, NaN, undefined, ("") -> */

        Boolean(0) //false
        Boolean(-0) //false
        Boolean(-0.1) //true
        /* içine değer varsa ve 0'dan farklıysa true gönderiyor. Fakat içerisi dolu olarak sadece 0(sıfır) varsa false gönderiyor */

        Boolean(0 === 0) //true

        Boolean(userName.length>0) //true