// CONNECT TO API 
  var obj; 
  var aeroport;
  var objet;
  

	// Set up our HTTP request
	var xhr = new XMLHttpRequest();

// Setup our listener to process completed requests
	xhr.onload = function () {

	// Process our return data
		if (xhr.status >= 200 && xhr.status < 300) {
		// Runs when the request is successful
		console.log(JSON.parse(xhr.responseText));
		var posts = JSON.parse(xhr.responseText);
		
	

		} else {
		// Runs when it's not
			console.log(JSON.parse(xhr.responseText));
		}

	};

// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
	xhr.open('GET', 'http://localhost/bdd');
	xhr.send();

      


      class Cart {

        constructor(nbr_articles,total_price,tab_article){

          this.nbr_articles = nbr_articles;
          this.total_price = total_price;
          this.tab_article = [];
        }

        addArticleToCart(price)
        {
          this.nbr_articles+=1;
          this.total_price+= price;
        }

        printCart()
        {

        }
      }
      var nbArticles =0;
      var Price= 0;
      var CART = new Cart();
      CART.nbArticles = 0;
      CART.total_price = 0;
      CART.tab_article = [];



       function addPrice(price)
      {
        Price+=price;
        CART.total_price+=price;
        //console.log(CART.nbArticles);
        //updateCart();
      }
   
      function addArticle(price)
      {
        nbArticles= nbArticles +1;
        CART.nbArticles = CART.nbArticles+1;
        //console.log(CART.nbArticles);

        addPrice(price)
      }

      function addRefArticle(id)
      {
        CART.tab_article.push(id);
        //console.log(CART.tab_article);

      }


    

      
      var billetJson = {
          "billets":[
          {
            "id":0,
            "code_depart":"JFK",
            "nom_depart":"New york",
            "code_arrivee":"CDG",
            "nom_arrivee":"Paris",
            "prix":300
          },
          {
            "id":1,
             "code_depart":"CDG",
             "nom_depart":"Paris",
             "code_arrivee":"JFK",
             "nom_arrivee":"New York",
             "prix":200

          },
          {
             "id":2,
             "code_depart":"DTW",
             "nom_depart":"Detroit",
             "code_arrivee":"CDG",
             "nom_arrivee":"Paris",
             "prix":500
          },
          {
             "id":3,
             "code_depart":"JFK",
             "nom_depart":"New York",
             "code_arrivee":"DTW",
             "nom_arrivee":"Detroit",
             "prix":700

          }
          ]
        }
     
      
      //document.getElementById("").innerHTML= cart.nbr_articles;
      // boucle pour creer les billets // 
      
     obj = billetJson;
      for (let i = 0; i < 4; i++) {

           //console.log(obj.billets[i].code_depart);
           document.open();
           document.write("<p>" +obj.billets[i].nom_depart  +" "+obj.billets[i].nom_arrivee + " " +
           obj.billets[i].prix + "€"+"</p>" + "<button id="+i+">ajouter au panier</button>");

          

      }
     
      // ajouter actions aux boutons crée // 
      button0 = document.getElementById("0");
      button0.addEventListener("click",function(){addArticle(obj.billets[0].prix);addRefArticle(obj.billets[0].id);});

      button1 = document.getElementById("1");
      button1.addEventListener("click",function(){addArticle(obj.billets[1].prix);addRefArticle(obj.billets[1].id);});

      button2 = document.getElementById("2");
      button2.addEventListener("click",function(){addArticle(obj.billets[2].prix);addRefArticle(obj.billets[2].id);});

       button3 = document.getElementById("3");
      button3.addEventListener("click",function(){addArticle(obj.billets[3].prix);addRefArticle(obj.billets[3].id);});
      
      function updateCart()
      {
            var string = "";
            document.getElementById("cart").innerHTML = CART.total_price;
            document.getElementById("article").innerHTML = CART.nbArticles;
            
            // on affiche les différents articles

            for(let i=0;i<CART.nbArticles;i++)
            {
                string += "<br>"+obj.billets[CART.tab_article[i]].nom_depart +" "+obj.billets[CART.tab_article[i]].nom_arrivee +" "+ obj.billets[CART.tab_article[i]].prix+ "€";

                console.log(string);
                
                //document.getElementById("list_articles").innerHTML = string;


            }
            document.getElementById("list_articles").innerHTML = string;
             //document.getElementById("list_articles").innerHTML = obj.billets[CART.tab_article[i]].nom_depart;
              //document.getElementById("list_articles").innerHTML = string;
      }

      function pay()
      {
        if(CART.nbArticles >0)
        {
           alert("validez et payez la commande :");
           reinitialize();

        }
        else
        {
          alert("votre panier est vide.");
        }
        

      }

      function reinitialize()
      {
        CART.nbArticles =0;
        CART.total_price = 0;
        updateCart();
      }



     button0.addEventListener("click",function(){updateCart();});
     button1.addEventListener("click",function(){updateCart();});
     button2.addEventListener("click",function(){updateCart();});
     button3.addEventListener("click",function(){updateCart();});

     buttonCommands = document.getElementById("confirm-command");
     buttonCommands.addEventListener("click",function(){pay();});
