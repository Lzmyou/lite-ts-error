/**
 * 错误码
 */
export enum ErrorCode {
    /**
     * api不存在
     */
    api = 501,
    /**
     * 认证失败
     */
    auth = 502,
    /**
     * 订单错误
     */
    orderError = 9,
    /**
     * 服务端异常
     */
    panic = 599,
    /**
     * 重定向
     */
    redirect = 506,
    /**
     * 请求超时
     */
    timeout = 504,
    /**
     * 提示
     */
    tip = 1,
    /**
     * 数值类型不足
     */
    valueTypeNotEnough = 505,
    /**
     * 请求数据不符合条件
     */
    verify = 503,
    /**
     * 等待锁
     */
    waitLock = 507,
    /**
     * 警告
     */
    warning = 2,
}
