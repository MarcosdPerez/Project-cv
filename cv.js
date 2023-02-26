


var x = document.getElementById("id01");
contador=0;


const texto = document.getElementById('id01');


window.addEventListener('scroll', () => {
 
  if (window.scrollY > 20) {
    texto.innerText = 'MARCOS DAMIAN PEREZ';
  } else {
    texto.innerText = 'BIENVENIDOS';
  }
});

  const form = document.getElementById("formulario");
  form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const query = document.getElementById("query").value;

   

    console.log("Nombre:", firstName);
    console.log("Apellido:", lastName);
    console.log("Consulta:", query);

    
    form.reset();

    
  });
 const vent = document.getElementById("formulario");
 vent.addEventListener("submit", function(click) {
    alert("Tu solicitud fue enviada con exito");
    
  });

