import { buildMessage, ValidateBy } from '../common/ValidateBy';
export var IS_NUMBER = 'isNumber';
/**
 * Checks if a given value is a number.
 */
export function isNumber(value, options) {
    if (options === void 0) { options = {}; }
    if (typeof value !== 'number') {
        return false;
    }
    if (value === Infinity || value === -Infinity) {
        return !!options.allowInfinity;
    }
    if (Number.isNaN(value)) {
        return !!options.allowNaN;
    }
    if (options.maxDecimalPlaces !== undefined) {
        var decimalPlaces = 0;
        if (value % 1 !== 0) {
            decimalPlaces = value.toString().split('.')[1].length;
        }
        if (decimalPlaces > options.maxDecimalPlaces) {
            return false;
        }
    }
    return Number.isFinite(value);
}
/**
 * Checks if a value is a number.
 */
export function IsNumber(options, validationOptions) {
    if (options === void 0) { options = {}; }
    return ValidateBy({
        name: IS_NUMBER,
        constraints: [options],
        validator: {
            validate: function (value, args) { return isNumber(value, args === null || args === void 0 ? void 0 : args.constraints[0]); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + '$property must be a number conforming to the specified constraints'; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsNumber.js.map