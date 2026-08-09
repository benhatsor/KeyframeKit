// @ts-check

import * as td from 'typedoc';

/** @param {td.Application} app */
export function load(app) {
    app.converter.on(td.Converter.EVENT_CREATE_SIGNATURE, (_context, sig) => {
        if (!sig.parameters) {
            return;
        }
        for (const param of sig.parameters) {
            if (param.name === '__namedParameters') {
                param.name = 'obj';
            }
        }
    });
}
