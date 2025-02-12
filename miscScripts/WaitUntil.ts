/**Usage: "await WaitUntil( ()=> booleanCondition );"
*/
export function WaitUntil(conditionFunction: Function) {
    const poll = (resolve: any) => {
        if (conditionFunction()) {
            resolve();
        }
        else {
            setTimeout(() => poll(resolve), 400);
        }
    }

    return new Promise(poll);
}