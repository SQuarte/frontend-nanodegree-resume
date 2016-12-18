var DATA = '%data%';

var bio = {
    'name': 'Egor Khober',
    'role': 'Web Developer',
    'contacts': {
        'mobile': '+7(960)-242-53-53',
        'email': 'altagoga@gmail.com',
        'github': 'SQuarte',
        'twitter': '@johndoe',
        'location': 'Saint Petersburg'
    },
    'welcomeMessage': 'You doing okay there?',
    'skills': ['js', 'java', 'angular 1', 'angular 2'],
    'biopic': 'images/fry.jpg',
    'display': function() {
        var formattedName = HTMLheaderName.replace(DATA, this.name);
        var formattedRole = HTMLheaderRole.replace(DATA, this.role);
        var formattedMobile = HTMLmobile.replace(DATA, this.contacts.mobile);
        var formattedEmail = HTMLemail.replace(DATA, this.contacts.email);
        var formattedGithub = HTMLgithub.replace(DATA, this.contacts.github);
        var formattedLocation = HTMLlocation.replace(DATA, this.contacts.location);
        var formattedBioPic = HTMLbioPic.replace(DATA, this.biopic);
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace(DATA, this.welcomeMessage);
        var headerElem = $('#header');
        var contactsElem = $('#topContacts');
        headerElem.prepend(formattedRole);
        headerElem.prepend(formattedName);
        contactsElem.append(formattedMobile);
        contactsElem.append(formattedEmail);
        contactsElem.append(formattedGithub);
        contactsElem.append(formattedLocation);
        headerElem.append(formattedWelcomeMessage);
        headerElem.append(formattedBioPic);

        if (this.skills.length > 0) {
            headerElem.append(HTMLskillsStart);
            var skillsElem = $('#skills');
            this.skills.forEach(function(skill) {
                var formattedSkill = HTMLskills.replace(DATA, skill);
                skillsElem.append(formattedSkill);
            });
        }
    }
};

var work = {
    'jobs': [{
        'employer': 'Arcadia',
        'title': 'Software Developer',
        'location': 'Saint Petersburg, Russian Federation',
        'dates': '2015 - now',
        'description': 'Developed backend and frontend for a federal ticket operator website'
    }, {
        'employer': 'KMIS',
        'title': 'Software Developer',
        'location': 'Petrozavodsk, Russian Federation',
        'dates': '2013-2014',
        'description': 'Developed backend for a website, that is used in hospitals for automatization of their internal processes'
    }],
    'display': function() {
        var workExperienceElem = $('#workExperience');
        this.jobs.forEach(function(job) {
            workExperienceElem.append(HTMLworkStart);
            var formatedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
            var formatedWorkTitle = HTMLworkTitle.replace('%data%', job.title);
            var formatedData = HTMLworkDates.replace('%data%', job.dates);
            var formatedLocation = HTMLworkLocation.replace('%data%', job.location);
            var formatedDescription = HTMLworkDescription.replace('%data%', job.description);
            $('.work-entry:last').append(formatedEmployer + formatedWorkTitle);
            $('.work-entry:last').append(formatedData);
            $('.work-entry:last').append(formatedLocation);
            $('.work-entry:last').append(formatedDescription);
        });
    }
};

var projects = {
    projects: [{
        'title': 'project1',
        'dates': 'now',
        'description': 'Nullam eu blandit turpis. Maecenas turpis nunc, dapibus id placerat et, rutrum ut ante. Sed vitae ultrices sem, quis ullamcorper odio. Donec fermentum urna eu fermentum ultricies. Maecenas congue viverra dui, vitae tincidunt lorem ullamcorper eget. Cras luctus vitae libero eget sollicitudin. Duis laoreet velit quam, at molestie metus interdum id.',
        images: ['images/197x148.gif', 'images/197x148.gif']
    }, {
        'title': 'project2',
        'dates': 'now',
        'description': 'Phasellus vel egestas neque. Vestibulum cursus tellus id sagittis suscipit. Nunc eu ultricies lectus, sed lacinia turpis. Suspendisse potenti. Proin et lacinia sapien. Cras mollis velit vitae metus eleifend, quis elementum tortor iaculis.',
        images: ['images/197x148.gif', 'images/197x148.gif']
    }],
    'display': function() {
        this.projects.forEach(function(project) {
            $('#projects').append(HTMLprojectStart);
            var projectTitle = HTMLprojectTitle.replace('%data%', project.title);
            var projectDates = HTMLprojectDates.replace('%data%', project.dates);
            var projectDescription = HTMLprojectDescription.replace('%data%', project.description);
            $('.project-entry:last').append(projectTitle);
            $('.project-entry:last').append(projectDates);
            $('.project-entry:last').append(projectDescription);
            project.images.forEach(function(image) {
                var projectImage = HTMLprojectImage.replace('%data%', image);
                $('.project-entry:last').append(projectImage);
            });
        });
    }
};




var education = {
    'schools': [{
        'name': 'PetrSU',
        'location': 'Petrozavodsk, Russian Federation',
        'degree': 'BA',
        'majors': ['Applied Math and Informatics'],
        'dates': '2010 - 2015',
        'url': 'https://petrsu.ru/'
    }],
    'onlineCourses': [{
        'title': 'Front-end Web Developer',
        'school': 'Udacity',
        'dates': '2016-2017',
        'url': 'https://www.udacity.com/'
    }, {
        'title': 'Full Stack Web Developer',
        'school': 'Udacity',
        'dates': 'future=)',
        'url': 'https://www.udacity.com/'
    }],
    'display': function() {
        var educationElem = $('#education');
        this.schools.forEach(function(school) {
            educationElem.append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace(DATA, school.name);
            var formattedSchoolDegree = HTMLschoolDegree.replace(DATA, school.degree);
            var formattedSchoolDates = HTMLschoolDates.replace(DATA, school.dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace(DATA, school.location);
            var formattedSchoolMajor = HTMLschoolMajor.replace(DATA, school.majors.join());
            $('.education-entry:last').append(formattedSchoolName);
            $('.education-entry:last').append(formattedSchoolDegree);
            $('.education-entry:last').append(formattedSchoolDates);
            $('.education-entry:last').append(formattedSchoolLocation);
            $('.education-entry:last').append(formattedSchoolMajor);
        });
        educationElem.append(HTMLonlineClasses);

        this.onlineCourses.forEach(function(onlineCourse) {
            educationElem.append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace(DATA, onlineCourse.title);
            var formattedOnlineSchool = HTMLonlineSchool.replace(DATA, onlineCourse.school);
            var formattedOnlineDates = HTMLonlineDates.replace(DATA, onlineCourse.dates);
            var formattedOnlineUrl = HTMLonlineURL.replace(DATA, onlineCourse.url);
            $('.education-entry:last').append(formattedOnlineTitle);
            $('.education-entry:last').append(formattedOnlineSchool);
            $('.education-entry:last').append(formattedOnlineDates);
            $('.education-entry:last').append(formattedOnlineUrl);
        });
    }
};


bio.display();
work.display();
projects.display();
education.display();

$('#mapDiv').append(googleMap);