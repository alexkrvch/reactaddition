export function getQueryParams (params: OptionalRecord<string, string>): string {
    const searchParams = new URLSearchParams(window.location.search)

    Object.entries(params).forEach(([name, value]) => {
        if (value !== undefined) {
            searchParams.set(name, value)
        }
    })

    return `?${searchParams.toString()}`
}

/**
 * Function for addition params to browser history
 * @param params
 * simple template {name: 'value'} => ?name=value
 * multiple template {name: 'value', second: 'auth'} => ?name=value&second=auth
 */

export function addQueryParams (params: OptionalRecord<string, string>): void {
    window.history.pushState(null, '', getQueryParams(params))
}
