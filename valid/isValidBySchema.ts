import Ajv from "ajv";

const ajv = new Ajv({ allErrors: true });

const ERR_DATA = "Wrong data";
const ERR_SCHEMA = "Wrong schema";

const RESULT = {
  dataPath: "",
  keyword: "",
  message: "",
  params: {},
  schemaPath: "",
};

/**
 * Validate data by schema
 * @param {*} data
 * @param {Object} schema
 * @param {Boolean=false} asText
 * @return {Boolean|Object|String}
 * @link http://epoberezkin.github.io/ajv/
 * @example fnIsValidBySchema(isNaN, { type: 'number', }, true) ➜ 'data should be number'
 * @example fnIsValidBySchema(255, { type: 'number', }, true) ➜ ''
 */
function isValidBySchema(data, schema, asText = false) {
  let isValid = false;
  let fnValidate = null;
  try {
    fnValidate = ajv.compile(schema);
  } catch (errorCompile) {
    return asText ? ERR_SCHEMA : [Object.assign(RESULT, { message: ERR_SCHEMA })];
  }
  try {
    isValid = fnValidate(data);
  } catch (errorValidation) {
    return asText ? ERR_DATA : [Object.assign(RESULT, { message: ERR_DATA })];
  }
  if (!isValid) {
    return asText ? ajv.errorsText(fnValidate.errors) : fnValidate.errors;
  }
  return asText ? "" : true;
}

export default isValidBySchema;
