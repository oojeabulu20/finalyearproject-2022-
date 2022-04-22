import _ from "lodash"

export function getSum(transaction,type) {
    let sum = _(transaction).groupBy("type").map((objs, key) => {
        if (!type) return _.sumBy(objs, "amount")
        return {
            "type": key,
            "color": objs[0].color,
            "total":_.sumBy(objs,"amount")
        }
    })
        .value()
    return sum;
}

export function getLabels(transaction) {
    let amountTotal = getSum(transaction, "type")
    let overallAmount = _.sum(getSum(transaction))
    let percentage = _(amountTotal).map(objs => _.assign(objs, { percentage: (100 * objs.total) / overallAmount })).value()
    
    return percentage
}

export function UpdateChart(transaction,custom) {

    let bgColor = _.map(transaction, a => a.color)
    bgColor = _.uniq(bgColor)


    let dataValue = getSum(transaction)

    const donutConfig = {
    data: {
        datasets: [{
        data:dataValue,
        backgroundColor:bgColor,
            hoverOffset: 4,
            borderRadius: 30,
            spacing: 10
        }]        
    },
    options: {
        cutout:117
    }

    }
    
    return custom ?? donutConfig
}

export function getTotal(transaction) {
    return _.sum(getSum(transaction))
}