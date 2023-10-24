// portfolio.js

// Fonction pour afficher les détails du portefeuille
function showPortfolioDetails(portfolioData) {
    var portfolioDetailsContainer = document.getElementById("portfolio-details");
    
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

  // Exemple de données de détails du portefeuille
    var examplePortfolioDetails = {
        title: "Exemple de projet",
        category: "Web design",
        client: "Société XYZ",
        projectDate: "01 mars 2020",
        projectURL: "www.example.com",
        description: "Ceci est un exemple de détail de portefeuille. Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius."
    };

  // Appelez la fonction pour afficher les détails du portefeuille
    showPortfolioDetails(examplePortfolioDetails);
