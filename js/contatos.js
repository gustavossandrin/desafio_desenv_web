const contatos = [
  {
    nome: "CVV - Centro de Valorização da Vida",
    telefone: "188",
    site: "https://www.cvv.org.br",
    descricao: "Atendimento voluntário e gratuito 24h para apoio emocional."
  },
  {
    nome: "CAPS (Centro de Atenção Psicossocial)",
    telefone: "(51) 3600-7175",
    site: "https://www.gov.br/saude/pt-br/assuntos/saude-mental/caps",
    descricao: "Unidades públicas para atendimento em saúde mental."
  },
  {
    nome: "Disque Saúde Mental (Ministério da Saúde)",
    telefone: "136",
    site: "https://www.gov.br/saude",
    descricao: "Informações sobre serviços públicos de saúde mental."
  },
  {
    nome: "Mapa da Saúde Mental",
    site: "https://www.mapasaudemental.com.br",
    descricao: "Mapa colaborativo com locais de atendimento psicológico gratuito ou acessível."
  }
];

$(document).ready(function () {
  const container = $("#contactsContainer");
  contatos.forEach((contato) => {
    const card = $(`
      <div class="col-md-6 col-lg-4 mb-4">
        <div class="card custom-card p-3 h-100">
          <h5 class="card-title">${contato.nome}</h5>
          ${contato.telefone ? `<p class="card-text"><strong>Telefone:</strong> ${contato.telefone}</p>` : ""}
          <p class="card-text"><strong>Site:</strong> <a href="${contato.site}" target="_blank">${contato.site}</a></p>
          <p class="card-text">${contato.descricao}</p>
        </div>
      </div>
    `);
    container.append(card);
  });
});