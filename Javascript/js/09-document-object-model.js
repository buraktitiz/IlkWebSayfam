/* DOM (Document Object Model) İle Çalışmak */
/* https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model */


/* Belge Nesne Modeli ( DOM ), bir belgenin yapısını (bir web sayfasını temsil eden HTML 
    gibi) bellekte temsil ederek web sayfalarını komut dosyalarına veya programlama dillerine 
    bağlar. HTML, SVG veya XML belgelerini nesne olarak modellemek temel JavaScript dilinin 
    bir parçası olmasa da, genellikle JavaScript'e atıfta bulunur.
    
    DOM, mantıksal bir ağaç içeren bir belgeyi temsil eder. Ağacın her dalı bir düğümde biter 
    ve her düğüm nesneler içerir. DOM yöntemleri, ağaca programlı erişime izin verir. Onlarla 
    belgenin yapısını, stilini veya içeriğini değiştirebilirsiniz.
    
    Düğümlere ayrıca olay işleyicileri eklenebilir. Bir olay tetiklendiğinde, olay 
    işleyicileri yürütülür */

    console.log(document.URL)
    console.log(document.baseURI)
    console.log(document.location)
    console.log(document.location.hostname)
    console.log(document.location.pathname) // dosyanın ismini direkt olarak görebiliyoruz.

    console.log(document.body)
    console.log(document.head)


    document.body.style.backgroundColor="aqua"
