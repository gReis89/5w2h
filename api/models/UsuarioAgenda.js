/**
 * UsuarioAgenda.js
 *
 * @description :: Model responsável por armazenar os contatos de um usuário
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    tableName: 'usuario_agenda',
    autoPK: false,
    attributes: {
        uag_codigo: {
            type: 'integer',
            primaryKey: true,
            unique: true
        },
        uag_usuario: {
            model: 'usuario',
            required: true
        },
        uag_contato: {
            model: 'usuario',
            required: true
        }
    },
    autoCreatedAt: 'uag_data_insercao',
    autoUpdatedAt: false
};
