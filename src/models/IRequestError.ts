/**
 * Интерфейс ошибки RequestSender.
 */
 export default interface IRequestError<TData = any> extends Error {
    // response?: boolean,
    response?: TData
}