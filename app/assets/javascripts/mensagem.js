var Mensagens = new (function () {
    var velocidade = 200;
    var duracao = 5000;

    this.Erro = function (mensagem) {
        var div = '<div class="alert alert-error">'
            + '<a class="close" data-dismiss="alert">×</a>'
                + mensagem + '</div>';

        var existente = $('#page_mensagens_container .alert-error');
        if (existente.length > 0) removerAlerta(existente, adicionarAlerta(div));
        else adicionarAlerta(div);
    };

    this.Normal = function (mensagem) {
        var div = '<div class="alert alert-info">'
            + '<a class="close" data-dismiss="alert">×</a>'
                + mensagem + '</div>';

        var existente = $('#page_mensagens_container .alert-info');
        if (existente.length > 0) removerAlerta(existente, adicionarAlerta(div));
        else adicionarAlerta(div);
    };

    this.Sucesso = function (mensagem) {
        var div = '<div class="alert alert-success">'
            + '<a class="close" data-dismiss="alert">×</a>'
                + mensagem + '</div>';

        var existente = $('#page_mensagens_container .alert-success');
        if (existente.length > 0) removerAlerta(existente, adicionarAlerta(div));
        else adicionarAlerta(div);
    };

    function removerAlerta($alerta, callback) {
        $alerta.hide(velocidade, function () {
            $alerta.remove();
            if (callback != undefined) callback();
        });
    }

    function adicionarAlerta(conteudo, callback) {
        var $alerta = $(conteudo);
        $alerta.hide();
        $('#page_mensagens_container').append($alerta);
        $alerta.show(velocidade, callback);
        setTimeout(function () {
            removerAlerta($alerta);
        }, duracao);
    }
})();

$(document).ready(function () {
    if ($('#page_erro').length > 0) {
        var erro = $('#page_erro').val();
        Mensagens.Erro(erro);
    }

    if ($('#page_mensagem').length > 0) {
        var msg = $('#page_mensagem').val();
        Mensagens.Normal(msg);
    }

    if ($('#page_sucesso').length > 0) {
        var suc = $('#page_sucesso').val();
        Mensagens.Sucesso(suc);
    }
});