// portfolio.js

// Cette fonction est appelée lorsque l'icône "bi bi-plus-circle" est cliquée
function showPortfolioDetails(itemId) {
    var portfolioDetailsContainer = document.getElementById("portfolio-details");
    console.log(portfolioDetailsContainer);
    
    // Ici, vous pouvez charger dynamiquement les détails du portefeuille en fonction de l'itemId
    // Vous pouvez utiliser un objet, un tableau ou une autre source de données pour obtenir les détails appropriés
  
    // Exemple de données de détails du portefeuille
    var portfolioData = {
      title: "Exemple de projet " + itemId,
      category: "Web design",
      client: "Société XYZ",
      projectDate: "01 mars 2020",
      projectURL: "www.example.com",
      description: "Ceci est un exemple de détail de portefeuille pour l'élément " + itemId + ". Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius."
    };
  
    // Mettez à jour le contenu du conteneur avec les détails du portefeuille
    portfolioDetailsContainer.innerHTML = `
      <h3>${portfolioData.title}</h3>
      <ul>
        <li><strong>Category</strong>: ${portfolioData.category}</li>
        <li><strong>Client</strong>: ${portfolioData.client}</li>
        <li><strong>Project date</strong>: ${portfolioData.projectDate}</li>
        <li><strong>Project URL</strong>: <a href="${portfolioData.projectURL}">${portfolioData.projectURL}</a></li>
      </ul>
      <p>${portfolioData.description}</p>
    `;
  }
  
  // Obtenez tous les boutons "bi bi-plus-circle" et ajoutez un gestionnaire d'événements de clic à chacun
  var plusIcons = document.querySelectorAll(".bi.bi-plus-circle");
  
  for (var i = 0; i < plusIcons.length; i++) {
    plusIcons[i].addEventListener("click", function (event) {
      // Obtenez l'identifiant unique de l'élément de portefeuille associé
      var itemId = event.target.getAttribute("data-portfolio-id");
  
      if (itemId) {
        showPortfolioDetails(parseInt(itemId));
      }
    });
  }
  