export const IP_PATTERN =
  /^((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)$/;
export const PHONE_REG = /^1[0-9]{10}$/; // 手机号码
export const EMAIL_REG = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/; // 邮箱
export const ES_INDEX_NAME_REG = /^[a-zA-z_]+$/; // ES 索引名

export const NO_SPACE_REG = /^\S*$/; // 不包含空格
export const NO_ONLY_SPACE_REG = /^(?!(\s+$))/;
export const NO_ONLY_SPACE_MSG = '不支持纯空格';
export const NO_FRONT_BACK_SPACE_REG = /^(?!\s)(?!.*\s$)/;
export const NO_FRONT_BACK_SPACE_MSG = '不支持前后空格';

export const CN_EN_NUMBER_REG = /^[a-zA-Z0-9\u4e00-\u9fa5]+$/; // 中文、英文、数字

export const CN_EN_NUMBER_UNDERLINE_REG = /^[a-zA-Z0-9\u4e00-\u9fa5_]+$/;
export const CN_EN_NUMBER_UNDERLINE_MSG = '仅支持中英文、数字、下划线！';

export const EN_NUMBER_UNDERLINE_REG = /^[a-zA-Z0-9_]+$/;
export const EN_NUMBER_UNDERLINE_MSG = '仅支持英文、数字、下划线！';

export const EN_NUMBER_LINE_REG = /^([a-zA-Z0-9_-]|\/|\.)+$/; // 英文、数字、下划线、中划线、正斜杠

export const EN_NUMBER_LINE_POINT_REG = /^([a-zA-Z0-9_-]|\.)+$/;
export const EN_NUMBER_LINE_POINT_MSG = '仅支持英文、数字、下划线、中划线、点';

export const CN_EN_NUMBER_LINE_POINT_REG = /^([a-zA-Z0-9\u4e00-\u9fa5_-]|\.)+$/; // 中文、英文、数字、横线、下划线、点

export const CN_EN_NUMBER_LINE_SPACE_REG = /^[a-zA-Z0-9\u4e00-\u9fa5_-\s]+$/;
export const CN_EN_NUMBER_LINE_SPACE_MSG =
  '仅支持中英文、数字、下划线、中划线、空格';

export const NOT_CN_REG = /[\u4e00-\u9fa5]+/g; // 非中文

// 一般用于名称
export const NAME_PATTERN = /^[a-zA-Z][a-zA-Z0-9_]*$/; //英文开头，英文、数字、下划线
export const NAME_PATTERN_MSG = '仅支持英文、数字、下划线“_”，且英文开头';

// 指标相关限制
//export const NAME_REG = /^[a-zA-Z0-9_\-，,:|;%$]+(\s*[a-zA-Z0-9_\-，,:|;%$])+$/
export const SPECIAL_CHAR_REG = /^[a-zA-Z0-9_\-，: |;$]+$/;
export const SPECIAL_CHAR_REG_MSG =
  '仅支持大小写字母,数字,下划线,中划线,中文逗号,冒号,竖线,分号,$,空格';
export const CN_SPECIAL_CHAR_REG = /^[a-zA-Z0-9_\-，: |;$\u4e00-\u9fa5]+$/;
export const CN_SPECIAL_CHAR_REG_MSG =
  '仅支持中文,大小写字母,数字,下划线,中划线,中文逗号,冒号,竖线,分号,$,空格';

// 匹配连接
export const HTTP_ADRESS_REG = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
