"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.load = void 0;
const typedoc_1 = require("typedoc");
const paramNameOption = 'namedParamName';
const detectFromCommentsOption = 'detectNamedParamFromComments';
const changeParamTagOption = 'changeNamedParamTag';
const load = (app) => {
    app.options.addDeclaration({
        name: paramNameOption,
        help: 'Specifies the name to replace __namedParameters with, if a @param tag isn’t found.',
        type: typedoc_1.ParameterType.String,
        defaultValue: 'options'
    });
    app.options.addDeclaration({
        name: detectFromCommentsOption,
        help: 'Whether to detect the name of parameters from the documentation comments.',
        type: typedoc_1.ParameterType.Boolean,
        defaultValue: true
    });
    app.options.addDeclaration({
        name: changeParamTagOption,
        help: `Whether to change the name of the @param tag to ${paramNameOption} so documentation is shown for a corresponding __namedParameters parameter. Ignored if ${detectFromCommentsOption} is true.`,
        type: typedoc_1.ParameterType.Boolean,
        defaultValue: true
    });
    let paramName;
    let detectFromComments;
    let changeParamTag;
    app.converter.on(typedoc_1.Converter.EVENT_BEGIN, () => {
        paramName = app.options.getValue(paramNameOption);
        detectFromComments = app.options.getValue(detectFromCommentsOption);
        changeParamTag = app.options.getValue(changeParamTagOption);
        if (!changeParamTag && detectFromComments) {
            app.logger.warn(`${changeParamTagOption} is ignored when ${detectFromCommentsOption} is true`);
        }
    });
    app.converter.on(typedoc_1.Converter.EVENT_CREATE_SIGNATURE, (_, sig) => {
        var _a, _b;
        if (!sig.parameters)
            return;
        for (const [i, param] of sig.parameters.entries()) {
            if (param.name !== '__namedParameters')
                continue;
            else {
                param.name = 'obj';
            }
        }
    });
};
exports.load = load;