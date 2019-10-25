class Golfer {
    constructor(golferObj) {
        this.name = golferObj.name;
        this.handicap = golferObj.handicap;
        this.frustration = golferObj.frustration || 0;
        this.confidence = 0;
    }
    calculateAvg(golferObj) {
        return `I usually shoot a ${72 + this.handicap} on average.`
    }
    playRound(course) {
        if (course.difficulty === 'hard') {
            this.frustration = 500;
        } else if (course.difficulty === 'moderate') {
            this.frustration = 100;
        }
    }
    hitTheRange() {
        this.confidence += 10
    }
    marvel(course) {
        return `I love the ${course.features[0]} and ${course.features[1]} on this course!`
    }
    whatYaShoot(score) {
        if (score > 0) {
            this.frustration += 20
            return 'Doh!'
        } else if (score < 0) {
            this.frustration = 0;
            return 'I AM THE GREATEST GOLFER ALIVE!'
        } else {
            this.frustration -= 10;
            return 'Booyah!'
        }
    }
}

module.exports = Golfer;