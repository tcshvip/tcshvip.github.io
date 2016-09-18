/**
 * Created by sunny on 16-9-14.
 */

// 校验手机号
telRuleCheck2 = function (string) {
    var pattern = /^1[34578]\d{9}$/;
    if (pattern.test(string)) {
        return true;
    }
    return false;
};