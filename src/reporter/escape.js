const entities = require('entities');
const stripAnsi = require('strip-ansi');

function removeInvalidChars(value) {
    return value.replace(/[\r\b\f\0]/g, '');
}

function replaceInvalidChars(value) {
    return value.replace(/[\t\v\n]/g, ' ');
}

module.exports = value => {
    if (typeof value !== 'string') return '';
    return entities.encodeXML(
        stripAnsi(removeInvalidChars(replaceInvalidChars(value)))
    );
};
