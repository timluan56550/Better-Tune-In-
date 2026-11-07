let currentAnomaly=null;
let currentEvidence=[]

function getRandomFrequency(range){
    //example 500-700 gets 500 and 700, output is a STRING
    const [minimum, maximum]=range.split("-")
    const min= parseInt(minimum)
    const max= parseInt(maximum)

    const totalSteps=(max-min)/10
    const random=Math.floor(Math.random()*(totalSteps+1))
    const total=min+(random*10)
    return total
}

function startRound(){
    const randomIndex =Math.floor(Math.random()*anomalies.length)
    currentAnomaly=anomalies[randomIndex]
    currentEvidence=[]
    //for each item in the array of teh evidence property
    currentAnomaly.evidence.forEach((evidenceClue)=>{
    const [clue, frequency]=evidenceClue.split("/")
    const targetFrequency= getRandomFrequency(frequency)
    })
}