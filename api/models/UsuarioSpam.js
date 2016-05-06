/**
 * UsuarioSpam.js
 *
 * @description :: Model responsável por armazenar os usuários que não querem mais receber notificação de uma tarefa
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    tableName: 'usuario_spam',
    autoPK: false,
    attributes: {
        autoPK: false,
        attributes: {
            usp_codigo: {
                type: 'integer',
                primaryKey: true,
                unique: true
            },
            tar_codigo: {
                type: 'integer',
                required: true
            },
            usu_codigo: {
                type: 'integer',
                required: true
            }
        },
        autoCreatedAt: 'usp_data_insercao',
        autoUpdatedAt: false
    }
};
