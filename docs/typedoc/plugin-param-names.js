// @ts-check

import * as td from "typedoc";

/** @param {td.Application} app */
export function load(app) {
    app.converter.on(td.Converter.EVENT_CREATE_SIGNATURE, (context, sig) => {
        if (!sig.parameters) {
            return;
        }
        for (const [i, param] of sig.parameters.entries()) {
            if (param.name === '__namedParameters') {
                param.name = 'obj';
            }
        }
    });
}
