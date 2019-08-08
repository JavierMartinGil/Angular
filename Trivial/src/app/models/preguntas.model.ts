export class Pregunta {

    texto: string;
    respuestas: string[];
    respuestaCorrecta: number;

    constructor(pTexto = '', pRespuestas = [], pRespuestaCorrecta = 0) {
        this.texto = pTexto;
        this.respuestas = pRespuestas;
        this.respuestaCorrecta = pRespuestaCorrecta;
    }
}