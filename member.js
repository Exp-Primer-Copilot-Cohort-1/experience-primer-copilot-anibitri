function skillsMember() {
    return {
        restrict: 'E',
        scope: {
            skill: '='
        },
        template: '<div class="skill-member">{{skill}}</div>'
    };
}