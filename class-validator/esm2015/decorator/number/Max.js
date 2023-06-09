import { buildMessage, ValidateBy } from '../common/ValidateBy';
export const MAX = 'max';
/**
 * Checks if the first number is less than or equal to the second.
 */
export function max(num, max) {
    return typeof num === 'number' && typeof max === 'number' && num <= max;
}
/**
 * Checks if the value is less than or equal to the allowed maximum value.
 */
export function Max(maxValue, validationOptions) {
    return ValidateBy({
        name: MAX,
        constraints: [maxValue],
        validator: {
            validate: (value, args) => max(value, args === null || args === void 0 ? void 0 : args.constraints[0]),
            defaultMessage: buildMessage(eachPrefix => eachPrefix + '$property must not be greater than $constraint1', validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=Max.js.map