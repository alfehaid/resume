var bio = {
    name: "Haitham Alfehaid",
    role: "Front End Developer",
    contacts: {
        mobile: "320-640-6565",
        email: "alfehaid.h@gmail.com",
        github: "https://github.com/alfehaid/",
        twitter: "optional",
        location: "Riyadh-Saudi Arabia"
    },
    welcomeMessage: "welcome to my resume , hope you are interesting",
    skills: ["Coding", "Designing"],
    biopic: "images/150.png",
};
bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").prepend(formattedLocation);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").prepend(formattedTwitter);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").prepend(formattedGitHub);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").prepend(formattedEmail);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").prepend(formattedMobile);

    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedPic);
    var formattedworkDescription = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedworkDescription);

    var formattedname = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#footerContacts").append(formattedname);
    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#footerContacts").append(formattedemail);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#footerContacts").append(formattedgithub);
    var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#footerContacts").append(formattedtwitter);
    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#footerContacts").append(formattedlocation);

    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);

    }
};
var education = {
    schools: [{
            name: "King Saud University",
            location: "Riyadh-Saudi",
            degree: "BCS",
            dates: "2017",
            major: ["Computer Secinces"],
            url: "www.ksu.edu.sa"
        },
        {
            name: "Buridah Tech",
            location: "Buraidah",
            degree: "Deploma",
            dates: "2015",
            major: ["Programming"]
        }
    ],
    onlineCourses: [{
        title: "Front End Nanoegree",
        school: "Udacity",
        dates: "2017",
        majors: ["Front End Developer"],
        url: "www.bct.edu.sa"
    }]
};
education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (var i = 0; i < education.schools.length; i++) {
        var formattedschoolname = HTMLschoolName.replace("%data%", education.schools[i].name);
        $(".education-entry:last").append(formattedschoolname);
        var formattedschooldegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry:last").append(formattedschooldegree);
        var formattedschooldates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(formattedschooldates);
        var formattedschoolcity = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedschoolcity);
        var formattedschollmajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry:last").append(formattedschollmajors);
    }

    for (var i = 0; i < education.onlineCourses.length; i++) {
        $("#education").append(HTMLonlineClasses);
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedonlineschoolTitle = formattedonlineTitle + formattedonlineSchool;
        $(".education-entry:last").append(formattedonlineschoolTitle);
        var formattedonlineschooldates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        $(".education-entry:last").append(formattedonlineschooldates);
        var formattedonlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        $(".education-entry:last").append(formattedonlineUrl);

    }
};
var work = {
    jobs: [{
            employer: "King Saud University",
            title: "Programmer",
            location: "Riyadh-Saudi",
            dates: "March - 2017 Tell Now",
            description: "working on many internal web application to support HQ vision which is \" Paper less\" ."
        },
        {
            employer: "Aramco (COOP)",
            title: "Trainig",
            location: "Dharan",
            dates: "3 Months",
            description: "COOP 3 months trainig in Saudi Aramco in IT depertment in PHP environment."
        }
    ]
};
work.display = function() {
    $("#workExperience").append(HTMLworkStart);

    for (var i = 0; i < work.jobs.length; i++) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);


        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
    }
};
var projects = {
    projects: [{
        title: "Mobile Application for Student Registration",
        dates: "2011",
        description: "Mobile Application for Student Registration",
        images: ["images/project.png"]
    }]
};
projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    for (var i = 0; i < projects.projects.length; i++) {
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);

        for (var img = 0; img < projects.projects[i].images.length; img++) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
            $(".project-entry:last").append(formattedImage);
        }
    }
};

bio.display();
education.display();
work.display();
projects.display();


$("#mapDiv").append(googleMap);