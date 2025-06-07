$(document).ready(function() {
    const quotes = [
        "Acredite em você mesmo e em tudo que você é. Saiba que existe algo dentro de você que é maior que qualquer obstáculo.",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        "Não espere por oportunidades extraordinárias. Agarre ocasiões comuns e as faça grandes.",
        "Sua mente é um jardim. Seus pensamentos são as sementes. Você pode cultivar flores ou ervas daninhas.",
        "A felicidade não é algo pronto. Ela vem de suas próprias ações.",
        "O único modo de fazer um excelente trabalho é amar o que você faz.",
        "A persistência realiza o impossível.",
        "Comece onde você está. Use o que você tem. Faça o que você pode."
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    $("#quote").text(quotes[randomIndex]);
}); 