angular.module("directives.project", ["ui.bootstrap"])
.directive("project", function(){
    return {
        restrict: "E",
        replace: true,
        template: '<li class="project">'+
                    '<div class="project-icon" style="background-color: {{project.color}}">{{project.name}}<div class="shortcuts"></div>'+
                    '</div></li>'
    }
}).directive("projectGroup", function(){
    return{
        restrict: 'E',
        replace: true,
        scope: {
          "projects": "="
        },
        template: '<div class="project-group">' +
            '<span class="projects-list-style icon-list"></span>' +
            '<ul class="project-list"><project ng-repeat="project in projects"></project></ul>'+
            '</div>'
    }
})