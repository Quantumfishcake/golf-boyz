import { db } from '../../pages/Firebase'

export function newRound({ userId, numHoles }) {
    console.log({
        courseId: 'XXXXX',
        gameId: Math.floor(100000 + Math.random() * 900000),
        scores: [{
            userId,
            holeScores: new Array(numHoles).fill(0),
        }]
    })
    db.collection("rounds").add({
        courseId: 'XXXXX',
        gameId: Math.floor(100000 + Math.random() * 900000),
        scores: [{
            userId,
            holeScores: new Array(numHoles).fill(0),
        }]
    })
        .then((docRef) => {
            window.location.href = `/score/${docRef.id}`
        })
}