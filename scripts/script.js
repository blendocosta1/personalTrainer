// Script WhatsApp 
function enviarWhatsApp(e) {
      e.preventDefault();
      const nome = document.getElementById("nome").value.trim();
      const telefone = document.getElementById("telefone").value.trim();
      const email = document.getElementById("email").value.trim();
      const numero = "5591984409973"; // Substitua pelo número real do WhatsApp
      const mensagem = `Olá! Me chamo ${nome} meu e-mail: ${email}. Quero agendar minha avaliação e iniciar meus treinos.`;
      window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`, "_blank");
    }