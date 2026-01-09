document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('whatsapp');
    if (!input) return;

    input.addEventListener('input', function (e) {
        let valor = e.target.value.replace(/\D/g, '');

        // limita a 11 dígitos (DDD + 9 dígitos)
        if (valor.length > 11) valor = valor.slice(0, 11);

        // aplica máscara
        if (valor.length >= 3) {
            e.target.value = `(${valor.slice(0, 2)}) ${valor.slice(2, 3)} ${valor.slice(3, 7)}${valor.length > 7 ? '-' + valor.slice(7) : ''}`;
        } else if (valor.length > 0) {
            e.target.value = `(${valor}`;
        } else {
            e.target.value = '';
        }
    });

    // BLOQUEIA letras no teclado
    input.addEventListener('keydown', function (e) {
        const permitido = [
            'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'
        ];

        if (permitido.includes(e.key)) return;

        if (!/\d/.test(e.key)) {
            e.preventDefault();
        }
    });
});
function enviarWhatsapp() {
    const nomeInput = document.getElementById('name');
    const whatsappInput = document.getElementById('whatsapp');

    if (!nomeInput || !whatsappInput) {
        console.error('Inputs não encontrados');
        return;
    }

    const nome = nomeInput.value.trim();

    if (!nome) {
        alert('Por favor, informe seu nome.');
        return;
    }

    const mensagem = encodeURIComponent(
        `Olá! Meu nome é ${nome} e gostaria de saber mais sobre o e-commerce com app.`
    );

    window.open(
        'https://wa.me/5561991865680?text=' + mensagem,
        '_blank'
    );
}
