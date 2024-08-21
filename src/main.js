import './style.css';
import Swal from "sweetalert2";


const searchBtn = document.querySelector("#search-button");
const coinInput = document.querySelector("#input-coin")
const coinsList = document.querySelector("#display")

const token = import.meta.env.VITE_TOKEN;

const divStyle = (div, p1, p2) => {
  div.style.backgroundColor = 'rgba(255, 255, 255, .2)';
  div.style.width = '140px';
  div.style.display = 'flex';
  div.style.justifyContent = 'space-between';
  div.style.alignItems = 'center';
  div.style.padding = '5px 10px';
  div.style.borderRadius = '10px';
  p1.style.fontSize = '.9rem';
  p2.style.fontSize = '.9rem';
};


const createCard = (coins) => {
    console.log(coins);
    
    coins.forEach((coin) => {
        
        const cardElement = document.createElement('div');
        cardElement.classList.add('div_card');
        
        const coinName = document.createElement('p');
        coinName.classList.add('coin-name');
        coinName.textContent = coin[0];
        
        const coinValue = document.createElement('p');
        coinValue.classList.add('coin-value');
        coinValue.textContent = coin[1];
        
        cardElement.appendChild(coinName);
        cardElement.appendChild(coinValue);
        
        divStyle(cardElement, coinName, coinValue);
        
        coinsList.appendChild(cardElement);
    });
};

function fetchApi(coin) {
    const url = `https://api.exchangerate.host/live?access_key=fb7cbd03c420454e9b8447fd6434a94f&base=${coin}`;
    return fetch(url)
      .then((response) => response.json())
      .then((data) =>  {
        if (data.error || !data.quotes) {  // Verifica se há erro ou se os dados esperados não estão presentes
          throw new Error('Moeda não encontrada ou erro na API');
        }
        return Object.entries(data.quotes); // Supondo que data.rates contenha as cotações
      } );
  }
  
  function handleSearch() {
    const coin = coinInput.value.trim();
    if (!coin) {
      return Swal.fire({
        icon: "error",
        title: "Opss..",
        text: "Você precisa digitar uma moeda"
      });
    }
    fetchApi(coin)
      .then((response) => {
        if (response && response.length > 0) {
          createCard(response);
        } else {
          Swal.fire({
            icon: "error",
            title: "Opss..",
            text: "Nenhuma moeda encontrada."
          });
        }
      })
      .catch(() => Swal.fire({
        icon: "error",
        title: "Opss..",
        text: "Digite o valor de uma moeda existente."
      }));
  }
  

searchBtn.addEventListener("click", handleSearch);