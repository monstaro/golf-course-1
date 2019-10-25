class GolfCourse {
    constructor(name, difficulty, openings, features) {
        this.name = name;
        this.difficulty = difficulty;
        this.openings = openings;
        this.features = features;
        this.currentlyPlaying = [];
    }
    checkInGroup(group) {
        this.openings -= group.length;
        if (this.openings < 0) {
            this.openings += group.length;
            return this.currentlyPlaying
        }
        for (var i = 0; i < group.length; i++) {
            this.currentlyPlaying.unshift(group[i].name)
        }
    }
    recommendTees(golfer) {
        if (golfer.handicap <= 10) {
            return 'You should play from the Difficult Tees.'
        } else if (golfer.handicap > 10 && golfer.handicap < 15) {
            return 'You should play from the Middle Tees.'
        } else if (golfer.handicap >= 15) {
            return 'You should play from the Forward Tees.'
        }
    }
}

module.exports = GolfCourse;