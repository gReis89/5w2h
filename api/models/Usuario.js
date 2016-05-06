/**
 * Usuario.js
 *
 * @description :: Modelo de usuarios
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    autoPK: false,
    tableName: 'usuario',
    attributes: {
        usu_codigo: {
            type: 'integer',
            primaryKey: true,
            unique: true
        },
        usu_nome: {
            type: 'string',
            required: true,
            size: 100
        },
        usu_email: {
            type: 'string',
            required: true,
            size: 100
        },
        usu_senha: {
            type: 'string',
            required: true,
            size: 32
        },
        usu_facebook_id: {
            type: 'string',
            size: 200
        },
        usu_data_nascimento: {
            type: 'date',
            size: 100
        },
        usu_profissao: {
            type: 'string',
            size: 50
        },
        usu_telefone: {
            type: 'string',
            size: 11
        },
        usu_cidade: {
            type: 'string',
            size: 100
        },
        usu_estado: {
            type: 'string',
            size: 2
        },
        usu_cliente_gold: {
            type: 'string',
            size: 1
        },
        usu_receber_email: {
            type: 'string',
            size: 1
        },
        usu_contador_acesso: {
            type: 'integer',
        },
        contatos: {
            collecition: 'usuario',
            via: 'uag_contato',
            through: 'usuarioagenda'
        }
    },
    autoCreatedAt: 'uso_data_insercao',
    autoUpdatedAt: 'uso_data_edicao'
};
